import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  userFirstname: string;
}

export const CirculoWaitlistEmail = ({ userFirstname }: EmailProps) => (
  <Html>
    <Head />
    <Preview>
      You&apos;re in! Welcome to the Circulo early access list 👋
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://early.circulo-ai.com/logo.png"
          width="220"
          height="100"
          alt="Circulo logo"
          style={logo}
        />

        <Text style={greeting}>Hey {userFirstname},</Text>

        <Text style={paragraph}>
          You&apos;re officially on the early access list for{" "}
          <strong>Circulo</strong> — our AI-powered space for rich, multi-voice
          conversations with specialized agents. We&apos;re excited to have you
          with us. 🚀
        </Text>

        <Text style={paragraph}>
          Circulo is designed to help you think better, faster — whether
          you&apos;re:
          <br />
          • Exploring ideas from multiple expert perspectives
          <br />
          • Stress-testing decisions before you commit
          <br />• Turning scattered thoughts into clear next steps
        </Text>

        <Text style={paragraph}>
          Over the next few weeks, we&apos;ll be inviting people in small
          batches. When it&apos;s your turn, you&apos;ll get a unique access
          link straight to this inbox.
        </Text>

        <Text style={paragraph}>
          To help us shape Circulo around what you actually need, you can hit
          reply and tell us:
          <br />
          • What you&apos;d mainly use Circulo for
          <br />
          • Your role or focus (founder, student, designer, etc.)
          <br />• One “dream use case” you&apos;d love to unlock
        </Text>

        <Text style={paragraph}>
          Just reply directly to{" "}
          <a href="mailto:hello@circulo.app" style={link}>
            hello@circulo.app
          </a>{" "}
          — we read every response.
        </Text>

        <Text style={paragraph}>
          Want to follow the behind-the-scenes progress? You can also find us on
          X:{" "}
          <a href="https://x.com/yourcirculo" style={link}>
            @yourcirculo
          </a>
        </Text>

        <Text style={signOff}>
          Talk soon,
          <br />
          The Circulo team
        </Text>

        <Hr style={hr} />

        <Text style={footer}>
          You&apos;re receiving this email because you joined the Circulo
          waitlist. If this wasn&apos;t you, you can safely ignore this email
          and no further action is needed.
        </Text>
      </Container>
    </Body>
  </Html>
);

CirculoWaitlistEmail.PreviewProps = {
  userFirstname: "Tyler",
} as EmailProps;

const main = {
  background: "linear-gradient(-225deg, #0f172a 0%, #020617 40%, #020617 100%)",
  fontFamily: 'figtree, "Helvetica Neue", Helvetica, Arial, sans-serif',
  padding: "40px 0",
  color: "#f9fafb",
};

const container = {
  margin: "0 auto",
  padding: "24px 32px 40px",
  backgroundColor: "#020617",
  borderRadius: "16px",
  boxShadow: "0 18px 45px rgba(0, 0, 0, 0.45)",
  maxWidth: "600px",
  border: "1px solid rgba(148, 163, 184, 0.25)",
};

const logo = {
  margin: "0 auto",
  paddingBottom: "24px",
  display: "block",
};

const greeting = {
  fontSize: "18px",
  lineHeight: "28px",
  marginBottom: "12px",
  color: "#e5e7eb",
} as const;

const paragraph = {
  fontSize: "15px",
  lineHeight: "24px",
  marginBottom: "18px",
  color: "#cbd5f5",
} as const;

const link = {
  color: "#a5b4fc",
  textDecoration: "underline",
} as const;

const signOff = {
  fontSize: "15px",
  lineHeight: "24px",
  marginTop: "24px",
  color: "#e5e7eb",
} as const;

const hr = {
  borderColor: "#1f2937",
  margin: "24px 0 16px",
} as const;

const footer = {
  color: "#6b7280",
  fontSize: "12px",
  lineHeight: "18px",
} as const;
