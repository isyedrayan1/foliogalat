"use client";

import { Reveal } from '@/components/utilities/reveal';
import { Github, Linkedin } from 'lucide-react';

export const Team = () => {
  return (
    <section id="team" className="py-24 md:py-32 border-t border-neutral-900 bg-black relative z-10">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="blur-up">
          <div className="mb-20">
            <h2 className="text-xs font-mono text-neutral-200 uppercase tracking-[0.2em] mb-4">
              <span className="text-signature">[02]</span> OUR_TEAM
            </h2>
            <p className="text-3xl md:text-4xl text-white font-light max-w-3xl">
              The team behind the story: engineering depth paired with product clarity.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-800 border border-neutral-800">
          {/* Syed Rayan */}
          <Reveal variant="slide-left" className="bg-black p-6 sm:p-8 md:p-12 hover:bg-black transition-colors duration-500 group border-b md:border-b md:border-r border-neutral-800 micro-blur">
            <div className="relative mb-8 overflow-hidden rounded-lg aspect-[3/5] sm:aspect-[3/5.5] md:aspect-[3/6] border border-neutral-800 group-hover:border-neutral-500/30 transition-colors">
              <div className="absolute inset-0 bg-neutral-400/10 opacity-0 group-hover:opacity-20 transition-opacity z-10 mix-blend-overlay"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800" 
                alt="Syed Rayan" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent z-20">
                <div className="font-mono text-xs text-neutral-200 mb-1">ROLE: FOUNDER</div>
              </div>
            </div>
            
            <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-white mb-2">Syed Rayan</h3>
            <p className="text-xs font-mono text-neutral-500 mb-6 tracking-widest uppercase">Vision_Strategy</p>
            <p className="text-neutral-400 text-sm leading-relaxed mb-8 border-l-2 border-neutral-500/30 pl-4">
              Visionary leader driving innovation and strategic direction.
            </p>
            <div className="flex gap-6">
              <a href="#" target="_blank" rel="noreferrer" aria-label="Syed Rayan GitHub">
                <Github size={20} className="text-neutral-600 hover:text-white transition-colors cursor-pointer" />
              </a>
              <a href="https://linkedin.com/in/isyedrayan" target="_blank" rel="noreferrer" aria-label="Syed Rayan LinkedIn">
                <Linkedin size={20} className="text-neutral-600 hover:text-white transition-colors cursor-pointer" />
              </a>
            </div>
          </Reveal>

          {/* Syed Naseer */}
          <Reveal variant="slide-right" className="bg-black p-6 sm:p-8 md:p-12 hover:bg-black transition-colors duration-500 group border-b md:border-b-0 border-neutral-800 micro-blur">
            <div className="relative mb-8 overflow-hidden rounded-lg aspect-[3/5] sm:aspect-[3/5.5] md:aspect-[3/6] border border-neutral-800 group-hover:border-neutral-500/30 transition-colors">
              <div className="absolute inset-0 bg-neutral-400/10 opacity-0 group-hover:opacity-20 transition-opacity z-10 mix-blend-overlay"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                alt="Syed Naseer" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent z-20">
                <div className="font-mono text-xs text-neutral-200 mb-1">ROLE: CO-FOUNDER</div>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-white mb-2">Syed Naseer</h3>
            <p className="text-xs font-mono text-neutral-500 mb-6 tracking-widest uppercase">Operations_Growth</p>
            <p className="text-neutral-400 text-sm leading-relaxed mb-8 border-l-2 border-neutral-500/30 pl-4">
              Driving operational excellence and sustainable growth initiatives.
            </p>
            <div className="flex gap-6">
              <a href="#" target="_blank" rel="noreferrer" aria-label="Syed Naseer GitHub">
                <Github size={20} className="text-neutral-600 hover:text-white transition-colors cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/in/syed-naseer-66bb0231b" target="_blank" rel="noreferrer" aria-label="Syed Naseer LinkedIn">
                <Linkedin size={20} className="text-neutral-600 hover:text-white transition-colors cursor-pointer" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
