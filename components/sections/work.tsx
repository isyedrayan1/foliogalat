"use client";

import { Reveal } from '@/components/utilities/reveal';
import { ScrambleText } from '@/components/utilities/scramble-text';
import { Zap, Terminal } from 'lucide-react';

export const Work = () => {
  return (
    <section id="work" className="py-24 md:py-32 border-t border-neutral-900 relative z-10">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="blur-up">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-20">
            <h2 className="text-xs font-mono text-neutral-200 uppercase tracking-[0.2em]">
              <span className="text-signature">[01]</span> SELECTED_WORK
            </h2>
            <div className="hidden md:block w-32 h-[1px] line-signature"></div>
          </div>
        </Reveal>

        <div className="space-y-16">
          {/* Card 1 */}
          <Reveal variant="slide-left">
            <div className="group cursor-pointer relative micro-blur bg-black border border-neutral-800 hover:border-neutral-700/60 rounded-2xl overflow-hidden transition-colors duration-500">
              <div className="grid md:grid-cols-12 gap-0">
                {/* Visual Side */}
                <div className="md:col-span-7 bg-black relative min-h-[300px] border-b md:border-b-0 md:border-r border-neutral-800 overflow-hidden">
                  {/* Binary Background */}
                  <div className="absolute inset-0 p-4 font-mono text-[10px] text-neutral-800/40 leading-none overflow-hidden select-none break-all">
                    {Array(2000).fill(0).map(() => Math.random() > 0.5 ? '1' : '0').join('')}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 border border-neutral-500/40 flex items-center justify-center rounded-full bg-black/80 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(255,255,255,0.08)]">
                      <Zap size={32} className="text-neutral-200" />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="md:col-span-5 p-8 md:p-12 flex flex-col justify-center">
                  <div className="text-xs font-mono text-neutral-500 mb-4 tracking-widest">:: CHAPTER_ONE</div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-neutral-200 transition-colors">
                    <ScrambleText text="INVENTORY OS" />
                  </h3>
                  <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                    Chapter one focuses on clarity, turning operational complexity into a real-time system teams trust.
                  </p>
                  <ul className="font-mono text-xs text-neutral-500 space-y-3">
                    <li className="flex gap-2 text-neutral-300 items-center">
                      <span className="w-1 h-1 bg-neutral-300 rounded-full"></span> NEXT.JS_APP_ROUTER
                    </li>
                    <li className="flex gap-2 text-neutral-300 items-center">
                      <span className="w-1 h-1 bg-neutral-300 rounded-full"></span> POSTGRESQL_DB
                    </li>
                    <li className="flex gap-2 text-neutral-300 items-center">
                      <span className="w-1 h-1 bg-neutral-300 rounded-full"></span> WEBSOCKETS
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 2 */}
          <Reveal variant="slide-right">
            <div className="group cursor-pointer relative micro-blur bg-black border border-neutral-800 hover:border-neutral-700/60 rounded-2xl overflow-hidden transition-colors duration-500">
              <div className="grid md:grid-cols-12 gap-0">
                {/* Visual Side */}
                <div className="md:col-span-7 md:order-2 bg-black relative min-h-[300px] border-b md:border-b-0 md:border-l border-neutral-800 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Terminal size={80} className="text-neutral-800 group-hover:text-neutral-500/40 transition-colors" />
                  </div>
                  {/* Terminal Window Graphic */}
                  <div className="absolute bottom-6 left-6 right-6 h-auto bg-black/90 border border-neutral-800 rounded-lg p-5 font-mono text-[10px] text-neutral-400 shadow-2xl">
                    <div className="text-neutral-200 flex gap-2 mb-2"><span className="text-neutral-500">$</span> devflow init --force</div>
                    <div className="mb-1 text-neutral-500">Scaffolding module structure...</div>
                    <div className="text-white mb-1">Done in 45ms.</div>
                    <div className="animate-pulse mt-1 text-neutral-200">_</div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="md:col-span-5 md:order-1 p-8 md:p-12 flex flex-col justify-center">
                  <div className="text-xs font-mono text-neutral-500 mb-4 tracking-widest">:: CHAPTER_TWO</div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-neutral-200 transition-colors">
                    <ScrambleText text="DEVFLOW CLI" />
                  </h3>
                  <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                    Chapter two is the tooling layer, built to keep teams aligned through fast, reliable delivery.
                  </p>
                  <ul className="font-mono text-xs text-neutral-500 space-y-3">
                    <li className="flex gap-2 text-neutral-300 items-center">
                      <span className="w-1 h-1 bg-neutral-300 rounded-full"></span> RUST_CORE
                    </li>
                    <li className="flex gap-2 text-neutral-300 items-center">
                      <span className="w-1 h-1 bg-neutral-300 rounded-full"></span> ZERO_DEPENDENCY
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
