"use client";

import { Reveal } from '@/components/utilities/reveal';
import { ArrowRight } from 'lucide-react';
import NeuralBackground from '@/components/ui/flow-field-background';

export const Contact = () => {
  return (
    <footer id="contact" className="py-24 md:py-32 bg-black relative z-10 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-45 pointer-events-none">
        <NeuralBackground color="#7c83ff" trailOpacity={0.18} particleCount={420} speed={0.75} />
      </div>
      {/* Static Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-neutral-900/25 whitespace-nowrap pointer-events-none select-none">
        GALAT
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center relative z-10">
        <Reveal variant="blur-up">
          <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter mb-8">
            <span className="text-signature">START_A_PROJECT</span><span className="text-neutral-200 animate-pulse">_</span>
          </h2>
          <a href="mailto:contact.galatfamily@gmail.com" className="group relative inline-flex items-center gap-4 text-xl md:text-2xl text-neutral-400 hover:text-blue-200 transition-colors">
            <span className="border-b border-neutral-800 group-hover:border-blue-300 pb-1 transition-all">contact.galatfamily@gmail.com</span>
            <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform text-neutral-200 group-hover:text-blue-300" />
          </a>
          
          <div className="mt-32 flex flex-col md:flex-row items-center gap-8 font-mono text-[10px] text-neutral-600 uppercase tracking-widest">
            <span>GalatFamily</span>
            <span className="hidden md:inline">::</span>
            <span>All Systems Operational</span>
            <span className="hidden md:inline">::</span>
            <span>Loc: Internet</span>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};
