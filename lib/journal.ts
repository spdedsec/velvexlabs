export type JournalPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  content: string[];
};

export const JOURNAL_POSTS: JournalPost[] = [
  {
    slug: "design-development-one-discipline",
    title: "Why We Don't Separate Design From Development",
    excerpt:
      "Most studios hand a project from a design team to a development team. We think that handoff is where craft usually goes missing.",
    category: "Development",
    date: "2026-06-02",
    readingTime: "5 min",
    content: [
      "Every agency site says some version of \"we bridge design and development.\" It's become such a standard line that it's stopped meaning anything. So it's worth being specific about what we actually mean when we say we don't separate the two.",
      "On a typical project, a design team makes decisions in a tool like Figma, then hands a file to a development team who has to reconstruct those decisions in code. Somewhere in that reconstruction, small things get lost — an animation timing that felt right in a prototype but never gets specified precisely enough to survive the handoff, a spacing decision that made sense at one screen width but wasn't tested at the others, a hover state that existed in the designer's head but never made it into the file at all.",
      "None of this is anyone's fault, exactly. It's just what happens when the person making a decision and the person implementing it aren't the same person, and don't share full context on why a choice was made.",
      "We avoid it by keeping design and development inside the same small group of people, on every project. The person who decides how a section should animate on scroll is close enough to the code to know what's actually achievable at 60 frames a second on a mid-range phone — so the decision gets made correctly the first time, instead of getting simplified later when it turns out to be difficult to build.",
      "This isn't a claim that handoffs never work. Plenty of good work gets made that way. It's just a slower, leakier process than doing both under one roof, and we've found the difference shows up specifically in the small details — the ones that are hardest to specify in a file and easiest to lose in translation.",
      "It's also why our own site took the shape it did. The running-head navigation on our homepage wasn't designed first and then built; it was designed by figuring out what an IntersectionObserver could reliably track, then shaping the visual idea around that constraint from the start.",
    ],
  },
  {
    slug: "case-against-card-grids",
    title: "The Case Against Card-Grid Portfolios",
    excerpt:
      "The default portfolio format — a grid of equally sized project cards — treats a three-week project and a two-year one identically. That's a cost, not a neutral choice.",
    category: "Design",
    date: "2026-05-14",
    readingTime: "4 min",
    content: [
      "Open ten design studio portfolios and at least seven of them will use the same format: a grid of project thumbnails, uniform size, click through to a case study. It's become the default not because it's the best format, but because it's the easiest one to fill.",
      "The problem is what a uniform grid communicates before a visitor reads a word: every project here is roughly equivalent. That's rarely true. A two-year brand and product build and a three-week landing page are different achievements, and flattening them into identical thumbnails undersells the bigger one without meaning to.",
      "There's a second cost that's less obvious: grids reward volume. A portfolio with twenty small projects looks more \"active\" in a grid than a portfolio with four substantial ones, even when the four represent significantly more work and better outcomes.",
      "We built our own work page around a different assumption — a single continuous list, ordered rather than gridded, where each project gets a full case study rather than a thumbnail. It's a smaller-looking portfolio. We think that's the right trade for a studio whose actual position is doing fewer projects with more attention on each one.",
      "This isn't a universal argument against grids — they're the right choice when volume genuinely is the point, like a photographer showing range across many shoots. It's an argument for matching the format to what you're actually trying to prove, instead of defaulting to whatever the last twenty portfolios you looked at happened to use.",
    ],
  },
  {
    slug: "what-actually-slows-a-website",
    title: "What Actually Slows Down a Website (It's Rarely What You Think)",
    excerpt:
      "Teams often optimize the things that are easy to point at — image size, font count — while the actual bottleneck is somewhere less visible.",
    category: "Performance",
    date: "2026-04-22",
    readingTime: "6 min",
    content: [
      "When a site feels slow, the instinct is usually to compress the images and reduce the number of fonts. Both are reasonable things to check, and neither is usually the actual problem on a modern build.",
      "The more common culprit is JavaScript that runs before the page can respond to anything — large client-side bundles that block interactivity while the browser parses and executes code the visitor doesn't need yet. A page can finish painting visually and still feel unresponsive for a second or more after, because the main thread is busy with work that has nothing to do with what's on screen.",
      "Third-party scripts are a frequent, underestimated contributor here — analytics tags, chat widgets, embedded videos, each pulled in independently, each adding its own parsing and execution cost, often loaded with no regard for whether they're blocking anything more important.",
      "Layout shift is another one that doesn't show up in a casual glance at load time but wrecks the actual experience: images or ads loading in without reserved space, pushing content down mid-read. It doesn't slow the page down in a stopwatch sense, but it makes the page feel unstable and cheap.",
      "The fix, in most cases we've worked on, is less about compressing what's already there and more about being disciplined about what gets loaded in the first place — deferring anything not needed for the first interaction, reserving space for anything that loads asynchronously, and treating every added dependency as a cost that has to earn its place.",
      "None of this is exotic. It's mostly restraint, applied consistently, which is a less exciting answer than a clever optimization trick — but it's the one that actually holds up once a site has been live for a year and accumulated the usual additions.",
    ],
  },
];

export function getJournalPost(slug: string): JournalPost | undefined {
  return JOURNAL_POSTS.find((p) => p.slug === slug);
}
