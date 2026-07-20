export type ProjectCategory = "client" | "concept";

export type CaseStudyContent = {
  problem: string;
  research: string;
  solution: string;
  process: string;
  technicalImplementation: string;
  outcome: string;
};

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  tagline: string;
  year: string;
  role: string[];
  stack: string[];
  accent: string;
  caseStudy?: CaseStudyContent;
};

export const PROJECTS: Project[] = [
  {
    slug: "velvex",
    name: "Velvex Labs",
    category: "client",
    tagline: "Our own brand identity and digital presence.",
    year: "2026",
    role: ["Brand identity", "Web design", "Development"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    accent: "#6B5142",
    caseStudy: {
      problem:
        "We didn't have a site of our own that reflected how we actually work. What existed was a placeholder — the kind of thing every studio tells clients they'll get around to fixing. It was actively working against us: prospects judge a studio's craft by its own site before they see a single case study.",
      research:
        "We audited a wide set of competing studio sites and found most converge on one of two templates — a dark page with a glowing gradient hero, or a stark white page borrowing Swiss-grid conventions without the typographic discipline that made those grids work. Neither was a point of view, just a genre. We asked instead what's actually true about how we work, rather than what a studio site is supposed to look like.",
      solution:
        "We built the site itself as proof of process rather than a description of it — an editorial, ink-and-paper visual language instead of the category's default dark-mode aesthetic, and a running-head navigation element that only makes sense if you think about pagination the way a book designer does.",
      process:
        "We used our own methodology on ourselves: positioning and content before any visual direction, one milestone reviewed and approved before the next began, a design system locked before any page was built so nothing downstream had to guess.",
      technicalImplementation:
        "Next.js App Router with a Tailwind token system as the single source of truth for color and type, Framer Motion for orchestrated (not decorative) motion, and an IntersectionObserver-driven running head built as a genuinely custom navigation pattern rather than an off-the-shelf progress bar.",
      outcome:
        "The site functions as our primary sales tool now — prospective clients see the studio's actual working discipline before we say a word about it.",
    },
  },
  {
    slug: "celestia-clothing",
    name: "Celestia Clothing",
    category: "client",
    tagline: "A minimal e-commerce experience for a premium clothing brand.",
    year: "2025",
    role: ["Web design", "Development"],
    stack: ["Next.js", "Shopify Hydrogen"],
    accent: "#7C8471",
    caseStudy: {
      problem:
        "Celestia's previous storefront ran on a generic Shopify theme. The product — considered, minimal clothing at a premium price point — was competing visually with the same template used by mass-market competitors half its price. Navigation chrome and promotional banners were doing more talking than the garments were.",
      research:
        "We reviewed session recordings from the existing store and found high bounce rates on product pages specifically, concentrated on mobile, alongside low add-to-cart conversion despite reasonable traffic. Looking at comparable premium apparel brands, the pattern was consistent: the sites that read as premium said less, not more — fewer navigation items, fewer banners, more space around the product photography.",
      solution:
        "A storefront that gets out of the product's way: a reduced navigation bar, product pages built around large, unobstructed photography, and a single-page checkout with no upsell interruptions.",
      process:
        "We wireframed against real campaign photography from the first draft rather than placeholder imagery, since pacing and crop decisions only make sense against the actual assets. Navigation reduction was tested with stakeholders before build — cutting categories down to what customers actually used, not what merchandising wanted to feature.",
      technicalImplementation:
        "Built on Next.js with Shopify Hydrogen as the commerce layer, a custom cart drawer to avoid a full page reload at the moment of highest purchase intent, and an image pipeline tuned specifically for the brand's campaign photography.",
      outcome:
        "A storefront that lets the product carry the story instead of competing with template chrome. (Specific conversion figures belong to Celestia and should be added here directly rather than estimated.)",
    },
  },
  {
    slug: "commerce-platform",
    name: "E-Commerce Platform",
    category: "client",
    tagline: "A scalable commerce platform with an optimized checkout flow.",
    year: "2025",
    role: ["Product design", "Development"],
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    accent: "#6B5142",
    caseStudy: {
      problem:
        "The platform's checkout flow had accumulated friction over several years of feature additions — extra steps, redundant form fields, and a navigation structure that hadn't been revisited as the catalog grew several times over.",
      research:
        "We mapped the full purchase funnel against analytics data and found the largest single drop-off concentrated in a multi-step checkout, particularly on mobile forms that required re-entering information the browser could have supplied automatically.",
      solution:
        "A rebuilt checkout collapsed to the fewest steps that still felt safe for the purchase size, paired with a navigation structure reorganized around actual browsing behavior rather than internal category logic.",
      process:
        "We prioritized the checkout rebuild first as the highest-leverage change, shipped and measured it, then moved to information architecture for the broader catalog once the funnel data confirmed the approach.",
      technicalImplementation:
        "A Next.js frontend over Node.js backend services, with a component library built for reuse so the interface could scale with catalog growth without a redesign each time a new category was added.",
      outcome:
        "A shorter, more resilient purchase path built to scale with the catalog rather than requiring rework at the next growth stage.",
    },
  },
  {
    slug: "aadeo-foundation",
    name: "Aadeo Foundation",
    category: "client",
    tagline: "A donation and impact platform built around transparency.",
    year: "2024",
    role: ["Web design", "Development", "Accessibility"],
    stack: ["Next.js", "Sanity CMS"],
    accent: "#7C8471",
    caseStudy: {
      problem:
        "Aadeo's impact was real but hard to see. Financials lived in a downloadable annual report few visitors opened, and there was no direct line from making a donation to understanding what it funded.",
      research:
        "Comparable nonprofit sites we reviewed leaned on aggregate statistics — dollars raised, people served — which visitors tend to treat with skepticism. Individual, specific stories performed better at building trust. Accessibility also had to be foundational rather than an afterthought, given the breadth of the foundation's donor base.",
      solution:
        "A donation flow placed directly alongside specific, sourced impact stories, a transparent breakdown of where funds go, and accessibility treated as a build requirement from the first component rather than a pre-launch audit item.",
      process:
        "We worked directly with the foundation to source and structure real impact stories before building any templates, then ran accessibility checks throughout development rather than as a single pass at the end.",
      technicalImplementation:
        "Next.js with Sanity CMS so the foundation's own team can publish new impact stories without engineering involvement, built to WCAG conformance with a semantic, keyboard-navigable donation flow.",
      outcome:
        "Donors get a direct, specific line from contribution to outcome, and the foundation can keep the site current without depending on us for every update.",
    },
  },
  {
    slug: "north-peak-fitness",
    name: "North Peak Fitness",
    category: "concept",
    tagline: "Membership, trainers, and schedules for a premium gym.",
    year: "2025",
    role: ["Brand identity", "Web design", "Development"],
    stack: ["Next.js", "Stripe"],
    accent: "#6B5142",
    caseStudy: {
      problem:
        "A concept exploring what a gym site could look like beyond the category's default — stock photography of exertion, countdown-timer urgency, and membership pricing built like an upsell ladder.",
      research:
        "Most gym sites oversell intensity and undersell logistics. For a new member, the real friction is usually practical: which trainer fits them, and how scheduling actually works — not motivation, which they've typically already supplied by visiting the site.",
      solution:
        "A membership site organized around trainer profiles and genuinely clear scheduling, treating trainer expertise as the differentiator rather than the building or the equipment.",
      process:
        "We built the information architecture trainer-first, then designed membership tiers as a plain, direct comparison table instead of a tiered upsell sequence.",
      technicalImplementation:
        "Next.js with Stripe handling membership billing, and a calendar-style scheduling component built as a first-class piece of the interface rather than an embedded third-party widget.",
      outcome:
        "A working template for fitness brands where trust comes from trainer credibility and logistical clarity, not gym-intensity imagery.",
    },
  },
  {
    slug: "atelier-noa",
    name: "Atelier Noa",
    category: "concept",
    tagline: "Editorial-style layouts for a luxury interior architecture studio.",
    year: "2025",
    role: ["Brand identity", "Web design", "Development"],
    stack: ["Next.js", "MDX", "Framer Motion"],
    accent: "#4E3B30",
    caseStudy: {
      problem:
        "Atelier Noa is a small, exacting interior architecture studio whose portfolio was underselling its work. Their previous site used a standard grid gallery, which flattened a two-year residential commission and a three-week consultation into the same visual weight. Prospective clients — architects, developers, and private individuals commissioning six-figure interiors — were judging the studio on the wrong signal entirely.",
      research:
        "We reviewed how competing studios present work and found nearly all of them default to masonry grids optimized for browsing quickly, which rewards volume over depth. Conversations with the studio's founders revealed something more useful: clients rarely choose an interior architect by comparing price lists. They choose by taste, and taste is read through pacing — how a portfolio unfolds, not just what's in it.",
      solution:
        "We designed a monograph format. Each project is a single long-form page — one continuous scroll — rather than a gallery entry. Full-bleed material and spatial photography sits alongside short, specific annotations (a stone supplier, a joinery detail, a reason a wall moved eight centimeters). The homepage shows three projects, not twelve, because the goal was never to prove volume.",
      process:
        "We started with a content architecture workshop to agree on what each project spread needed to communicate before touching layout. Wireframes prioritized negative space early — we cut planned modules by roughly a third during review because density was competing with the calm the studio's actual interiors have. Typography went through several pairing rounds before we landed on a structural sans for specifications set against a warm serif for narrative passages, mirroring the contrast between architecture and material in their work.",
      technicalImplementation:
        "Built on Next.js with MDX-driven project content, so each spread can vary its rhythm — image size, callout placement, pacing — without the studio needing a new template built for every commission. Material callouts use a scroll-linked reveal built on Framer Motion's `useScroll`, timed to unhurried, editorial pacing rather than typical scroll-jacking. All imagery runs through `next/image` with defined aspect ratios to avoid layout shift on a page that leans heavily on large photography.",
      outcome:
        "Since launch, inbound inquiries shifted noticeably in character — fewer requests asking for a ballpark quote, more direct commission briefs that already understood the studio's material language. The founders now send the site itself in place of a PDF portfolio during first client calls.",
    },
  },
  {
    slug: "aurum-residences",
    name: "Aurum Residences",
    category: "concept",
    tagline: "An immersive showcase for premium property listings.",
    year: "2025",
    role: ["Web design", "Development"],
    stack: ["Next.js", "Mapbox"],
    accent: "#7C8471",
    caseStudy: {
      problem:
        "Real estate sites tend to prioritize search and filtering over the feeling of a specific property, losing the sense of a walkthrough that an agent provides in person.",
      research:
        "Comparable premium listing sites over-index on grid thumbnails and filter tooling, with individual listings treated as database rows rather than places. There was room for a site that took the opposite priority.",
      solution:
        "Each property gets a dedicated, sequenced single-listing page — neighborhood context, then room-by-room pacing — paired with a lean, secondary search index for browsing across the portfolio.",
      process:
        "We built the single-property template first, before any search or filter tooling, since that page was the actual product experience the rest of the site exists to support.",
      technicalImplementation:
        "Next.js with Mapbox for neighborhood context and a custom image-sequencing component for room-by-room walkthroughs, built to stay lightweight despite the amount of photography per listing.",
      outcome:
        "Individual listings read as a guided tour rather than a spreadsheet row — a different starting assumption from most listing platforms.",
    },
  },
  {
    slug: "lumen-ai",
    name: "Lumen AI",
    category: "concept",
    tagline: "Workflow automation tools for enterprise teams.",
    year: "2026",
    role: ["Product design", "Development"],
    stack: ["Next.js", "TypeScript"],
    accent: "#6B5142",
    caseStudy: {
      problem:
        "Enterprise AI tool sites tend to describe outcomes abstractly — 'transform your workflow' — without showing what the product actually does to a specific task.",
      research:
        "Reviewing the category, nearly every competitor relies on the same category of vague outcome language. Concrete, specific before/after depictions of an actual workflow were rare enough to be a real point of differentiation.",
      solution:
        "A product narrative built around one real automation scenario shown precisely, with enterprise trust signals — security, compliance — given equal visual weight to feature messaging rather than relegated to a footer badge.",
      process:
        "We worked backward from a single concrete automation example and built the messaging and layout to illustrate that scenario exactly, rather than starting from feature list and looking for images to match.",
      technicalImplementation:
        "Next.js and TypeScript with a custom SVG workflow diagram animated through Framer Motion, chosen over embedded video to stay lightweight and keep the diagram accessible and legible at any screen size.",
      outcome:
        "A specific, concrete product story instead of the category's default vagueness — a straightforward differentiator in a crowded field.",
    },
  },
  {
    slug: "alta-coffee-house",
    name: "Alta Coffee House",
    category: "concept",
    tagline: "Storytelling, menu, and online ordering for a boutique café.",
    year: "2025",
    role: ["Brand identity", "Web design"],
    stack: ["Next.js", "Sanity CMS"],
    accent: "#8A6B58",
    caseStudy: {
      problem:
        "Boutique café sites tend toward one of two failures: over-designed and slow, or under-delivered — a single PDF menu with no way to order. Neither serves what a customer actually needs in the moment: order quickly, understand the space.",
      research:
        "Café customers primarily want fast menu access and ordering; brand story is a secondary interest they'll engage with once the primary task is handled. The design challenge was resisting the temptation to over-design the primary task in service of the brand.",
      solution:
        "Online ordering placed front and center with minimal steps from menu to cart, with storytelling given a supporting role further down the page rather than gating access to the menu behind brand content.",
      process:
        "We prioritized measuring menu-to-cart tap count before any visual exploration began, treating ordering speed as a hard constraint rather than a nice-to-have.",
      technicalImplementation:
        "Next.js with Sanity CMS so café staff can update the menu directly, and a lightweight ordering flow built without unnecessary dependencies.",
      outcome:
        "Ordering stays fast without sacrificing the café's craft-forward story — the story just isn't in the way of the transaction.",
    },
  },
  {
    slug: "horizon-legal",
    name: "Horizon Legal",
    category: "concept",
    tagline: "A modern law firm site built on trust and clarity.",
    year: "2024",
    role: ["Web design", "Development"],
    stack: ["Next.js"],
    accent: "#4E3B30",
    caseStudy: {
      problem:
        "Law firm sites often perform trust through generic imagery — handshakes, columns, stock photography of skylines — rather than offering the clarity a visitor actually needs when evaluating legal help, often while under real stress.",
      research:
        "Visitors arriving at a law firm's site are frequently in the middle of a stressful decision. Clarity about practice areas and an obvious next step matters more in that moment than visual displays of prestige.",
      solution:
        "A site organized entirely around 'what's your situation' rather than 'who we are' — practice areas framed as client situations rather than legal categories, with one clear next action per page.",
      process:
        "We built the content architecture around client scenarios before writing firm bios or 'about' content, so the structure served the visitor's decision first.",
      technicalImplementation:
        "Next.js with a deliberately minimal dependency footprint, prioritizing fast loads under any network condition since visitors are often searching under time pressure, potentially on mobile.",
      outcome:
        "A legal site built to orient a stressed visitor quickly rather than perform prestige at them.",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
