import { Metadata } from "next";

/**
 * SEO Helper Utilities for Galat Family
 * Used for generating consistent metadata across programmatic pages
 */

export const siteConfig = {
  name: "Galat Family",
  url: "https://galatfamily.in",
  description: "We build software projects and share guides, tips, and tutorials for developers.",
  image: "/galatfamily.jpg",
  creators: ["Syed Rayan", "Syed Naseer", "Shaik Ayub Hussain", "Shaik Aslam Hussain"],
  email: "contact.galatfamily@gmail.com",
};

/**
 * Generate comparison page metadata
 * Used for /compare/[toolA]-vs-[toolB]/ pages
 */
export function generateComparisonMetadata(
  toolAName: string,
  toolBName: string,
  shortDescription: string
): Metadata {
  const title = `${toolAName} vs ${toolBName} - Detailed Comparison 2026`;
  const description = `Comprehensive comparison between ${toolAName} and ${toolBName}. ${shortDescription}`;
  const url = `${siteConfig.url}/compare/${toolAName.toLowerCase()}-vs-${toolBName.toLowerCase()}/`;

  return {
    title,
    description,
    keywords: [
      `${toolAName} vs ${toolBName}`,
      `${toolAName} alternative`,
      `${toolBName} alternative`,
      `compare ${toolAName} ${toolBName}`,
      "comparison"
    ],
    openGraph: {
      title,
      description,
      type: "article",
      url,
      images: [
        {
          url: siteConfig.image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.image],
    },
  };
}

/**
 * Generate tool detail page metadata
 * Used for /tools/[category]/[toolName]/ pages
 */
export function generateToolMetadata(
  toolName: string,
  category: string,
  description: string,
  pros: string[],
  cons: string[]
): Metadata {
  const title = `${toolName} - Features, Pros, Cons & Guide 2026`;
  const fullDescription = `${description} Learn ${toolName} pros (${pros.slice(0, 2).join(", ")}), cons, best use cases, and whether it's right for your project.`;
  const url = `${siteConfig.url}/tools/${category}/${toolName.toLowerCase().replace(/\s+/g, "-")}/`;

  return {
    title,
    description: fullDescription.substring(0, 160),
    keywords: [
      toolName,
      `${toolName} guide`,
      `${toolName} tutorial`,
      `${toolName} pros and cons`,
      `should i use ${toolName}`,
      category,
    ],
    openGraph: {
      title,
      description: fullDescription.substring(0, 160),
      type: "article",
      url,
      images: [
        {
          url: siteConfig.image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: fullDescription.substring(0, 160),
      images: [siteConfig.image],
    },
  };
}

/**
 * Generate guide page metadata
 * Used for /guides/[topic]/ pages
 */
export function generateGuideMetadata(
  guideName: string,
  description: string,
  keywords: string[]
): Metadata {
  const title = `${guideName} - Complete Guide & Best Practices 2026`;
  const url = `${siteConfig.url}/guides/${guideName.toLowerCase().replace(/\s+/g, "-")}/`;

  return {
    title,
    description,
    keywords: [guideName, ...keywords],
    openGraph: {
      title,
      description,
      type: "article",
      url,
      images: [
        {
          url: siteConfig.image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.image],
    },
  };
}

/**
 * Generate article/blog metadata
 */
export function generateArticleMetadata(
  title: string,
  description: string,
  slug: string,
  publishedDate?: Date,
  updatedDate?: Date,
  authors?: string[]
): Metadata {
  const url = `${siteConfig.url}/blogs/${slug}/`;

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url,
      publishedTime: publishedDate?.toISOString(),
      modifiedTime: updatedDate?.toISOString(),
      authors: authors || siteConfig.creators,
      images: [
        {
          url: siteConfig.image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.image],
    },
  };
}

/**
 * Generate category/hub page metadata
 */
export function generateHubMetadata(
  hubName: string,
  description: string,
  itemCount: number
): Metadata {
  const title = `${hubName} - ${itemCount}+ Guides & Comparisons`;
  const url = `${siteConfig.url}/${hubName.toLowerCase().replace(/\s+/g, "-")}/`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url,
      images: [
        {
          url: siteConfig.image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.image],
    },
  };
}

/**
 * Generate breadcrumb JSON-LD schema
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate comparison page schema
 */
export function generateComparisonSchema(
  toolAName: string,
  toolBName: string,
  winner?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "ComparisonChart",
    name: `${toolAName} vs ${toolBName}`,
    itemReviewed: [
      {
        "@type": "Product",
        name: toolAName,
      },
      {
        "@type": "Product",
        name: toolBName,
      },
    ],
    winner: winner
      ? {
          "@type": "Product",
          name: winner,
        }
      : undefined,
  };
}

/**
 * Generate product/tool schema
 */
export function generateProductSchema(
  name: string,
  description: string,
  url: string,
  pros: string[],
  cons: string[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url,
    review: [
      {
        "@type": "Review",
        name: "Pros",
        reviewBody: pros.join(". "),
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4.5",
        },
      },
      {
        "@type": "Review",
        name: "Cons",
        reviewBody: cons.join(". "),
        reviewRating: {
          "@type": "Rating",
          ratingValue: "3",
        },
      },
    ],
  };
}

/**
 * Format slug from title
 */
export function formatSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "")
    .replace(/-+/g, "-");
}

/**
 * Truncate description for meta tags (max 160 chars)
 */
export function truncateDescription(description: string, max = 160): string {
  if (description.length <= max) return description;
  return description.substring(0, max - 3) + "...";
}

/**
 * Generate internal link suggestions for related content
 */
export function generateRelatedLinks(
  currentToolId: string,
  category: string,
  maxLinks = 5
): Array<{ title: string; href: string }> {
  // This would be enhanced with real data from your tools database
  return [
    { title: "Compare with alternatives", href: `/compare/${currentToolId}-vs-alternative/` },
    { title: `More ${category} tools`, href: `/tools/${category}/` },
    { title: "See all guides", href: "/guides/" },
  ];
}

/**
 * Generate canonical URL
 */
export function getCanonicalUrl(path: string): string {
  return `${siteConfig.url}${path}`;
}

/**
 * Escape HTML for safe rendering
 */
export function escapeHtml(text: string): string {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Generate structured data for FAQ pages
 */
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * SEO keywords by category for internal linking hints
 */
export const keywordsByCategory = {
  "javascript-frameworks": [
    "frontend framework",
    "React alternative",
    "web development",
    "SPA framework",
  ],
  databases: [
    "database system",
    "SQL database",
    "data storage",
    "backend database",
  ],
  languages: [
    "programming language",
    "systems programming",
    "web development language",
    "backend language",
  ],
  testing: [
    "testing framework",
    "unit testing",
    "test runner",
    "JavaScript testing",
  ],
};
