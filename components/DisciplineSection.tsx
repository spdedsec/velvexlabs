"use client";

import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function DisciplineSection() {
  return (
    <section id="discipline" className="border-t border-rule px-6 py-28 lg:px-0">
      <div className="mx-auto max-w-prose">
        <motion.p
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          className="font-mono text-caption uppercase tracking-wider text-sage"
        >
          How we work
        </motion.p>

        <motion.h2
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.65, 0, 0.35, 1] }}
          className="mt-4 text-display-md text-ink"
        >
          We don&apos;t separate the design phase from the build phase,
          because they&apos;re usually the same decision.
        </motion.h2>

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.65, 0, 0.35, 1] }}
          className="mt-8 space-y-5 text-body text-ink/70"
        >
          <p>
            A layout choice is also a performance budget. A typeface is also
            a loading strategy. Most studios split these into a design phase
            and a development phase, handed between two different teams who
            rarely agree on what &quot;finished&quot; actually means.
          </p>
          <p>
            We keep it as one job. The person sketching an interaction is
            the same person who knows whether a browser can render it
            smoothly — so the sketch stays honest, and the build stays
            faithful to it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
