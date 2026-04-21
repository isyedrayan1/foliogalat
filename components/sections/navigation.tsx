"use client";

import CardNav from "@/components/CardNav";

const navItems = [
  {
    label: "PROFILE",
    bgColor: "#111111",
    textColor: "#f5f5f5",
    links: [
      { label: "About Us", href: "#about", ariaLabel: "Jump to about" },
      { label: "Our Story", href: "#story", ariaLabel: "Jump to story" },
      { label: "The Team", href: "#team", ariaLabel: "Jump to team" },
    ],
  },
  {
    label: "BUILDS",
    bgColor: "#0d0d0d",
    textColor: "#f5f5f5",
    links: [
      { label: "Featured Work", href: "#work", ariaLabel: "Jump to work" },
      { label: "The Blog", href: "#blog-cta", ariaLabel: "Jump to blog" },
    ],
  },
  {
    label: "CONNECT",
    bgColor: "#151515",
    textColor: "#f5f5f5",
    links: [
      { label: "Social Media", href: "#social-cta", ariaLabel: "Jump to social" },
      { label: "Get in Touch", href: "#contact", ariaLabel: "Jump to contact" },
      { label: "Email Us", href: "mailto:contact.galatfamily@gmail.com", ariaLabel: "Send an email" },
    ],
  },
];

const logoMark = (
  <span className="flex items-center gap-2 text-[11px] tracking-[0.35em] text-neutral-200">
    <span className="h-2 w-2 rounded-sm bg-neutral-200 shadow-[0_0_12px_rgba(255,255,255,0.35)]" />
    GALAT_FAMILY
  </span>
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
      ctaLabel="GET_IN_TOUCH"
      ctaHref="#contact"
    />
  );
};
