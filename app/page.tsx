import { Navigation } from '@/components/sections/navigation';
import NeuralBackground from '@/components/ui/flow-field-background';
import { Sparkles, Ship, ArrowUpRight, Settings, Users, Activity, Heart, Cpu, Zap, Rss } from 'lucide-react';
import Dither from '@/components/Dither';

export default function HomePage() {
  return (
    <div className="bento-page font-sans antialiased text-neutral-300 selection:bg-neutral-200 selection:text-neutral-900 overflow-x-hidden">
      <Navigation />
      <main className="bento-shell">
        <div className="bento-frame">
          <section className="bento-card bento-hero bento-full">
            <div className="bento-kicker">TEAM_BUILD</div>
            <h1 className="bento-title">
              WE ARE <span className="text-signature">GALAT</span> FAMILY.
            </h1>
            <p className="bento-lead">
              We build reliable products and share what we learn along the way.
            </p>
            <div className="bento-actions">
              <a className="bento-button" href="#work">
                VIEW_BUILDS
              </a>
              <a className="bento-button" href="/blog">
                READ_BLOGS
              </a>
            </div>
            <div className="bento-subline">// Plan. Build. Ship. Iterate.</div>
          </section>

          <section id="about" className="bento-about">
            <div className="bento-kicker">ABOUT_US</div>
            <h2 className="bento-heading">We are Galat Family.</h2>
            <p className="bento-body">
              A small tech team that builds products, shares knowledge, and treats the name as a long-term identity.
            </p>
            <div className="bento-about-cards">
              <div className="bento-about-card group">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-5 h-5 text-signature" />
                  <div className="bento-kicker !mb-0">IDENTITY</div>
                </div>
                <p className="bento-body">
                  We are proud of the name. It stands for a team that ships, documents, and learns together. The identity
                  is long-term, not seasonal.
                </p>
              </div>
              <div className="bento-about-card group">
                <div className="flex items-center gap-2 mb-4">
                  <Cpu className="w-5 h-5 text-signature" />
                  <div className="bento-kicker !mb-0">FOCUS</div>
                </div>
                <p className="bento-body">
                  We build useful systems and keep them clean, reliable, and easy to operate. Our focus is on clarity,
                  durability, and practical outcomes.
                </p>
              </div>
              <div className="bento-about-card group">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-signature" />
                  <div className="bento-kicker !mb-0">STRATEGY</div>
                </div>
                <p className="bento-body">
                  We do business when it makes sense, but we stay hands-on with the work. We prefer fewer projects with
                  more depth over many shallow wins.
                </p>
              </div>
            </div>
          </section>

          <section id="work" className="bento-projects-row">
            <div className="bento-projects-header">
              <div className="bento-kicker">[01] PROJECTS</div>
              <h2 className="bento-heading">Selected products and internal builds.</h2>
              <p className="bento-body">
                A small set of systems we maintain and improve over time.
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
                  <div className="bento-kicker">PROJECT_STATUS</div>
                  <ul className="bento-list">
                    <li>{`>`} Active builds: 2</li>
                    <li>{`>`} Internal tools: 3</li>
                    <li>{`>`} Release cadence: monthly</li>
                  </ul>
                </div>
                <div className="bento-side-card">
                  <div className="bento-kicker">CORE_STACK</div>
                  <div className="bento-inline">
                    <span>Next.js</span>
                    <span>Postgres</span>
                    <span>Rust</span>
                  </div>
                  <p className="bento-body">We prefer stable, well-documented tools and keep the stack tight.</p>
                </div>
              </aside>
            </div>
          </section>

          <section id="team" className="bento-team-row">
            <div className="bento-kicker">[02] OUR_TEAM</div>
            <h2 className="bento-heading">Two developers, one team.</h2>
            <p className="bento-body">
              We build, ship, and maintain our products together.
            </p>
            <div className="bento-team-row-grid">
              <article className="bento-team-card">
                <img src="/Syed rayan.jpg" alt="Syed Rayan" className="bento-team-photo" />
                <div className="bento-team-meta">
                  <h3 className="bento-team-name">Syed Rayan</h3>
                  <p>Full-stack development, architecture, and systems.</p>
                  <div className="bento-team-socials">
                    <a href="https://isyedrayan.in" target="_blank" rel="noreferrer" className="hover:text-signature transition-colors">Portfolio</a>
                    <a href="https://linkedin.com/in/isyedrayan" target="_blank" rel="noreferrer" className="hover:text-signature transition-colors">LinkedIn</a>
                  </div>
                </div>
              </article>
              <article className="bento-team-card">
                <img src="/syed naseer.png.jpg" alt="Syed Naseer" className="bento-team-photo" />
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
              <div className="bento-kicker">[03] OUR_STORY</div>
              <h2 className="bento-heading">A story told in releases, not slogans.</h2>
              <p className="bento-body">
                A record of the team's formation, shipping milestones, and current focus.
              </p>
            </div>
            <div className="bento-story-grid">
              <article className="bento-story-card bento-story-card--wide group">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-signature" />
                    <div className="bento-kicker !mb-0">ORIGIN</div>
                  </div>
                  <h3 className="bento-heading">A small team with a long runway.</h3>
                  <p className="bento-body">
                    We started with a handful of builds and a promise to keep the work clean and documented.
                  </p>
                </div>
                <div className="bento-inline relative z-10">
                  <span>FORMATION</span>
                </div>
              </article>

              <article className="bento-story-card bento-story-card--tall group">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Ship className="w-5 h-5 text-signature" />
                    <div className="bento-kicker !mb-0">FIRST_SHIP</div>
                  </div>
                  <h3 className="bento-heading">Launches over pitches.</h3>
                  <p className="bento-body">
                    Early releases proved our rhythm: scoped projects, fast feedback, steady upkeep.
                  </p>
                  <ul className="bento-list mt-8">
                    <li className="flex items-center gap-2">
                       <ArrowUpRight className="w-3 h-3 text-signature" />
                       {`Internal tools shipped`}
                    </li>
                    <li className="flex items-center gap-2">
                       <ArrowUpRight className="w-3 h-3 text-signature" />
                       {`First public release`}
                    </li>
                    <li className="flex items-center gap-2">
                       <ArrowUpRight className="w-3 h-3 text-signature" />
                       {`Monthly cadence locked`}
                    </li>
                  </ul>
                </div>
              </article>

              <article className="bento-story-card bento-story-card--mid bento-story-card--systems group">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Settings className="w-5 h-5 text-signature" />
                    <div className="bento-kicker !mb-0">SYSTEMS</div>
                  </div>
                  <h3 className="bento-heading">Process stays simple.</h3>
                  <p className="bento-body">Discovery, design, build, launch.</p>
                </div>
              </article>

              <article className="bento-story-card bento-story-card--mid bento-story-card--community group">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="w-5 h-5 text-signature" />
                    <div className="bento-kicker !mb-0">COMMUNITY</div>
                  </div>
                  <h3 className="bento-heading">We share the learnings.</h3>
                  <p className="bento-body">Notes, build logs, and short essays keep the system open.</p>
                </div>
              </article>

              <article className="bento-story-card bento-story-card--wide-alt group">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Activity className="w-5 h-5 text-signature" />
                    <div className="bento-kicker !mb-0">NOW</div>
                  </div>
                  <h3 className="bento-heading">We build what we can support.</h3>
                  <p className="bento-body">
                    Fewer projects, deeper focus, and a long-term identity behind every release.
                  </p>
                </div>
                <div className="bento-inline relative z-10">
                  <span>STABLE_STACK</span>
                  <span>LONG_TERM</span>
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
                <div className="bento-kicker !mb-0 text-center">READ_THE_BLOG</div>
                <h2 className="bento-heading text-3xl md:text-5xl max-w-2xl mx-auto">Build logs, launches, and what we learned.</h2>
                <p className="bento-body text-lg max-w-xl mx-auto">
                  Short reads from the team on shipping, tooling, and the decisions behind each release.
                </p>
                <div className="bento-actions justify-center">
                  <a className="bento-button px-10 py-4 text-sm" href="/blog">OPEN_BLOG</a>
                </div>
              </div>
            </div>
          </section>

          <section id="social-cta" className="bento-card bento-full bento-social">
            <div className="bento-social-content relative z-10 text-center">
              <div className="flex flex-col items-center gap-8">
                <div className="bento-kicker !mb-0 text-center">CONNECT</div>
                <h2 className="bento-heading text-3xl md:text-5xl max-w-2xl mx-auto">See what we're working on.</h2>
                <p className="bento-body text-lg max-w-xl mx-auto">
                  We share our progress, new releases, and occasional thoughts on building software.
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
              <div className="bento-kicker">START_A_PROJECT</div>
              <h2 className="bento-footer-title">Start a conversation.</h2>
              <a className="bento-email" href="mailto:contact.galatfamily@gmail.com">
                contact.galatfamily@gmail.com
              </a>
              <p className="bento-footer-meta">© 2024 Galat Family. Building one thing at a time.</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}