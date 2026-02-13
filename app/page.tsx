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
              We shape products from signal to system, turning complex workflows into memorable software.
            </p>
            <div className="bento-actions">
              <a className="bento-button" href="#work">
                VIEW_BUILDS
              </a>
              <span className="bento-status">STATUS: ACTIVE</span>
            </div>
            <div className="bento-subline">// Discovery. Design. Build. Launch.</div>
          </section>

          <div className="bento-grid">
          <section className="bento-card" aria-label="Signal feed">
            <div className="bento-kicker">SIGNAL_FEED</div>
            <div className="bento-mono bento-signal">
              <div className="bento-row">
                <span>PROJECTS</span>
                <span>ACTIVE</span>
              </div>
              <div className="bento-row">
                <span>Inventory OS</span>
                <span>LIVE</span>
              </div>
              <div className="bento-row">
                <span>Devflow CLI</span>
                <span>AVAILABLE</span>
              </div>
              <div className="bento-row">
                <span>Next Initiative</span>
                <span>PLANNING</span>
              </div>
            </div>
            <div className="bento-subline">QUALITY 99.98% :: DELIVERY OK</div>
          </section>

          <section id="storyline" className="bento-card">
            <div className="bento-kicker">[00] THE_STORY</div>
            <h2 className="bento-heading">Every build has a beginning, middle, and release.</h2>
            <p className="bento-body">
              We move through four chapters, keeping teams aligned while the product story becomes clearer at each step.
            </p>
            <ol className="bento-steps">
              <li>
                <span>01</span>
                <div>
                  <strong>Discovery</strong>
                  <p>We map the real workflow and surface the moments that matter.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <strong>Design</strong>
                  <p>Interface and system layers evolve together for clarity.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <strong>Build</strong>
                  <p>Focused sprints, clear milestones, zero ambiguity on scope.</p>
                </div>
              </li>
              <li>
                <span>04</span>
                <div>
                  <strong>Launch</strong>
                  <p>Monitor, refine, and support long after release.</p>
                </div>
              </li>
            </ol>
          </section>

          <section id="work" className="bento-card">
            <div className="bento-kicker">[01] SELECTED_WORK</div>
            <div className="bento-work">
              <article className="bento-work-card">
                <div className="bento-work-title">INVENTORY OS</div>
                <p>Chapter one focuses on clarity, turning operational complexity into a real-time system teams trust.</p>
                <div className="bento-tags">
                  <span>NEXT.JS_APP_ROUTER</span>
                  <span>POSTGRESQL_DB</span>
                  <span>WEBSOCKETS</span>
                </div>
              </article>
              <article className="bento-work-card">
                <div className="bento-work-title">DEVFLOW CLI</div>
                <p>Chapter two is the tooling layer, built to keep teams aligned through fast, reliable delivery.</p>
                <div className="bento-tags">
                  <span>RUST_CORE</span>
                  <span>ZERO_DEPENDENCY</span>
                </div>
              </article>
            </div>
          </section>

          <section id="team" className="bento-card">
            <div className="bento-kicker">[02] OUR_TEAM</div>
            <h2 className="bento-heading">Engineering depth paired with product clarity.</h2>
            <div className="bento-team-grid">
              <article className="bento-team-card">
                <div className="bento-team-photo">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800"
                    alt="Dev One"
                  />
                </div>
                <div className="bento-team-meta">
                  <div className="bento-team-role">ROLE: ENGINEERING</div>
                  <h3>Engineering</h3>
                  <p className="bento-team-tag">System_Architecture</p>
                  <p>Platform design, data systems, and reliability at scale.</p>
                </div>
              </article>
              <article className="bento-team-card">
                <div className="bento-team-photo">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                    alt="Dev Two"
                  />
                </div>
                <div className="bento-team-meta">
                  <div className="bento-team-role">ROLE: PRODUCT</div>
                  <h3>Product</h3>
                  <p className="bento-team-tag">Design_Experience</p>
                  <p>Product strategy, design systems, and user experience.</p>
                </div>
              </article>
            </div>
          </section>

          <section id="story" className="bento-card">
            <div className="bento-kicker">STANDARDS.md</div>
            <h2 className="bento-heading">Professional software, built with focus and clarity.</h2>
            <ul className="bento-list">
              <li>{`>`} Define scope, ship with confidence, iterate with care.</li>
              <li>{`>`} Built to scale with teams and operations.</li>
            </ul>
          </section>
          </div>

          <section id="contact" className="bento-card bento-footer-card bento-full">
            <div className="bento-footer-bg" aria-hidden="true">
              <NeuralBackground color="#7c83ff" trailOpacity={0.18} particleCount={420} speed={0.75} />
            </div>
            <div className="bento-footer-inner">
              <div className="bento-kicker">START_A_PROJECT</div>
              <h2 className="bento-footer-title">Ready to ship the next system?</h2>
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