"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = root.current;
    if (!element) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const context = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power4.out" } });

      intro
        .fromTo(
          ".hero-eyebrow",
          { y: 18, opacity: 0, filter: "blur(8px)" },
          { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8 },
        )
        .fromTo(
          ".hero-line",
          { yPercent: 112, rotate: 2, filter: "blur(12px)" },
          { yPercent: 0, rotate: 0, filter: "blur(0px)", duration: 1.15, stagger: 0.09 },
          "-=0.35",
        )
        .fromTo(
          ".hero-copy, .hero-actions",
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
          "-=0.55",
        )
        .fromTo(
          ".hero-orbit, .hero-grid, .hero-scroll-cue",
          { opacity: 0, scale: 0.92 },
          { opacity: 1, scale: 1, duration: 1.2, stagger: 0.1 },
          "-=0.7",
        );

      gsap.to(".hero-orbit-inner", {
        rotate: 360,
        duration: 28,
        ease: "none",
        repeat: -1,
      });

      gsap.to(".hero-orbit-mark", {
        y: -12,
        duration: 2.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom top",
          scrub: 1.15,
        },
      })
        .to(".hero-line:nth-child(1)", { xPercent: -5, yPercent: -20, opacity: 0.35 }, 0)
        .to(".hero-line:nth-child(2)", { xPercent: 4, yPercent: -8, scale: 0.96 }, 0)
        .to(".hero-line:nth-child(3)", { xPercent: -3, yPercent: 10, scale: 0.9, opacity: 0.55 }, 0)
        .to(".hero-copy", { yPercent: -22, opacity: 0.24 }, 0)
        .to(".hero-orbit", { xPercent: 28, yPercent: -18, rotate: 24, scale: 1.28 }, 0)
        .to(".hero-grid", { xPercent: -12, yPercent: 18, rotate: -8, opacity: 0.18 }, 0)
        .to(".hero-scroll-cue", { opacity: 0, y: 20 }, 0.05);
    }, element);

    return () => context.revert();
  }, []);

  return (
    <div ref={root} className="hero-section relative min-h-[142vh] overflow-clip">
      <div className="hero-sticky sticky top-0 flex min-h-[calc(100svh-5rem)] items-center overflow-hidden px-6 pb-24 pt-16 lg:px-12 lg:pb-20">
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-0" aria-hidden="true" />
        <div className="hero-orbit pointer-events-none absolute right-[-9rem] top-[11%] h-[34rem] w-[34rem] opacity-0 text-walnut/40 sm:right-[-7rem] sm:h-[42rem] sm:w-[42rem] lg:right-[7vw] lg:top-[12%] lg:h-[46rem] lg:w-[46rem]" aria-hidden="true">
          <div className="hero-orbit-inner absolute inset-0 rounded-full border border-walnut/30">
            <span className="absolute left-1/2 top-[-0.35rem] h-2 w-2 -translate-x-1/2 rounded-full bg-walnut" />
            <span className="absolute bottom-[13%] left-[8%] h-3 w-3 rounded-full border border-walnut bg-paper" />
            <span className="absolute right-[8%] top-[25%] h-2 w-2 rounded-full bg-sage" />
          </div>
          <div className="absolute inset-[14%] rounded-full border border-rule/80" />
          <div className="hero-orbit-mark absolute left-[44%] top-[42%] grid h-24 w-24 place-items-center rounded-full border border-walnut/45 bg-paper/80 font-mono text-caption tracking-[0.28em] text-walnut backdrop-blur-sm">
            VX
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[92rem]">
          <div className="max-w-6xl">
            <p className="hero-eyebrow font-mono text-caption uppercase tracking-[0.22em] text-sage">
              Velvex Labs — Design &amp; Engineering Studio
            </p>

            <h1 className="mt-8 max-w-6xl overflow-visible text-display-xl text-ink">
              <span className="block overflow-hidden"><span className="hero-line block origin-left">Built the</span></span>
              <span className="block overflow-hidden"><span className="hero-line block origin-left italic">way we&apos;d want</span></span>
              <span className="block overflow-hidden"><span className="hero-line block origin-left">it built for us.</span></span>
            </h1>

            <div className="hero-copy mt-10 max-w-xl opacity-0">
              <p className="text-body-lg text-ink-muted">
                We design and develop digital products for teams who notice the
                difference between decoration and craft.
              </p>
            </div>

            <div className="hero-actions mt-10 flex flex-wrap items-center gap-x-8 gap-y-5 opacity-0">
              <Link
                href="/contact"
                data-magnetic
                data-magnetic-strength="0.14"
                className="magnetic-link group inline-flex items-center gap-5 border border-ink px-6 py-3 font-mono text-caption uppercase tracking-wider text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
              >
                <span>Start a project</span>
                <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">↗</span>
              </Link>
              <Link
                href="/work"
                data-magnetic
                data-magnetic-strength="0.1"
                className="magnetic-link group inline-flex items-center gap-3 font-mono text-caption uppercase tracking-wider text-ink-muted transition-colors duration-300 hover:text-walnut"
              >
                See the work
                <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="hero-scroll-cue absolute bottom-8 left-6 flex items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-ink-muted opacity-0 lg:left-12">
          <span className="hero-scroll-line h-px w-10 bg-walnut" />
          Scroll to enter
        </div>
        <div className="absolute bottom-8 right-6 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-ink-muted lg:right-12">
          01 / 03
        </div>
      </div>
    </div>
  );
}
