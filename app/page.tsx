import { RunningHead } from "@/components/RunningHead";
import { Hero } from "@/components/Hero";
import { DisciplineSection } from "@/components/DisciplineSection";
import { EvidenceSection } from "@/components/EvidenceSection";
import { HOME_SECTIONS } from "@/lib/sections";

export default function HomePage() {
  return (
    <>
      <RunningHead sections={HOME_SECTIONS} />
      <main>
        <section id="intro">
          <Hero />
        </section>
        <DisciplineSection />
        <EvidenceSection />
      </main>
    </>
  );
}
