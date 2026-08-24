import { Navigation } from '@/components/sections/navigation';
import NeuralBackground from '@/components/ui/flow-field-background';
import { getAllPosts } from '@/lib/markdown';
import Link from 'next/link';
import { ArrowRight, Clock, BookOpen, Layers } from 'lucide-react';
import Dither from '@/components/Dither';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Engineering Logs | Galat Family",
  description: "Read our latest articles, guides, and engineering notes. Sharing what we build, learn, and document.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  // Top Bento Section Posts
  const featuredPost = posts[0];
  const topTwoPosts = posts.slice(1, 3);
  const remainingPosts = posts.slice(3);

  return (
    <div className="bento-page font-sans antialiased text-neutral-300 selection:bg-neutral-200 selection:text-neutral-900 overflow-x-hidden">
      <Navigation />
      <main className="bento-shell">
        <div className="bento-frame">
          {/* Header Card */}
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
                  Guides, benchmarks, and tutorials written by builders, for builders. Deep dives into software engineering, machine learning, and web architecture.
                </p>
              </div>
            </div>
          </section>

          {/* Flexible Mobile / Desktop Grid Container */}
          <div className="flex flex-col md:grid md:grid-cols-3 gap-6 mt-4 items-stretch">

            {/* 1. Our Blogs / Studio Card: Mobile Order 1, Desktop Row 1 Right */}
            <div className="order-1 md:order-2 md:col-span-1">
              <div className="h-full border border-neutral-800/80 rounded-2xl bg-neutral-950/40 p-6 md:p-8 flex flex-col justify-between hover:border-neutral-700/60 transition-all duration-300 relative overflow-hidden group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-signature" /> Our Blogs
                    </span>
                    <span className="text-xs text-neutral-500 font-mono">{posts.length} Blogs</span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                    Built by Galat Family
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                    Open engineering notes, framework benchmarks, and architecture guides written by active software developers.
                  </p>

                  {/* Categories */}
                  <div className="pt-4 border-t border-neutral-900">
                    <span className="text-xs font-semibold text-neutral-400 block mb-3">Categories</span>
                    <div className="flex flex-wrap gap-1.5">
                      {['Comparisons', 'Guides', 'Tutorials', 'Explanations', 'Tips', 'Tools'].map((cat) => (
                        <span key={cat} className="text-xs px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300 font-medium">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-900 mt-4 flex items-center justify-between text-xs text-neutral-500 font-mono">
                  <span>galatfamily.in</span>
                  <span className="text-signature font-sans font-medium">Updated Weekly</span>
                </div>
              </div>
            </div>

            {/* 2. Featured Post Card: Mobile Order 2, Desktop Row 1 Left (2 Cols) */}
            <div className="order-2 md:order-1 md:col-span-2">
              {featuredPost && (
                <div className="h-full border border-neutral-800/80 rounded-2xl bg-neutral-950/40 p-6 md:p-8 flex flex-col justify-between hover:border-neutral-700/60 transition-all duration-300 relative overflow-hidden group">
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
                      <Link href={`/blogs/${featuredPost.slug}`}>
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
                      href={`/blogs/${featuredPost.slug}`}
                      className="flex items-center gap-1.5 text-xs font-mono text-neutral-300 hover:text-white group/btn"
                    >
                      <span>READ_POST</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Top 2 Regular Posts: Mobile Order 3, Desktop Row 2 Left (2 Cols) */}
            <div className="order-3 md:order-3 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
              {topTwoPosts.map((post) => (
                <div 
                  key={post.slug}
                  className="h-full border border-neutral-800/80 rounded-2xl bg-neutral-950/40 p-6 flex flex-col justify-between hover:border-neutral-700/60 transition-all duration-300 relative overflow-hidden group"
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
                      <Link href={`/blogs/${post.slug}`}>
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
                      href={`/blogs/${post.slug}`}
                      className="flex items-center gap-1 text-[10px] font-mono text-neutral-400 hover:text-white group/btn"
                    >
                      <span>READ_POST</span>
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* 4. Remaining Blog Posts Grid: Mobile Order 4, Desktop Row 3+ (3 Cols) */}
            {remainingPosts.length > 0 && (
              <div className="order-4 md:order-5 md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch">
                {remainingPosts.map((post) => (
                  <div 
                    key={post.slug}
                    className="h-full border border-neutral-800/80 rounded-2xl bg-neutral-950/40 p-6 flex flex-col justify-between hover:border-neutral-700/60 transition-all duration-300 relative overflow-hidden group"
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
                        <Link href={`/blogs/${post.slug}`}>
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
                        href={`/blogs/${post.slug}`}
                        className="flex items-center gap-1 text-[10px] font-mono text-neutral-400 hover:text-white group/btn"
                      >
                        <span>READ_POST</span>
                        <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 5. Newsletter Card: Mobile Order 5 (LAST Card before Footer), Desktop Row 2 Right */}
            <div className="order-5 md:order-4 md:col-span-1">
              <div className="h-full border border-neutral-800/80 rounded-2xl bg-neutral-950/40 p-6 md:p-8 flex flex-col justify-between hover:border-neutral-700/60 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900/50 via-transparent to-transparent pointer-events-none" />
                <div>
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-4">Newsletter</span>
                  <h3 className="text-xl font-bold text-white tracking-tight leading-snug mb-3">
                    Sign up to our newsletter to stay updated
                  </h3>
                  <p className="text-neutral-400 text-xs leading-relaxed mb-6">
                    Deep dives into software development, project breakdowns, and product updates from Galat Family.
                  </p>
                </div>
                <div className="space-y-3 mt-auto">
                  <input 
                    type="email" 
                    placeholder="name@domain.com"
                    className="w-full bg-neutral-900 border border-neutral-800/80 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-signature/50 transition-colors"
                  />
                  <button className="w-full py-2.5 bg-neutral-200 hover:bg-white text-neutral-900 rounded-lg text-xs font-bold transition-all">
                    Subscribe
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
              <p className="bento-footer-meta">© 2026 Galat Family. Building one thing at a time.</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
