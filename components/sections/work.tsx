"use client";

import { Reveal } from '@/components/utilities/reveal';
import { ScrambleText } from '@/components/utilities/scramble-text';
import { Zap, Terminal } from 'lucide-react';

export const Work = () => {
  return (
    <section id="work" className="py-16 md:py-24 lg:py-32 border-t border-neutral-900 relative z-10 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex items-end justify-between mb-20">
            <h2 className="text-xs font-mono text-lime-400 uppercase tracking-[0.2em]">
              [01] WHAT_WE_BUILD
            </h2>
            <div className="hidden md:block w-32 h-[1px] bg-neutral-800"></div>
          </div>
        </Reveal>

        <div className="space-y-16">
          {/* Card 1 */}
          <Reveal>
            <div className="group cursor-pointer relative bg-neutral-900/20 border border-neutral-800 hover:border-lime-900/50 rounded-2xl overflow-hidden transition-colors duration-500">
              <div className="grid md:grid-cols-12 gap-0">
                {/* Visual Side */}
                <div className="md:col-span-7 bg-black relative min-h-[300px] border-b md:border-b-0 md:border-r border-neutral-800 overflow-hidden">
                  {/* Binary Background */}
                  <div className="absolute inset-0 p-4 font-mono text-[10px] text-lime-900/20 leading-none overflow-hidden select-none break-all">
                    {Array(2000).fill(0).map(() => Math.random() > 0.5 ? '1' : '0').join('')}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 border border-lime-500/30 flex items-center justify-center rounded-full bg-black/80 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(163,230,53,0.1)]">
                      <Zap size={32} className="text-lime-400" />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="md:col-span-5 p-8 md:p-12 flex flex-col justify-center">
                  <div className="text-xs font-mono text-neutral-500 mb-4 tracking-widest">:: PROJECT_ALPHA</div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-lime-400 transition-colors">
                    <ScrambleText text="INVENTORY OS" />
                  </h3>
                  <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                    A real-time logistics system built to handle complex data synchronization. We built this to solve our own warehouse issues.
                  </p>
                  <ul className="font-mono text-xs text-neutral-500 space-y-3">
                    <li className="flex gap-2 text-lime-400/80 items-center">
                      <span className="w-1 h-1 bg-lime-400 rounded-full"></span> NEXT.JS_APP_ROUTER
                    </li>
                    <li className="flex gap-2 text-lime-400/80 items-center">
                      <span className="w-1 h-1 bg-lime-400 rounded-full"></span> POSTGRESQL_DB
                    </li>
                    <li className="flex gap-2 text-lime-400/80 items-center">
                      <span className="w-1 h-1 bg-lime-400 rounded-full"></span> WEBSOCKETS
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 2 */}
          <Reveal>
            <div className="group cursor-pointer relative bg-neutral-900/20 border border-neutral-800 hover:border-lime-900/50 rounded-2xl overflow-hidden transition-colors duration-500">
              <div className="grid md:grid-cols-12 gap-0">
                {/* Visual Side */}
                <div className="md:col-span-7 md:order-2 bg-black relative min-h-[300px] border-b md:border-b-0 md:border-l border-neutral-800 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Terminal size={80} className="text-neutral-800 group-hover:text-lime-400/20 transition-colors" />
                  </div>
                  {/* Terminal Window Graphic */}
                  <div className="absolute bottom-6 left-6 right-6 h-auto bg-neutral-900/90 border border-neutral-800 rounded-lg p-5 font-mono text-[10px] text-neutral-400 shadow-2xl">
                    <div className="text-lime-400 flex gap-2 mb-2"><span className="text-neutral-500">$</span> devflow init --force</div>
                    <div className="mb-1 text-neutral-500">Scaffolding module structure...</div>
                    <div className="text-white mb-1">Done in 45ms.</div>
                    <div className="animate-pulse mt-1 text-lime-400">_</div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="md:col-span-5 md:order-1 p-8 md:p-12 flex flex-col justify-center">
                  <div className="text-xs font-mono text-neutral-500 mb-4 tracking-widest">:: OPEN_SOURCE</div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-lime-400 transition-colors">
                    <ScrambleText text="DEVFLOW CLI" />
                  </h3>
                  <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                    Command line interface for rapid monorepo scaffolding. We hate boilerplate, so we automated it.
                  </p>
                  <ul className="font-mono text-xs text-neutral-500 space-y-3">
                    <li className="flex gap-2 text-lime-400/80 items-center">
                      <span className="w-1 h-1 bg-lime-400 rounded-full"></span> RUST_CORE
                    </li>
                    <li className="flex gap-2 text-lime-400/80 items-center">
                      <span className="w-1 h-1 bg-lime-400 rounded-full"></span> ZERO_DEPENDENCY
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      </div>
    </section>
  );
};
