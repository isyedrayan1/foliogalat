import { Navigation } from '@/components/sections/navigation';
import NeuralBackground from '@/components/ui/flow-field-background';
import { Rss } from 'lucide-react';
import Dither from '@/components/Dither';

export default function BlogPage() {
  return (
    <div className="bento-page font-sans antialiased text-neutral-300 selection:bg-neutral-200 selection:text-neutral-900 overflow-x-hidden min-h-screen flex flex-col">
      <Navigation />
      <main className="bento-shell flex-grow flex flex-col justify-center mt-24">
        <div className="bento-frame h-full flex flex-col">
          <section className="bento-card bento-full flex-grow flex flex-col justify-center items-center relative overflow-hidden bento-blog">
            <div className="bento-blog-bg" aria-hidden="true">
              <Dither
                waveColor={[0.2, 0.3, 0.5]}
                colorNum={3}
                pixelSize={3}
                waveSpeed={0.03}
              />
            </div>
            <div className="bento-blog-content relative z-10 text-center w-full max-w-4xl mx-auto py-24 px-6">
              <div className="flex flex-col items-center gap-6">
                <div className="p-4 rounded-full bg-signature/10 border border-signature/20">
                  <Rss className="w-8 h-8 text-signature" />
                </div>
                <div className="bento-kicker !mb-0 text-center">COMING_SOON</div>
                <h1 className="bento-heading text-4xl md:text-6xl max-w-2xl mx-auto">
                  Build logs, launches, and learnings.
                </h1>
                <p className="bento-body text-lg max-w-xl mx-auto">
                  We are currently writing up our recent project logs. The blog section will be available soon with updates on our builds, tooling, and process.
                </p>
                <div className="bento-actions justify-center mt-8">
                  <a className="bento-button px-10 py-4 text-sm" href="/">RETURN_HOME</a>
                </div>
              </div>
            </div>
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
