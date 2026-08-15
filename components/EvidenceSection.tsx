"use client";

import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    name: "Celestia Clothing",
    result: "A minimal e-commerce experience for a premium clothing brand",
    year: "2025",
    mark: "C",
  },
  {
    name: "Aadeo Foundation",
    result: "A donation and impact platform built around transparency",
    year: "2024",
    mark: "A",
  },
  {
    name: "Aurum Residences",
    result: "An immersive showcase for premium property listings",
    year: "2025",
    mark: "A",
  },
  {
    name: "Lumen AI",
    result: "Workflow automation tools for enterprise teams",
    year: "2026",
    mark: "L",
  },
];

export function EvidenceSection() {
  const root = useRef<HTMLElement>(null);
  const preview = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);
  const selectedProject = PROJECTS[activeProject] ?? PROJECTS[0]!;

  useLayoutEffect(() => {
    const element = root.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        ".work-eyebrow",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power4.out",
          scrollTrigger: { trigger: element, start: "top 78%", once: true },
        },
      );

      gsap.fromTo(
        ".work-heading-line",
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.95,
          stagger: 0.09,
          ease: "power4.out",
          scrollTrigger: { trigger: element, start: "top 70%", once: true },
        },
      );

      gsap.fromTo(
        ".project-row",
        { y: 34, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: ".project-list", start: "top 78%", once: true },
        },
      );

      gsap.fromTo(
        ".work-preview",
        { y: 80, opacity: 0, rotate: 4 },
        {
          y: 0,
          opacity: 1,
          rotate: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: { trigger: ".work-preview", start: "top 80%", once: true },
        },
      );
    }, element);

    return () => context.revert();
  }, []);

  const movePreview = (event: React.PointerEvent<HTMLAnchorElement>) => {
    if (!preview.current || window.matchMedia("(pointer: coarse)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 18;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 12;
    gsap.to(preview.current, { x, y, rotate: x * 0.04, duration: 0.55, ease: "power3.out", overwrite: true });
  };

  const resetPreview = () => {
    if (!preview.current) return;
    gsap.to(preview.current, { x: 0, y: 0, rotate: 0, duration: 0.7, ease: "elastic.out(1, 0.45)", overwrite: true });
  };

  return (
    <section ref={root} id="evidence" className="border-t border-rule px-6 py-28 lg:px-12 lg:py-40">
      <div className="mx-auto grid max-w-[92rem] gap-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(22rem,0.8fr)] lg:items-start lg:gap-24">
        <div>
          <p className="work-eyebrow font-mono text-caption uppercase tracking-[0.22em] text-sage opacity-0">
            Recent work
          </p>
          <h2 className="mt-4 max-w-4xl text-display-lg text-ink">
            <span className="block overflow-hidden"><span className="work-heading-line inline-block">A few things</span></span>
            <span className="block overflow-hidden"><span className="work-heading-line inline-block italic">we&apos;ve shipped.</span></span>
          </h2>

          <ul className="project-list mt-14 border-t border-rule">
            {PROJECTS.map((project, i) => (
              <li key={project.name} className="project-row border-b border-rule opacity-0">
                <Link
                  href="/work"
                  data-cursor="project"
                  className="project-row-link group relative flex items-center justify-between gap-5 py-6 transition-colors duration-300"
                  onPointerEnter={() => setActiveProject(i)}
                  onPointerMove={movePreview}
                  onPointerLeave={resetPreview}
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-[0.65rem] text-ink-muted">0{i + 1}</span>
                    <span className="font-display text-2xl text-ink transition-transform duration-500 ease-out group-hover:translate-x-2 group-hover:text-walnut sm:text-3xl">
                      {project.name}
                    </span>
                  </span>
                  <span className="hidden max-w-[20rem] flex-1 truncate text-body text-ink-muted md:block">
                    {project.result}
                  </span>
                  <span className="font-mono text-caption text-ink-muted transition-colors duration-300 group-hover:text-walnut">
                    {project.year}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/work"
            data-magnetic
            className="magnetic-link mt-10 inline-flex items-center gap-3 font-mono text-caption uppercase tracking-wider text-ink-muted transition-colors duration-300 hover:text-walnut"
          >
            View all work <span>↗</span>
          </Link>
        </div>

        <div ref={preview} className="work-preview relative hidden aspect-[4/5] overflow-hidden border border-rule bg-ink p-8 opacity-0 lg:block">
          <div className="absolute inset-4 border border-paper/20" />
          <div className="absolute inset-x-8 top-8 flex items-center justify-between font-mono text-[0.63rem] uppercase tracking-[0.2em] text-paper/60">
            <span>Selected / 0{activeProject + 1}</span>
            <span>{selectedProject.year}</span>
          </div>
          <div className="absolute inset-0 grid place-items-center">
            <span className="font-display text-[13rem] leading-none text-paper/10 transition-all duration-700">
              {selectedProject.mark}
            </span>
          </div>
          <div className="absolute inset-x-8 bottom-8 border-t border-paper/20 pt-4">
            <p className="font-display text-3xl italic text-paper">{selectedProject.name}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/65">{selectedProject.result}</p>
          </div>
          <div className="absolute bottom-[-5rem] right-[-5rem] h-56 w-56 rounded-full border border-walnut/60" />
        </div>
      </div>
    </section>
  );
}
