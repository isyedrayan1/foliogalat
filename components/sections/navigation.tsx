"use client";

import CardNav from "@/components/CardNav";
import Link from "next/link";

const navItems = [
  {
    label: "ABOUT",
    bgColor: "#111111",
    textColor: "#f5f5f5",
    links: [
      { label: "Who we are", href: "#about", ariaLabel: "Jump to about" },
      { label: "Our story", href: "#story", ariaLabel: "Jump to story" },
      { label: "Meet the team", href: "#team", ariaLabel: "Jump to team" },
    ],
  },
  {
    label: "WORK",
    bgColor: "#0d0d0d",
    textColor: "#f5f5f5",
    links: [
      { label: "What we built", href: "#work", ariaLabel: "Jump to work" },
      { label: "Read the blog", href: "#blog-cta", ariaLabel: "Jump to blog" },
      { label: "YT Docs", href: "https://yt.galatfamily.in", ariaLabel: "Open YT Docs" },
    ],
  },
  {
    label: "REACH US",
    bgColor: "#151515",
    textColor: "#f5f5f5",
    links: [
      { label: "Follow us", href: "#social-cta", ariaLabel: "Jump to social" },
      { label: "Contact us", href: "#contact", ariaLabel: "Jump to contact" },
      { label: "Email", href: "mailto:contact.galatfamily@gmail.com", ariaLabel: "Send an email" },
    ],
  },
];

const logoMark = (
  <Link 
    href="/" 
    className="flex items-center gap-2 text-[11px] tracking-[0.35em] text-neutral-200 hover:text-white transition-colors cursor-pointer no-underline decoration-0"
  >
    <span className="h-2 w-2 rounded-sm bg-neutral-200 shadow-[0_0_12px_rgba(255,255,255,0.35)]" />
    Galat Family
  </Link>
);

export const Navigation = () => {
  return (
    <CardNav
      logo={logoMark}
      logoAlt="Galat Family"
      items={navItems}
      className="font-mono"
      baseColor="#0a0a0a"
      menuColor="#e5e5e5"
      buttonBgColor="#f5f5f5"
      buttonTextColor="#0a0a0a"
      ctaLabel="Talk to us"
      ctaHref="#contact"
    />
  );
};
