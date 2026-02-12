"use client";

import { Reveal } from '@/components/utilities/reveal';

export const Philosophy = () => {
  return (
    <section id="story" className="py-24 md:py-32 border-t border-neutral-900 relative z-10">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-block px-3 py-1 border border-neutral-700/60 rounded-full bg-black/60 text-signature text-[10px] font-mono mb-8">
              STANDARDS.md
            </div>
            <p className="text-3xl md:text-5xl text-white font-bold leading-tight mb-12">
              Professional software, built with focus and clarity.
            </p>
            <div className="max-w-xl mx-auto text-neutral-500 leading-relaxed font-mono text-sm">
              <p className="mb-4">{`>`} We define scope, ship with confidence, and iterate with care.</p>
              <p>{`>`} Our work is designed to scale with teams and operations.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
