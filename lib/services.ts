export type Service = {
  name: string;
  description: string;
};

export type ServiceGroup = {
  title: string;
  services: Service[];
};

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    title: "Identity",
    services: [
      {
        name: "Branding",
        description:
          "Naming, visual identity, and the systems that keep both consistent as a business grows past its first version.",
      },
    ],
  },
  {
    title: "Design & development",
    services: [
      {
        name: "Website design",
        description: "Interface and interaction design, from structure through final detail.",
      },
      {
        name: "Website development",
        description: "Production-ready builds — no template shortcuts, no unfinished edges.",
      },
      {
        name: "Custom web applications",
        description: "Tools built around a specific workflow, not adapted from a generic template.",
      },
      {
        name: "Portfolio websites",
        description: "Sites built to make the work itself the argument.",
      },
      {
        name: "Business websites",
        description: "Clear, credible sites for teams whose site is often a prospect's first impression.",
      },
      {
        name: "Landing pages",
        description: "Focused single-purpose pages built around one decision, not ten.",
      },
      {
        name: "E-commerce",
        description: "Storefronts designed so the product does the selling, not the interface.",
      },
      {
        name: "Website redesign",
        description: "Rebuilding what exists without losing what's already working for you.",
      },
    ],
  },
  {
    title: "Growth & care",
    services: [
      {
        name: "SEO fundamentals",
        description: "Structure, metadata, and performance work that search engines can actually read.",
      },
      {
        name: "Performance optimization",
        description: "Measured, specific improvements to load time and responsiveness — not vague speed claims.",
      },
      {
        name: "Maintenance",
        description: "Ongoing care after launch, so the site stays current instead of quietly decaying.",
      },
      {
        name: "Deployment",
        description: "Getting a finished build live, reliably, without last-minute surprises.",
      },
    ],
  },
  {
    title: "Emerging",
    services: [
      {
        name: "AI integration",
        description: "Adding AI-driven features where they solve a real workflow problem, not as decoration.",
      },
      {
        name: "Automation",
        description: "Removing repetitive manual steps from a process that already works otherwise.",
      },
    ],
  },
];
