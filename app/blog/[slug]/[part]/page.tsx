import { getPaginatedPost, getAllPosts } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import { Navigation } from '@/components/sections/navigation';
import NeuralBackground from '@/components/ui/flow-field-background';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Clock, User } from 'lucide-react';
import { TableOfContents } from '@/components/table-of-contents';
import { MermaidRenderer } from '@/components/mermaid-renderer';
import { CodeCopy } from '@/components/code-copy';

import type { Metadata } from 'next';

interface BlogPostProps {
  params: Promise<{ slug: string; part: string }>;
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPaginatedPost(resolvedParams.slug);

  if (!post) {
    return {
      title: 'Post Not Found | Galat Family',
    };
  }

  const activePart = post.parts.find((p) => p.slug === resolvedParams.part);
  const partTitle = activePart ? activePart.title : resolvedParams.part;

  const title = `${post.title} - ${partTitle} | Galat Family`;
  const description = post.excerpt || `Read "${post.title}", a guide and engineering log from the Galat Family team.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  const paths: { slug: string; part: string }[] = [];

  for (const post of posts) {
    const fullPost = getPaginatedPost(post.slug);
    if (fullPost && fullPost.parts.length > 1) {
      // Exclude introduction (index 0) since it is resolved by base slug path
      fullPost.parts.slice(1).forEach((p) => {
        paths.push({ slug: post.slug, part: p.slug });
      });
    }
  }

  return paths;
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const resolvedParams = await params;
  const post = getPaginatedPost(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Resolve active part from part param
  const activePartIndex = post.parts.findIndex((p) => p.slug === resolvedParams.part);

  if (activePartIndex === -1) {
    notFound();
  }

  const activePart = post.parts[activePartIndex];

  // Pagination navigation links
  const prevPart = activePartIndex > 0 ? post.parts[activePartIndex - 1] : null;
  const nextPart = activePartIndex < post.parts.length - 1 ? post.parts[activePartIndex + 1] : null;

  return (
    <div className="bento-page font-sans antialiased text-neutral-300 selection:bg-neutral-200 selection:text-neutral-900">
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
            <span className="font-mono text-xs text-neutral-500">
              {post.parts.length > 1 ? `// STEP_${activePartIndex + 1}_OF_${post.parts.length}` : '// READ_MODE'}
            </span>
          </div>

          {/* Sticky Table of Contents Dropdown */}
          {post.parts.length > 1 && (
            <TableOfContents 
              headings={post.parts.map((p) => ({ id: p.slug, text: p.title, active: p.slug === resolvedParams.part }))}
              slug={post.slug}
            />
          )}

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
              dangerouslySetInnerHTML={{ __html: activePart.contentHtml }}
            />

            {/* Step Pagination Nav Row */}
            {post.parts.length > 1 && (
              <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-row items-center justify-between gap-3 font-mono">
                {prevPart ? (
                  <Link
                    href={activePartIndex === 1 ? `/blog/${post.slug}` : `/blog/${post.slug}/${prevPart.slug}`}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-3 border border-neutral-850 bg-neutral-900/40 hover:border-neutral-750 rounded-xl text-xs text-neutral-300 hover:text-white transition-colors text-center truncate"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="truncate">PREV: {prevPart.title.split(':')[0]}</span>
                  </Link>
                ) : (
                  <div className="flex-1 hidden sm:block" />
                )}

                {nextPart ? (
                  <Link
                    href={`/blog/${post.slug}/${nextPart.slug}`}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-3 bg-neutral-200 hover:bg-white text-neutral-900 font-bold rounded-xl text-xs transition-colors text-center truncate"
                  >
                    <span className="truncate">NEXT: {nextPart.title.split(':')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                  </Link>
                ) : (
                  <div className="flex-1 hidden sm:block" />
                )}
              </div>
            )}

            {/* Author Bio Card */}
            <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 bg-neutral-950/20 p-6 rounded-2xl border border-neutral-850">
              <div className="text-center sm:text-left">
                <h4 className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1 font-bold">WRITTEN_BY</h4>
                <h3 className="text-base font-bold text-white">{post.author}</h3>
              </div>
              <div className="flex justify-center sm:justify-start gap-4 text-[11px] font-mono">
                <a href="https://isyedrayan1.netlify.app" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-signature transition-colors">Portfolio</a>
                <a href="https://github.com/isyedrayan1" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-signature transition-colors">GitHub</a>
                <a href="https://linkedin.com/in/isyedrayan" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-signature transition-colors">LinkedIn</a>
                <a href="https://instagram.com/isyedrayan" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-signature transition-colors">Instagram</a>
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
