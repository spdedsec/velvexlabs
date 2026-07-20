import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS, getProject } from "@/lib/projects";
import { CaseStudyTemplate } from "@/components/work/CaseStudyTemplate";

export function generateStaticParams() {
  return PROJECTS.filter((p) => p.caseStudy).map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.tagline,
  };
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);
  if (!project || !project.caseStudy) notFound();

  return (
    <>
      <CaseStudyTemplate project={project} />
      <div className="mx-auto max-w-4xl px-6 pb-24 lg:px-0">
        <Link
          href="/work"
          className="font-mono text-caption uppercase tracking-wider text-ink-muted underline decoration-rule underline-offset-4 transition-colors duration-200 hover:text-walnut hover:decoration-walnut"
        >
          ← Back to all work
        </Link>
      </div>
    </>
  );
}
