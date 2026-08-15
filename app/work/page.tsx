import type { Metadata } from "next";
import { WorkIndexContent } from "@/components/WorkIndexContent";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies from Velvex Labs — brand identity, web design, and development.",
};

export default function WorkIndexPage() {
  return <WorkIndexContent />;
}
