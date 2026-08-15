"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let previousY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);
      setHidden(currentY > previousY + 6 && currentY > 140);
      if (currentY < previousY - 6) setHidden(false);
      previousY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-6 transition-[transform,background-color,backdrop-filter,padding] duration-500 ease-editorial lg:px-12 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${scrolled ? "border-b border-rule/70 bg-paper/82 py-4 backdrop-blur-md" : "bg-transparent"}`}
    >
      <Link href="/" className="font-display text-lg tracking-tight text-ink transition-colors duration-300 hover:text-walnut">
        Velvex Labs
      </Link>

      <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group relative font-mono text-caption uppercase tracking-wider text-ink-muted transition-colors duration-300 hover:text-walnut"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-walnut transition-[width] duration-300 ease-editorial group-hover:w-full" />
          </Link>
        ))}
        <ThemeToggle />
      </nav>

      <button
        type="button"
        data-cursor="menu"
        className="flex flex-col gap-1.5 md:hidden"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={`h-px w-6 bg-ink transition-transform duration-500 ease-editorial ${open ? "translate-y-[3px] rotate-45" : ""}`} />
        <span className={`h-px w-6 bg-ink transition-transform duration-500 ease-editorial ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
      </button>

      <nav
        id="mobile-nav"
        aria-label="Primary"
        aria-hidden={!open}
        className={`absolute left-0 right-0 top-full flex origin-top flex-col gap-6 border-b border-rule bg-paper px-6 py-8 transition-[opacity,transform,visibility] duration-500 ease-editorial md:hidden ${
          open ? "visible scale-y-100 opacity-100" : "invisible scale-y-95 opacity-0"
        }`}
      >
        {NAV_LINKS.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            tabIndex={open ? 0 : -1}
            className="font-display text-3xl text-ink transition-transform duration-500 ease-editorial hover:translate-x-2 hover:text-walnut"
            style={{ transitionDelay: open ? `${index * 35}ms` : "0ms" }}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <div className="pt-2">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
