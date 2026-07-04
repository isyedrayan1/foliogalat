import { Navigation } from '@/components/sections/navigation';
import NeuralBackground from '@/components/ui/flow-field-background';
import { Sparkles, Ship, ArrowUpRight, Settings, Users, Activity, Heart, Cpu, Zap, Rss } from 'lucide-react';
import Dither from '@/components/Dither';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="bento-page font-sans antialiased text-neutral-300 selection:bg-neutral-200 selection:text-neutral-900 overflow-x-hidden">
      <Navigation />
      <main className="bento-shell">
        <div className="bento-frame">
          <section className="bento-card bento-hero bento-full">
            <div className="bento-kicker">Two Developers</div>
            <h1 className="bento-title">
              WE ARE <span className="text-signature">GALAT</span> FAMILY.
            </h1>
            <p className="bento-lead">
              We build products. We ship monthly. We write about how.
            </p>
            <div className="bento-actions">
              <a className="bento-button" href="#work">
                See our work
              </a>
              <Link className="bento-button" href="/blog">
                Read the blog
              </Link>
            </div>
            <div className="bento-subline">{"// Plan. Build. Ship. Iterate."}</div>
          </section>

          <section id="about" className="bento-about">
            <div className="bento-kicker">About</div>
            <h2 className="bento-heading">Two developers, one name.</h2>
            <p className="bento-body">
              We build products that work. We ship every month. The name sticks around because we're sticking around.
            </p>
            <div className="bento-about-cards">
              <div className="bento-about-card group">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-5 h-5 text-signature" />
                  <div className="bento-kicker !mb-0">Identity</div>
                </div>
                <p className="bento-body">
                  Galat Family isn't seasonal. We ship, we document, we stay. That's what the name means to us.
                </p>
              </div>
              <div className="bento-about-card group">
                <div className="flex items-center gap-2 mb-4">
                  <Cpu className="w-5 h-5 text-signature" />
                  <div className="bento-kicker !mb-0">How we work</div>
                </div>
                <p className="bento-body">
                  Clean code. Good docs. Systems that don't break. We build things we can maintain and be proud of.
                </p>
              </div>
              <div className="bento-about-card group">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-signature" />
                  <div className="bento-kicker !mb-0">Our strategy</div>
                </div>
                <p className="bento-body">
                  We take fewer projects and go deeper. Less chasing. More depth. We build what we can actually support.
                </p>
              </div>
            </div>
          </section>

          <section id="work" className="bento-projects-row">
            <div className="bento-projects-header">
              <div className="bento-kicker">Our work</div>
              <h2 className="bento-heading">What we've shipped.</h2>
              <p className="bento-body">
                Products we build and maintain. Updated monthly.
              </p>
            </div>
            <div className="bento-projects-grid">
              <div className="bento-projects-main">
                <a
                  className="bento-project-card"
                  href="https://unitsend.in"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Unitsend"
                >
                  <div className="bento-project-thumb bento-project-thumb-one" aria-hidden="true" />
                  <div className="bento-project-copy">
                    <div className="bento-work-title">UNITSEND</div>
                    <p>Unitsend is an online file sharing tool built for quick, reliable transfers.</p>
                    <div className="bento-tags">
                      <span>FILE_SHARING</span>
                      <span>WEB_APP</span>
                    </div>
                  </div>
                </a>
                <a
                  className="bento-project-card"
                  href="https://ffsal-ss.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open FFSAL"
                >
                  <div className="bento-project-thumb bento-project-thumb-two" aria-hidden="true" />
                  <div className="bento-project-copy">
                    <div className="bento-work-title">FFSAL</div>
                    <p>Freefire tournament management for organizing teams, matches, and results.</p>
                    <div className="bento-tags">
                      <span>TOURNAMENTS</span>
                      <span>MANAGEMENT</span>
                    </div>
                  </div>
                </a>
                <a
                  className="bento-project-card"
                  href="https://thinkbotz.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Thinkbotz Association"
                >
                  <div className="bento-project-thumb bento-project-thumb-three" aria-hidden="true" />
                  <div className="bento-project-copy">
                    <div className="bento-work-title">THINKBOTZ</div>
                    <p>A student association site for events, members, and technical initiatives.</p>
                    <div className="bento-tags">
                      <span>ASSOCIATION</span>
                      <span>COMMUNITY</span>
                    </div>
                  </div>
                </a>
                <a
                  className="bento-project-card"
                  href="https://edufiles.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open Edu Notes"
                >
                  <div className="bento-project-thumb bento-project-thumb-one" aria-hidden="true" />
                  <div className="bento-project-copy">
                    <div className="bento-work-title">EDU NOTES</div>
                    <p>Edunotes is a simple notes sharing tool for students and study groups.</p>
                    <div className="bento-tags">
                      <span>NOTES</span>
                      <span>SHARING</span>
                    </div>
                  </div>
                </a>
              </div>
              <aside className="bento-projects-side">
                <div className="bento-side-card">
                  <div className="bento-kicker">Status</div>
                  <ul className="bento-list">
                    <li>{`>`} Active: 2 products</li>
                    <li>{`>`} Internal: 3 tools</li>
                    <li>{`>`} Release: monthly</li>
                  </ul>
                </div>
                <div className="bento-side-card">
                  <div className="bento-kicker">Tech stack</div>
                  <div className="bento-inline">
                    <span>Next.js</span>
                    <span>Postgres</span>
                    <span>Rust</span>
                  </div>
                  <p className="bento-body">We use tools that are stable and well documented. Nothing fancy.</p>
                </div>
              </aside>
            </div>
          </section>

          <section id="team" className="bento-team-row">
            <div className="bento-kicker">Meet us</div>
            <h2 className="bento-heading">Two developers who build together.</h2>
            <p className="bento-body">
              We split the work. We stay aligned. Everything ships.
            </p>
            <div className="bento-team-row-grid">
              <article className="bento-team-card">
                <div className="bento-team-photo w-full h-[280px]">
                  <Image 
                    src="/Syed rayan.jpg" 
                    alt="Syed Rayan" 
                    fill 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="bento-team-meta">
                  <h3 className="bento-team-name">Syed Rayan</h3>
                  <p>Full-stack development, architecture, and systems.</p>
                  <div className="bento-team-socials">
                    <a href="https://isyedrayan1.netlify.app" target="_blank" rel="noreferrer" className="hover:text-signature transition-colors">Portfolio</a>
                    <a href="https://linkedin.com/in/isyedrayan" target="_blank" rel="noreferrer" className="hover:text-signature transition-colors">LinkedIn</a>
                    <a href="https://instagram.com/isyedrayan" target="_blank" rel="noreferrer" className="hover:text-signature transition-colors">Instagram</a>
                  </div>
                </div>
              </article>
              <article className="bento-team-card">
                <div className="bento-team-photo w-full h-[280px]">
                  <Image 
                    src="/syed naseer.png.jpg" 
                    alt="Syed Naseer" 
                    fill 
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="bento-team-meta">
                  <h3 className="bento-team-name">Syed Naseer</h3>
                  <p>Product engineering, UI systems, and delivery flow.</p>
                  <div className="bento-team-socials">
                    <a href="https://itsnaseersyed.dev" target="_blank" rel="noreferrer" className="hover:text-signature transition-colors">Portfolio</a>
                    <a href="https://www.linkedin.com/in/syed-naseer-66bb0231b" target="_blank" rel="noreferrer" className="hover:text-signature transition-colors">LinkedIn</a>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section id="story" className="bento-card bento-full bento-story">
            <div className="bento-story-header">
              <div className="bento-kicker">Our story</div>
              <h2 className="bento-heading">We tell our story with releases, not words.</h2>
              <p className="bento-body">
                How we started. What we shipped. What we&apos;re building now.
              </p>
            </div>
            <div className="bento-story-grid">
              <article className="bento-story-card bento-story-card--wide group">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-signature" />
                    <div className="bento-kicker !mb-0">Start</div>
                  </div>
                  <h3 className="bento-heading">We started small, planned long.</h3>
                  <p className="bento-body">
                    A few products. Clean code. Good docs. That was the plan from day one.
                  </p>
                </div>
                <div className="bento-inline relative z-10">
                  <span>2024</span>
                </div>
              </article>

              <article className="bento-story-card bento-story-card--tall group">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Ship className="w-5 h-5 text-signature" />
                    <div className="bento-kicker !mb-0">Shipping</div>
                  </div>
                  <h3 className="bento-heading">We ship. We don't pitch.</h3>
                  <p className="bento-body">
                    Every month we release something. Scoped. Tested. Shipped.
                  </p>
                  <ul className="bento-list mt-8">
                    <li className="flex items-center gap-2">
                       <ArrowUpRight className="w-3 h-3 text-signature" />
                       {`Internal tools first`}
                    </li>
                    <li className="flex items-center gap-2">
                       <ArrowUpRight className="w-3 h-3 text-signature" />
                       {`Public release next`}
                    </li>
                    <li className="flex items-center gap-2">
                       <ArrowUpRight className="w-3 h-3 text-signature" />
                       {`Monthly rhythm locked`}
                    </li>
                  </ul>
                </div>
              </article>

              <article className="bento-story-card bento-story-card--mid bento-story-card--systems group">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Settings className="w-5 h-5 text-signature" />
                    <div className="bento-kicker !mb-0">Process</div>
                  </div>
                  <h3 className="bento-heading">We keep it simple.</h3>
                  <p className="bento-body">Plan, build, ship, iterate. That's it.</p>
                </div>
              </article>

              <article className="bento-story-card bento-story-card--mid bento-story-card--community group">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="w-5 h-5 text-signature" />
                    <div className="bento-kicker !mb-0">Sharing</div>
                  </div>
                  <h3 className="bento-heading">We write about what works.</h3>
                  <p className="bento-body">Build logs, decisions, and lessons learned. All in the open.</p>
                </div>
              </article>

              <article className="bento-story-card bento-story-card--wide-alt group">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Activity className="w-5 h-5 text-signature" />
                    <div className="bento-kicker !mb-0">Now</div>
                  </div>
                  <h3 className="bento-heading">We only build what we can support.</h3>
                  <p className="bento-body">
                    Fewer projects. Deeper work. The name stays because we're staying.
                  </p>
                </div>
                <div className="bento-inline relative z-10">
                  <span>Stable</span>
                  <span>Long-term</span>
                </div>
              </article>
            </div>
          </section>

          <section id="blog-cta" className="bento-card bento-full bento-blog">
            <div className="bento-blog-bg" aria-hidden="true">
              <Dither 
                waveColor={[0.2, 0.3, 0.5]} 
                colorNum={3} 
                pixelSize={3} 
                waveSpeed={0.03}
              />
            </div>
            <div className="bento-blog-content relative z-10 text-center">
              <div className="flex flex-col items-center gap-6">
                <div className="p-4 rounded-full bg-signature/10 border border-signature/20">
                  <Rss className="w-8 h-8 text-signature" />
                </div>
                <div className="bento-kicker !mb-0 text-center">Read our blog</div>
                <h2 className="bento-heading text-3xl md:text-5xl max-w-2xl mx-auto">How we build. What we learned.</h2>
                <p className="bento-body text-lg max-w-xl mx-auto">
                  Build logs from shipping. Notes on decisions. Essays on what works and what doesn't.
                </p>
                <div className="bento-actions justify-center">
                  <Link className="bento-button px-10 py-4 text-sm" href="/blog">Open blog</Link>
                </div>
              </div>
            </div>
          </section>

          <section id="social-cta" className="bento-card bento-full bento-social">
            <div className="bento-social-content relative z-10 text-center">
              <div className="flex flex-col items-center gap-8">
                <div className="bento-kicker !mb-0 text-center">Follow us</div>
                <h2 className="bento-heading text-3xl md:text-5xl max-w-2xl mx-auto">See what we're building.</h2>
                <p className="bento-body text-lg max-w-xl mx-auto">
                  Progress updates. New releases. Real thoughts on shipping code.
                </p>
                
                <div className="flex flex-wrap justify-center gap-6 md:gap-12 py-4">
                  <a href="https://instagram.com/thegalatfamily" target="_blank" rel="noreferrer" className="bento-social-link group">
                    <span className="block text-sm tracking-widest text-neutral-500 group-hover:text-signature transition-colors">INSTAGRAM</span>
                  </a>
                  <a href="#" className="bento-social-link group">
                    <span className="block text-sm tracking-widest text-neutral-500 group-hover:text-signature transition-colors">GITHUB</span>
                  </a>
                  <a href="#" className="bento-social-link group">
                    <span className="block text-sm tracking-widest text-neutral-500 group-hover:text-signature transition-colors">YOUTUBE</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,100,255,0.05),transparent_70%)] pointer-events-none" />
          </section>

          <section id="contact" className="bento-card bento-footer-card bento-full">
            <div className="bento-footer-bg" aria-hidden="true">
              <NeuralBackground color="#7c83ff" trailOpacity={0.18} particleCount={420} speed={0.75} />
            </div>
            <div className="bento-footer-inner">
              <div className="bento-kicker">Get in touch</div>
              <h2 className="bento-footer-title">Let's talk.</h2>
              <a className="bento-email" href="mailto:contact.galatfamily@gmail.com">
                contact.galatfamily@gmail.com
              </a>
              <p className="bento-footer-meta">© 2024 Galat Family. We ship what we build.</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
