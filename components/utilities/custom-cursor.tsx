"use client";

import { useEffect, useRef } from 'react';

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);
  
  return (
    <div 
      ref={cursorRef} 
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center mix-blend-exclusion"
      style={{ willChange: 'transform' }}
    >
      <div className="w-full h-full border border-neutral-200 rounded-full opacity-50"></div>
      <div className="absolute w-1 h-1 bg-neutral-200 rounded-full"></div>
    </div>
  );
};
