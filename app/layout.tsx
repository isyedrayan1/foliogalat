import type { Metadata } from "next";
import "./globals.css";
import "../components/CardNav.css";
import { inter, jetbrainsMono } from "@/lib/fonts";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "Galat Family",
  description: "A team focused on learning, collaborating, and building software. Sharing what we build, write, and document along the way.",
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
