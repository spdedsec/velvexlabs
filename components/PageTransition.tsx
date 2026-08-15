"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function PageTransition() {
  const pathname = usePathname();
  const overlay = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);

  useEffect(() => {
    const element = overlay.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timeline = gsap.timeline({ defaults: { ease: "power4.inOut" } });
    timeline
      .set(element, { xPercent: -100, autoAlpha: 1 })
      .to(element, { xPercent: 0, duration: firstRender.current ? 0.35 : 0.28 })
      .to(element, { xPercent: 100, autoAlpha: 0, duration: 0.45, delay: 0.02 });

    firstRender.current = false;
    return () => {
      timeline.kill();
      gsap.set(element, { xPercent: 100, autoAlpha: 0 });
    };
  }, [pathname]);

  return (
    <div ref={overlay} className="page-transition" aria-hidden="true">
      <span className="font-mono text-caption uppercase tracking-[0.24em] text-paper">Velvex Labs</span>
    </div>
  );
}
