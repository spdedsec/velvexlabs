export type PricingTier = {
  name: string;
  startingAt: string;
  description: string;
  includes: string[];
  slug: string;
};

export type PricingGroup = {
  title: string;
  tiers: PricingTier[];
};

export const PRICING_GROUPS: PricingGroup[] = [
  {
    title: "Identity",
    tiers: [
      {
        name: "Brand identity",
        slug: "brand-identity",
        startingAt: "$6,500",
        description:
          "A complete visual system for a business that needs to look credible now, not eventually.",
        includes: [
          "Logo system — primary, secondary, mark",
          "Color and type system",
          "Brand guidelines",
          "Core asset library",
        ],
      },
      {
        name: "Brand strategy + identity",
        slug: "brand-strategy-identity",
        startingAt: "$18,000",
        description:
          "For a rebrand where positioning is still an open question, not just the visuals.",
        includes: [
          "Positioning and messaging workshop",
          "Competitive and market research",
          "Full identity system",
          "Comprehensive brand guidelines",
        ],
      },
    ],
  },
  {
    title: "Design & development",
    tiers: [
      {
        name: "Landing page",
        slug: "landing-page",
        startingAt: "$3,200",
        description: "One focused page, built around a single decision.",
        includes: ["Single-page design and build", "Copywriting support", "Mobile-first responsive build"],
      },
      {
        name: "Business or portfolio website",
        slug: "business-website",
        startingAt: "$9,500",
        description: "A custom multi-page site — not a theme with your logo dropped in.",
        includes: [
          "5–12 custom-designed pages",
          "CMS for self-managed content",
          "SEO fundamentals built in",
          "Accessibility to WCAG AA",
        ],
      },
      {
        name: "E-commerce",
        slug: "ecommerce",
        startingAt: "$16,000",
        description: "A storefront designed around your actual product, not a generic template.",
        includes: [
          "Custom storefront design and build",
          "Checkout and payment integration",
          "Product and inventory management setup",
          "Performance budget enforced pre-launch",
        ],
      },
      {
        name: "Custom web application",
        slug: "custom-web-app",
        startingAt: "$24,000",
        description: "Purpose-built software for a specific workflow, not an adapted template.",
        includes: [
          "Product design and technical architecture",
          "Custom application build",
          "Third-party integrations as needed",
          "Testing across devices and browsers",
        ],
      },
    ],
  },
  {
    title: "Growth & care",
    tiers: [
      {
        name: "Performance & SEO audit",
        slug: "performance-seo-audit",
        startingAt: "$2,400",
        description: "A concrete, prioritized list of what's actually slowing a site down or hiding it from search.",
        includes: ["Core Web Vitals review", "Technical SEO audit", "Prioritized fix list with estimates"],
      },
      {
        name: "Ongoing maintenance",
        slug: "maintenance",
        startingAt: "$650/month",
        description: "Ongoing care after launch — updates, monitoring, and small changes without a new project each time.",
        includes: ["Security and dependency updates", "Uptime monitoring", "A monthly bank of small change requests"],
      },
    ],
  },
];
