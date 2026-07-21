import type { Metadata } from "next";
import Link from "next/link";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies from Velvex Labs — brand identity, web design, and development.",
};

export default function WorkIndexPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 pb-32 pt-16 lg:px-0 lg:pt-24">
      <p className="font-mono text-caption uppercase tracking-wider text-sage">
        Work
      </p>
      <h1 className="mt-4 max-w-prose text-display-lg text-ink">
        Client work, and a few studies we set for ourselves.
      </h1>

      <ul className="mt-16 border-t border-rule">
        {PROJECTS.map((project) => {
          const hasCaseStudy = Boolean(project.caseStudy);
          const row = (
            <div className="flex flex-col gap-2 py-7 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-2xl text-ink transition-colors duration-200 group-hover:text-walnut">
                  {project.name}
                </span>
              </div>
              <span className="flex-1 text-body text-ink-muted sm:px-6">
                {project.tagline}
              </span>
              <span className="font-mono text-caption text-ink-muted">
                {project.year}
                {!hasCaseStudy && (
                  <span className="ml-4 text-ink-muted">Coming soon</span>
                )}
              </span>
            </div>
          );

          return (
            <li key={project.slug} className="border-b border-rule">
              {hasCaseStudy ? (
                <Link href={`/work/${project.slug}`} className="group block">
                  {row}
                </Link>
              ) : (
                <div className="cursor-default opacity-70">{row}</div>
              )}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
