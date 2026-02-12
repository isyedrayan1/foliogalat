"use client";

import { Reveal } from "@/components/utilities/reveal";

const steps = [
  {
    index: "01",
    title: "Discovery",
    copy: "We map the real workflow, define the constraints, and surface the moments that matter.",
    visual: "Signal Map",
  },
  {
    index: "02",
    title: "Design",
    copy: "We prototype the interface and system layers together so the experience stays coherent.",
    visual: "Interaction Field",
  },
  {
    index: "03",
    title: "Build",
    copy: "We ship in focused sprints with clear milestones and zero ambiguity on scope.",
    visual: "Delivery Trace",
  },
  {
    index: "04",
    title: "Launch",
    copy: "We monitor, refine, and support what we ship so teams stay confident long after release.",
    visual: "Operational Loop",
  },
];

export const Storyline = () => {
  return (
    <section id="storyline" className="py-24 md:py-32 border-t border-neutral-900 relative z-10">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="blur-up">
          <div className="mb-16">
            <h2 className="text-xs font-mono text-neutral-200 uppercase tracking-[0.2em]">
              <span className="text-signature">[00]</span> THE_STORY
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-24 self-start">
            <Reveal delay={100} variant="blur-up">
              <h3 className="text-3xl md:text-4xl text-white font-light leading-tight">
                Every build has a beginning, middle, and release.
              </h3>
              <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
                We move through four chapters, keeping teams aligned while the product story becomes clearer at each step.
              </p>
              <div className="mt-10 flex items-center gap-4 text-xs font-mono text-neutral-500 uppercase tracking-widest">
                <span className="text-signature">Chapters</span>
                <span>01 - 04</span>
              </div>
              <div className="mt-10 h-px w-full line-signature"></div>
            </Reveal>
          </div>

          <div className="space-y-10">
            {steps.map((step, index) => (
              <Reveal
                key={step.index}
                delay={150 + index * 120}
                variant={index % 2 === 0 ? "slide-left" : "slide-right"}
              >
                <div className="micro-blur border border-neutral-800 rounded-2xl p-6 md:p-8 bg-black">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-xs font-mono text-neutral-500">CHAPTER_{step.index}</div>
                    <div className="text-xs font-mono text-signature">{step.title.toUpperCase()}</div>
                  </div>
                  <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] items-center">
                    <p className="text-neutral-300 text-lg leading-relaxed">{step.copy}</p>
                    <div className="relative h-36 rounded-xl border border-neutral-800 overflow-hidden bg-black">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(229,231,235,0.2),transparent_60%)]"></div>
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px] opacity-60"></div>
                      <div className="absolute bottom-3 left-3 text-[10px] font-mono text-neutral-200 tracking-widest">
                        {step.visual}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
