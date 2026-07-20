"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 flex items-center justify-between px-6 py-6 lg:px-12">
      <Link href="/" className="font-display text-lg tracking-tight text-ink">
        Velvex Labs
      </Link>

      <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-mono text-caption uppercase tracking-wider text-ink-muted transition-colors duration-200 hover:text-walnut"
          >
            {link.label}
          </Link>
        ))}
        <ThemeToggle />
      </nav>

      <button
        type="button"
        className="flex flex-col gap-1.5 md:hidden"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <span
          className={`h-px w-6 bg-ink transition-transform duration-300 ${
            open ? "translate-y-[3px] rotate-45" : ""
          }`}
        />
        <span
          className={`h-px w-6 bg-ink transition-transform duration-300 ${
            open ? "-translate-y-[3px] -rotate-45" : ""
          }`}
        />
      </button>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="absolute left-0 right-0 top-full flex flex-col gap-6 border-b border-rule bg-paper px-6 py-8 md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-2xl text-ink"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <ThemeToggle />
          </div>
        </nav>
      )}
    </header>
  );
}
