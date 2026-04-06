"use client";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollRevealWrapper } from "@/components/common/ScrollRevealWrapper";
import { CheckCircle, ArrowRight, Pickaxe, Leaf, Truck, FlaskConical } from "lucide-react";
import Link from "next/link";
import agro1 from "@/components/images/agro1.jpeg";
import logi2 from "@/components/images/logi2.jpeg";
import gold1 from "@/components/images/gold1.jpg";
import chemi3 from "@/components/images/chemi3.jpeg";

const servicePrimaryImage: Record<string, StaticImageData> = {
  "gold-mining": gold1,
  "agriculture": agro1,
  "logistics": logi2,
  "chemicals": chemi3,
};

const services = [
  {
    id: "gold-mining",
    icon: Pickaxe,
    badge: "Core Business",
    title: "Gold Mining & Trading",
    tagline: "Responsible extraction from Tanzania's richest mineral regions",
    description:
      "We operate in Tanzania's key gold mining regions including Geita and Mwanza, focusing on responsible mining practices that balance economic growth with environmental stewardship and community development.",
    features: [
      "Exploration and extraction in Geita & Mwanza regions",
      "Partnerships with local artisanal miners (ASM)",
      "Gold buying and international trading",
      "Environmental impact monitoring & reporting",
      "Community development programs",
      "ISO 14001 & ISO 45001 compliance",
    ],
    href: "/services/gold-mining",
    bgClass: "bg-background-muted",
  },
  {
    id: "agriculture",
    icon: Leaf,
    badge: "Export Ready",
    title: "Agriculture & Coffee Export",
    tagline: "From Tanzania's fertile highlands to international markets",
    description:
      "We farm, process, and export high-value crops across Tanzania. Our focus is on quality, traceability, and supporting local farming communities through training and market access.",
    features: [
      "Coffee (Arabica & Robusta) export sourcing",
      "Maize and beans farming & processing",
      "International market connections (Europe, Asia)",
      "Farmer cooperative (AMCOS) partnerships",
      "Sustainable farming practice training",
      "TCB-compliant export documentation",
    ],
    href: "/services/agriculture",
    bgClass: "bg-background",
  },
  {
    id: "logistics",
    icon: Truck,
    badge: "Nationwide Coverage",
    title: "Logistics",
    tagline: "Reliable supply chain solutions across Tanzania",
    description:
      "Our logistics division provides end-to-end transportation and supply chain management for the mining, agricultural, and manufacturing sectors, with expertise in Tanzania's unique regulatory environment.",
    features: [
      "Fleet management and cargo transportation",
      "Cross-border logistics to neighboring countries",
      "Temperature-controlled and hazmat warehousing",
      "Customs clearance and documentation",
      "Real-time tracking and reporting",
      "Mining equipment movement specialists",
    ],
    href: "/services/logistics",
    bgClass: "bg-background-muted",
  },
  {
    id: "chemicals",
    icon: FlaskConical,
    badge: "Regulated Supply",
    title: "Gold Mining Chemicals",
    tagline: "Safe, compliant supply of essential mining reagents",
    description:
      "We supply essential chemicals and reagents for gold mining operations across Tanzania. All products are sourced from reputable international manufacturers with full safety, environmental, and regulatory compliance.",
    features: [
      "Sodium cyanide supply for gold processing",
      "Activated carbon for gold recovery",
      "Lime and other processing reagents",
      "Safety and PPE equipment",
      "MSDS documentation and training",
      "Compliant storage and transport solutions",
    ],
    href: "/services/chemicals",
    bgClass: "bg-background",
  },
];

export function ServiceCards() {
  return (
    <>
      {services.map((service, i) => {
        const primaryImg = servicePrimaryImage[service.id];
        const isReversed = i % 2 === 1;

        return (
          <section key={service.id} id={service.id} className={`py-24 lg:py-32 ${service.bgClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isReversed ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}>

                {/* Text column */}
                <ScrollRevealWrapper direction={isReversed ? "right" : "left"}>
                  <Badge variant="gold" className="mb-4">{service.badge}</Badge>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground">{service.title}</h2>
                  </div>
                  <p className="text-lg text-primary font-medium mb-4">{service.tagline}</p>
                  <p className="text-muted-foreground leading-relaxed mb-8">{service.description}</p>
                  <Button asChild className="bg-primary text-primary-foreground hover:opacity-90 gap-2">
                    <Link href={service.href}>
                      Inquire About This Service
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </ScrollRevealWrapper>

                {/* Image + capabilities column */}
                <ScrollRevealWrapper direction={isReversed ? "left" : "right"} delay={0.15}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="bg-card border border-border rounded-3xl overflow-hidden"
                  >
                    {primaryImg && (
                      <div className="relative w-full aspect-video overflow-hidden">
                        <Image
                          src={primaryImg}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-white/90 text-sm font-medium leading-snug">{service.tagline}</p>
                        </div>
                      </div>
                    )}
                    <div className="p-8">
                      <h4 className="font-bold text-foreground mb-6 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Key Capabilities
                      </h4>
                      <ul className="space-y-4">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-foreground text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </ScrollRevealWrapper>

              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
