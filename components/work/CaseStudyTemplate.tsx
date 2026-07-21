import type { Project } from "@/lib/projects";
import { IndexedSection } from "@/components/IndexedSection";

const SECTIONS: { key: keyof NonNullable<Project["caseStudy"]>; label: string }[] = [
  { key: "problem", label: "Problem" },
  { key: "research", label: "Research" },
  { key: "solution", label: "Solution" },
  { key: "process", label: "Process" },
  { key: "technicalImplementation", label: "Technical implementation" },
  { key: "outcome", label: "Outcome" },
];

export function CaseStudyTemplate({ project }: { project: Project }) {
  const caseStudy = project.caseStudy;
  if (!caseStudy) return null;

  return (
    <article>
      <header className="mx-auto max-w-4xl px-6 pb-16 pt-16 lg:px-0 lg:pt-24">
        <p className="font-mono text-caption uppercase tracking-wider text-sage">
          {project.year}
        </p>
        <h1 className="mt-4 text-display-lg text-ink">{project.name}</h1>
        <p className="mt-6 max-w-prose text-body-lg text-ink/70">
          {project.tagline}
        </p>

        <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-4 border-t border-rule pt-6">
          <div>
            <dt className="font-mono text-caption uppercase tracking-wider text-ink-muted">
              Role
            </dt>
            <dd className="mt-1 text-body text-ink/70">
              {project.role.join(", ")}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-caption uppercase tracking-wider text-ink-muted">
              Stack
            </dt>
            <dd className="mt-1 text-body text-ink/70">
              {project.stack.join(", ")}
            </dd>
          </div>
        </dl>
      </header>

      <div
        aria-hidden="true"
        className="relative flex h-[50vh] w-full items-end overflow-hidden"
        style={{
          background: `linear-gradient(155deg, ${project.accent}1a 0%, ${project.accent}33 100%)`,
        }}
      >
        <span
          className="select-none pb-6 pl-6 font-display text-[18vw] leading-none lg:pl-12"
          style={{ color: `${project.accent}26` }}
        >
          {project.slug.slice(0, 2).toUpperCase()}
        </span>
      </div>

      <div className="mx-auto max-w-4xl px-6 lg:px-0">
        {SECTIONS.map((section, i) => (
          <IndexedSection key={section.key} index={i + 1} label={section.label} delay={0}>
            <p>{caseStudy[section.key]}</p>
          </IndexedSection>
        ))}
      </div>
    </article>
  );
}
