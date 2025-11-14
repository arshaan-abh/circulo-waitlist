import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";

const FigtreeFont = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Circulo | The Next-Generation Multi-Agent Platform",
  description:
    "Unlock early access to Circulo, the AI platform where multiple intelligent agents collaborate, debate, and co-create ideas with you. Join now and be among the first to experience a smarter, more dynamic way to think, plan, and build.",
  openGraph: {
    url: "https://early.circulo-ai.com/",
    siteName: "Next.js + Notion — Waitlist Template",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "/twitter-image.png",
        width: 1200,
        height: 675,
        type: "image/png",
      },
    ],
  },
  icons: {
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={FigtreeFont.className}>
        {children}
        <Toaster richColors position="top-center" />
        <Analytics />
      </body>
    </html>
  );
}
