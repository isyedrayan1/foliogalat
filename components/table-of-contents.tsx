"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu } from "lucide-react";

export function TableOfContents() {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: string }[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const article = document.querySelector("article");
    if (!article) return;

    // Target h2 (for # Part) and h3 (for ## Section)
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
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      // Offset scroll for sticky navs
      const yOffset = -90; 
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  if (headings.length === 0) return null;

  const currentHeading = headings.find((h) => h.id === activeId) || headings[0];

  return (
    <div className="sticky top-24 z-40 w-full mb-6 font-mono text-[10px] md:text-xs">
      <div className="bg-neutral-950/90 backdrop-blur-md border border-neutral-800/80 rounded-xl p-3 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-2 overflow-hidden mr-2">
          <Menu className="w-4 h-4 text-signature flex-shrink-0" />
          <span className="text-neutral-500 hidden sm:inline">JUMP_TO:</span>
          <span className="text-white font-bold truncate">
            {currentHeading?.text || "Introduction"}
          </span>
        </div>

        <div className="relative flex-shrink-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 hover:border-neutral-700/60 rounded-lg px-3 py-1.5 text-neutral-300 hover:text-white transition-all cursor-pointer font-mono"
          >
            <span>OUTLINE</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-72 max-h-[350px] overflow-y-auto bg-neutral-950 border border-neutral-800 rounded-xl shadow-2xl p-2 z-50">
              <div className="space-y-1">
                {headings.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => handleScroll(h.id)}
                    className={`w-full text-left rounded-lg p-2 transition-colors cursor-pointer block truncate text-[10px] md:text-xs ${
                      h.level === "h3" ? "pl-5 text-neutral-400" : "font-bold text-neutral-200"
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
    </div>
  );
}
