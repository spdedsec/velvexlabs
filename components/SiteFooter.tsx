import Link from "next/link";
import { SOCIAL_LINKS, CONTACT_EMAIL } from "@/lib/contact";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule px-6 py-12 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-lg text-ink">Velvex Labs</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-2 block text-body text-ink-muted transition-colors duration-200 hover:text-walnut"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        <nav
          aria-label="Social"
          className="flex gap-6 font-mono text-caption uppercase tracking-wider text-ink-muted"
        >
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-walnut"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <nav
          aria-label="Legal"
          className="flex gap-6 font-mono text-caption uppercase tracking-wider text-ink-muted"
        >
          <Link href="/privacy" className="transition-colors duration-200 hover:text-walnut">
            Privacy
          </Link>
          <Link href="/terms" className="transition-colors duration-200 hover:text-walnut">
            Terms
          </Link>
        </nav>
      </div>

      <p className="mx-auto mt-10 max-w-6xl font-mono text-caption text-ink-muted">
        © {year} Velvex Labs.
      </p>
    </footer>
  );
}
