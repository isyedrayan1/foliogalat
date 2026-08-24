import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "../components/CardNav.css";
import { outfit, jetbrainsMono, bricolageGrotesque, spaceGrotesk } from "@/lib/fonts";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://galatfamily.in"),
  title: "Galat Family Tech | Web Tools, Developer Knowledge & Engineering Logs",
  description: "Official portal of Galat Family (galatfamily.in). We create developer tools (Unitsend, PromptLab), publish technical breakdowns, and share software engineering knowledge.",
  keywords: [
    "galat family",
    "galat family tech",
    "galat family software",
    "galatfamily.in",
    "syed rayan galat family",
    "syed naseer galat family",
    "web tools",
    "technical concepts",
    "tech videos",
    "build logs",
    "software engineering"
  ],
  authors: [
    { name: "Syed Rayan", url: "https://galatfamily.in" },
    { name: "Syed Naseer", url: "https://galatfamily.in" },
    { name: "Shaik Ayub Hussain", url: "https://galatfamily.in" },
    { name: "Shaik Aslam Hussain", url: "https://galatfamily.in" },
  ],
  creator: "Galat Family Tech",
  publisher: "Galat Family Tech",
  openGraph: {
    title: "Galat Family Tech – Web Tools & Developer Knowledge Base",
    description: "Official portal of Galat Family. We create web tools, explain technical concepts, and document how software gets built.",
    url: "https://galatfamily.in",
    siteName: "Galat Family Tech",
    images: [
      {
        url: "/galatfamily.jpg",
        width: 1200,
        height: 630,
        alt: "Galat Family Tech – Web Tools & Developer Knowledge Base",
        type: "image/jpeg",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Galat Family Tech – Web Tools & Developer Knowledge Base",
    description: "We create web tools, explain technical concepts, and document how things get built.",
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
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://galatfamily.in/#organization",
        "name": "Galat Family Tech",
        "alternateName": ["Galat Family", "GalatFamily", "Galat Family Software", "galatfamily.in"],
        "url": "https://galatfamily.in",
        "logo": "https://galatfamily.in/galatfamily.jpg",
        "description": "Galat Family (galatfamily.in) is a technology and software development organization founded by Syed Rayan and Syed Naseer. We create developer web tools (Unitsend, PromptLab), write engineering breakdowns, and produce technical educational content. Note: Not affiliated with the comedy web series Kallu Ki Galat Family.",
        "founders": [
          {
            "@type": "Person",
            "name": "Syed Rayan",
            "jobTitle": "Founder & Vision Strategy Lead",
            "image": "https://galatfamily.in/Syed%20rayan.jpg",
            "url": "https://galatfamily.in",
          },
          {
            "@type": "Person",
            "name": "Syed Naseer",
            "jobTitle": "Co-Founder & Operations Growth Lead",
            "image": "https://galatfamily.in/syed%20naseer.png.jpg",
            "url": "https://galatfamily.in",
          },
        ],
        "member": [
          {
            "@type": "Person",
            "name": "Syed Rayan",
            "jobTitle": "Founder & Vision Strategy Lead",
            "image": "https://galatfamily.in/Syed%20rayan.jpg",
            "url": "https://galatfamily.in",
          },
          {
            "@type": "Person",
            "name": "Syed Naseer",
            "jobTitle": "Co-Founder & Operations Growth Lead",
            "image": "https://galatfamily.in/syed%20naseer.png.jpg",
            "url": "https://galatfamily.in",
          },
          {
            "@type": "Person",
            "name": "Shaik Ayub Hussain",
            "jobTitle": "Core Developer & Full-Stack Systems Engineer",
            "image": "https://galatfamily.in/ayubphoto.jpeg",
            "url": "https://galatfamily.in",
          },
          {
            "@type": "Person",
            "name": "Shaik Aslam Hussain",
            "jobTitle": "Core Developer & Engineering Architecture Lead",
            "image": "https://galatfamily.in/aslamphoto.jpeg",
            "url": "https://galatfamily.in",
          },
        ],
        "sameAs": [
          "https://instagram.com/thegalatfamily",
          "https://twitter.com/galat_family",
          "https://youtube.com/@teamgalatfamily1",
          "https://github.com/isyedrayan1"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "contact.galatfamily@gmail.com",
          "contactType": "Customer Support",
        },
        "knowsAbout": [
          "Software Engineering",
          "Product Building",
          "Full-Stack Web Development",
          "Next.js & React",
          "LLM Prompt Engineering",
          "File Transfer Tools",
          "PostgreSQL & Cloud Systems",
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://galatfamily.in/#website",
        "url": "https://galatfamily.in",
        "name": "Galat Family Tech",
        "publisher": {
          "@id": "https://galatfamily.in/#organization"
        },
        "inLanguage": "en-US"
      }
    ]
  };

  return (
    <html lang="en" className="dark">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B9KH32KJ96"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-B9KH32KJ96');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} ${bricolageGrotesque.variable} ${spaceGrotesk.variable} antialiased min-h-screen`}
        style={{ fontFamily: 'var(--font-outfit)' }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
