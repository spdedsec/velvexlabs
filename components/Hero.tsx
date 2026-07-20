"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] },
  },
};

export function Hero() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-4xl px-6 pb-32 pt-24 lg:px-0 lg:pt-40"
    >
      <motion.p
        variants={item}
        className="font-mono text-caption uppercase tracking-wider text-sage"
      >
        Velvex Labs — Design &amp; Engineering Studio
      </motion.p>

      <motion.h1 variants={item} className="mt-6 text-display-xl text-ink">
        Built the way we&apos;d want it built for us.
      </motion.h1>

      <motion.p
        variants={item}
        className="mt-8 max-w-prose text-body-lg text-ink/70"
      >
        We&apos;re a small studio that designs and develops digital products
        for teams who notice the difference between decoration and craft.
        The people who draw it are the same people who ship it — there&apos;s
        no handoff where the idea gets lost in translation.
      </motion.p>

      <motion.div variants={item} className="mt-10 flex items-center gap-8">
        <Link
          href="/contact"
          className="inline-flex items-center border border-ink px-6 py-3 font-mono text-caption uppercase tracking-wider text-ink transition-colors duration-200 hover:bg-ink hover:text-paper"
        >
          Start a project
        </Link>
        <Link
          href="/work"
          className="font-mono text-caption uppercase tracking-wider text-ink-muted underline decoration-rule underline-offset-4 transition-colors duration-200 hover:text-walnut hover:decoration-walnut"
        >
          See the work
        </Link>
      </motion.div>
    </motion.div>
  );
}
