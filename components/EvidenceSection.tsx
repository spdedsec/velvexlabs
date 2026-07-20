"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    name: "Celestia Clothing",
    result: "A minimal e-commerce experience for a premium clothing brand",
    year: "2025",
  },
  {
    name: "Aadeo Foundation",
    result: "A donation and impact platform built around transparency",
    year: "2024",
  },
  {
    name: "Aurum Residences",
    result: "An immersive showcase for premium property listings",
    year: "2025",
  },
  {
    name: "Lumen AI",
    result: "Workflow automation tools for enterprise teams",
    year: "2026",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function EvidenceSection() {
  return (
    <section id="evidence" className="border-t border-rule px-6 py-28 lg:px-0">
      <div className="mx-auto max-w-prose">
        <motion.p
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          className="font-mono text-caption uppercase tracking-wider text-sage"
        >
          Recent work
        </motion.p>

        <motion.h2
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.65, 0, 0.35, 1] }}
          className="mt-4 text-display-md text-ink"
        >
          A few things we&apos;ve shipped.
        </motion.h2>

        <ul className="mt-12 border-t border-rule">
          {PROJECTS.map((project, i) => (
            <motion.li
              key={project.name}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                ease: [0.65, 0, 0.35, 1],
              }}
              className="border-b border-rule"
            >
              <Link
                href="/work"
                className="group flex items-baseline justify-between gap-6 py-6 transition-colors duration-200"
              >
                <span className="font-display text-2xl text-ink transition-colors duration-200 group-hover:text-walnut">
                  {project.name}
                </span>
                <span className="hidden flex-1 truncate text-body text-ink-muted sm:block">
                  {project.result}
                </span>
                <span className="font-mono text-caption text-ink-muted">
                  {project.year}
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>

        <Link
          href="/work"
          className="mt-10 inline-block font-mono text-caption uppercase tracking-wider text-ink-muted underline decoration-rule underline-offset-4 transition-colors duration-200 hover:text-walnut hover:decoration-walnut"
        >
          View all work
        </Link>
      </div>
    </section>
  );
}
