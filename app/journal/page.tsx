import type { Metadata } from "next";
import Link from "next/link";
import { JOURNAL_POSTS } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Journal",
  description: "Notes on branding, design, frontend, and performance from Velvex Labs.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function JournalIndexPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 pb-32 pt-16 lg:px-0 lg:pt-24">
      <p className="font-mono text-caption uppercase tracking-wider text-sage">
        Journal
      </p>
      <h1 className="mt-4 max-w-prose text-display-lg text-ink">
        Notes on the work as we do it.
      </h1>
      <p className="mt-6 max-w-prose text-body text-ink/70">
        Short, specific pieces — not a marketing blog. Written when we have
        something worth saying, not on a schedule.
      </p>

      <ul className="mt-16 border-t border-rule">
        {JOURNAL_POSTS.map((post) => (
          <li key={post.slug} className="border-b border-rule">
            <Link href={`/journal/${post.slug}`} className="group block py-8">
              <div className="flex items-center gap-4 font-mono text-caption uppercase tracking-wider text-ink-muted">
                <span>{post.category}</span>
                <span aria-hidden="true">·</span>
                <span>{formatDate(post.date)}</span>
                <span aria-hidden="true">·</span>
                <span>{post.readingTime}</span>
              </div>
              <h2 className="mt-3 text-2xl font-display text-ink transition-colors duration-200 group-hover:text-walnut">
                {post.title}
              </h2>
              <p className="mt-2 max-w-prose text-body text-ink/70">
                {post.excerpt}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
