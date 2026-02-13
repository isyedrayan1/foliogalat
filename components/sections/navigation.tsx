"use client";

import CardNav from "@/components/CardNav";

const navItems = [
  {
    label: "WORK",
    bgColor: "#111111",
    textColor: "#f5f5f5",
    links: [
      { label: "Featured Work", href: "#work", ariaLabel: "Jump to work" },
      { label: "Storyline", href: "#storyline", ariaLabel: "Jump to storyline" },
    ],
  },
  {
    label: "TEAM",
    bgColor: "#0d0d0d",
    textColor: "#f5f5f5",
    links: [
      { label: "Our Team", href: "#team", ariaLabel: "Jump to team" },
      { label: "Philosophy", href: "#story", ariaLabel: "Jump to philosophy" },
    ],
  },
  {
    label: "CONTACT",
    bgColor: "#151515",
    textColor: "#f5f5f5",
    links: [
      { label: "Start a Project", href: "#contact", ariaLabel: "Jump to contact" },
      { label: "Say Hello", href: "#contact", ariaLabel: "Jump to contact" },
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
      ctaLabel="Start a Project"
      ctaHref="#contact"
    />
  );
};
