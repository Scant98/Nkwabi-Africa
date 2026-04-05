import Image from "next/image";
import { FadeIn } from "@/components/common/FadeIn";
import { ScrollRevealWrapper } from "@/components/common/ScrollRevealWrapper";
import { SectionLabel } from "@/components/common/SectionLabel";
import { AnimatedText } from "@/components/common/AnimatedText";
import { GoldDivider } from "@/components/common/GoldDivider";
import { Shield, Lightbulb, Leaf, Users, MapPin, CheckCircle } from "lucide-react";
import coffee1 from "@/components/images/coffee 1.jpeg";
import agro1 from "@/components/images/agro1.jpeg";
import logi2 from "@/components/images/logi2.jpeg";
import chemi2 from "@/components/images/chemi2.jpeg";

const values = [
  { icon: Shield, title: "Integrity", desc: "Operating with transparency and ethics in every transaction and partnership." },
  { icon: Lightbulb, title: "Innovation", desc: "Embracing technology and innovation to drive growth and sustainability." },
  { icon: Leaf, title: "Sustainability", desc: "Prioritizing environmental and social responsibility across all operations." },
  { icon: Users, title: "Community Engagement", desc: "Supporting local communities, artisanal miners, and smallholder farmers." },
];

const achievements = [
  "ISO 14001 Environmental Management Certification",
  "ISO 45001 Occupational Health and Safety",
  "Responsible mining practices across all extraction sites",
  "Partnerships with international buyers in Europe and Asia",
  "Support of Tanzania Coffee Board export regulations",
  "Active engagement with AMCOS farmer cooperatives",
];

export default function AboutPage() {
  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-background-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/5" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>About Us</SectionLabel>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 max-w-4xl">
              Built on the{" "}
              <span className="text-gold-gradient">Heart of Africa</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Nkwabi Africa Company Limited is a Tanzanian-based company with a diversified portfolio of businesses in gold mining & trading, agriculture, logistics, and mining chemicals.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollRevealWrapper direction="left">
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                A Vision to Drive Sustainable Growth in Africa
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Established with a vision to drive sustainable growth and prosperity in Africa, Nkwabi Africa leverages deep expertise and strategic partnerships to create value for stakeholders while contributing meaningfully to local communities.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Headquartered in Kahama, Shinyanga — a hub of Tanzania&apos;s mining activity — we operate across Geita, Mwanza, Dar es Salaam, and maintain international connections in Dubai and Johannesburg.
              </p>
              <div className="flex flex-col gap-3">
                {["Geita & Mwanza — Mining Operations", "Dar es Salaam — Export & Logistics Hub", "International offices — Dubai & Johannesburg"].map((loc) => (
                  <div key={loc} className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm text-foreground">{loc}</span>
                  </div>
                ))}
              </div>
            </ScrollRevealWrapper>

            <ScrollRevealWrapper direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { src: coffee1, label: "Coffee & Agriculture" },
                  { src: agro1, label: "Agriculture & Export" },
                  { src: logi2, label: "Logistics Solutions" },
                  { src: chemi2, label: "Mining Chemicals" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer"
                  >
                    <Image
                      src={item.src}
                      alt={item.label}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-white text-xs font-semibold leading-tight">{item.label}</p>
                    </div>
                    <div className="absolute top-3 left-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                  </div>
                ))}
              </div>
            </ScrollRevealWrapper>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-background-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealWrapper>
            <SectionLabel>Our Values</SectionLabel>
            <AnimatedText text="The Principles That Guide Us" tag="h2" className="text-4xl sm:text-5xl font-bold text-foreground mb-4" />
            <p className="text-muted-foreground max-w-xl mb-16">Every decision at Nkwabi Africa is guided by four core principles.</p>
          </ScrollRevealWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <ScrollRevealWrapper key={val.title} direction="up" delay={i * 0.1}>
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <val.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{val.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
                </div>
              </ScrollRevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollRevealWrapper direction="left">
              <SectionLabel>Achievements</SectionLabel>
              <h2 className="text-4xl font-bold text-foreground mb-6">Committed to Excellence & Responsibility</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our achievements reflect our commitment to operating at the highest standards of environmental, safety, and business excellence.
              </p>
            </ScrollRevealWrapper>
            <ScrollRevealWrapper direction="right">
              <ul className="space-y-4">
                {achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollRevealWrapper>
          </div>
        </div>
      </section>

      <GoldDivider className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16" />
    </main>
  );
}
