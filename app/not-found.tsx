import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-4xl flex-col justify-center px-6 lg:px-0">
      <p className="font-mono text-caption uppercase tracking-wider text-sage">
        404
      </p>
      <h1 className="mt-4 max-w-prose text-display-lg text-ink">
        Nothing here.
      </h1>
      <p className="mt-6 max-w-prose text-body-lg text-ink/70">
        Either the page moved, or it never existed. Worth double-checking the
        link, or starting over from the homepage.
      </p>
      <div className="mt-10">
        <Link
          href="/"
          className="inline-flex items-center border border-ink px-6 py-3 font-mono text-caption uppercase tracking-wider text-ink transition-colors duration-200 hover:bg-ink hover:text-paper"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
