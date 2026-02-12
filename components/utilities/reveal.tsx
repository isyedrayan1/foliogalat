"use client";

import { useState, useEffect, useRef, ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: "fade-up" | "blur-up" | "slide-left" | "slide-right";
}

const variants = {
  "fade-up": {
    hidden: "opacity-0 translate-y-12",
    visible: "opacity-100 translate-y-0",
  },
  "blur-up": {
    hidden: "opacity-0 translate-y-8 blur-sm",
    visible: "opacity-100 translate-y-0 blur-0",
  },
  "slide-left": {
    hidden: "opacity-0 -translate-x-10",
    visible: "opacity-100 translate-x-0",
  },
  "slide-right": {
    hidden: "opacity-0 translate-x-10",
    visible: "opacity-100 translate-x-0",
  },
} as const;

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  className = "",
  variant = "fade-up",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ease-out will-change-transform ${isVisible ? variants[variant].visible : variants[variant].hidden} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
