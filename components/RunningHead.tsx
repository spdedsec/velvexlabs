"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Section } from "@/lib/sections";

export function RunningHead({ sections }: { sections: Section[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = sections.findIndex((s) => s.id === entry.target.id);
          if (index !== -1) setActiveIndex(index);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  const active = sections[activeIndex];
  const folio = String(activeIndex + 1).padStart(2, "0");
  const total = String(sections.length).padStart(2, "0");

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-8 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-start gap-3 xl:flex"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
          className="running-head"
        >
          <span className="block text-ink/70">{active.label}</span>
          <span className="mt-1 block text-ink-muted">
            {folio} / {total}
          </span>
        </motion.div>
      </AnimatePresence>
      <div className="h-10 w-px bg-rule" />
    </div>
  );
}
