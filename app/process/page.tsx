import type { Metadata } from "next";
import { PROCESS_STEPS } from "@/lib/process";
import { IndexedSection } from "@/components/IndexedSection";

export const metadata: Metadata = {
  title: "Process",
  description: "How a project moves from discovery to launch at Velvex Labs.",
};

export default function ProcessPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 pb-32 pt-16 lg:px-0 lg:pt-24">
      <p className="font-mono text-caption uppercase tracking-wider text-sage">
        Process
      </p>
      <h1 className="mt-4 max-w-prose text-display-lg text-ink">
        Nine stages. None of them skipped.
      </h1>
      <p className="mt-6 max-w-prose text-body text-ink/70">
        This is the actual sequence, not a simplified version of it. Every
        stage exists because skipping it has cost us or a client something
        before.
      </p>

      <div className="mt-8">
        {PROCESS_STEPS.map((step, i) => (
          <IndexedSection
            key={step.title}
            index={i + 1}
            label={step.title}
            delay={0}
          >
            <p>{step.description}</p>
          </IndexedSection>
        ))}
      </div>
    </main>
  );
}
