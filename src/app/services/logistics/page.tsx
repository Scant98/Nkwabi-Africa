import Image from "next/image";
import Link from "next/link";
import { ScrollRevealWrapper } from "@/components/common/ScrollRevealWrapper";
import { SectionLabel } from "@/components/common/SectionLabel";
import { GoldDivider } from "@/components/common/GoldDivider";
import { Button } from "@/components/ui/button";
import {
  CheckCircle, Navigation, Truck, Warehouse, ShieldCheck, ArrowLeft, ArrowRight, MapPin,
} from "lucide-react";
import logi1 from "@/components/images/logi1.jpeg";
import logi2 from "@/components/images/logi2.jpeg";
import logi3 from "@/components/images/logi3.jpeg";

const highlights = [
  { icon: Navigation, label: "Coverage", value: "Nationwide + Cross-border" },
  { icon: Truck, label: "Fleet", value: "Heavy cargo & temperature-controlled" },
  { icon: Warehouse, label: "Storage", value: "Hazmat & cold storage" },
  { icon: ShieldCheck, label: "Compliance", value: "TRA & customs cleared" },
];

const coverage = [
  { area: "Dar es Salaam", detail: "Main port logistics, freight forwarding, and container handling" },
  { area: "Mwanza & Geita", detail: "Mining sector transport specialists and equipment movement" },
  { area: "Arusha & Kilimanjaro", detail: "Agricultural produce transport from Northern highlands" },
  { area: "Cross-border Routes", detail: "Kenya, Uganda, Rwanda, Zambia, and DRC corridors" },
];

const process = [
  { step: "01", title: "Cargo Assessment", desc: "Understanding your cargo type, volume, dimensions, and any special handling requirements (HAZMAT, temperature control, oversize)." },
  { step: "02", title: "Route Planning", desc: "Optimal route selection considering Tanzania's road network, regulatory checkpoints, and cross-border requirements." },
  { step: "03", title: "Documentation", desc: "Full customs, TRA compliance, and cross-border documentation preparation by our in-house regulatory team." },
  { step: "04", title: "Dispatch & Tracking", desc: "Fleet dispatch with real-time GPS tracking and client-facing reporting throughout the journey." },
  { step: "05", title: "Delivery & Confirmation", desc: "Confirmed delivery with signed proof of delivery documentation and post-trip reporting." },
];

const capabilities = [
  "Fleet management and cargo transportation",
  "Cross-border logistics to neighboring countries",
  "Temperature-controlled and hazmat warehousing",
  "Customs clearance and documentation",
  "Real-time tracking and reporting",
  "Mining equipment movement specialists",
];

export default function LogisticsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-end overflow-clip">
        <Image
          src={logi3}
          alt="Nkwabi Africa Logistics"
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
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Nationwide Coverage</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 max-w-4xl">
            <span className="text-gold-gradient">Logistics</span> &amp; Supply Chain
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl">
            Reliable end-to-end transportation and supply chain management across Tanzania and beyond — built for mining, agriculture, and industry.
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
                Tanzania&apos;s Demanding Terrain, Covered
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our logistics division provides end-to-end transportation and supply chain management tailored to the unique demands of Tanzania&apos;s mining, agriculture, and industrial sectors. We cover the full country and extend into neighbouring East African nations.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From heavy mining equipment to temperature-sensitive agricultural produce and HAZMAT-regulated mining chemicals — our fleet and operational expertise handles the most demanding cargo requirements.
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
                  <Image src={logi1} alt="Logistics fleet" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs font-semibold text-white/90 uppercase tracking-widest bg-black/35 px-2 py-1 rounded-full backdrop-blur-sm">Fleet</span>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-square">
                  <Image src={logi2} alt="Warehousing" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="20vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs font-semibold text-white/90 uppercase tracking-widest bg-black/35 px-2 py-1 rounded-full backdrop-blur-sm">Warehousing</span>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-square">
                  <Image src={logi3} alt="Cross-border routes" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="20vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs font-semibold text-white/90 uppercase tracking-widest bg-black/35 px-2 py-1 rounded-full backdrop-blur-sm">Cross-border</span>
                  </div>
                </div>
              </div>
            </ScrollRevealWrapper>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-24 lg:py-32 bg-background-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealWrapper className="mb-16">
            <SectionLabel>Where We Operate</SectionLabel>
            <h2 className="text-4xl font-bold text-foreground mb-4">Service Coverage</h2>
            <p className="text-muted-foreground max-w-xl">
              From port to mine site — we know Tanzania&apos;s roads, regulations, and requirements.
            </p>
          </ScrollRevealWrapper>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coverage.map((item, i) => (
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
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Logistics Process</h2>
            <p className="text-muted-foreground max-w-xl">
              Every shipment follows a structured, transparent process with real-time visibility.
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
            <h2 className="text-4xl font-bold text-foreground mb-4">Need a Logistics Partner in Tanzania?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Whether you need a one-off shipment or an ongoing supply chain partner — our team is ready to scope a solution for you.
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
