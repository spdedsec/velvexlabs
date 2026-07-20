import type { MetadataRoute } from "next";
import { PROJECTS } from "@/lib/projects";
import { JOURNAL_POSTS } from "@/lib/journal";

const BASE_URL = "https://velvexlabs.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/work",
    "/services",
    "/about",
    "/process",
    "/journal",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const projectRoutes = PROJECTS.filter((p) => p.caseStudy).map((p) => ({
    url: `${BASE_URL}/work/${p.slug}`,
    lastModified: new Date(),
  }));

  const journalRoutes = JOURNAL_POSTS.map((p) => ({
    url: `${BASE_URL}/journal/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [...staticRoutes, ...projectRoutes, ...journalRoutes];
}
