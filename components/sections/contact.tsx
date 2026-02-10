"use client";

import { Reveal } from '@/components/utilities/reveal';
import { ArrowRight } from 'lucide-react';

export const Contact = () => {
  return (
    <footer id="contact" className="py-16 md:py-24 lg:py-32 border-t border-neutral-900 bg-black relative z-10 overflow-hidden w-full">
      {/* Static Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-neutral-900/20 whitespace-nowrap pointer-events-none select-none">
        GALAT
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
        <Reveal>
          <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter mb-8">
            INITIALIZE_CHAT<span className="text-lime-400 animate-pulse">_</span>
          </h2>
          <a href="mailto:hello@galat.family" className="group relative inline-flex items-center gap-4 text-xl md:text-2xl text-neutral-400 hover:text-white transition-colors">
            <span className="border-b border-neutral-800 group-hover:border-lime-400 pb-1 transition-all">hello@galat.family</span>
            <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform text-lime-400" />
          </a>
          
          <div className="mt-32 flex flex-col md:flex-row items-center gap-8 font-mono text-[10px] text-neutral-600 uppercase tracking-widest">
            <span>GalatFamily © 2024</span>
            <span className="hidden md:inline">::</span>
            <span>All Systems Operational</span>
            <span className="hidden md:inline">::</span>
            <span>Loc: Internet</span>
          </div>
        </Reveal>
      </div>
      </div>
    </footer>
  );
};
