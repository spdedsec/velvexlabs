import type { Metadata } from "next";
import Link from "next/link";
import { SERVICE_GROUPS } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Branding, design, and development services from Velvex Labs.",
};

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 pb-32 pt-16 lg:px-0 lg:pt-24">
      <p className="font-mono text-caption uppercase tracking-wider text-sage">
        Services
      </p>
      <h1 className="mt-4 max-w-prose text-display-lg text-ink">
        What we do, and where it stops.
      </h1>
      <p className="mt-6 max-w-prose text-body text-ink/70">
        We take on branding, design, and development work — and the
        maintenance that keeps it working after launch. We don&apos;t take on
        everything; the list below is what we&apos;re actually good at.
      </p>

      <div className="mt-16">
        {SERVICE_GROUPS.map((group) => (
          <section key={group.title} className="border-t border-rule py-12">
            <h2 className="font-display text-2xl text-ink">{group.title}</h2>
            <ul className="mt-8 space-y-8">
              {group.services.map((service) => (
                <li
                  key={service.name}
                  className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-8"
                >
                  <span className="w-full shrink-0 font-mono text-caption uppercase tracking-wider text-ink-muted sm:w-56">
                    {service.name}
                  </span>
                  <span className="max-w-prose text-body text-ink/70">
                    {service.description}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-rule pt-12">
        <Link
          href="/contact"
          className="inline-flex items-center border border-ink px-6 py-3 font-mono text-caption uppercase tracking-wider text-ink transition-colors duration-200 hover:bg-ink hover:text-paper"
        >
          Discuss a project
        </Link>
        <Link
          href="/pricing"
          className="font-mono text-caption uppercase tracking-wider text-ink-muted underline decoration-rule underline-offset-4 transition-colors duration-200 hover:text-walnut hover:decoration-walnut"
        >
          See pricing
        </Link>
      </div>
    </main>
  );
}
