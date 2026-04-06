import Image from "next/image";
import Link from "next/link";
import { ScrollRevealWrapper } from "@/components/common/ScrollRevealWrapper";
import { SectionLabel } from "@/components/common/SectionLabel";
import { GoldDivider } from "@/components/common/GoldDivider";
import { Button } from "@/components/ui/button";
import {
  CheckCircle, MapPin, Coffee, FileText, Globe, ArrowLeft, ArrowRight, Users,
} from "lucide-react";
import agro1 from "@/components/images/agro1.jpeg";
import agro2 from "@/components/images/agro2.jpeg";
import coffee1 from "@/components/images/coffee 1.jpeg";
import coffee2 from "@/components/images/coffee2.jpeg";

const highlights = [
  { icon: MapPin, label: "Key Coffee Regions", value: "Kilimanjaro, Mbeya, Kagera" },
  { icon: Coffee, label: "Coffee Types", value: "Arabica & Natural Robusta" },
  { icon: FileText, label: "Compliance", value: "TCB & AMCOS Certified" },
  { icon: Globe, label: "Export Markets", value: "Europe & Asia" },
];

const regions = [
  { name: "Kilimanjaro Region", type: "Arabica", altitude: "1,400 – 1,800m", notes: "Washed process, bright acidity, floral notes" },
  { name: "Mbeya Region", type: "Arabica", altitude: "1,500 – 2,200m", notes: "Fully washed, complex, fruity and wine-like" },
  { name: "Kagera Region", type: "Robusta", altitude: "1,100 – 1,600m", notes: "Natural process, bold body, earthy flavors" },
  { name: "Kigoma Region", type: "Robusta", altitude: "900 – 1,400m", notes: "Natural Robusta, strong cup, low acidity" },
];

const process = [
  { step: "01", title: "Sourcing", desc: "Direct connections with AMCOS cooperatives and licensed processors to identify quality lots at origin." },
  { step: "02", title: "Quality Assessment", desc: "Grading by moisture content, screen size, and cupping profile to meet international buyer specifications." },
  { step: "03", title: "Processing", desc: "Milling and sorting at TCB-licensed facilities under strict regulatory oversight and traceability protocols." },
  { step: "04", title: "Export Documentation", desc: "All necessary paperwork — phytosanitary, grading certificates, and customs documentation — prepared and verified." },
  { step: "05", title: "Shipment", desc: "Container booking and vessel scheduling to buyer destinations across Europe and Asia." },
];

const capabilities = [
  "Coffee (Arabica & Robusta) export sourcing",
  "Maize and beans farming & processing",
  "International market connections (Europe, Asia)",
  "Farmer cooperative (AMCOS) partnerships",
  "Sustainable farming practice training",
  "TCB-compliant export documentation",
];

export default function AgriculturePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-end overflow-clip">
        <Image
          src={agro1}
          alt="Agriculture and Coffee Export"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32 w-full">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Export Ready</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 max-w-4xl">
            Agriculture &amp; <span className="text-gold-gradient">Coffee Export</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl">
            From Tanzania&apos;s fertile highlands to international markets — connecting quality producers with global buyers.
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollRevealWrapper direction="left">
              <SectionLabel>Overview</SectionLabel>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                From Farm to International Market
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We work at the heart of the Tanzanian coffee trade and broader agricultural sector, connecting international buyers with reliable sources of high-quality green coffee and other export crops directly from origin.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our work spans the full value chain — from farmer training and cooperative partnerships all the way to container loading at Dar es Salaam port, ensuring traceability, quality, and compliance at every step.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {capabilities.map((c) => (
                  <div key={c} className="flex items-start gap-3 bg-card border border-border rounded-xl p-3">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground leading-snug">{c}</span>
                  </div>
                ))}
              </div>
            </ScrollRevealWrapper>

            <ScrollRevealWrapper direction="right">
              <div className="grid grid-cols-2 gap-3">
                <div className="row-span-2 relative rounded-2xl overflow-hidden min-h-[320px]">
                  <Image src={coffee1} alt="Coffee farming" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs font-semibold text-white/90 uppercase tracking-widest bg-black/35 px-2 py-1 rounded-full backdrop-blur-sm">Coffee</span>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-square">
                  <Image src={agro2} alt="Agricultural processing" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="20vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs font-semibold text-white/90 uppercase tracking-widest bg-black/35 px-2 py-1 rounded-full backdrop-blur-sm">Processing</span>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-square">
                  <Image src={coffee2} alt="Export ready" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="20vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs font-semibold text-white/90 uppercase tracking-widest bg-black/35 px-2 py-1 rounded-full backdrop-blur-sm">Export</span>
                  </div>
                </div>
              </div>
            </ScrollRevealWrapper>
          </div>
        </div>
      </section>

      {/* Growing Regions */}
      <section className="py-24 lg:py-32 bg-background-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealWrapper className="mb-16">
            <SectionLabel>Origin</SectionLabel>
            <h2 className="text-4xl font-bold text-foreground mb-4">Growing Regions</h2>
            <p className="text-muted-foreground max-w-xl">
              Tanzania&apos;s diverse geography produces coffees with distinct and sought-after flavor profiles.
            </p>
          </ScrollRevealWrapper>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {regions.map((region, i) => (
              <ScrollRevealWrapper key={region.name} direction="up" delay={i * 0.1}>
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors h-full">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-foreground">{region.name}</h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{region.type}</span>
                  </div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">{region.altitude}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{region.notes}</p>
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
            <h2 className="text-4xl font-bold text-foreground mb-4">Export Process</h2>
            <p className="text-muted-foreground max-w-xl">
              A transparent, fully documented process from cooperative to container.
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

      {/* Community */}
      <section className="py-24 lg:py-32 bg-background-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollRevealWrapper direction="left">
              <SectionLabel>Community Impact</SectionLabel>
              <h2 className="text-4xl font-bold text-foreground mb-6">Supporting Tanzania&apos;s Farmers</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We work directly with AMCOS (Agricultural Marketing Co-operative Societies) farmer cooperatives, providing training in sustainable farming, post-harvest handling, and quality management to help smallholders access premium international markets.
              </p>
              <div className="flex gap-6">
                <div className="border-l-2 border-primary pl-4">
                  <div className="text-3xl font-bold text-primary">AMCOS</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Certified Cooperative Partner</div>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="text-3xl font-bold text-primary">TCB</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Tanzania Coffee Board Compliant</div>
                </div>
              </div>
            </ScrollRevealWrapper>
            <ScrollRevealWrapper direction="right">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <Image src={agro2} alt="Farmer community" fill className="object-cover" sizes="50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-white text-sm font-medium">Working with local cooperatives</span>
                </div>
              </div>
            </ScrollRevealWrapper>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollRevealWrapper>
            <SectionLabel>Work With Us</SectionLabel>
            <h2 className="text-4xl font-bold text-foreground mb-4">Ready to Source from Tanzania?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Whether you&apos;re an international coffee buyer, agricultural importer, or investor — we&apos;re ready to discuss a long-term sourcing partnership.
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
