"use client";

import { Reveal } from '@/components/utilities/reveal';

export const Philosophy = () => {
  return (
    <section id="story" className="py-16 md:py-24 lg:py-32 border-t border-neutral-900 relative z-10 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <div className="inline-block px-3 py-1 border border-lime-400/30 rounded-full bg-lime-400/5 text-lime-400 text-[10px] font-mono mb-8">
            MANIFESTO.md
          </div>
          <p className="text-3xl md:text-5xl text-white font-bold leading-tight mb-12">
            Software has become too <span className="text-neutral-600 line-through decoration-lime-500">complicated</span>. <br/>
            Too many meetings. <br/>
            <span className="text-lime-400">Not enough building.</span>
          </p>
          <div className="max-w-xl mx-auto text-neutral-500 leading-relaxed font-mono text-sm">
            <p className="mb-4">{`>`} GalatFamily is our return to the craft.</p>
            <p>{`>`} We build tools to solve our own problems. Then we share them.</p>
          </div>
        </Reveal>
      </div>
      </div>
    </section>
  );
};
