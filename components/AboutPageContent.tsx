"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

export function AboutPageContent() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const element = root.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        ".about-intro > *",
        { y: 32, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power4.out" },
      );

      gsap.fromTo(
        ".about-copy p",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-copy", start: "top 82%", once: true },
        },
      );

      gsap.fromTo(
        ".principle-row",
        { x: -24, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".principles", start: "top 80%", once: true },
        },
      );

      gsap.to(".about-index", {
        yPercent: 100,
        scrollTrigger: { trigger: ".principles", start: "top bottom", end: "bottom top", scrub: 1 },
      });
    }, element);

    return () => context.revert();
  }, []);

  return (
    <main ref={root} className="mx-auto max-w-[92rem] px-6 pb-32 pt-16 lg:px-12 lg:pt-24">
      <div className="about-intro max-w-5xl">
        <p className="font-mono text-caption uppercase tracking-[0.22em] text-sage">About</p>
        <h1 className="mt-4 max-w-5xl text-display-lg text-ink">A studio still small enough to obsess over each project.</h1>
      </div>

      <div className="mt-16 grid gap-14 lg:mt-32 lg:grid-cols-[16rem_minmax(0,42rem)] lg:gap-12">
        <p className="font-mono text-caption uppercase tracking-wider text-ink-muted">The short version</p>
        <div className="about-copy max-w-prose space-y-5 text-body-lg text-ink/70">
          <p>
            Velvex Labs is a young studio, and we&apos;re small on purpose. Past a certain size, quality and headcount start pulling against each other — more hands usually means more handoffs, and handoffs are where craft quietly leaks out of a project.
          </p>
          <p>
            We work across branding, design, and development, and we treat those as one discipline rather than three departments. A decision about layout is also a decision about performance. A decision about typography is also a decision about load time. Splitting those into separate phases, handled by separate people, tends to produce work where neither half is quite right.
          </p>
          <p>
            We&apos;d rather stay small and take fewer projects than grow past the point where we can still pay attention to all of them.
          </p>
        </div>
      </div>

      <section className="principles relative mt-24 border-t border-rule pt-12 lg:mt-40 lg:pt-20">
        <span className="about-index pointer-events-none absolute right-0 top-4 font-display text-[8rem] leading-none text-walnut/10 lg:text-[13rem]" aria-hidden="true">03</span>
        <div className="relative z-10 grid gap-8 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-12">
          <h2 className="font-display text-display-md text-ink">What we believe</h2>
          <ul className="divide-y divide-rule border-t border-rule">
            {PRINCIPLES.map((principle, index) => (
              <li key={principle.title} className="principle-row grid gap-3 py-7 opacity-0 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-6">
                <span className="font-mono text-caption text-sage">0{index + 1}</span>
                <div>
                  <p className="font-display text-2xl text-ink">{principle.title}</p>
                  <p className="mt-2 max-w-prose text-body text-ink/70">{principle.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="mt-16 border-t border-rule pt-12">
        <Link
          href="/contact"
          data-magnetic
          className="magnetic-link group inline-flex items-center gap-4 border border-ink px-6 py-3 font-mono text-caption uppercase tracking-wider text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
        >
          Get in touch <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
        </Link>
      </div>
    </main>
  );
}
