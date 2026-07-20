import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JOURNAL_POSTS, getJournalPost } from "@/lib/journal";

export function generateStaticParams() {
  return JOURNAL_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getJournalPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function JournalPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getJournalPost(params.slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Velvex Labs",
    },
  };

  return (
    <main className="mx-auto max-w-prose px-6 pb-32 pt-16 lg:px-0 lg:pt-24">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="flex items-center gap-4 font-mono text-caption uppercase tracking-wider text-ink-muted">
        <span>{post.category}</span>
        <span aria-hidden="true">·</span>
        <span>{formatDate(post.date)}</span>
        <span aria-hidden="true">·</span>
        <span>{post.readingTime}</span>
      </div>

      <h1 className="mt-4 text-display-md text-ink">{post.title}</h1>

      <div className="mt-12 space-y-6 border-t border-rule pt-10 text-body-lg leading-[1.75] text-ink/80">
        {post.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-16 border-t border-rule pt-10">
        <Link
          href="/journal"
          className="font-mono text-caption uppercase tracking-wider text-ink-muted underline decoration-rule underline-offset-4 transition-colors duration-200 hover:text-walnut hover:decoration-walnut"
        >
          ← Back to Journal
        </Link>
      </div>
    </main>
  );
}
