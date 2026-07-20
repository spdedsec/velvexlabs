export type ProcessStep = {
  title: string;
  description: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Discovery",
    description:
      "We start with the business, not the design brief — what the project needs to accomplish, and for whom.",
  },
  {
    title: "Research",
    description:
      "Competitive review, audience context, and anything specific to your industry that should shape decisions later.",
  },
  {
    title: "Strategy",
    description:
      "Positioning and priorities set before any visual direction — the point where scope disagreements get resolved early.",
  },
  {
    title: "Wireframing",
    description:
      "Structure and content hierarchy, deliberately undesigned, so layout decisions get tested before visual polish disguises them.",
  },
  {
    title: "Design",
    description:
      "Full visual design system, applied consistently across every page and state, reviewed against the strategy set earlier.",
  },
  {
    title: "Development",
    description:
      "Production-ready code, built section by section, reviewed against the approved design at each stage.",
  },
  {
    title: "Testing",
    description:
      "Cross-browser, cross-device, accessibility, and performance checks — before launch, not discovered after.",
  },
  {
    title: "Launch",
    description:
      "Deployment handled carefully, with a rollback plan, not treated as an afterthought once development ends.",
  },
  {
    title: "Maintenance",
    description:
      "Ongoing support after launch — the studio doesn't disappear the day the site goes live.",
  },
];
