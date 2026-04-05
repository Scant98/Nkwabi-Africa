import { FadeIn } from "@/components/common/FadeIn";
import { ScrollRevealWrapper } from "@/components/common/ScrollRevealWrapper";
import { SectionLabel } from "@/components/common/SectionLabel";
import { Button } from "@/components/ui/button";
import { ServiceCards } from "@/components/sections/services/ServiceCards";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-28 bg-background-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>Our Services</SectionLabel>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Four Pillars of{" "}
              <span className="text-gold-gradient">Our Business</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              From extracting gold to delivering crops to international markets — our diversified business creates sustainable value across Tanzania&apos;s key economic sectors.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Service sections with inquiry modals */}
      <ServiceCards />

      {/* Consultation CTA */}
      <section className="py-24 bg-background-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollRevealWrapper>
            <SectionLabel>Consultation</SectionLabel>
            <h2 className="text-4xl font-bold text-foreground mb-4">Need Expert Guidance?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Our experienced team offers consultation services for businesses looking to enter or expand in Tanzania&apos;s mining, agriculture, and logistics sectors.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:opacity-90">
              <Link href="/contact">Request a Consultation</Link>
            </Button>
          </ScrollRevealWrapper>
        </div>
      </section>
    </main>
  );
}
