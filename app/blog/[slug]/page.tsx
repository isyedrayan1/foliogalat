import { getPostBySlug, getAllPosts } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import { Navigation } from '@/components/sections/navigation';
import NeuralBackground from '@/components/ui/flow-field-background';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import { TableOfContents } from '@/components/table-of-contents';
import { MermaidRenderer } from '@/components/mermaid-renderer';
import { CodeCopy } from '@/components/code-copy';

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bento-page font-sans antialiased text-neutral-300 selection:bg-neutral-200 selection:text-neutral-900 overflow-x-hidden">
      <Navigation />
      <main className="bento-shell">
        <div className="bento-frame">
          {/* Back button and header info */}
          <div className="mb-6 flex items-center justify-between">
            <Link 
              href="/blog" 
              className="flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors py-2 px-4 border border-neutral-800/80 bg-neutral-950/40 rounded-xl hover:border-neutral-700/60"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>BACK_TO_LOGS</span>
            </Link>
            <span className="font-mono text-xs text-neutral-500">// READ_MODE</span>
          </div>

          {/* Sticky Table of Contents Dropdown */}
          <TableOfContents />

          {/* Dynamic Mermaid Diagram Compiler */}
          <MermaidRenderer />

          {/* Copy-to-Clipboard Code Buttons */}
          <CodeCopy />

          {/* Article Card */}
          <article className="border border-neutral-800/80 rounded-2xl bg-neutral-950/40 p-6 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-signature/5 blur-[120px] rounded-full pointer-events-none" />
            
            {/* Header */}
            <header className="border-b border-neutral-850 pb-8 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-xs text-signature tracking-widest px-2.5 py-1 bg-signature/10 border border-signature/20 rounded-md">
                  {post.kicker || 'ARTICLE'}
                </span>
                <span className="h-1 w-1 rounded-full bg-neutral-750" />
                <span className="font-mono text-xs text-neutral-500">{post.date}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-xs text-neutral-400 font-mono mt-4">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-neutral-500" />
                  <span>By {post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-neutral-500" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </header>

            {/* Content Body */}
            <div 
              className="prose prose-invert max-w-none md:text-base leading-relaxed text-neutral-300 font-sans"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {/* Author Bio Card */}
            <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 bg-neutral-950/20 p-6 rounded-2xl border border-neutral-850">
              <div className="text-center sm:text-left">
                <h4 className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1 font-bold">WRITTEN_BY</h4>
                <h3 className="text-base font-bold text-white">{post.author}</h3>
              </div>
              <div className="flex justify-center sm:justify-start gap-4 text-[11px] font-mono">
                <a href="https://isyedrayan.in" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-signature transition-colors">Portfolio</a>
                <a href="https://github.com/isyedrayan1" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-signature transition-colors">GitHub</a>
                <a href="https://linkedin.com/in/isyedrayan" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-signature transition-colors">LinkedIn</a>
              </div>
            </div>
          </article>

          {/* Footer Card */}
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
