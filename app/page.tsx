"use client";

import { useState, useEffect } from 'react';
import { CustomCursor } from '@/components/utilities/custom-cursor';
import { BootSequence } from '@/components/utilities/boot-sequence';
import { Navigation } from '@/components/sections/navigation';
import { Hero } from '@/components/sections/hero';
import { Work } from '@/components/sections/work';
import { Team } from '@/components/sections/team';
import { Philosophy } from '@/components/sections/philosophy';
import { Contact } from '@/components/sections/contact';

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) return <BootSequence onComplete={() => setLoading(false)} />;

  return (
    <div className="font-sans antialiased text-neutral-400 bg-neutral-950 selection:bg-lime-400 selection:text-black overflow-x-hidden cursor-none">
      <CustomCursor />
      
      {/* Dynamic Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] animate-[pulse_8s_infinite]"></div>
      </div>

      <Navigation scrolled={scrolled} />
      <Hero />
      <Work />
      <Team />
      <Philosophy />
      <Contact />
    </div>
  );
}