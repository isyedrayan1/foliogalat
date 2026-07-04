// Programmatic SEO - Tools and Comparisons Data
// This data powers comparison pages, tool directories, and guide pages

export interface Tool {
  id: string;
  name: string;
  category: string;
  description: string;
  url?: string;
  pros: string[];
  cons: string[];
  bestFor: string[];
  worstFor: string[];
  learningCurve: "Easy" | "Medium" | "Hard";
  ecosystemHealth: "Excellent" | "Good" | "Fair" | "Poor";
  communitySize: "Huge" | "Large" | "Medium" | "Small";
  setupTime: string;
  pricing: string;
  year: number;
}

export interface Comparison {
  toolA: string;
  toolB: string;
  winner?: string;
  comparison: {
    feature: string;
    toolA_score: number;
    toolB_score: number;
    toolA_comment: string;
    toolB_comment: string;
  }[];
  recommendation: string;
  useCaseA: string;
  useCaseB: string;
}

export const toolsDatabase: Tool[] = [
  // Frontend Frameworks
  {
    id: "nextjs",
    name: "Next.js",
    category: "javascript-frameworks",
    description: "The React Framework for Production. Full-stack capabilities with API routes, SSR, SSG, and incremental static regeneration.",
    url: "https://nextjs.org",
    pros: [
      "Built on React - largest ecosystem",
      "Full-stack (frontend + backend)",
      "Excellent developer experience",
      "Vercel first-party support",
      "Great documentation",
      "Image and font optimization",
      "Built-in analytics",
      "Incremental Static Regeneration (ISR)"
    ],
    cons: [
      "Requires Node.js knowledge",
      "Opinionated structure",
      "Learning curve for beginners",
      "Vendor lock-in risk (Vercel)",
      "Can be overkill for simple sites"
    ],
    bestFor: [
      "Indie developers",
      "Startups building MVPs",
      "Full-stack applications",
      "SEO-critical sites",
      "E-commerce platforms"
    ],
    worstFor: [
      "Simple static websites",
      "Non-React projects",
      "Lightweight blogs (overkill)",
      "Real-time games"
    ],
    learningCurve: "Medium",
    ecosystemHealth: "Excellent",
    communitySize: "Huge",
    setupTime: "5 minutes",
    pricing: "Free (self-hosted), Vercel (paid)",
    year: 2025
  },
  {
    id: "remix",
    name: "Remix",
    category: "javascript-frameworks",
    description: "Fullstack JavaScript framework with focus on web fundamentals and progressive enhancement.",
    url: "https://remix.run",
    pros: [
      "Progressive enhancement first",
      "Better forms handling",
      "Excellent TypeScript support",
      "Nested routing",
      "Server-side actions",
      "Less JavaScript by default",
      "Better performance metrics"
    ],
    cons: [
      "Smaller community than Next.js",
      "Fewer third-party integrations",
      "Steeper learning curve",
      "Less opinionated (more choices)",
      "Fewer hosting options"
    ],
    bestFor: [
      "Performance-critical applications",
      "Form-heavy applications",
      "Progressive web apps",
      "Teams that value fundamentals"
    ],
    worstFor: [
      "Quick prototypes",
      "Single-page apps",
      "Teams wanting all-in-one solutions"
    ],
    learningCurve: "Hard",
    ecosystemHealth: "Good",
    communitySize: "Medium",
    setupTime: "10 minutes",
    pricing: "Free (self-hosted), Remix Cloud (paid)",
    year: 2025
  },
  {
    id: "svelte",
    category: "javascript-frameworks",
    name: "SvelteKit",
    description: "Lightweight, compiler-based frontend framework with reactive programming. Minimal JavaScript sent to browser.",
    url: "https://kit.svelte.dev",
    pros: [
      "Least JavaScript sent to browser",
      "Compiler-based approach",
      "Extremely fast",
      "Less boilerplate code",
      "Great DX",
      "Smallest bundle sizes"
    ],
    cons: [
      "Smaller ecosystem",
      "Smaller community",
      "Fewer libraries support Svelte",
      "Harder to find developers",
      "Less mature than React"
    ],
    bestFor: [
      "Performance-obsessed teams",
      "Complex interactive UIs",
      "PWAs",
      "Static sites with interactivity"
    ],
    worstFor: [
      "Teams that need large ecosystem",
      "Hiring considerations",
      "Enterprise projects needing support"
    ],
    learningCurve: "Easy",
    ecosystemHealth: "Good",
    communitySize: "Small",
    setupTime: "3 minutes",
    pricing: "Free",
    year: 2025
  },

  // Backend / Databases
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "databases",
    description: "Powerful, open-source relational database with advanced features like JSONB, full-text search, and window functions.",
    url: "https://postgresql.org",
    pros: [
      "Extremely reliable",
      "Advanced features (JSONB, arrays, ranges)",
      "Full-text search built-in",
      "Window functions",
      "Transactions and ACID compliance",
      "Cost-effective",
      "Great for startups",
      "Excellent documentation"
    ],
    cons: [
      "More complex than SQLite",
      "Requires more infrastructure",
      "Steeper learning curve than NoSQL",
      "Not ideal for unstructured data",
      "Setup complexity"
    ],
    bestFor: [
      "Startups and indie projects",
      "Financial applications",
      "Data-heavy applications",
      "Teams valuing reliability",
      "Complex queries"
    ],
    worstFor: [
      "Highly unstructured data",
      "Real-time streaming (use specialized tools)",
      "Document-first applications"
    ],
    learningCurve: "Medium",
    ecosystemHealth: "Excellent",
    communitySize: "Huge",
    setupTime: "15 minutes",
    pricing: "Free (self-hosted), Neon/AWS (managed)",
    year: 2025
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "databases",
    description: "NoSQL document database. Flexible schema, BSON format, horizontal scalability.",
    url: "https://mongodb.com",
    pros: [
      "Flexible schema",
      "Horizontal scaling",
      "BSON format matches JSON",
      "Great for rapid prototyping",
      "Good for unstructured data",
      "Atlas cloud is excellent"
    ],
    cons: [
      "Less ACID guarantees",
      "Can lead to data inconsistency",
      "Larger disk usage",
      "Learning curve for queries",
      "Joining data is complex"
    ],
    bestFor: [
      "Early-stage startups (rapid iteration)",
      "Content management systems",
      "Mobile app backends",
      "Real-time analytics"
    ],
    worstFor: [
      "Financial systems",
      "Complex relational queries",
      "Cost-sensitive projects"
    ],
    learningCurve: "Easy",
    ecosystemHealth: "Excellent",
    communitySize: "Huge",
    setupTime: "2 minutes",
    pricing: "Free tier (Atlas), paid for scale",
    year: 2025
  },
  {
    id: "sqlite",
    name: "SQLite",
    category: "databases",
    description: "Lightweight, serverless, self-contained SQL database. Perfect for small to medium applications.",
    url: "https://sqlite.org",
    pros: [
      "Zero configuration",
      "Serverless",
      "Single file",
      "Incredible speed for local data",
      "Perfect for mobile apps",
      "No network overhead",
      "Perfect for indie developers"
    ],
    cons: [
      "Single-file limitation",
      "Poor concurrency (locking)",
      "Not ideal for large datasets",
      "Not meant for many concurrent users",
      "Limited to one machine"
    ],
    bestFor: [
      "Indie developers",
      "Small projects",
      "Desktop applications",
      "Mobile apps",
      "Local-first applications"
    ],
    worstFor: [
      "High-concurrency applications",
      "Multi-user applications",
      "Distributed systems",
      "Big data projects"
    ],
    learningCurve: "Easy",
    ecosystemHealth: "Excellent",
    communitySize: "Large",
    setupTime: "1 minute",
    pricing: "Free",
    year: 2025
  },

  // Languages
  {
    id: "typescript",
    name: "TypeScript",
    category: "languages",
    description: "Typed superset of JavaScript. Adds static typing and better tooling to JavaScript.",
    url: "https://typescriptlang.org",
    pros: [
      "Catches errors at compile time",
      "Better IDE support",
      "Self-documenting code",
      "Easier refactoring",
      "Great for large teams",
      "Growing ecosystem",
      "Industry standard adoption"
    ],
    cons: [
      "Setup complexity",
      "Build step required",
      "Learning curve",
      "Slower development (initially)",
      "More verbose code"
    ],
    bestFor: [
      "Large projects",
      "Teams of developers",
      "Long-term maintainability",
      "Critical applications",
      "Enterprise projects"
    ],
    worstFor: [
      "Quick prototypes",
      "Solo indie developers (early stage)",
      "Simple scripts",
      "Throwaway code"
    ],
    learningCurve: "Medium",
    ecosystemHealth: "Excellent",
    communitySize: "Huge",
    setupTime: "10 minutes",
    pricing: "Free",
    year: 2025
  },
  {
    id: "rust",
    name: "Rust",
    category: "languages",
    description: "Systems programming language with memory safety, concurrency, and zero-cost abstractions.",
    url: "https://rust-lang.org",
    pros: [
      "Memory safe without garbage collection",
      "Excellent performance",
      "Great for systems programming",
      "Fearless concurrency",
      "Excellent error messages",
      "Growing ecosystem",
      "Zero-cost abstractions"
    ],
    cons: [
      "Steep learning curve (borrow checker)",
      "Slower initial development",
      "Compilation time",
      "Smaller ecosystem than others",
      "Harder to find developers"
    ],
    bestFor: [
      "Performance-critical systems",
      "Backend services at scale",
      "CLI tools",
      "WebAssembly",
      "Systems programming"
    ],
    worstFor: [
      "Quick prototypes",
      "Web frontends",
      "Rapid iteration",
      "Teams unfamiliar with systems programming"
    ],
    learningCurve: "Hard",
    ecosystemHealth: "Excellent",
    communitySize: "Large",
    setupTime: "20 minutes",
    pricing: "Free",
    year: 2025
  },

  // Testing
  {
    id: "jest",
    name: "Jest",
    category: "testing",
    description: "Testing framework and test runner for JavaScript. Comes with assertions, mocking, and coverage.",
    url: "https://jestjs.io",
    pros: [
      "Zero configuration",
      "Great DX",
      "Fast test execution",
      "Built-in mocking",
      "Code coverage reports",
      "Excellent documentation",
      "Industry standard"
    ],
    cons: [
      "Slower than alternatives for large test suites",
      "Memory-heavy",
      "Snapshot testing can be problematic",
      "ESM support still evolving"
    ],
    bestFor: [
      "JavaScript projects",
      "React projects",
      "Team projects",
      "When DX matters more than speed"
    ],
    worstFor: [
      "Massive test suites (1000+ tests)",
      "Performance-critical testing",
      "Very complex mocking scenarios"
    ],
    learningCurve: "Easy",
    ecosystemHealth: "Excellent",
    communitySize: "Huge",
    setupTime: "5 minutes",
    pricing: "Free",
    year: 2025
  },
  {
    id: "vitest",
    name: "Vitest",
    category: "testing",
    description: "Fast unit testing framework with Jest-compatible API. Built on Vite.",
    url: "https://vitest.dev",
    pros: [
      "Super fast execution",
      "Jest-compatible API (easy migration)",
      "Vite-powered",
      "Great DX",
      "Active development",
      "Lower memory usage",
      "ESM native"
    ],
    cons: [
      "Newer, less adoption",
      "Smaller ecosystem",
      "Less documentation than Jest",
      "Requires Vite knowledge"
    ],
    bestFor: [
      "Vite projects",
      "Teams valuing speed",
      "Modern JavaScript stacks",
      "New projects"
    ],
    worstFor: [
      "Teams heavily invested in Jest ecosystem",
      "Legacy projects",
      "Matured test suites"
    ],
    learningCurve: "Easy",
    ecosystemHealth: "Good",
    communitySize: "Medium",
    setupTime: "5 minutes",
    pricing: "Free",
    year: 2025
  }
];

export const comparisonsDatabase: Comparison[] = [
  {
    toolA: "nextjs",
    toolB: "remix",
    winner: "nextjs",
    comparison: [
      {
        feature: "Learning Curve",
        toolA_score: 7,
        toolB_score: 5,
        toolA_comment: "More familiar to React developers",
        toolB_comment: "Requires understanding of fundamentals"
      },
      {
        feature: "Community & Ecosystem",
        toolA_score: 10,
        toolB_score: 7,
        toolA_comment: "Largest framework ecosystem",
        toolB_comment: "Growing but smaller community"
      },
      {
        feature: "Performance",
        toolA_score: 8,
        toolB_score: 9,
        toolA_comment: "Excellent, especially with optimization",
        toolB_comment: "Slight edge with less JavaScript"
      },
      {
        feature: "DX (Developer Experience)",
        toolA_score: 9,
        toolB_score: 9,
        toolA_comment: "Polished and well-documented",
        toolB_comment: "Excellent but requires more decisions"
      },
      {
        feature: "Hosting Options",
        toolA_score: 9,
        toolB_score: 6,
        toolA_comment: "Works everywhere, optimized on Vercel",
        toolB_comment: "Limited to specific platforms"
      }
    ],
    recommendation: "Choose Next.js if you want the safest bet with the largest ecosystem. Choose Remix if performance is critical and you value web fundamentals.",
    useCaseA: "Indie developer building their first startup",
    useCaseB: "Performance-critical app with complex forms"
  },
  {
    toolA: "postgresql",
    toolB: "mongodb",
    winner: "postgresql",
    comparison: [
      {
        feature: "Data Consistency",
        toolA_score: 10,
        toolB_score: 7,
        toolA_comment: "ACID transactions guarantee data integrity",
        toolB_comment: "Eventually consistent by default"
      },
      {
        feature: "Flexibility",
        toolA_score: 6,
        toolB_score: 10,
        toolA_comment: "Schema must be defined upfront",
        toolB_comment: "Flexible schema perfect for rapid prototyping"
      },
      {
        feature: "Cost",
        toolA_score: 9,
        toolB_score: 6,
        toolA_comment: "Free and cheap to operate at scale",
        toolB_comment: "Can get expensive with Atlas"
      },
      {
        feature: "Query Complexity",
        toolA_score: 10,
        toolB_score: 5,
        toolA_comment: "Powerful JOINs and complex queries",
        toolB_comment: "Complex joins are awkward"
      },
      {
        feature: "Setup Time",
        toolA_score: 5,
        toolB_score: 9,
        toolA_comment: "Requires infrastructure setup",
        toolB_comment: "Instant cloud database"
      }
    ],
    recommendation: "PostgreSQL for reliability and complex data relationships. MongoDB for rapid prototyping and unstructured data.",
    useCaseA: "Financial app storing critical transactions",
    useCaseB: "Early-stage startup needing to iterate fast"
  },
  {
    toolA: "typescript",
    toolB: "javascript",
    winner: "typescript",
    comparison: [
      {
        feature: "Error Prevention",
        toolA_score: 10,
        toolB_score: 3,
        toolA_comment: "Catches errors at compile time",
        toolB_comment: "Errors found at runtime"
      },
      {
        feature: "Development Speed",
        toolA_score: 8,
        toolB_score: 9,
        toolA_comment: "Fast once you know TypeScript",
        toolB_comment: "Fastest initially"
      },
      {
        feature: "Refactoring Safety",
        toolA_score: 10,
        toolB_score: 3,
        toolA_comment: "Type checking prevents breakage",
        toolB_comment: "Easy to break things accidentally"
      },
      {
        feature: "Team Collaboration",
        toolA_score: 9,
        toolB_score: 5,
        toolA_comment: "Self-documenting code",
        toolB_comment: "More testing needed"
      },
      {
        feature: "Learning Curve",
        toolA_score: 5,
        toolB_score: 9,
        toolA_comment: "Extra concepts to learn",
        toolB_comment: "Start coding immediately"
      }
    ],
    recommendation: "TypeScript for team projects and long-term maintenance. JavaScript for quick prototypes and solo developers.",
    useCaseA: "Enterprise application with 10+ engineers",
    useCaseB: "Weekend side project to learn web dev"
  },
  {
    toolA: "jest",
    toolB: "vitest",
    winner: "vitest",
    comparison: [
      {
        feature: "Speed",
        toolA_score: 6,
        toolB_score: 9,
        toolA_comment: "Good but slower for large suites",
        toolB_comment: "Significantly faster execution"
      },
      {
        feature: "API Compatibility",
        toolA_score: 10,
        toolB_score: 10,
        toolA_comment: "Industry standard API",
        toolB_comment: "Jest-compatible API"
      },
      {
        feature: "Ecosystem",
        toolA_score: 10,
        toolB_score: 7,
        toolA_comment: "Massive plugin ecosystem",
        toolB_comment: "Growing but smaller"
      },
      {
        feature: "ESM Support",
        toolA_score: 6,
        toolB_score: 9,
        toolA_comment: "Still improving",
        toolB_comment: "Native ESM support"
      },
      {
        feature: "Vite Integration",
        toolA_score: 3,
        toolB_score: 10,
        toolA_comment: "Separate setup required",
        toolB_comment: "Perfect Vite integration"
      }
    ],
    recommendation: "Jest for mature projects and teams heavily invested. Vitest for new projects with Vite.",
    useCaseA: "Large React project with hundreds of tests",
    useCaseB: "New Vite + React project needing fast tests"
  }
];

// Helper functions for programmatic SEO
export function getToolById(id: string): Tool | undefined {
  return toolsDatabase.find(tool => tool.id === id);
}

export function getToolsByCategory(category: string): Tool[] {
  return toolsDatabase.filter(tool => tool.category === category);
}

export function getComparison(toolAId: string, toolBId: string): Comparison | undefined {
  return comparisonsDatabase.find(
    comp => 
      (comp.toolA === toolAId && comp.toolB === toolBId) ||
      (comp.toolA === toolBId && comp.toolB === toolAId)
  );
}

export function getAllCategories(): string[] {
  return Array.from(new Set(toolsDatabase.map(tool => tool.category)));
}

export function getRelatedTools(toolId: string, limit = 3): Tool[] {
  const tool = getToolById(toolId);
  if (!tool) return [];
  
  return getToolsByCategory(tool.category)
    .filter(t => t.id !== toolId)
    .slice(0, limit);
}
