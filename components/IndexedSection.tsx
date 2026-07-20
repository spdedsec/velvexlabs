"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function IndexedSection({
  index,
  label,
  children,
  delay = 0,
}: {
  index: number;
  label: string;
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.section
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: [0.65, 0, 0.35, 1] }}
      className="border-t border-rule py-16"
    >
      <div className="grid gap-6 lg:grid-cols-[16rem_1fr]">
        <p className="font-mono text-caption uppercase tracking-wider text-ink-muted">
          {String(index).padStart(2, "0")} — {label}
        </p>
        <div className="max-w-prose text-body text-ink/70">{children}</div>
      </div>
    </motion.section>
  );
}
