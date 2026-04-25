import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { BusinessAreasSection } from "@/components/sections/home/BusinessAreasSection";
import { StatsSection } from "@/components/sections/home/StatsSection";
import { MissionVisionSection } from "@/components/sections/home/MissionVisionSection";
import { ValuesSection } from "@/components/sections/home/ValuesSection";
import { HomeCTASection } from "@/components/sections/home/HomeCTASection";
import { MarqueeStrip } from "@/components/common/MarqueeStrip";

export const metadata: Metadata = {
  title: "Nkwabi Africa Company Limited | Tanzania",
  description: "Nkwabi Africa Company Limited — based in Kahama, Shinyanga, Tanzania. Gold mining, coffee agriculture, logistics and mining chemicals.",
  alternates: { canonical: "https://nkwabiafrica.co.tz" },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <MarqueeStrip />
      <BusinessAreasSection />
      <StatsSection />
      <MarqueeStrip />
      <MissionVisionSection />
      <ValuesSection />
      <HomeCTASection />
    </main>
  );
}
