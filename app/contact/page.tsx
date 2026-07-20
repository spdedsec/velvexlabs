import type { Metadata } from "next";
import {
  SOCIAL_LINKS,
  CONTACT_EMAIL,
  AVAILABILITY_NOTE,
  FAQ_ITEMS,
} from "@/lib/contact";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Velvex Labs about a branding, design, or development project.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 pb-32 pt-16 lg:px-0 lg:pt-24">
      <p className="font-mono text-caption uppercase tracking-wider text-sage">
        Contact
      </p>
      <h1 className="mt-4 max-w-prose text-display-lg text-ink">
        Tell us what you&apos;re building.
      </h1>
      <p className="mt-6 max-w-prose text-body text-ink/70">{AVAILABILITY_NOTE}</p>

      <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_18rem]">
        <ContactForm />

        <aside className="space-y-10 border-t border-rule pt-10 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
          <div>
            <p className="font-mono text-caption uppercase tracking-wider text-ink-muted">
              Email
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-2 block text-body text-ink/70 transition-colors duration-200 hover:text-walnut"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <div>
            <p className="font-mono text-caption uppercase tracking-wider text-ink-muted">
              Location
            </p>
            <p className="mt-2 text-body text-ink/70">
              Remote-first, working with clients in any time zone.
            </p>
          </div>

          <div>
            <p className="font-mono text-caption uppercase tracking-wider text-ink-muted">
              Elsewhere
            </p>
            <ul className="mt-2 space-y-1">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body text-ink/70 transition-colors duration-200 hover:text-walnut"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <div className="mt-24 border-t border-rule pt-12">
        <h2 className="font-display text-2xl text-ink">Frequently asked</h2>
        <div className="mt-8 divide-y divide-rule border-t border-rule">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between font-display text-lg text-ink marker:content-none">
                {item.question}
                <span
                  aria-hidden="true"
                  className="ml-4 shrink-0 font-mono text-ink-muted transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-prose text-body text-ink/70">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </main>
  );
}
