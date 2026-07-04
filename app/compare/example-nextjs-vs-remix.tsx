/**
 * EXAMPLE: Comparison Page Template
 * This shows how to create programmatic SEO pages for tool comparisons
 * 
 * To use this as a dynamic page:
 * 1. Create app/compare/[slug]/page.tsx
 * 2. Use getComparison() from data/tools.ts
 * 3. Generate metadata and content dynamically
 */

import { Metadata } from "next";
import { generateComparisonMetadata } from "@/lib/seo";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = generateComparisonMetadata(
  "Next.js",
  "Remix",
  "Learn the key differences in performance, DX, ecosystem, and when to use each."
);

export default function ComparisonPage() {
  const toolA = {
    name: "Next.js",
    description: "Full-stack React framework with best-in-class DX",
    pros: [
      "Largest React ecosystem",
      "Built-in optimization (images, fonts)",
      "Vercel first-party support",
      "Great documentation",
      "Incremental Static Regeneration (ISR)",
      "API routes and backend capabilities",
    ],
    cons: [
      "Requires Node.js knowledge",
      "Opinionated structure can feel restrictive",
      "Slight vendor lock-in with Vercel",
      "Can be overkill for simple sites",
      "Learning curve for beginners",
    ],
    url: "https://nextjs.org",
    learningCurve: "Medium",
    setupTime: "5 minutes",
  };

  const toolB = {
    name: "Remix",
    description: "Fullstack JavaScript framework built on web fundamentals",
    pros: [
      "Progressive enhancement first",
      "Better handling of forms",
      "Less JavaScript by default",
      "Excellent TypeScript support",
      "Nested routing",
      "Server-side actions",
    ],
    cons: [
      "Smaller community than Next.js",
      "Fewer third-party integrations",
      "More learning required for web fundamentals",
      "Less documentation",
      "Fewer hosting options",
    ],
    url: "https://remix.run",
    learningCurve: "Hard",
    setupTime: "10 minutes",
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
          {toolA.name} vs {toolB.name}
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Comprehensive comparison between two powerful fullstack frameworks.
          Learn the key differences, pros, cons, and which is better for your project.
        </p>

        <div className="flex gap-4 flex-col md:flex-row">
          <a
            href={toolA.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-signature text-black rounded font-medium flex items-center gap-2 hover:opacity-90 transition"
          >
            Visit {toolA.name} <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href={toolB.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-signature text-signature rounded font-medium flex items-center gap-2 hover:bg-signature hover:text-black transition"
          >
            Visit {toolB.name} <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Quick Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm md:text-base">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-bold">Aspect</th>
                <th className="text-left py-3 px-4 font-bold">{toolA.name}</th>
                <th className="text-left py-3 px-4 font-bold">{toolB.name}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4">Learning Curve</td>
                <td className="py-3 px-4">{toolA.learningCurve}</td>
                <td className="py-3 px-4">{toolB.learningCurve}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4">Setup Time</td>
                <td className="py-3 px-4">{toolA.setupTime}</td>
                <td className="py-3 px-4">{toolB.setupTime}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4">Community Size</td>
                <td className="py-3 px-4">Huge</td>
                <td className="py-3 px-4">Medium</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4">Documentation</td>
                <td className="py-3 px-4">Excellent</td>
                <td className="py-3 px-4">Good</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Best For</td>
                <td className="py-3 px-4">Most use cases</td>
                <td className="py-3 px-4">Performance-critical</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed Pros/Cons */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Detailed Comparison</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Tool A */}
          <div>
            <h3 className="text-xl font-bold mb-4">{toolA.name}</h3>
            <p className="text-muted-foreground mb-6">{toolA.description}</p>

            <div className="mb-8">
              <h4 className="font-bold mb-3 text-green-500">Pros</h4>
              <ul className="space-y-2">
                {toolA.pros.map((pro, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-green-500 font-bold">+</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3 text-red-500">Cons</h4>
              <ul className="space-y-2">
                {toolA.cons.map((con, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-red-500 font-bold">-</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tool B */}
          <div>
            <h3 className="text-xl font-bold mb-4">{toolB.name}</h3>
            <p className="text-muted-foreground mb-6">{toolB.description}</p>

            <div className="mb-8">
              <h4 className="font-bold mb-3 text-green-500">Pros</h4>
              <ul className="space-y-2">
                {toolB.pros.map((pro, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-green-500 font-bold">+</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3 text-red-500">Cons</h4>
              <ul className="space-y-2">
                {toolB.cons.map((con, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-red-500 font-bold">-</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendation Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto border-t border-border">
        <h2 className="text-2xl font-bold mb-8">Our Recommendation</h2>
        <div className="space-y-6">
          <div className="p-6 bg-muted rounded-lg border border-border">
            <h3 className="font-bold mb-2">Use {toolA.name} if:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• You're building your first fullstack app</li>
              <li>• You want the largest ecosystem and most resources</li>
              <li>• You prefer more opinionated, guided development</li>
              <li>• You need the best DX for productivity</li>
              <li>• You want Vercel&apos;s first-party optimization</li>
            </ul>
          </div>

          <div className="p-6 bg-muted rounded-lg border border-border">
            <h3 className="font-bold mb-2">Use {toolB.name} if:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Performance is your top priority</li>
              <li>• You want to master web fundamentals</li>
              <li>• You&apos;re building complex form-heavy applications</li>
              <li>• You prefer minimal JavaScript sent to the browser</li>
              <li>• You value progressive enhancement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto border-t border-border">
        <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "Can I switch from Next.js to Remix?",
              a: "Yes, both are React frameworks. Expect some migration effort for routing and data loading patterns.",
            },
            {
              q: "Which is faster?",
              a: "Remix sends less JavaScript by default, but Next.js with optimization can be just as fast. It depends on your implementation.",
            },
            {
              q: "Which has better community support?",
              a: "Next.js has a significantly larger community, more third-party integrations, and more Stack Overflow answers.",
            },
            {
              q: "Which should I learn first?",
              a: "Next.js is generally easier for beginners. Remix is great for learning web fundamentals.",
            },
          ].map((faq, i) => (
            <div key={i} className="border-b border-border pb-6 last:border-0">
              <h3 className="font-bold mb-2">{faq.q}</h3>
              <p className="text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16 px-6 max-w-4xl mx-auto border-t border-border">
        <h2 className="text-2xl font-bold mb-8">Related Comparisons</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: "Next.js vs SvelteKit", href: "/compare/nextjs-vs-sveltekit/" },
            { title: "Remix vs Astro", href: "/compare/remix-vs-astro/" },
            { title: "TypeScript vs JavaScript", href: "/compare/typescript-vs-javascript/" },
            { title: "React vs Vue", href: "/compare/react-vs-vue/" },
          ].map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="p-4 border border-border rounded hover:bg-muted transition"
            >
              {link.title} <ArrowUpRight className="inline w-4 h-4 ml-1" />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
