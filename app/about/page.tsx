import type { Metadata } from "next";
import { AboutPageContent } from "@/components/AboutPageContent";

export const metadata: Metadata = {
  title: "About",
  description: "Velvex Labs is a small studio built around craftsmanship and thoughtful engineering.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
