"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function DisciplineSection() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const element = root.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        ".discipline-eyebrow",
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power4.out",
          scrollTrigger: { trigger: element, start: "top 76%", once: true },
        },
      );

      gsap.fromTo(
        ".discipline-word",
        { yPercent: 110, opacity: 0, rotate: 3 },
        {
          yPercent: 0,
          opacity: 1,
          rotate: 0,
          duration: 1,
          stagger: 0.08,
          ease: "power4.out",
          scrollTrigger: { trigger: element, start: "top 68%", once: true },
        },
      );

      gsap.fromTo(
        ".discipline-copy",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 52%", once: true },
        },
      );

      gsap.to(".discipline-orbit", {
        yPercent: 18,
        xPercent: -12,
        rotate: -18,
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, element);

    return () => context.revert();
  }, []);

  return (
    <section ref={root} id="discipline" className="discipline-section relative min-h-[132vh] overflow-clip border-t border-rule">
      <div className="discipline-pin sticky top-0 flex min-h-screen items-center px-6 py-28 lg:px-12">
        <div className="discipline-orbit pointer-events-none absolute right-[-10rem] top-[14%] h-[26rem] w-[26rem] rounded-full border border-walnut/25 lg:right-[4vw] lg:h-[34rem] lg:w-[34rem]" aria-hidden="true">
          <div className="absolute inset-[18%] rounded-full border border-rule/70" />
          <span className="absolute left-[18%] top-[28%] h-2 w-2 rounded-full bg-walnut" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-[92rem] gap-12 lg:grid-cols-[minmax(13rem,0.55fr)_minmax(0,1.45fr)] lg:gap-20">
          <div>
            <p className="discipline-eyebrow font-mono text-caption uppercase tracking-[0.22em] text-sage opacity-0">How we work</p>
            <p className="mt-5 max-w-[12rem] font-mono text-caption uppercase leading-relaxed tracking-[0.16em] text-ink-muted">
              Design is a decision. Engineering makes it real.
            </p>
          </div>

          <div className="max-w-5xl">
            <h2 className="text-display-lg text-ink">
              <span className="block overflow-hidden"><span className="discipline-word inline-block">We don&apos;t</span></span>{" "}
              <span className="block overflow-hidden"><span className="discipline-word inline-block italic">separate the</span></span>{" "}
              <span className="block overflow-hidden"><span className="discipline-word inline-block">two.</span></span>
            </h2>
            <div className="discipline-copy mt-10 grid max-w-3xl gap-6 text-body text-ink-muted opacity-0 md:grid-cols-2">
              <p>
                A layout choice is also a performance budget. A typeface is also
                a loading strategy. The most interesting work lives where those
                decisions overlap.
              </p>
              <p>
                The person sketching an interaction is the same person who knows
                whether a browser can render it smoothly. The sketch stays honest;
                the build stays faithful.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-6 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-ink-muted lg:left-12">
          02 / 03 — The discipline
        </div>
      </div>
    </section>
  );
}
