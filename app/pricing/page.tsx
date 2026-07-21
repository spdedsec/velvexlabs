import type { Metadata } from "next";
import Link from "next/link";
import { PRICING_GROUPS } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description: "What projects with Velvex Labs typically cost, by category.",
};

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 pb-32 pt-16 lg:px-0 lg:pt-24">
      <p className="font-mono text-caption uppercase tracking-wider text-sage">
        Pricing
      </p>
      <h1 className="mt-4 max-w-prose text-display-lg text-ink">
        A real starting point, not a mystery.
      </h1>
      <p className="mt-6 max-w-prose text-body text-ink/70">
        These are starting prices for the scope described — a fixed quote
        comes after a discovery call, once we know your project's actual
        shape. Nothing here is a discount tier; it's what senior, custom
        work costs.
      </p>

      <div className="mt-16">
        {PRICING_GROUPS.map((group) => (
          <section key={group.title} className="border-t border-rule py-12">
            <h2 className="font-display text-2xl text-ink">{group.title}</h2>
            <div className="mt-8 space-y-10">
              {group.tiers.map((tier) => (
                <div
                  key={tier.name}
                  className="grid gap-3 border-b border-rule pb-8 last:border-b-0 last:pb-0 lg:grid-cols-[1fr_10rem]"
                >
                  <div>
                    <p className="font-display text-xl text-ink">{tier.name}</p>
                    <p className="mt-2 max-w-prose text-body text-ink/70">
                      {tier.description}
                    </p>
                    <ul className="mt-4 space-y-1">
                      {tier.includes.map((item) => (
                        <li
                          key={item}
                          className="font-mono text-caption text-ink-muted"
                        >
                          — {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-row items-center justify-between gap-4 lg:flex-col lg:items-end lg:justify-start lg:gap-3">
                    <p className="font-mono text-caption uppercase tracking-wider text-walnut lg:text-right">
                      Starting at
                      <br />
                      <span className="text-lg normal-case tracking-normal text-ink">
                        {tier.startingAt}
                      </span>
                    </p>
                    <Link
                      href={`/contact?service=${encodeURIComponent(tier.name)}`}
                      className="inline-flex items-center justify-center border border-ink px-4 py-2 font-mono text-caption uppercase tracking-wider text-ink transition-colors duration-200 hover:bg-ink hover:text-paper"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-8 border-t border-rule pt-12">
        <Link
          href="/contact"
          className="inline-flex items-center border border-ink px-6 py-3 font-mono text-caption uppercase tracking-wider text-ink transition-colors duration-200 hover:bg-ink hover:text-paper"
        >
          Get a fixed quote
        </Link>
      </div>
    </main>
  );
}
