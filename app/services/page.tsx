import type { Metadata } from "next";
import { ServicesPageContent } from "@/components/ServicesPageContent";

export const metadata: Metadata = {
  title: "Services",
  description: "Branding, design, and development services from Velvex Labs.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
