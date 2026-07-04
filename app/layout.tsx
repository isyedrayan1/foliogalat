import type { Metadata } from "next";
import "./globals.css";
import "../components/CardNav.css";
import { inter, jetbrainsMono } from "@/lib/fonts";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://galatfamily.in"),
  title: "Galat Family - Two Developers Building Products",
  description: "Two developers building products with clean code. We ship monthly. We write about what we learn. Build logs, shipping notes, technical decisions.",
  keywords: ["developers", "software development", "build logs", "product builders", "Next.js", "full-stack development"],
  authors: [
    { name: "Syed Rayan", url: "https://galatfamily.in" },
    { name: "Syed Naseer", url: "https://galatfamily.in" },
  ],
  creator: "Galat Family",
  openGraph: {
    title: "Galat Family - Two Developers Building Products",
    description: "Two developers building products with clean code. We ship monthly. We write about what we learn.",
    url: "https://galatfamily.in",
    siteName: "Galat Family",
    images: [
      {
        url: "/galatfamily.jpg",
        width: 1200,
        height: 630,
        alt: "Galat Family - Two Developers Building Products",
        type: "image/jpeg",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Galat Family - Two Developers Building Products",
    description: "Two developers building products with clean code. We ship monthly.",
    images: ["/galatfamily.jpg"],
    creator: "@galat_family",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "google-site-verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Galat Family",
    url: "https://galatfamily.in",
    logo: "https://galatfamily.in/galatfamily.jpg",
    description: "Two developers building products. We ship monthly and share what we learn.",
    founders: [
      {
        "@type": "Person",
        name: "Syed Rayan",
        url: "https://galatfamily.in",
      },
      {
        "@type": "Person",
        name: "Syed Naseer",
        url: "https://galatfamily.in",
      },
    ],
    sameAs: [
      "https://instagram.com/thegalatfamily",
      "https://twitter.com/galat_family",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact.galatfamily@gmail.com",
      contactType: "Customer Support",
    },
    knowsAbout: [
      "Software Development",
      "Product Building",
      "Full-Stack Development",
      "Next.js",
      "PostgreSQL",
      "Rust",
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
