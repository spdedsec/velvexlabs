"use client";

import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const element = root.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        ".indexed-label",
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.75,
          delay,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 82%", once: true },
        },
      );

      gsap.fromTo(
        ".indexed-copy",
        { y: 38, opacity: 0, clipPath: "inset(12% 0 0 0)" },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0% 0 0 0)",
          duration: 0.95,
          delay: delay + 0.06,
          ease: "power4.out",
          scrollTrigger: { trigger: element, start: "top 78%", once: true },
        },
      );

      gsap.to(".indexed-rule", {
        scaleX: 1,
        transformOrigin: "left center",
        duration: 1,
        delay: delay + 0.1,
        ease: "power4.out",
        scrollTrigger: { trigger: element, start: "top 86%", once: true },
      });

      gsap.to(".indexed-orbit", {
        yPercent: 24,
        rotate: 28,
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.1,
        },
      });
    }, element);

    return () => context.revert();
  }, [delay]);

  return (
    <section ref={root} className="relative border-t border-rule py-16 lg:py-24">
      <span className="indexed-rule absolute left-0 top-[-1px] h-px w-24 origin-left scale-x-0 bg-walnut" aria-hidden="true" />
      <span className="indexed-orbit pointer-events-none absolute right-4 top-10 h-12 w-12 rounded-full border border-walnut/30" aria-hidden="true" />
      <div className="grid gap-6 lg:grid-cols-[16rem_1fr] lg:gap-12">
        <p className="indexed-label font-mono text-caption uppercase tracking-wider text-ink-muted opacity-0">
          {String(index).padStart(2, "0")} — {label}
        </p>
        <div className="indexed-copy max-w-prose text-body text-ink-muted opacity-0">{children}</div>
      </div>
    </section>
  );
}
