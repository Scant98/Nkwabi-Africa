"use client";
import { useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { ScrollRevealWrapper } from "@/components/common/ScrollRevealWrapper";
import {
  Pickaxe, Leaf, Truck, FlaskConical, CheckCircle, ArrowRight, X,
  MapPin, Coffee, Globe, FileText, Users, Mountain, Droplets,
  ShieldCheck, Package, Navigation, Warehouse, FlaskRound, AlertTriangle,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import coffee1 from "@/components/images/coffee 1.jpeg";
import agro1 from "@/components/images/agro1.jpeg";
import agro2 from "@/components/images/agro2.jpeg";
import logi1 from "@/components/images/logi1.jpeg";
import logi2 from "@/components/images/logi2.jpeg";
import logi3 from "@/components/images/logi3.jpeg";
import chemi1 from "@/components/images/chemi1.jpeg";
import chemi2 from "@/components/images/chemi2.jpeg";
import chemi3 from "@/components/images/chemi3.jpeg";
import chemi4 from "@/components/images/chemi4.jpeg";

/* ─── Image data per service ─────────────────────────────────────────── */
const servicePrimaryImage: Record<string, StaticImageData> = {
  "gold-mining": chemi2,
  "agriculture": agro1,
  "logistics": logi2,
  "chemicals": chemi3,
};

const serviceGalleryImages: Record<string, { src: StaticImageData; label: string }[]> = {
  "gold-mining": [
    { src: chemi4, label: "Mining Operations" },
    { src: chemi1, label: "Gold Processing" },
    { src: agro1, label: "Community Engagement" },
  ],
  "agriculture": [
    { src: agro1, label: "Coffee Farms" },
    { src: agro2, label: "Processing Facility" },
    { src: coffee1, label: "Export Ready" },
  ],
  "logistics": [
    { src: logi1, label: "Cargo Fleet" },
    { src: logi2, label: "Warehousing" },
    { src: logi3, label: "Cross-border Routes" },
  ],
  "chemicals": [
    { src: chemi1, label: "Chemical Supply" },
    { src: chemi2, label: "Safety Equipment" },
    { src: chemi3, label: "Compliant Storage" },
  ],
};

/* ─── Service card data ─────────────────────────────────────────────── */
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
    bgClass: "bg-background",
  },
];

/* ─── Rich detail per service ───────────────────────────────────────── */
const serviceDetails: Record<string, {
  overview: string;
  highlights: { icon: React.ElementType; label: string; value: string }[];
  sections: { title: string; items: string[] }[];
}> = {
  "gold-mining": {
    overview:
      "Nkwabi Africa operates across Tanzania's premier gold belt, combining modern extraction techniques with responsible community practices. We work with both large-scale operations and artisanal miners (ASM) to ensure inclusive economic benefit.",
    highlights: [
      { icon: MapPin, label: "Primary Regions", value: "Geita & Mwanza" },
      { icon: Mountain, label: "Operation Type", value: "Open-pit & ASM" },
      { icon: ShieldCheck, label: "Certifications", value: "ISO 14001 & 45001" },
      { icon: Globe, label: "Export Markets", value: "Dubai & Johannesburg" },
    ],
    sections: [
      {
        title: "Operational Areas",
        items: [
          "Geita Region — Primary extraction zone, open-pit and underground operations",
          "Mwanza Region — ASM partnership hub and gold buying centre",
          "Lake Victoria Zone — Artisanal mining support and training",
          "Dar es Salaam — Export processing and international trading office",
        ],
      },
      {
        title: "Our Process",
        items: [
          "Geological exploration and resource assessment",
          "Responsible extraction with minimal land disturbance",
          "On-site processing and gold refining",
          "Quality assurance and assay certification",
          "Secure transport and international trading",
        ],
      },
    ],
  },

  "agriculture": {
    overview:
      "We work at the heart of the Tanzanian coffee trade and broader agricultural sector, connecting international buyers with reliable sources of high-quality green coffee and other export crops directly from origin. Our work spans the full value chain from farmer to export vessel.",
    highlights: [
      { icon: MapPin, label: "Key Coffee Regions", value: "Kilimanjaro, Mbeya, Kagera" },
      { icon: Coffee, label: "Coffee Types", value: "Arabica & Natural Robusta" },
      { icon: FileText, label: "Compliance", value: "TCB & AMCOS Certified" },
      { icon: Globe, label: "Export Markets", value: "Europe & Asia" },
    ],
    sections: [
      {
        title: "Growing Regions",
        items: [
          "Kilimanjaro Region — Arabica, 1,400–1,800m, washed process, bright acidity & floral notes",
          "Mbeya Region — Arabica, 1,500–2,200m, fully washed, complex fruity and wine-like",
          "Kagera Region — Robusta, 1,100–1,600m, natural process, bold body & earthy flavors",
          "Kigoma Region — Robusta, 900–1,400m, strong cup, low acidity",
        ],
      },
      {
        title: "Export Process",
        items: [
          "Direct sourcing from AMCOS cooperatives and licensed processors",
          "Quality assessment — grade, moisture content & cupping profile",
          "Processing at TCB-licensed facilities under regulatory oversight",
          "Export documentation and grading via Dar es Salaam warehouses",
          "Container booking and vessel scheduling to buyer destinations",
        ],
      },
    ],
  },

  "logistics": {
    overview:
      "Our logistics division provides end-to-end transportation and supply chain management tailored to the unique demands of Tanzania's mining, agriculture, and industrial sectors. We cover the full country and extend into neighboring East African nations.",
    highlights: [
      { icon: Navigation, label: "Coverage", value: "Nationwide + Cross-border" },
      { icon: Truck, label: "Fleet", value: "Heavy cargo & temperature-controlled" },
      { icon: Warehouse, label: "Storage", value: "Hazmat & cold storage warehousing" },
      { icon: ShieldCheck, label: "Compliance", value: "Tanzania Revenue Authority cleared" },
    ],
    sections: [
      {
        title: "Service Coverage",
        items: [
          "Dar es Salaam — Main port logistics and freight forwarding",
          "Mwanza & Geita — Mining sector transport specialists",
          "Arusha & Kilimanjaro — Agriculture produce transportation",
          "Cross-border routes to Kenya, Uganda, Rwanda, Zambia, DRC",
        ],
      },
      {
        title: "Capabilities",
        items: [
          "Heavy-lift and oversized cargo movement for mining equipment",
          "Temperature-controlled transport for perishable agricultural produce",
          "Hazardous materials (HAZMAT) certified drivers and vehicles",
          "End-to-end customs clearance and TRA compliance",
          "Real-time GPS fleet tracking and client reporting",
        ],
      },
    ],
  },

  "chemicals": {
    overview:
      "We are a regulated supplier of essential chemicals and reagents for Tanzania's gold mining industry. All products meet international safety standards and are supplied with full MSDS documentation, trained delivery personnel, and compliant storage solutions.",
    highlights: [
      { icon: ShieldCheck, label: "Safety Standard", value: "ISO 45001 & MSDS Certified" },
      { icon: Package, label: "Core Products", value: "Sodium Cyanide, Activated Carbon" },
      { icon: AlertTriangle, label: "Handling", value: "HAZMAT certified logistics" },
      { icon: Globe, label: "Sourcing", value: "Reputable international manufacturers" },
    ],
    sections: [
      {
        title: "Product Range",
        items: [
          "Sodium Cyanide — Gold leaching reagent for CIL/CIP circuits",
          "Activated Carbon — For gold adsorption and recovery processes",
          "Hydrated Lime — pH control and cyanide detoxification",
          "Hydrogen Peroxide — Cyanide destruction in tailings",
          "Safety & PPE — Respiratory, chemical suits, protective gear",
        ],
      },
      {
        title: "Compliance & Safety",
        items: [
          "Full Material Safety Data Sheet (MSDS) documentation for all products",
          "HAZMAT-certified transport and delivery personnel",
          "Compliant on-site storage consultation and setup",
          "Staff training on safe chemical handling and emergency response",
          "Regulatory compliance with NEMC and TMAA standards",
        ],
      },
    ],
  },
};

/* ─── Service detail modal ──────────────────────────────────────────── */
function ServiceModal({ service, open, onClose }: {
  service: typeof services[0];
  open: boolean;
  onClose: () => void;
}) {
  const detail = serviceDetails[service.id];
  const gallery = serviceGalleryImages[service.id] ?? [];

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-3xl w-full max-h-[90vh] overflow-y-auto p-0 gap-0">
        {/* Header with primary image */}
        <div className="relative overflow-hidden">
          {servicePrimaryImage[service.id] && (
            <div className="relative w-full h-48 sm:h-56">
              <Image
                src={servicePrimaryImage[service.id]}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/70" />
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <Badge variant="gold" className="mb-2">{service.badge}</Badge>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">{service.title}</h2>
            </div>
          </div>
          <DialogClose className="absolute right-4 top-4 rounded-full bg-black/40 backdrop-blur-sm w-8 h-8 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity z-10">
            <X className="h-4 w-4 text-white" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </div>

        <div className="p-6 sm:p-8 space-y-8 border-t border-border bg-background">
          {/* Overview */}
          <p className="text-muted-foreground leading-relaxed">{detail.overview}</p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {detail.highlights.map((h) => (
              <div key={h.label} className="bg-card border border-border rounded-xl p-3 flex flex-col gap-1">
                <h.icon className="w-4 h-4 text-primary mb-1" />
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide">{h.label}</p>
                <p className="text-sm font-semibold text-foreground leading-tight">{h.value}</p>
              </div>
            ))}
          </div>

          {/* Gallery */}
          {gallery.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-3">Gallery</h3>
              <div className="grid grid-cols-3 gap-3">
                {gallery.map((g, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                    className="relative rounded-xl overflow-hidden aspect-video"
                  >
                    <Image
                      src={g.src}
                      alt={g.label}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 33vw, 200px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <span className="text-[9px] font-medium text-white/80 uppercase tracking-widest">{g.label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Detail sections */}
          {detail.sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Key capabilities */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-3">Key Capabilities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.features.map((f) => (
                <div key={f} className="flex items-start gap-2 text-sm text-foreground bg-card border border-border rounded-lg p-3">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-border">
            <Button asChild className="bg-primary text-primary-foreground hover:opacity-90 gap-2 flex-1">
              <Link href="/contact" onClick={onClose}>
                Contact Us About This Service
                <ExternalLink className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" onClick={onClose} className="border-border">
              Back to Services
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

/* ─── Main export ────────────────────────────────────────────────────── */
export function ServiceCards() {
  const [activeService, setActiveService] = useState<typeof services[0] | null>(null);

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
                  <Button
                    onClick={() => setActiveService(service)}
                    className="bg-primary text-primary-foreground hover:opacity-90 gap-2"
                  >
                    Inquire About This Service
                    <ArrowRight className="w-4 h-4" />
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

      {activeService && (
        <ServiceModal
          service={activeService}
          open={!!activeService}
          onClose={() => setActiveService(null)}
        />
      )}
    </>
  );
}
