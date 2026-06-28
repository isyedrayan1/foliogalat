import fs from 'fs';
import path from 'path';

export interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  kicker?: string;
  readTime?: string;
}

export interface Post extends PostMetadata {
  contentHtml: string;
}

const docsDirectory = path.join(process.cwd(), 'docs');

export function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---/;
  const match = frontmatterRegex.exec(fileContent);

  const metadata: Record<string, string> = {};
  let content = fileContent;

  if (match) {
    const rawFrontmatter = match[1];
    content = fileContent.replace(match[0], '').trim();

    const lines = rawFrontmatter.split('\n');
    for (const line of lines) {
      const colonIndex = line.indexOf(':');
      if (colonIndex > -1) {
        const key = line.slice(0, colonIndex).trim();
        let value = line.slice(colonIndex + 1).trim();
        // Remove surrounding quotes if present
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1);
        }
        metadata[key] = value;
      }
    }
  }

  return { metadata, content };
}

// Simple markdown-to-html parser
export function markdownToHtml(markdown: string): string {
  let html = markdown;

  // Horizontal rules: ---
  html = html.replace(/^---$/gm, '<hr class="border-t border-neutral-800/80 my-8" />');

  // Code blocks: ```js ... ```
  html = html.replace(/```(\w*)\r?\n([\s\S]*?)```/g, (_, lang, code) => {
    return `<pre class="bg-neutral-900 border border-neutral-800 rounded-lg p-4 my-6 font-mono text-sm overflow-x-auto text-neutral-300"><code class="language-${lang}">${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`;
  });

  // Inline code: `code`
  html = html.replace(/`([^`\n]+)`/g, '<code class="bg-neutral-900 border border-neutral-800 px-1.5 py-0.5 rounded font-mono text-xs text-signature">$1</code>');

  // Headings
  html = html.replace(/^### (.*$)/gim, '<h4 class="text-lg font-bold text-neutral-200 mt-6 mb-3 font-sans">$1</h4>');
  html = html.replace(/^## (.*$)/gim, '<h3 class="text-xl font-bold text-neutral-100 mt-8 mb-4 border-b border-neutral-800 pb-2 font-sans">$1</h3>');
  html = html.replace(/^# (.*$)/gim, '<h2 class="text-2xl font-bold text-white mt-10 mb-4 font-sans">$1</h2>');

  // Bold text: **text**
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white font-semibold">$1</strong>');

  // Italics: *text* or _text_
  html = html.replace(/\*([^*]+)\*/g, '<em class="italic text-neutral-400">$1</em>');

  // Blockquotes: > text
  html = html.replace(/^> (.*$)/gim, '<blockquote class="border-l-2 border-signature pl-4 italic text-neutral-400 my-4">$1</blockquote>');

  // Unordered list items: - item or * item
  // Capture contiguous blocks of list items and wrap them in ul
  html = html.replace(/^(?:[-*]\s+(.+)\r?\n?)+/gm, (match) => {
    const items = match
      .split('\n')
      .filter(line => line.trim())
      .map(line => `  <li class="mb-2 pl-1">${line.replace(/^[-*]\s+/, '')}</li>`)
      .join('\n');
    return `<ul class="list-disc list-inside text-neutral-300 my-4 pl-4">${items}</ul>`;
  });

  // Paragraphs: separate double newlines into p blocks, skipping divs, lists, and preblocks
  const paragraphs = html.split(/\r?\n\r?\n/);
  html = paragraphs
    .map((p) => {
      const trimmed = p.trim();
      if (!trimmed) return '';
      // If it already looks like a block-level HTML structure, return as is
      if (trimmed.startsWith('<pre') || trimmed.startsWith('<ul') || trimmed.startsWith('<h') || trimmed.startsWith('<blockquote') || trimmed.startsWith('<hr')) {
        return trimmed;
      }
      return `<p class="leading-relaxed text-neutral-300 mb-6">${trimmed}</p>`;
    })
    .join('\n');

  // Links: [text](url)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-signature hover:underline transition-all" target="_blank" rel="noopener noreferrer">$1</a>');

  return html;
}

export function getAllPosts(): PostMetadata[] {
  if (!fs.existsSync(docsDirectory)) {
    fs.mkdirSync(docsDirectory);
  }

  const fileNames = fs.readdirSync(docsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(docsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { metadata } = parseFrontmatter(fileContents);

      return {
        slug,
        title: metadata.title || 'Untitled Post',
        date: metadata.date || '2026-06-28',
        excerpt: metadata.excerpt || '',
        author: metadata.author || 'Galat Family',
        kicker: metadata.kicker || 'ARTICLE',
        readTime: metadata.readTime || '3 min read',
      };
    });

  // Sort posts by date descending
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(docsDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { metadata, content } = parseFrontmatter(fileContents);
    const contentHtml = markdownToHtml(content);

    return {
      slug,
      title: metadata.title || 'Untitled Post',
      date: metadata.date || '2026-06-28',
      excerpt: metadata.excerpt || '',
      author: metadata.author || 'Galat Family',
      kicker: metadata.kicker || 'ARTICLE',
      readTime: metadata.readTime || '3 min read',
      contentHtml,
    };
  } catch (error) {
    console.error(`Error reading post with slug ${slug}:`, error);
    return null;
  }
}
