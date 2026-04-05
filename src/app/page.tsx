import { HeroSection } from "@/components/sections/home/HeroSection";
import { BusinessAreasSection } from "@/components/sections/home/BusinessAreasSection";
import { StatsSection } from "@/components/sections/home/StatsSection";
import { MissionVisionSection } from "@/components/sections/home/MissionVisionSection";
import { ValuesSection } from "@/components/sections/home/ValuesSection";
import { HomeCTASection } from "@/components/sections/home/HomeCTASection";
import { MarqueeStrip } from "@/components/common/MarqueeStrip";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nkwabi Africa Company Limited | Gold Mining, Agriculture & Logistics",
  description: "A diversified Tanzanian company driving sustainable growth through gold mining, agriculture, logistics, and chemicals. Headquartered in Kahama, Shinyanga.",
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
