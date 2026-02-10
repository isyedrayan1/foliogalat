"use client";

import { Reveal } from '@/components/utilities/reveal';
import { Github, Twitter, Linkedin } from 'lucide-react';

export const Team = () => {
  return (
    <section id="team" className="py-16 md:py-24 lg:py-32 border-t border-neutral-900 bg-neutral-950 relative z-10 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="mb-20">
            <h2 className="text-xs font-mono text-lime-400 uppercase tracking-[0.2em] mb-4">
              [02] WHO_WE_ARE
            </h2>
            <p className="text-3xl md:text-4xl text-white font-light max-w-2xl">
              We aren&apos;t an agency. We are just two people who love to code.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-px bg-neutral-800 border border-neutral-800">
          {/* Member 1 */}
          <Reveal className="bg-neutral-950 p-8 md:p-12 hover:bg-neutral-900 transition-colors duration-500 group border-r border-neutral-800">
            <div className="relative mb-8 overflow-hidden rounded-lg aspect-[4/5] border border-neutral-800 group-hover:border-lime-500/30 transition-colors">
              {/* Green Glitch Overlay on Hover */}
              <div className="absolute inset-0 bg-lime-500/10 opacity-0 group-hover:opacity-20 transition-opacity z-10 mix-blend-overlay"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800" 
                alt="Dev One" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent z-20">
                <div className="font-mono text-xs text-lime-400 mb-1">ID: DEV_ONE</div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">DEV ONE</h3>
            <p className="text-xs font-mono text-neutral-500 mb-6 tracking-widest uppercase">System_Architecture</p>
            <p className="text-neutral-400 text-sm leading-relaxed mb-8 border-l-2 border-lime-500/20 pl-4">
              &quot;I focus on the invisible parts. Databases, APIs, and 99.9% uptime protocols.&quot;
            </p>
            <div className="flex gap-6">
              <Github size={20} className="text-neutral-600 hover:text-white transition-colors cursor-pointer" />
              <Twitter size={20} className="text-neutral-600 hover:text-white transition-colors cursor-pointer" />
            </div>
          </Reveal>

          {/* Member 2 */}
          <Reveal className="bg-neutral-950 p-8 md:p-12 hover:bg-neutral-900 transition-colors duration-500 group">
            <div className="relative mb-8 overflow-hidden rounded-lg aspect-[4/5] border border-neutral-800 group-hover:border-lime-500/30 transition-colors">
              {/* Green Glitch Overlay on Hover */}
              <div className="absolute inset-0 bg-lime-500/10 opacity-0 group-hover:opacity-20 transition-opacity z-10 mix-blend-overlay"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                alt="Dev Two" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent z-20">
                <div className="font-mono text-xs text-lime-400 mb-1">ID: DEV_TWO</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">DEV TWO</h3>
            <p className="text-xs font-mono text-neutral-500 mb-6 tracking-widest uppercase">Product_Interface</p>
            <p className="text-neutral-400 text-sm leading-relaxed mb-8 border-l-2 border-lime-500/20 pl-4">
              &quot;I care about how it feels. The pixels, the motion, and the interaction.&quot;
            </p>
            <div className="flex gap-6">
              <Linkedin size={20} className="text-neutral-600 hover:text-white transition-colors cursor-pointer" />
              <Twitter size={20} className="text-neutral-600 hover:text-white transition-colors cursor-pointer" />
            </div>
          </Reveal>
        </div>
      </div>
      </div>
    </section>
  );
};
