import Image from "next/image";
import { FadeIn } from "@/components/common/FadeIn";
import coffee1 from "@/components/images/coffee 1.jpeg";
import coffee2 from "@/components/images/coffee2.jpeg";
import { ScrollRevealWrapper } from "@/components/common/ScrollRevealWrapper";
import { SectionLabel } from "@/components/common/SectionLabel";
import { AnimatedText } from "@/components/common/AnimatedText";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, MapPin, Coffee, Globe, FileText, Users, Truck } from "lucide-react";
import Link from "next/link";

const offerings = [
  { icon: MapPin, title: "Direct Origin Access", desc: "Direct connections to Tanzanian green coffee producers across key growing regions." },
  { icon: Coffee, title: "Robusta & Arabica", desc: "Reliable sourcing of both Natural Robusta and Fully Washed Arabica grades." },
  { icon: FileText, title: "Transparent Documentation", desc: "Full supply chain transparency with all required export documentation." },
  { icon: Truck, title: "Export Logistics", desc: "Complete logistics coordination from farm gate to export vessel." },
  { icon: Globe, title: "TCB Compliance", desc: "All exports coordinated in compliance with Tanzania Coffee Board regulations." },
  { icon: Users, title: "Long-term Partnerships", desc: "We build trusted, multi-season relationships with suppliers and buyers alike." },
];

const regions = [
  { name: "Kilimanjaro Region", type: "Arabica", altitude: "1,400 – 1,800m", notes: "Washed process, bright acidity, floral notes" },
  { name: "Mbeya Region", type: "Arabica", altitude: "1,500 – 2,200m", notes: "Fully washed, complex, fruity and wine-like" },
  { name: "Kagera Region", type: "Robusta", altitude: "1,100 – 1,600m", notes: "Natural process, bold body, earthy flavors" },
  { name: "Kigoma Region", type: "Robusta", altitude: "900 – 1,400m", notes: "Natural Robusta, strong cup, low acidity" },
];

const processSteps = [
  { step: "01", title: "Sourcing", desc: "We work directly with AMCOS cooperatives and processors to identify quality lots." },
  { step: "02", title: "Quality Assessment", desc: "Each lot is assessed for grade, moisture, and cupping profile before purchase." },
  { step: "03", title: "Processing", desc: "Coffee is processed at licensed facilities under TCB oversight." },
  { step: "04", title: "Export Preparation", desc: "Documentation, grading, and preparation through licensed Dar es Salaam warehouses." },
  { step: "05", title: "Shipment", desc: "Direct coordination of container booking and vessel scheduling to buyer destinations." },
];

export default function CoffeePage() {
  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-background-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/15 to-primary/5" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">
            <FadeIn>
              <SectionLabel>Coffee Trading</SectionLabel>
              <h1 className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 max-w-4xl">
                From Tanzania&apos;s Highlands{" "}
                <span className="text-gold-gradient">to the World</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
                We work at the heart of the Tanzanian coffee trade, connecting international buyers with reliable sources of high-quality green coffee directly from origin.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:opacity-90 gap-2">
                  <Link href="/contact">
                    Request Coffee Samples
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-border hover:border-primary">
                  <Link href="/contact">Become a Buyer Partner</Link>
                </Button>
              </div>
            </FadeIn>

            {/* Hero image */}
            <FadeIn delay={0.3}>
              <div className="relative hidden lg:block">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border border-border/40">
                  <Image
                    src={coffee1}
                    alt="Tanzanian coffee from origin"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 50vw, 600px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 bg-background/90 backdrop-blur-sm rounded-2xl px-4 py-3 border border-border/60 shadow-lg">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-sm font-medium text-foreground">Direct from Tanzanian Origin</span>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-primary rounded-2xl px-4 py-3 shadow-xl rotate-3">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary-foreground leading-none">TCB</div>
                    <div className="text-[10px] text-primary-foreground/80 uppercase tracking-widest">Certified</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollRevealWrapper direction="left">
              <SectionLabel>Our Role</SectionLabel>
              <h2 className="text-4xl font-bold text-foreground mb-6">Your Trusted Tanzanian Coffee Partner</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With extensive experience in sourcing, logistics coordination, and export preparation, we help ensure that Tanzanian coffee moves efficiently from farmers to global markets.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Working closely with farmer cooperatives (AMCOS), processors, and exporters, we specialize in both Natural Robusta and Fully Washed Arabica coffees from Tanzania&apos;s key producing regions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our focus is on maintaining quality, traceability, and consistency while meeting the expectations of international buyers. All export processes are coordinated in compliance with Tanzania Coffee Board regulations.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="gold">Arabica</Badge>
                <Badge variant="gold">Robusta</Badge>
                <Badge variant="outline">TCB Certified</Badge>
                <Badge variant="outline">AMCOS Partnerships</Badge>
              </div>
            </ScrollRevealWrapper>

            <ScrollRevealWrapper direction="right">
              <div className="flex flex-col gap-4">
                {/* Coffee image */}
                <div className="relative rounded-3xl overflow-hidden aspect-[16/9] shadow-lg border border-border/40">
                  <Image
                    src={coffee2}
                    alt="Tanzanian coffee processing"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-semibold text-white/90 uppercase tracking-widest bg-black/35 px-3 py-1.5 rounded-full backdrop-blur-sm">
                      From Farm to Export
                    </span>
                  </div>
                </div>

                {/* Offer list card */}
                <div className="bg-card border border-border rounded-3xl p-6">
                  <h3 className="font-bold text-foreground mb-4 text-base">What We Offer International Buyers</h3>
                  <ul className="space-y-3">
                    {[
                      "Direct access to Tanzanian green coffee producers",
                      "Reliable sourcing of Robusta and Arabica grades",
                      "Transparent supply chain and documentation",
                      "Export logistics coordination and shipment planning",
                      "Long-term partnership with trusted suppliers",
                      "Competitive pricing direct from origin",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollRevealWrapper>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-24 lg:py-28 bg-background-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealWrapper>
            <SectionLabel>Growing Regions</SectionLabel>
            <AnimatedText text="Tanzania's Premier Coffee Regions" tag="h2" className="text-4xl sm:text-5xl font-bold text-foreground mb-4" />
            <p className="text-muted-foreground max-w-xl mb-16">We source from Tanzania&apos;s most celebrated coffee-growing regions, each with distinct terroir and flavor profiles.</p>
          </ScrollRevealWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, i) => (
              <ScrollRevealWrapper key={region.name} direction="up" delay={i * 0.1}>
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:-translate-y-1 transition-all duration-200">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">{region.type}</span>
                  </div>
                  <h4 className="font-bold text-foreground mb-1">{region.name}</h4>
                  <p className="text-sm text-primary mb-3">{region.altitude}</p>
                  <p className="text-sm text-muted-foreground">{region.notes}</p>
                </div>
              </ScrollRevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealWrapper>
            <SectionLabel>Our Process</SectionLabel>
            <AnimatedText text="From Farm to Export Vessel" tag="h2" className="text-4xl sm:text-5xl font-bold text-foreground mb-4" />
            <p className="text-muted-foreground max-w-xl mb-16">A transparent, step-by-step process ensures every shipment meets international buyer standards.</p>
          </ScrollRevealWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, i) => (
              <ScrollRevealWrapper key={step.step} direction="up" delay={i * 0.1}>
                <div className="relative">
                  <div className="text-4xl font-bold text-primary/20 mb-2">{step.step}</div>
                  <h4 className="font-bold text-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  {i < processSteps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-8 -right-3 w-4 h-4 text-primary/30" />
                  )}
                </div>
              </ScrollRevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-24 lg:py-28 bg-background-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealWrapper>
            <SectionLabel>What We Offer</SectionLabel>
            <AnimatedText text="End-to-End Coffee Trade Services" tag="h2" className="text-4xl sm:text-5xl font-bold text-foreground mb-16" />
          </ScrollRevealWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((offer, i) => (
              <ScrollRevealWrapper key={offer.title} direction="up" delay={i * 0.1}>
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <offer.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{offer.title}</h4>
                  <p className="text-sm text-muted-foreground">{offer.desc}</p>
                </div>
              </ScrollRevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary to-green-800" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollRevealWrapper>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Source Tanzanian Coffee?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
              Contact us to discuss your green coffee requirements, request samples, or explore long-term supply agreements.
            </p>
            <Button asChild size="xl" className="bg-primary text-primary-foreground hover:opacity-90 gap-2">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </ScrollRevealWrapper>
        </div>
      </section>
    </main>
  );
}
