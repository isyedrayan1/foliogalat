import { Navigation } from '@/components/sections/navigation';
import NeuralBackground from '@/components/ui/flow-field-background';

export default function HomePage() {
  return (
    <div className="bento-page font-sans antialiased text-neutral-300 selection:bg-neutral-200 selection:text-neutral-900 overflow-x-hidden">
      <Navigation />
      <main className="bento-shell">
        <div className="bento-frame">
          <section className="bento-card bento-hero bento-full">
            <div className="bento-kicker">EST. 2024 :: TEAM_BUILD</div>
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
              <span className="bento-status">STATUS: ACTIVE</span>
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
              <div className="bento-about-card">
                <p className="bento-body">
                  We are proud of the name. It stands for a team that ships, documents, and learns together. The identity
                  is long-term, not seasonal.
                </p>
              </div>
              <div className="bento-about-card">
                <p className="bento-body">
                  We build useful systems and keep them clean, reliable, and easy to operate. Our focus is on clarity,
                  durability, and practical outcomes.
                </p>
              </div>
              <div className="bento-about-card">
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
            <h2 className="bento-heading">Three developers, one team.</h2>
            <p className="bento-body">
              We build, ship, and maintain our products together.
            </p>
            <div className="bento-team-row-grid">
              <article className="bento-team-card">
                <div className="bento-team-photo bento-team-photo-placeholder" aria-hidden="true" />
                <div className="bento-team-meta">
                  <div className="bento-team-role">ROLE: ENGINEERING</div>
                  <h3 className="bento-team-name">Syed Rayan</h3>
                  <p className="bento-team-tag">SYSTEM_ARCHITECTURE</p>
                  <p>Full-stack development, architecture, and systems.</p>
                  <div className="bento-team-socials">
                    <span>GitHub</span>
                    <span>LinkedIn</span>
                  </div>
                </div>
              </article>
              <article className="bento-team-card">
                <div className="bento-team-photo bento-team-photo-placeholder" aria-hidden="true" />
                <div className="bento-team-meta">
                  <div className="bento-team-role">ROLE: ENGINEERING</div>
                  <h3 className="bento-team-name">Syed Naseer</h3>
                  <p className="bento-team-tag">PRODUCT_ENGINEERING</p>
                  <p>Product engineering, UI systems, and delivery flow.</p>
                  <div className="bento-team-socials">
                    <span>GitHub</span>
                    <span>LinkedIn</span>
                  </div>
                </div>
              </article>
              <article className="bento-team-card">
                <div className="bento-team-photo bento-team-photo-placeholder" aria-hidden="true" />
                <div className="bento-team-meta">
                  <div className="bento-team-role">ROLE: ENGINEERING</div>
                  <h3 className="bento-team-name">Shaik Ayub Hussain</h3>
                  <p className="bento-team-tag">SYSTEMS_INTEGRATION</p>
                  <p>Build pipelines, tooling, and product integrations.</p>
                  <div className="bento-team-socials">
                    <span>GitHub</span>
                    <span>LinkedIn</span>
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
                A card-based bento timeline of how the team formed, shipped, and kept building.
              </p>
            </div>
            <div className="bento-story-grid">
              <article className="bento-story-card bento-story-card--wide">
                <div>
                  <div className="bento-kicker">ORIGIN</div>
                  <h3 className="bento-heading">A small team with a long runway.</h3>
                  <p className="bento-body">
                    We started with a handful of builds and a promise to keep the work clean and documented.
                  </p>
                </div>
                <div className="bento-inline">
                  <span>2024</span>
                  <span>FORMATION</span>
                </div>
              </article>

              <article className="bento-story-card bento-story-card--tall">
                <div>
                  <div className="bento-kicker">FIRST_SHIP</div>
                  <h3 className="bento-heading">Launches over pitches.</h3>
                  <p className="bento-body">
                    Early releases proved our rhythm: scoped projects, fast feedback, steady upkeep.
                  </p>
                </div>
                <ul className="bento-list">
                  <li>{`>`} Internal tools shipped</li>
                  <li>{`>`} First public release</li>
                  <li>{`>`} Monthly cadence locked</li>
                </ul>
              </article>

              <article className="bento-story-card bento-story-card--mid bento-story-card--systems">
                <div className="bento-kicker">SYSTEMS</div>
                <h3 className="bento-heading">Process stays simple.</h3>
                <p className="bento-body">Discovery, design, build, launch. Nothing extra.</p>
              </article>

              <article className="bento-story-card bento-story-card--mid bento-story-card--community">
                <div className="bento-kicker">COMMUNITY</div>
                <h3 className="bento-heading">We share the learnings.</h3>
                <p className="bento-body">Notes, build logs, and short essays keep the system open.</p>
              </article>

              <article className="bento-story-card bento-story-card--wide-alt">
                <div>
                  <div className="bento-kicker">NOW</div>
                  <h3 className="bento-heading">We build what we can support.</h3>
                  <p className="bento-body">
                    Fewer projects, deeper focus, and a long-term identity behind every release.
                  </p>
                </div>
                <div className="bento-inline">
                  <span>STABLE_STACK</span>
                  <span>LONG_TERM</span>
                </div>
              </article>
            </div>
          </section>

          <section id="blog-cta" className="bento-card bento-full bento-cta">
            <div className="bento-cta-content">
              <div className="bento-kicker">READ_THE_BLOG</div>
              <h2 className="bento-heading">Build logs, launches, and what we learned.</h2>
              <p className="bento-body">
                Short reads from the team on shipping, tooling, and the decisions behind each release.
              </p>
              <div className="bento-actions">
                <a className="bento-button" href="#">OPEN_BLOG</a>
                <span className="bento-status">UPDATED: WEEKLY</span>
              </div>
            </div>
            <div className="bento-cta-panel" aria-hidden="true">
              <div className="bento-cta-lines"></div>
              <div className="bento-cta-label">BLOG_FEED</div>
            </div>
          </section>

          <section id="social-cta" className="bento-card bento-full bento-cta bento-cta--social">
            <div className="bento-cta-content">
              <div className="bento-kicker">SOCIAL_SIGNAL</div>
              <h2 className="bento-heading">Follow the shipping trail.</h2>
              <p className="bento-body">
                Daily progress notes, launches, and in-between updates from the Galat Family team.
              </p>
              <div className="bento-inline">
                <span>TWITTER</span>
                <span>LINKEDIN</span>
                <span>GITHUB</span>
                <span>YOUTUBE</span>
              </div>
            </div>
            <div className="bento-cta-panel" aria-hidden="true">
              <div className="bento-cta-orbit"></div>
              <div className="bento-cta-label">SOCIAL_GRID</div>
            </div>
          </section>

          <section id="contact" className="bento-card bento-footer-card bento-full">
            <div className="bento-footer-bg" aria-hidden="true">
              <NeuralBackground color="#7c83ff" trailOpacity={0.18} particleCount={420} speed={0.75} />
            </div>
            <div className="bento-footer-inner">
              <div className="bento-kicker">START_A_PROJECT</div>
              <h2 className="bento-footer-title">Start a conversation.</h2>
              <a className="bento-email" href="mailto:hello@galat.family">
                hello@galat.family
              </a>
              <p className="bento-footer-meta">GalatFamily © 2024 :: All Systems Operational :: Loc: Internet</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}