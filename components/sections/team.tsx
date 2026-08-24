"use client";

import { Reveal } from '@/components/utilities/reveal';
import { Github, Linkedin, Instagram } from 'lucide-react';

export const Team = () => {
  const teamMembers = [
    {
      name: "Syed Rayan",
      role: "ROLE: FOUNDER",
      specialization: "Vision_Strategy",
      description: "Visionary leader driving innovation, product direction, and strategic technical architecture.",
      imageSrc: "/Syed rayan.jpg",
      altText: "Syed Rayan - Founder & Vision Strategy Lead at Galat Family",
      imageTitle: "Syed Rayan - Founder & Vision Strategy Lead",
      github: "#",
      linkedin: "https://linkedin.com/in/isyedrayan",
      instagram: "https://instagram.com/isyedrayan",
      variant: "slide-left" as const,
    },
    {
      name: "Syed Naseer",
      role: "ROLE: CO-FOUNDER",
      specialization: "Operations_Growth",
      description: "Driving operational excellence, sustainable growth initiatives, and product lifecycle management.",
      imageSrc: "/syed naseer.png.jpg",
      altText: "Syed Naseer - Co-Founder & Operations Growth Lead at Galat Family",
      imageTitle: "Syed Naseer - Co-Founder & Operations Growth Lead",
      github: "#",
      linkedin: "https://www.linkedin.com/in/syed-naseer-66bb0231b",
      variant: "slide-right" as const,
    },
    {
      name: "SHAIK AYUB HUSSAIN",
      role: "ROLE: CORE TECHNICAL DEVELOPER",
      specialization: "Technical_Systems",
      description: "Core technical developer focused purely on software engineering, web systems architecture, and backend logic.",
      imageSrc: "/ayubphoto.jpeg",
      altText: "Shaik Ayub Hussain - Technical Development & Software Engineer at Galat Family",
      imageTitle: "Shaik Ayub Hussain - Technical Development & Software Engineer",
      github: "https://github.com/ayubshaik01",
      linkedin: "#",
      variant: "slide-left" as const,
    },
    {
      name: "SHAIK ASLAM HUSSAIN",
      role: "ROLE: VIDEO EDITING & MARKETING",
      specialization: "VideoEditing_Marketing",
      description: "Creative media lead driving video editing, visual content production, brand storytelling, and growth marketing.",
      imageSrc: "/aslamphoto.jpeg",
      altText: "Shaik Aslam Hussain - Video Editor & Marketing Specialist at Galat Family",
      imageTitle: "Shaik Aslam Hussain - Video Editor & Marketing Specialist",
      github: "#",
      linkedin: "#",
      instagram: "https://instagram.com/zmaxx.ofc",
      variant: "slide-right" as const,
    },
  ];

  return (
    <section id="team" className="py-24 md:py-32 border-t border-neutral-900 bg-black relative z-10">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="blur-up">
          <div className="mb-20">
            <h2 className="text-xs font-mono text-neutral-200 uppercase tracking-[0.2em] mb-4">
              <span className="text-signature">[02]</span> OUR_TEAM
            </h2>
            <p className="text-3xl md:text-4xl text-white font-light max-w-3xl">
              The team behind the story: engineering depth paired with product clarity and creative media.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-800 border border-neutral-800">
          {teamMembers.map((member) => (
            <Reveal
              key={member.name}
              variant={member.variant}
              className="bg-black p-6 sm:p-8 md:p-12 hover:bg-black transition-colors duration-500 group border-b md:border-b-0 border-neutral-800 micro-blur"
              itemScope
              itemType="https://schema.org/Person"
            >
              <div className="relative mb-8 overflow-hidden rounded-lg aspect-[3/5] sm:aspect-[3/5.5] md:aspect-[3/6] border border-neutral-800 group-hover:border-neutral-500/30 transition-colors">
                <div className="absolute inset-0 bg-neutral-400/10 opacity-0 group-hover:opacity-20 transition-opacity z-10 mix-blend-overlay"></div>
                
                <img 
                  src={member.imageSrc} 
                  alt={member.altText}
                  title={member.imageTitle}
                  width={800}
                  height={1600}
                  loading="lazy"
                  decoding="async"
                  itemProp="image"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent z-20">
                  <div className="font-mono text-xs text-neutral-200 mb-1">{member.role}</div>
                </div>
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-white mb-2" itemProp="name">
                {member.name}
              </h3>
              <p className="text-xs font-mono text-neutral-500 mb-6 tracking-widest uppercase" itemProp="jobTitle">
                {member.specialization}
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed mb-8 border-l-2 border-neutral-500/30 pl-4" itemProp="description">
                {member.description}
              </p>
              <div className="flex gap-6">
                {member.github && member.github !== "#" && (
                  <a href={member.github} target="_blank" rel="noreferrer" aria-label={`${member.name} GitHub`}>
                    <Github size={20} className="text-neutral-600 hover:text-white transition-colors cursor-pointer" />
                  </a>
                )}
                {member.linkedin && member.linkedin !== "#" && (
                  <a href={member.linkedin} target="_blank" rel="noreferrer" aria-label={`${member.name} LinkedIn`}>
                    <Linkedin size={20} className="text-neutral-600 hover:text-white transition-colors cursor-pointer" />
                  </a>
                )}
                {member.instagram && (
                  <a href={member.instagram} target="_blank" rel="noreferrer" aria-label={`${member.name} Instagram`}>
                    <Instagram size={20} className="text-neutral-600 hover:text-white transition-colors cursor-pointer" />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
