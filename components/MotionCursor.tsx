"use client";

import { useEffect } from "react";
import gsap from "gsap";

export function MotionCursor() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    if (reduceMotion || !finePointer) return;

    const cursor = document.createElement("div");
    cursor.className = "motion-cursor";
    cursor.setAttribute("aria-hidden", "true");
    document.body.appendChild(cursor);

    const cursorX = gsap.quickTo(cursor, "x", { duration: 0.28, ease: "power3.out" });
    const cursorY = gsap.quickTo(cursor, "y", { duration: 0.28, ease: "power3.out" });
    const magneticElements = new Set<HTMLElement>();

    const onPointerMove = (event: PointerEvent) => {
      cursorX(event.clientX);
      cursorY(event.clientY);
    };

    const onPointerOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest<HTMLElement>("a, button, [data-cursor]");
      if (!interactive) return;

      cursor.classList.add("is-active");
      if (interactive.dataset.magnetic !== undefined) magneticElements.add(interactive);
    };

    const onPointerOut = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target?.closest("a, button, [data-cursor]")) return;
      cursor.classList.remove("is-active");
    };

    const onMagneticMove = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      const element = target?.closest<HTMLElement>("[data-magnetic]");
      if (!element) return;
      const bounds = element.getBoundingClientRect();
      const strength = Number(element.dataset.magneticStrength ?? 0.2);
      const x = (event.clientX - (bounds.left + bounds.width / 2)) * strength;
      const y = (event.clientY - (bounds.top + bounds.height / 2)) * strength;
      gsap.to(element, { x, y, duration: 0.45, ease: "power3.out", overwrite: true });
    };

    const resetMagnetic = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      const element = target?.closest<HTMLElement>("[data-magnetic]");
      if (!element) return;
      gsap.to(element, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.45)", overwrite: true });
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerover", onPointerOver, { passive: true });
    window.addEventListener("pointerout", onPointerOut, { passive: true });
    window.addEventListener("pointermove", onMagneticMove, { passive: true });
    window.addEventListener("pointerleave", resetMagnetic, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerover", onPointerOver);
      window.removeEventListener("pointerout", onPointerOut);
      window.removeEventListener("pointermove", onMagneticMove);
      window.removeEventListener("pointerleave", resetMagnetic);
      magneticElements.forEach((element) => gsap.set(element, { clearProps: "transform" }));
      cursor.remove();
    };
  }, []);

  return null;
}
