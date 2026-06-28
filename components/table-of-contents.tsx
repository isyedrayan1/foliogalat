"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { useRouter } from "next/navigation";

interface TableOfContentsProps {
  headings?: { id: string; text: string; active: boolean }[];
  slug?: string;
}

export function TableOfContents({ headings: propHeadings, slug }: TableOfContentsProps) {
  const router = useRouter();
  const [headings, setHeadings] = useState<{ id: string; text: string; level?: string; active?: boolean }[]>(
    propHeadings || []
  );
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState(() => {
    if (propHeadings) {
      const active = propHeadings.find((h) => h.active);
      return active ? active.id : "";
    }
    return "";
  });

  // Determine if we are in route-based navigation mode
  const isRouteMode = !!propHeadings && !!slug;

  useEffect(() => {
    if (isRouteMode && propHeadings) {
      setHeadings(propHeadings);
      const active = propHeadings.find((h) => h.active);
      if (active) {
        setActiveId(active.id);
      }
      return;
    }

    // Fallback: Local DOM parsing for single-page blogs
    const article = document.querySelector("article");
    if (!article) return;

    const headingElements = article.querySelectorAll("h2, h3");
    const parsedHeadings: { id: string; text: string; level: string }[] = [];

    headingElements.forEach((el, index) => {
      const text = el.textContent || "";
      const id = el.id || `heading-${index}`;
      el.id = id;
      parsedHeadings.push({
        id,
        text,
        level: el.tagName.toLowerCase(),
      });
    });

    setHeadings(parsedHeadings);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -60% 0px" }
    );

    headingElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [propHeadings, isRouteMode]);

  const handleSelect = (id: string) => {
    setIsOpen(false);
    if (isRouteMode) {
      // route navigation
      const routePath = id === 'introduction' ? `/blog/${slug}` : `/blog/${slug}/${id}`;
      router.push(routePath);
      return;
    }

    // local DOM scroll
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90; 
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  if (headings.length === 0) return null;

  const currentHeading = headings.find((h) => h.id === activeId) || headings[0];

  return (
    <div className="sticky top-[96px] z-40 w-full mb-6 font-mono text-xs md:text-xs">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-signature/10 backdrop-blur-md border border-signature/50 rounded-xl p-3.5 flex items-center justify-between shadow-[0_0_15px_rgba(124,131,255,0.12)] text-left hover:border-signature/80 hover:bg-signature/15 transition-all cursor-pointer"
        >
          <div className="flex items-center gap-1.5 overflow-hidden mr-2">
            <div className="w-1.5 h-1.5 rounded-full bg-signature flex-shrink-0 animate-pulse" />
            <span className="text-neutral-500 font-mono text-[9px] uppercase tracking-wider flex-shrink-0">JUMP_TO:</span>
            <span className="text-white font-bold truncate">
              {currentHeading?.text || "Introduction"}
            </span>
          </div>
          <ChevronDown className={`w-3.5 h-3.5 text-signature/80 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 mt-2 max-h-[350px] overflow-y-auto bg-[#0a0a0c] border border-neutral-800 rounded-xl shadow-2xl p-2 z-50">
            <div className="space-y-1">
              {headings.map((h, idx) => (
                <button
                  key={`${h.id}-${idx}`}
                  onClick={() => handleSelect(h.id)}
                  className={`w-full text-left rounded-lg p-2.5 transition-colors cursor-pointer block truncate text-xs md:text-xs ${
                    h.level === "h3" || isRouteMode && h.id !== 'introduction' ? "pl-5 text-neutral-400" : "font-bold text-neutral-200"
                  } ${activeId === h.id ? "bg-signature/10 !text-signature" : "hover:bg-neutral-900"}`}
                >
                  {h.text}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
