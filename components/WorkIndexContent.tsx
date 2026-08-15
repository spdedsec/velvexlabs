"use client";

import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties, PointerEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS } from "@/lib/projects";

gsap.registerPlugin(ScrollTrigger);

export function WorkIndexContent() {
  const root = useRef<HTMLElement>(null);
  const preview = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);
  const selectedProject = PROJECTS[activeProject] ?? PROJECTS[0]!;

  useLayoutEffect(() => {
    const element = root.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        ".work-index-intro > *",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, stagger: 0.1, ease: "power4.out" },
      );

      gsap.fromTo(
        ".work-index-row",
        { y: 34, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.78,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: { trigger: ".work-index-list", start: "top 82%", once: true },
        },
      );

      gsap.fromTo(
        ".work-index-preview",
        { x: 40, opacity: 0, rotate: 4 },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: { trigger: ".work-index-preview", start: "top 78%", once: true },
        },
      );
    }, element);

    return () => context.revert();
  }, []);

  const onPointerMove = (event: PointerEvent<HTMLAnchorElement>) => {
    if (!preview.current || window.matchMedia("(pointer: coarse)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 24;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 18;
    gsap.to(preview.current, { x, y, rotate: x * 0.035, duration: 0.55, ease: "power3.out", overwrite: true });
  };

  const resetPreview = () => {
    if (!preview.current) return;
    gsap.to(preview.current, { x: 0, y: 0, rotate: 0, duration: 0.75, ease: "elastic.out(1, 0.45)", overwrite: true });
  };

  return (
    <main ref={root} className="mx-auto max-w-[92rem] px-6 pb-32 pt-16 lg:px-12 lg:pt-24">
      <div className="work-index-intro max-w-5xl">
        <p className="font-mono text-caption uppercase tracking-[0.22em] text-sage">Work</p>
        <h1 className="mt-4 max-w-5xl text-display-lg text-ink">Client work, and a few studies we set for ourselves.</h1>
      </div>

      <div className="mt-20 grid gap-14 lg:grid-cols-[minmax(0,1.25fr)_minmax(20rem,0.75fr)] lg:items-start lg:gap-24 lg:mt-32">
        <ul className="work-index-list border-t border-rule">
          {PROJECTS.map((project, index) => {
            const hasCaseStudy = Boolean(project.caseStudy);
            const row = (
              <div className="flex flex-col gap-3 py-7 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[0.65rem] text-ink-muted">0{index + 1}</span>
                  <span className="font-display text-2xl text-ink transition-transform duration-500 ease-out group-hover:translate-x-2 group-hover:text-walnut sm:text-3xl">
                    {project.name}
                  </span>
                </div>
                <span className="flex-1 text-body text-ink-muted sm:px-6">{project.tagline}</span>
                <span className="font-mono text-caption text-ink-muted">
                  {project.year}
                  {!hasCaseStudy && <span className="ml-4 text-ink-muted">Coming soon</span>}
                </span>
              </div>
            );

            return (
              <li key={project.slug} className="work-index-row border-b border-rule opacity-0">
                {hasCaseStudy ? (
                  <Link
                    href={`/work/${project.slug}`}
                    data-cursor="project"
                    className="group relative block"
                    onPointerEnter={() => setActiveProject(index)}
                    onPointerMove={onPointerMove}
                    onPointerLeave={resetPreview}
                  >
                    {row}
                  </Link>
                ) : (
                  <div className="group relative cursor-default opacity-70" onPointerEnter={() => setActiveProject(index)}>
                    {row}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <div
          ref={preview}
          className="work-index-preview relative hidden aspect-[4/5] overflow-hidden border border-rule bg-ink p-8 opacity-0 lg:block"
          style={{ "--project-accent": selectedProject.accent } as CSSProperties}
        >
          <div className="absolute inset-4 border border-paper/20" />
          <div className="absolute inset-x-8 top-8 flex items-center justify-between font-mono text-[0.63rem] uppercase tracking-[0.2em] text-paper/60">
            <span>Case study / 0{activeProject + 1}</span>
            <span>{selectedProject.year}</span>
          </div>
          <div className="absolute inset-0 grid place-items-center">
            <span className="font-display text-[13rem] leading-none text-paper/10 transition-all duration-700">{selectedProject.name.slice(0, 1)}</span>
          </div>
          <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--project-accent)]/80 transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-x-8 bottom-8 border-t border-paper/20 pt-4">
            <p className="font-display text-3xl italic text-paper">{selectedProject.name}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/65">{selectedProject.tagline}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
