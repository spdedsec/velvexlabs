import type { ReactNode } from "react";

export type LegalSection = {
  heading: string;
  body: ReactNode;
};

export function LegalPageLayout({
  eyebrow,
  title,
  effectiveDate,
  sections,
}: {
  eyebrow: string;
  title: string;
  effectiveDate: string;
  sections: LegalSection[];
}) {
  return (
    <main className="mx-auto max-w-prose px-6 pb-32 pt-16 lg:px-0 lg:pt-24">
      <p className="font-mono text-caption uppercase tracking-wider text-sage">
        {eyebrow}
      </p>
      <h1 className="mt-4 text-display-md text-ink">{title}</h1>
      <p className="mt-4 font-mono text-caption text-ink-muted">
        Effective {effectiveDate}
      </p>

      <div className="mt-12 space-y-10 border-t border-rule pt-10">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-display text-xl text-ink">
              {section.heading}
            </h2>
            <div className="mt-3 space-y-3 text-body text-ink/70">
              {section.body}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
