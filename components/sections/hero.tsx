"use client";

import { Reveal } from '@/components/utilities/reveal';

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center pt-24 md:pt-28 relative z-10">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-3xl">
            <Reveal delay={100} variant="blur-up">
              <div className="font-mono text-xs text-neutral-200 mb-8 tracking-[0.2em] flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-neutral-200 animate-pulse"></span>
                EST. 2024 :: TEAM_BUILD
              </div>
            </Reveal>

            <Reveal delay={200} variant="blur-up">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.96]">
                <span className="block hover:text-white transition-colors duration-500">WE ARE</span>
                <span className="block text-signature">GALAT</span>
                <span className="block">FAMILY<span className="text-neutral-200 animate-pulse">.</span></span>
              </h1>
            </Reveal>

            <Reveal delay={350} variant="fade-up">
              <p className="mt-8 text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-xl">
                We shape products from signal to system, turning complex workflows into memorable software.
                <span className="block mt-3 font-mono text-xs text-neutral-600 uppercase tracking-widest">
                  // Discovery. Design. Build. Launch.
                </span>
              </p>
            </Reveal>

            <Reveal delay={450} variant="fade-up">
              <div className="mt-10 flex flex-wrap items-center gap-4 font-mono text-xs">
                <a
                  href="#work"
                  className="px-6 py-3 border border-neutral-800 rounded transition-all cursor-pointer btn-signature"
                >
                  VIEW_BUILDS ↓
                </a>
                <span className="text-neutral-600 tracking-widest">STATUS: ACTIVE</span>
              </div>
            </Reveal>

            <div className="mt-12 flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500">
              <span className="text-signature">Scroll</span>
              <span className="inline-block w-10 h-px bg-neutral-800" />
              <span className="inline-block w-2 h-2 border border-neutral-500 rotate-45 animate-pulse" />
            </div>
          </div>

          <Reveal delay={300} variant="slide-right">
            <div className="relative micro-blur border border-neutral-800 rounded-2xl bg-black/70 p-6 md:p-8">
              <div className="absolute -top-3 -left-3 text-[10px] font-mono text-neutral-500 bg-neutral-950 border border-neutral-800 px-2 py-1 rounded">
                SIGNAL_FEED
              </div>
              <div className="space-y-5 font-mono text-xs text-neutral-400">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                  <span className="text-neutral-200">PROJECTS</span>
                  <span className="text-neutral-500">ACTIVE</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-500">Inventory OS</span>
                    <span className="text-neutral-200">LIVE</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-500">Devflow CLI</span>
                    <span className="text-neutral-200">AVAILABLE</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-500">Next Initiative</span>
                    <span className="text-neutral-500">PLANNING</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-neutral-800 text-neutral-500">
                  <span className="text-neutral-200">QUALITY</span> 99.98% // DELIVERY OK
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
