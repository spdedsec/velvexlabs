"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SERVICE_GROUPS } from "@/lib/services";

gsap.registerPlugin(ScrollTrigger);

export function ServicesPageContent() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const element = root.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        ".services-intro > *",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power4.out" },
      );

      gsap.utils.toArray<HTMLElement>(".service-group").forEach((group) => {
        gsap.fromTo(
          group.querySelectorAll(".service-row"),
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.06,
            ease: "power3.out",
            scrollTrigger: { trigger: group, start: "top 80%", once: true },
          },
        );

        gsap.to(group.querySelector(".service-group-index"), {
          yPercent: 80,
          scrollTrigger: { trigger: group, start: "top bottom", end: "bottom top", scrub: 1 },
        });
      });
    }, element);

    return () => context.revert();
  }, []);

  return (
    <main ref={root} className="mx-auto max-w-[92rem] px-6 pb-32 pt-16 lg:px-12 lg:pt-24">
      <div className="services-intro max-w-4xl">
        <p className="font-mono text-caption uppercase tracking-[0.22em] text-sage">Services</p>
        <h1 className="mt-4 max-w-5xl text-display-lg text-ink">What we do, and where it stops.</h1>
        <p className="mt-6 max-w-prose text-body text-ink-muted">
          We take on branding, design, and development work — and the maintenance
          that keeps it working after launch. We don&apos;t take on everything; the
          list below is what we&apos;re actually good at.
        </p>
      </div>

      <div className="mt-20 max-w-6xl lg:mt-32">
        {SERVICE_GROUPS.map((group, groupIndex) => (
          <section key={group.title} className="service-group relative border-t border-rule py-12 lg:py-20">
            <span className="service-group-index pointer-events-none absolute right-0 top-8 font-display text-[7rem] leading-none text-walnut/10 lg:text-[11rem]" aria-hidden="true">
              0{groupIndex + 1}
            </span>
            <div className="relative z-10 grid gap-8 lg:grid-cols-[16rem_1fr] lg:gap-12">
              <h2 className="font-display text-display-md text-ink">{group.title}</h2>
              <ul className="max-w-4xl">
                {group.services.map((service) => (
                  <li key={service.name} className="service-row group flex flex-col gap-2 border-b border-rule/70 py-6 opacity-0 sm:flex-row sm:items-baseline sm:gap-8">
                    <span className="w-full shrink-0 font-mono text-caption uppercase tracking-wider text-ink-muted transition-colors duration-300 group-hover:text-walnut sm:w-56">
                      {service.name}
                    </span>
                    <span className="max-w-prose text-body text-ink-muted transition-transform duration-500 ease-out group-hover:translate-x-2">
                      {service.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-rule pt-12">
        <Link
          href="/contact"
          data-magnetic
          className="magnetic-link group inline-flex items-center gap-5 border border-ink px-6 py-3 font-mono text-caption uppercase tracking-wider text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
        >
          Discuss a project <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
        </Link>
        <Link
          href="/pricing"
          className="font-mono text-caption uppercase tracking-wider text-ink-muted underline decoration-rule underline-offset-4 transition-colors duration-300 hover:text-walnut hover:decoration-walnut"
        >
          See pricing
        </Link>
      </div>
    </main>
  );
}
