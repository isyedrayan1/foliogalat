"use client";

import { useState, useEffect } from 'react';
import { BootSequence } from '@/components/utilities/boot-sequence';
import { Navigation } from '@/components/sections/navigation';
import { Hero } from '@/components/sections/hero';
import { Storyline } from '@/components/sections/storyline';
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
    <div className="font-sans antialiased text-neutral-400 bg-black selection:bg-neutral-200 selection:text-neutral-900 overflow-x-hidden">
      
      <Navigation scrolled={scrolled} />
      <Hero />
      <Storyline />
      <Work />
      <Team />
      <Philosophy />
      <Contact />
    </div>
  );
}