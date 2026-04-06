import Image from "next/image";
import Link from "next/link";
import { ScrollRevealWrapper } from "@/components/common/ScrollRevealWrapper";
import { SectionLabel } from "@/components/common/SectionLabel";
import { GoldDivider } from "@/components/common/GoldDivider";
import { Button } from "@/components/ui/button";
import { ChemicalHero } from "@/components/sections/services/ChemicalHero";
import {
  CheckCircle, ShieldCheck, Package, AlertTriangle, Globe, ArrowRight,
} from "lucide-react";
import chemi1 from "@/components/images/chemi1.jpeg";
import chemi2 from "@/components/images/chemi2.jpeg";
import chemi3 from "@/components/images/chemi3.jpeg";
import chemi4 from "@/components/images/chemi4.jpeg";
import safety from "@/components/images/safety.jpg";

const highlights = [
  { icon: ShieldCheck, label: "Safety Standard", value: "ISO 45001 & MSDS Certified" },
  { icon: Package, label: "Core Products", value: "Sodium Cyanide, Activated Carbon" },
  { icon: AlertTriangle, label: "Handling", value: "HAZMAT certified logistics" },
  { icon: Globe, label: "Sourcing", value: "International manufacturers" },
];

const products = [
  {
    name: "Sodium Cyanide",
    tag: "Leaching Reagent",
    use: "Gold leaching reagent for CIL/CIP processing circuits",
    detail: "Supplied in solid briquette form with full MSDS documentation and HAZMAT-certified delivery. Sourced from internationally certified manufacturers meeting global safety standards.",
    specs: ["Form: Solid briquettes", "Standard: ISO / ICMI certified", "Delivery: HAZMAT fleet"],
    image: chemi1,
  },
  {
    name: "Activated Carbon",
    tag: "Gold Recovery",
    use: "Gold adsorption and recovery from pregnant leach solutions",
    detail: "High-activity carbon grades for CIL, CIP, and CIC gold recovery circuits. Sourced from reputable international manufacturers with consistent activity and hardness specifications.",
    specs: ["Form: Granular", "Activity: High-grade", "Reactivation: Supported"],
    image: chemi2,
  },
  {
    name: "Hydrated Lime",
    tag: "pH Control",
    use: "pH control and cyanide detoxification in tailings management",
    detail: "Available in bulk or bagged form with consistent purity specifications. Essential for maintaining protective alkalinity in cyanide circuits and for cyanide detoxification.",
    specs: ["Form: Powder / Bulk", "Purity: High calcium", "Application: pH & detox"],
    image: chemi3,
  },
  {
    name: "Hydrogen Peroxide",
    tag: "Tailings Treatment",
    use: "Cyanide destruction and tailings treatment",
    detail: "Industrial-grade solution used in cyanide destruction processes in tailings ponds. Supplied with full handling documentation and delivered by trained personnel.",
    specs: ["Form: Liquid solution", "Grade: Industrial", "Compliance: NEMC approved"],
    image: chemi4,
  },
  {
    name: "Safety & PPE",
    tag: "Site Protection",
    use: "Respiratory protection, chemical suits, and site safety equipment",
    detail: "Full range of site-appropriate personal protective equipment for chemical handling — including respirators, chemical protective suits, gloves, eye protection, and emergency response kits.",
    specs: ["Standards: CE / ANSI", "Coverage: Full-body protection", "Training: Included"],
    image: safety,
  },
];

const process = [
  { step: "01", title: "Product Specification", desc: "We work with your technical team to confirm the exact grade, purity, and quantity requirements for your operation." },
  { step: "02", title: "International Sourcing", desc: "Products are sourced from vetted, reputable international manufacturers with full regulatory approvals." },
  { step: "03", title: "Import & Clearance", desc: "Our team manages all import documentation, regulatory approvals, and Tanzania customs clearance." },
  { step: "04", title: "HAZMAT Transport", desc: "HAZMAT-certified drivers and vehicles transport chemicals to your site with all required permits and safety equipment." },
  { step: "05", title: "Delivery & Training", desc: "On-site delivery with MSDS handover and optional staff training on safe handling and emergency response procedures." },
];

const compliance = [
  "Full Material Safety Data Sheet (MSDS) documentation for all products",
  "HAZMAT-certified transport and delivery personnel",
  "Compliant on-site storage consultation and setup",
  "Staff training on safe chemical handling and emergency response",
  "Regulatory compliance with NEMC and TMAA standards",
  "ISO 45001 Occupational Health and Safety certification",
];

export default function ChemicalsPage() {
  return (
    <main>
      <ChemicalHero />

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
                Compliant Supply for Tanzania&apos;s Mining Industry
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We are a regulated supplier of essential chemicals and reagents for Tanzania&apos;s gold mining industry. All products meet international safety standards and are supplied with full MSDS documentation, trained delivery personnel, and compliant storage solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our deep understanding of Tanzania&apos;s regulatory environment — including NEMC and TMAA requirements — ensures your operation stays compliant while receiving products on schedule.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {compliance.map((c) => (
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
                  <Image src={chemi1} alt="Chemical supply" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs font-semibold text-white/90 uppercase tracking-widest bg-black/35 px-2 py-1 rounded-full backdrop-blur-sm">Supply</span>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-square">
                  <Image src={chemi2} alt="Safety equipment" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="20vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs font-semibold text-white/90 uppercase tracking-widest bg-black/35 px-2 py-1 rounded-full backdrop-blur-sm">Safety</span>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-square">
                  <Image src={chemi4} alt="Compliant storage" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="20vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs font-semibold text-white/90 uppercase tracking-widest bg-black/35 px-2 py-1 rounded-full backdrop-blur-sm">Storage</span>
                  </div>
                </div>
              </div>
            </ScrollRevealWrapper>
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-24 lg:py-32 bg-background-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealWrapper className="mb-16">
            <SectionLabel>What We Supply</SectionLabel>
            <h2 className="text-4xl font-bold text-foreground mb-4">Product Range</h2>
            <p className="text-muted-foreground max-w-xl">
              All products are sourced from certified international manufacturers and supplied with complete documentation.
            </p>
          </ScrollRevealWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <ScrollRevealWrapper key={product.name} direction="up" delay={i * 0.08}>
                <div className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    {/* Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-semibold uppercase tracking-widest text-white/90 bg-primary/80 px-2.5 py-1 rounded-full backdrop-blur-sm">
                        {product.tag}
                      </span>
                    </div>
                    {/* Chemical name overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white leading-tight">{product.name}</h3>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-sm text-primary font-semibold mb-3">{product.use}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{product.detail}</p>

                    {/* Specs */}
                    <div className="border-t border-border pt-4 space-y-2">
                      {product.specs.map((spec) => (
                        <div key={spec} className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span className="text-xs text-foreground">{spec}</span>
                        </div>
                      ))}
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
            <h2 className="text-4xl font-bold text-foreground mb-4">Supply Process</h2>
            <p className="text-muted-foreground max-w-xl">
              From specification to safe site delivery — a fully managed, compliant process.
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

      {/* Safety visual */}
      <section className="py-24 lg:py-32 bg-background-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollRevealWrapper direction="left">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <Image src={safety} alt="Chemical safety" fill className="object-cover" sizes="50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span className="text-white text-sm font-medium">ISO 45001 certified operations</span>
                </div>
              </div>
            </ScrollRevealWrapper>
            <ScrollRevealWrapper direction="right">
              <SectionLabel>Safety First</SectionLabel>
              <h2 className="text-4xl font-bold text-foreground mb-6">Compliance is Non-Negotiable</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The supply of mining chemicals in Tanzania is tightly regulated by NEMC (National Environment Management Council) and TMAA (Tanzania Minerals Audit Agency). Our operations are fully compliant with all current regulatory requirements.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Every delivery is handled by HAZMAT-certified personnel, and we provide comprehensive staff training to ensure safe handling at your site.
              </p>
              <div className="flex gap-6">
                <div className="border-l-2 border-primary pl-4">
                  <div className="text-3xl font-bold text-primary">NEMC</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Compliant operations</div>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="text-3xl font-bold text-primary">TMAA</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Audit agency approved</div>
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
            <h2 className="text-4xl font-bold text-foreground mb-4">Need a Reliable Chemical Supplier?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Contact our team to discuss your chemical supply requirements, get product specifications, or arrange a site consultation.
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
