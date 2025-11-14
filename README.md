# Circulo Waitlist

Circulo Waitlist is a polished Next.js 14 landing page for collecting early-access signups for Circulo, “your personal circle of AI minds.” It combines a motion-rich hero section, a Redis rate-limited waitlist form, and backend actions that pipe submissions to both Drizzle and an automated Resend email sequence.

## Features

- Animated hero powered by Framer Motion plus the custom `LiquidEther` background shader.
- Waitlist form with validation, optimistic toasts (Sonner), and CTA copy tailored to Circulo’s value proposition.
- `/api/subscribe` route persists each signup into the configured Drizzle database.
- `/api/mail` route renders the React Email template and delivers it through Resend, with Redis-based rate limiting.
- Email template (`emails/index.tsx`) built with `@react-email/components` for consistent welcome messages.

## Tech Stack

- Next.js 14 (App Router) & React 18
- Tailwind CSS with custom UI primitives
- Framer Motion for staggered animations
- Drizzle ORM (`drizzle-orm`) for persistence
- Resend + React Email for transactional emails
- Redis (via `ioredis`) for rate limiting

## Getting Started

### 1. Prerequisites

- Node.js 18+ or Bun 1.1+
- Redis instance (Upstash or self-hosted)
- A Drizzle database + integration token
- Resend account + API key

### 2. Install dependencies

```bash
# with Bun (recommended)
bun install

# or with npm
npm install
```

### 3. Configure environment

Create `.env.local` in the project root:

| Variable         | Description                                                                        |
| ---------------- | ---------------------------------------------------------------------------------- |
| `DATABASE_URL`   | URL to your waitlist database with access.                                         |
| `RESEND_API_KEY` | API key from the Resend dashboard.                                                 |
| `REDIS_URL`      | Connection string to your Redis instance (used for rate limiting the email route). |

### 4. Run the app

```bash
bun dev
# or
npm run dev
```

Visit `http://localhost:3000` to see the waitlist page. Submitting the form will hit both API routes, so ensure your environment variables point to test-friendly services.

## Email template development

Use the bundled script to iterate on the React Email template with hot reload:

```bash
bun run email
# or npm run email
```

This launches the `email dev` preview environment where you can tweak `emails/index.tsx`.

## Useful scripts

| Script                            | Description                           |
| --------------------------------- | ------------------------------------- |
| `bun dev` / `npm run dev`         | Start the Next.js development server. |
| `bun run build` / `npm run build` | Create a production build.            |
| `bun run start` / `npm run start` | Serve the production build.           |
| `bun run lint` / `npm run lint`   | Run ESLint checks.                    |
| `bun run email` / `npm run email` | Preview the React Email template.     |

## Project structure

```
app/
  api/
    mail/route.ts      # Resend + Redis rate-limited email endpoint
    subscribe/route.ts # Drizzle persistence endpoint
  page.tsx             # Landing page entry
components/
  form.tsx, waitlist-form.tsx, cta.tsx, header.tsx, liquid-ether.tsx
emails/index.tsx       # Circulo welcome email
lib/animation-variants.ts
public/logo.svg
```

## Deployment

1. Build the project (`bun run build`).
2. Provide the same environment variables in your hosting platform (Vercel, Netlify, etc.).
3. Ensure your Redis instance is reachable from the deployment environment.
4. Verify that the Drizzle integration still has access to the production database and that Resend is configured for the sending domain (`contact@circulo-ai.com` in this template).

Once deployed, submissions will automatically be stored in Drizzle and send the welcome email, so you can safely share the waitlist URL.
