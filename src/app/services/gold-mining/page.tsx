import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Gold Mining & Trading",
  description: "Nkwabi Africa operates responsible gold mining and trading in Kahama and Geita, Tanzania. Licensed gold exporter and mineral trader.",
  alternates: { canonical: "https://nkwabiafrica.co.tz/services/gold-mining" },
};
import Image from "next/image";
import Link from "next/link";
import { ScrollRevealWrapper } from "@/components/common/ScrollRevealWrapper";
import { SectionLabel } from "@/components/common/SectionLabel";
import { GoldDivider } from "@/components/common/GoldDivider";
import { Button } from "@/components/ui/button";
import {
  CheckCircle, MapPin, Mountain, ShieldCheck, Globe, ArrowLeft, ArrowRight,
} from "lucide-react";
import gold2 from "@/components/images/gold2.jpg";

const highlights = [
  { icon: MapPin, label: "Primary Regions", value: "Geita & Mwanza" },
  { icon: Mountain, label: "Operation Type", value: "Open-pit & ASM" },
  { icon: ShieldCheck, label: "Certifications", value: "ISO 14001 & 45001" },
  { icon: Globe, label: "Export Markets", value: "Dubai & Johannesburg" },
];

const operationalAreas = [
  { area: "Geita Region", detail: "Primary extraction zone — open-pit and underground operations" },
  { area: "Mwanza Region", detail: "ASM partnership hub and gold buying centre" },
  { area: "Lake Victoria Zone", detail: "Artisanal mining support, training, and formalisation" },
  { area: "Dar es Salaam", detail: "Export processing, assay and international trading office" },
];

const process = [
  { step: "01", title: "Exploration", desc: "Geological surveys and resource assessment using modern mapping and sampling technology." },
  { step: "02", title: "Extraction", desc: "Responsible extraction with minimal land disturbance following best-practice environmental protocols." },
  { step: "03", title: "Processing", desc: "On-site gold processing and refining with full environmental management controls in place." },
  { step: "04", title: "Assay & Certification", desc: "Independent quality assurance, assay certification, and documentation for international trade." },
  { step: "05", title: "Trading & Export", desc: "Secure transport and international trading through established channels in Dubai and Johannesburg." },
];

const capabilities = [
  "Exploration and extraction in Geita & Mwanza regions",
  "Partnerships with local artisanal miners (ASM)",
  "Gold buying and international trading",
  "Environmental impact monitoring & reporting",
  "Community development programs",
  "ISO 14001 & ISO 45001 compliance",
];


export default function GoldMiningPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-end overflow-clip">
        <Image
          src={gold2}
          alt="Gold Mining Operations"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-primary via-primary/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32 w-full">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Core Business</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 max-w-4xl">
            Gold Mining <span className="text-gold-gradient">&amp; Trading</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl">
            Responsible extraction from Tanzania&apos;s richest mineral regions — powering growth while protecting communities and the environment.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border">
            {highlights.map((h) => (
              <div key={h.label} className="px-8 py-8 flex flex-col gap-2">
                <h.icon className="w-5 h-5 text-primary mb-1" />
                <p className="text-xs text-muted-foreground uppercase tracking-widest">{h.label}</p>
                <p className="font-bold text-foreground">{h.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealWrapper direction="up">
            <SectionLabel>Overview</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight max-w-3xl">
              Mining Africa&apos;s Gold, Responsibly
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5 max-w-3xl">
              Nkwabi Africa operates across Tanzania&apos;s premier gold belt, combining modern extraction techniques with responsible community practices. We work with both large-scale operations and artisanal miners (ASM) to ensure inclusive economic benefit.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-3xl">
              Our commitment to the ISO 14001 environmental management standard and ISO 45001 occupational health and safety standard underpins every phase of our operations — from initial exploration through to international export.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {capabilities.map((c) => (
                <div key={c} className="flex items-start gap-3 bg-card border border-border rounded-xl p-3">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground leading-snug">{c}</span>
                </div>
              ))}
            </div>
          </ScrollRevealWrapper>
        </div>
      </section>

      {/* Operational Areas */}
      <section className="py-24 lg:py-32 bg-background-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealWrapper className="mb-16">
            <SectionLabel>Where We Operate</SectionLabel>
            <h2 className="text-4xl font-bold text-foreground mb-4">Operational Areas</h2>
            <p className="text-muted-foreground max-w-xl">
              Our operations are concentrated in Tanzania&apos;s most productive gold-bearing regions.
            </p>
          </ScrollRevealWrapper>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {operationalAreas.map((item, i) => (
              <ScrollRevealWrapper key={item.area} direction="up" delay={i * 0.1}>
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{item.area}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                </div>
              </ScrollRevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealWrapper className="mb-16">
            <SectionLabel>How We Work</SectionLabel>
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Mining Process</h2>
            <p className="text-muted-foreground max-w-xl">
              From first survey to final export — every step is governed by responsible practice.
            </p>
          </ScrollRevealWrapper>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-border hidden sm:block" />
            <div className="space-y-8">
              {process.map((step, i) => (
                <ScrollRevealWrapper key={step.step} direction="left" delay={i * 0.08}>
                  <div className="flex gap-6 items-start">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 relative z-10 text-primary-foreground text-xs font-bold">
                      {step.step}
                    </div>
                    <div className="bg-card border border-border rounded-2xl p-6 flex-1 hover:border-primary/40 transition-colors">
                      <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </ScrollRevealWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollRevealWrapper>
            <SectionLabel>Work With Us</SectionLabel>
            <h2 className="text-4xl font-bold text-foreground mb-4">Interested in Our Mining Operations?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Whether you&apos;re a buyer, investor, or potential partner — reach out to discuss how Nkwabi Africa can create value for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:opacity-90 gap-2">
                <Link href="/contact">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </ScrollRevealWrapper>
        </div>
      </section>

      <GoldDivider className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16" />
    </main>
  );
}
