import { Navigation } from '@/components/sections/navigation';
import NeuralBackground from '@/components/ui/flow-field-background';
import { getAllPosts } from '@/lib/markdown';
import Link from 'next/link';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import Dither from '@/components/Dither';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Engineering Logs | Galat Family",
  description: "Read our latest articles, guides, and engineering notes. Sharing what we build, learn, and document.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  // Highlight the first post as the featured one
  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <div className="bento-page font-sans antialiased text-neutral-300 selection:bg-neutral-200 selection:text-neutral-900 overflow-x-hidden">
      <Navigation />
      <main className="bento-shell">
        {/* Page Header Card */}
        <div className="bento-frame">
          <section className="bento-card bento-full flex-grow flex flex-col justify-center items-center relative overflow-hidden bento-blog py-20 min-h-[300px]">
            <div className="bento-blog-bg" aria-hidden="true">
              <Dither
                waveColor={[0.15, 0.22, 0.45]}
                colorNum={3}
                pixelSize={3}
                waveSpeed={0.02}
              />
            </div>
            <div className="bento-blog-content relative z-10 text-center w-full max-w-4xl mx-auto px-6">
              <div className="flex flex-col items-center gap-4">
                <div className="p-3 rounded-full bg-signature/10 border border-signature/20">
                  <BookOpen className="w-6 h-6 text-signature" />
                </div>
                <div className="bento-kicker !mb-0 text-center tracking-[0.25em]">GALAT_LOGS</div>
                <h1 className="bento-heading text-4xl md:text-5xl max-w-2xl mx-auto font-bold tracking-tight text-white mt-2">
                  Launches, builds, and engineering notes.
                </h1>
                <p className="bento-body text-base max-w-lg mx-auto text-neutral-400 mt-2">
                  Written by builders, for builders. Raw documentation of our projects, stack details, and product philosophy.
                </p>
              </div>
            </div>
          </section>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            
            {/* Left/Middle Column - Content (Spans 2 columns) */}
            <div className="md:col-span-2 flex flex-col gap-6">
              {/* Featured Post Card */}
              {featuredPost && (
                <div className="border border-neutral-800/80 rounded-2xl bg-neutral-950/40 p-6 md:p-8 flex flex-col justify-between hover:border-neutral-700/60 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-signature/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs text-signature tracking-widest px-2.5 py-1 bg-signature/10 border border-signature/20 rounded-md">
                        {featuredPost.kicker || 'FEATURED'}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-neutral-500 font-mono">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug mb-4 group-hover:text-signature transition-colors duration-300">
                      <Link href={`/blog/${featuredPost.slug}`}>
                        {featuredPost.title}
                      </Link>
                    </h2>
                    <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-6 max-w-xl">
                      {featuredPost.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-900 mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-xs font-mono font-bold text-neutral-300 uppercase">
                        {featuredPost.author.slice(0, 2)}
                      </div>
                      <div className="text-xs">
                        <p className="text-neutral-300 font-medium font-mono">{featuredPost.author}</p>
                        <p className="text-neutral-500 text-[10px] font-mono">{featuredPost.date}</p>
                      </div>
                    </div>
                    <Link 
                      href={`/blog/${featuredPost.slug}`}
                      className="flex items-center gap-1.5 text-xs font-mono text-neutral-300 hover:text-white group/btn"
                    >
                      <span>READ_POST</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              )}

              {/* Regular Posts Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {regularPosts.map((post) => (
                  <div 
                    key={post.slug}
                    className="border border-neutral-800/80 rounded-2xl bg-neutral-950/40 p-6 flex flex-col justify-between hover:border-neutral-700/60 transition-all duration-300 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-signature/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-[10px] text-signature tracking-widest px-2 py-0.5 bg-signature/10 border border-signature/20 rounded">
                          {post.kicker || 'ARTICLE'}
                        </span>
                        <span className="text-[10px] text-neutral-500 font-mono flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white tracking-tight leading-snug mb-3 group-hover:text-signature transition-colors duration-300">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-neutral-400 text-xs leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-900 mt-auto">
                      <div className="flex items-center gap-2">
                        <div className="text-xs">
                          <p className="text-neutral-400 font-medium font-mono text-[10px]">{post.author}</p>
                          <p className="text-neutral-600 text-[9px] font-mono">{post.date}</p>
                        </div>
                      </div>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="flex items-center gap-1 text-[10px] font-mono text-neutral-400 hover:text-white group/btn"
                      >
                        <span>READ_POST</span>
                        <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Stats and Newsletter (Spans 1 column) */}
            <div className="md:col-span-1 flex flex-col gap-6">
              
              {/* Quick Stats / Info Bento Card (TOP) */}
              <div className="flex-1 border border-neutral-800/80 rounded-2xl bg-neutral-950/40 p-6 md:p-8 flex flex-col justify-between hover:border-neutral-700/60 transition-all duration-300 relative overflow-hidden group">
                <div>
                  <span className="font-mono text-xs text-neutral-500 tracking-widest block mb-4 uppercase">{"// STATISTICS"}</span>
                  <div className="grid grid-cols-2 gap-4 my-2">
                    <div className="bg-neutral-900/50 border border-neutral-800/60 rounded-xl p-3 text-center">
                      <div className="text-2xl font-bold text-white font-mono">{posts.length}</div>
                      <div className="text-[9px] text-neutral-500 font-mono tracking-wider mt-1">TOTAL_LOGS</div>
                    </div>
                    <div className="bg-neutral-900/50 border border-neutral-800/60 rounded-xl p-3 text-center">
                      <div className="text-2xl font-bold text-signature font-mono">11 min</div>
                      <div className="text-[9px] text-neutral-500 font-mono tracking-wider mt-1">READ_TIME</div>
                    </div>
                  </div>
                </div>
                <div className="text-[10px] font-mono text-neutral-500 border-t border-neutral-900 pt-4 mt-4">
                  <span>{`>`} SYSTEM STATUS: OPERATIONAL</span>
                </div>
              </div>

              {/* Newsletter / CTA Card (BOTTOM) */}
              <div className="flex-1 border border-neutral-800/80 rounded-2xl bg-neutral-950/40 p-6 md:p-8 flex flex-col justify-between hover:border-neutral-700/60 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900/50 via-transparent to-transparent pointer-events-none" />
                <div>
                  <span className="font-mono text-xs text-neutral-500 tracking-widest block mb-4 uppercase">{"// NEWSLETTER"}</span>
                  <h3 className="text-xl font-bold text-white tracking-tight leading-snug mb-3">
                    Stay updated with our builds.
                  </h3>
                  <p className="text-neutral-400 text-xs leading-relaxed mb-6">
                    No spam. Just occasional newsletters covering software architecture, developer workflows, and our latest product releases.
                  </p>
                </div>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="name@domain.com"
                    className="w-full bg-neutral-900 border border-neutral-800/80 rounded px-3 py-2 text-xs font-mono text-white placeholder-neutral-600 focus:outline-none focus:border-signature/50 transition-colors"
                  />
                  <button className="w-full py-2 bg-neutral-200 hover:bg-white text-neutral-900 rounded font-mono text-xs font-bold transition-all">
                    SUBSCRIBE
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Footer Card */}
          <section id="contact" className="bento-card bento-footer-card bento-full mt-6">
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
