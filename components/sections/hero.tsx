"use client";

import { Reveal } from '@/components/utilities/reveal';

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center pt-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6 w-full">
        <div className="max-w-4xl">
          <Reveal delay={100}>
            <div className="font-mono text-xs text-lime-400 mb-8 tracking-[0.2em] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-lime-400 animate-pulse"></span>
              EST. 2024 :: SYSTEM_READY
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold text-white tracking-tighter leading-[0.9] mb-8">
              <span className="block hover:text-lime-400 transition-colors duration-500">WE ARE</span>
              <span className="block text-neutral-600">GALAT</span>
              <span className="block">FAMILY<span className="text-lime-400 animate-pulse">.</span></span>
            </h1>
          </Reveal>
          
          <Reveal delay={400}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-neutral-800 pt-8 mt-12">
              <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-lg">
                Just two engineers building software we care about. 
                <span className="block mt-2 font-mono text-xs text-neutral-600 uppercase tracking-widest">
                  // No managers. No overhead. Just Code.
                </span>
              </p>
              
              <div className="flex gap-4 font-mono text-xs">
                <a href="#work" className="px-6 py-3 border border-neutral-800 rounded hover:bg-lime-400 hover:text-black hover:border-lime-400 transition-all cursor-pointer">
                  VIEW_BUILDS ↓
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
