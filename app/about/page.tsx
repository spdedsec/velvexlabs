import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Velvex Labs is a small studio built around craftsmanship and thoughtful engineering.",
};

const PRINCIPLES = [
  {
    title: "Quality over quantity",
    description:
      "We take on fewer projects than we could, because attention is the actual resource we're selling.",
  },
  {
    title: "Design and engineering, together",
    description:
      "The same people who make a decision also have to build it — no handoff where intent gets lost.",
  },
  {
    title: "Simplicity is a discipline",
    description:
      "Restraint takes more work than adding another feature. We'd rather do the work.",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 pb-32 pt-16 lg:px-0 lg:pt-24">
      <p className="font-mono text-caption uppercase tracking-wider text-sage">
        About
      </p>
      <h1 className="mt-4 max-w-prose text-display-lg text-ink">
        A studio still small enough to obsess over each project.
      </h1>

      <div className="mt-10 max-w-prose space-y-5 text-body-lg text-ink/70">
        <p>
          Velvex Labs is a young studio, and we&apos;re small on purpose.
          Past a certain size, quality and headcount start pulling against
          each other — more hands usually means more handoffs, and handoffs
          are where craft quietly leaks out of a project.
        </p>
        <p>
          We work across branding, design, and development, and we treat
          those as one discipline rather than three departments. A decision
          about layout is also a decision about performance. A decision
          about typography is also a decision about load time. Splitting
          those into separate phases, handled by separate people, tends to
          produce work where neither half is quite right.
        </p>
        <p>
          We&apos;d rather stay small and take fewer projects than grow past
          the point where we can still pay attention to all of them.
        </p>
      </div>

      <div className="mt-20 border-t border-rule pt-12">
        <h2 className="font-display text-2xl text-ink">What we believe</h2>
        <ul className="mt-8 divide-y divide-rule border-t border-rule">
          {PRINCIPLES.map((principle) => (
            <li key={principle.title} className="py-6">
              <p className="font-display text-xl text-ink">{principle.title}</p>
              <p className="mt-2 max-w-prose text-body text-ink/70">
                {principle.description}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16 border-t border-rule pt-12">
        <Link
          href="/contact"
          className="inline-flex items-center border border-ink px-6 py-3 font-mono text-caption uppercase tracking-wider text-ink transition-colors duration-200 hover:bg-ink hover:text-paper"
        >
          Get in touch
        </Link>
      </div>
    </main>
  );
}
