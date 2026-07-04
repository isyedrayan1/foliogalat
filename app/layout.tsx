import type { Metadata } from "next";
import "./globals.css";
import "../components/CardNav.css";
import { inter, jetbrainsMono } from "@/lib/fonts";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "Galat Family - Two Developers Building Products",
  description: "We build software and share what we learn. Monthly releases, clean code, and long-term projects.",
  openGraph: {
    title: "Galat Family - Two Developers Building Products",
    description: "We build software and share what we learn. Monthly releases, clean code, and long-term projects.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Galat Family - Two Developers Building Products",
    description: "We build software and share what we learn. Monthly releases, clean code, and long-term projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen`}
        style={{ fontFamily: 'var(--font-inter)' }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
