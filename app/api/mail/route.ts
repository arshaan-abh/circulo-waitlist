import { render } from "@react-email/render";

import { CirculoWaitlistEmail } from "../../../emails";

import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import Redis from "ioredis";

const resend = new Resend(process.env.RESEND_API_KEY);

const redis = (() => {
  if (!process.env.REDIS_URL) {
    throw new Error("Missing REDIS_URL environment variable");
  }

  return new Redis(process.env.REDIS_URL);
})();

const RATE_LIMIT_MAX_REQUESTS = 2;
const RATE_LIMIT_WINDOW_SECONDS = 60;

async function isRateLimited(identifier: string) {
  try {
    const key = `ratelimit:${identifier}`;
    const requestCount = await redis.incr(key);

    if (requestCount === 1) {
      await redis.expire(key, RATE_LIMIT_WINDOW_SECONDS);
    }

    return requestCount > RATE_LIMIT_MAX_REQUESTS;
  } catch (error) {
    console.error("[redis] Failed to perform rate-limit check", error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  const ip = request.ip ?? "127.0.0.1";

  const limited = await isRateLimited(ip);
  if (limited) {
    return Response.json(
      {
        error: "Too many requests!!",
      },
      {
        status: 429,
      },
    );
  }

  const { email, firstname } = await request.json();

  const { data, error } = await resend.emails.send({
    from: "Circulo<contact@circulo-ai.com>",
    to: [email],
    subject: "Welcome to Circulo — You're officially on the early access list",
    replyTo: "contact@circulo-ai.com",
    html: await render(CirculoWaitlistEmail({ userFirstname: firstname })),
  });

  // const { data, error } = { data: true, error: null }

  if (error) {
    return NextResponse.json(error);
  }

  if (!data) {
    return NextResponse.json({ message: "Failed to send email" });
  }

  return NextResponse.json({ message: "Email sent successfully" });
}
