import fs from 'fs';
import path from 'path';
import MarkdownIt from 'markdown-it';

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

const docsDirectory = path.join(process.cwd(), 'blogs');

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

// Create configured MarkdownIt instance
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

// Customize links to add target="_blank", rel="noopener noreferrer", and custom styling classes
const defaultLinkOpenRender = md.renderer.rules.link_open || function(tokens, idx, options, env, self) {
  return self.renderToken(tokens, idx, options);
};
md.renderer.rules.link_open = function(tokens, idx, options, env, self) {
  const token = tokens[idx];
  const aIndex = token.attrIndex('target');
  if (aIndex < 0) {
    token.attrPush(['target', '_blank']);
  } else {
    token.attrs![aIndex][1] = '_blank';
  }
  const relIndex = token.attrIndex('rel');
  if (relIndex < 0) {
    token.attrPush(['rel', 'noopener noreferrer']);
  } else {
    token.attrs![relIndex][1] = 'noopener noreferrer';
  }
  const classIndex = token.attrIndex('class');
  const classVal = 'text-signature hover:underline transition-all';
  if (classIndex < 0) {
    token.attrPush(['class', classVal]);
  } else {
    token.attrs![classIndex][1] = classVal;
  }
  return defaultLinkOpenRender(tokens, idx, options, env, self);
};

// Customize blockquotes to match portfolio branding
md.renderer.rules.blockquote_open = () => {
  return '<blockquote class="border-l-2 border-signature pl-4 italic text-neutral-450 my-4">';
};

// Customize code fence blocks (pre/code)
md.renderer.rules.fence = (tokens, idx, options, env, self) => {
  const token = tokens[idx];
  const lang = token.info.trim();
  const code = token.content;
  const escapedCode = code.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `<pre class="bg-neutral-900 border border-neutral-800 rounded-lg p-4 my-6 font-mono text-sm overflow-x-auto text-neutral-350"><code class="language-${lang}">${escapedCode}</code></pre>\n`;
};

// Customize code inline blocks
md.renderer.rules.code_inline = (tokens, idx, options, env, self) => {
  const token = tokens[idx];
  const escapedCode = token.content.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `<code class="bg-neutral-900 border border-neutral-800 px-1.5 py-0.5 rounded font-mono text-xs text-signature">${escapedCode}</code>`;
};

// Customize headers to map matching branding tags
md.renderer.rules.heading_open = (tokens, idx, options, env, self) => {
  const token = tokens[idx];
  const level = token.tag;
  let classes = '';
  if (level === 'h1') classes = 'text-3xl font-bold text-white mt-12 mb-6 font-sans';
  if (level === 'h2') classes = 'text-2xl font-bold text-white mt-10 mb-4 border-b border-neutral-800 pb-2 font-sans';
  if (level === 'h3') classes = 'text-xl font-bold text-neutral-100 mt-8 mb-4 border-b border-neutral-800 pb-2 font-sans';
  if (level === 'h4') classes = 'text-lg font-bold text-neutral-200 mt-6 mb-3 font-sans';
  return `<${level} class="${classes}">`;
};

// Customize images to support sizing and border frames
const defaultImageRender = md.renderer.rules.image || function(tokens, idx, options, env, self) {
  return self.renderToken(tokens, idx, options);
};
md.renderer.rules.image = function(tokens, idx, options, env, self) {
  const token = tokens[idx];
  const classIndex = token.attrIndex('class');
  const classVal = 'w-full max-w-2xl mx-auto rounded-xl border border-neutral-850 my-6 shadow-lg';
  if (classIndex < 0) {
    token.attrPush(['class', classVal]);
  } else {
    token.attrs![classIndex][1] = classVal;
  }
  return defaultImageRender(tokens, idx, options, env, self);
};

// Main html converter
export function markdownToHtml(markdown: string): string {
  return md.render(markdown);
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

export interface PartContent {
  title: string;
  slug: string;
  contentHtml: string;
}

export interface PaginatedPost extends PostMetadata {
  parts: PartContent[];
}

export function getPaginatedPost(slug: string): PaginatedPost | null {
  try {
    const fullPath = path.join(docsDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { metadata, content } = parseFrontmatter(fileContents);

    // Split by Part headers: # Part <number>: <title>
    const partsRaw = content.split(/^(?=# Part\s+\d+)/gm);
    const parts: PartContent[] = [];

    partsRaw.forEach((partText, index) => {
      const trimmedText = partText.trim();
      if (!trimmedText) return;

      // Extract title from the first heading line
      const match = /^#\s+(Part\s+\d+:\s+.*?)$/m.exec(trimmedText);
      let title = "Introduction";
      let slugName = "introduction";

      if (match) {
        title = match[1];
        // Clean title for URL slug (e.g. "part-1")
        const partNumberMatch = /Part\s+(\d+)/i.exec(title);
        if (partNumberMatch) {
          slugName = `part-${partNumberMatch[1]}`;
        }
      } else {
        // If it's intro text before any "# Part"
        title = "Introduction";
        slugName = "introduction";
      }

      // Convert content to HTML
      const contentHtml = markdownToHtml(trimmedText);
      parts.push({
        title,
        slug: slugName,
        contentHtml,
      });
    });

    // If there is only one part and it was not matched as an intro/part, fall back
    if (parts.length === 0) {
      parts.push({
        title: "Introduction",
        slug: "introduction",
        contentHtml: markdownToHtml(content),
      });
    }

    return {
      slug,
      title: metadata.title || 'Untitled Post',
      date: metadata.date || '2026-06-28',
      excerpt: metadata.excerpt || '',
      author: metadata.author || 'Galat Family',
      kicker: metadata.kicker || 'ARTICLE',
      readTime: metadata.readTime || '3 min read',
      parts,
    };
  } catch (error) {
    console.error(`Error reading paginated post with slug ${slug}:`, error);
    return null;
  }
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

