"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollRevealWrapper } from "@/components/common/ScrollRevealWrapper";
import { ServiceCard } from "@/components/common/ServiceCard";
import { SectionLabel } from "@/components/common/SectionLabel";
import { AnimatedText } from "@/components/common/AnimatedText";
import { Pickaxe, Leaf, Truck } from "lucide-react";
import coffee1 from "@/components/images/coffee 1.jpeg";
import agro2 from "@/components/images/agro2.jpeg";
import logi3 from "@/components/images/logi3.jpeg";

const businesses = [
  {
    title: "Gold Mining & Trading",
    description: "Exploration, extraction, and trading of gold in Tanzania's key mining regions including Geita and Mwanza, with focus on responsible practices.",
    icon: Pickaxe,
    href: "/services#gold-mining",
    badge: "Core Business",
  },
  {
    title: "Agriculture",
    description: "Farming and processing of high-value crops including coffee, maize, and cashew nuts. Exporting to international markets with sustainable practices.",
    icon: Leaf,
    href: "/services#agriculture",
    badge: "Export Ready",
  },
  {
    title: "Logistics",
    description: "Comprehensive transportation and supply chain solutions for mining, agriculture, and manufacturing sectors across Tanzania and beyond.",
    icon: Truck,
    href: "/services#logistics",
  },
  // {
  //   title: "Mining Chemicals",
  //   description: "Trading of chemicals and reagents for gold mining operations including sodium cyanide and activated carbon, with full regulatory compliance.",
  //   icon: FlaskConical,
  //   href: "/services#chemicals",
  // },
];

export function BusinessAreasSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollRevealWrapper direction="up">
          <SectionLabel>Our Businesses</SectionLabel>
          <AnimatedText
            text="Diversified Portfolio Across Africa"
            tag="h2"
            className="text-4xl sm:text-5xl font-bold text-foreground mb-4 max-w-2xl"
          />
          <p className="text-muted-foreground max-w-xl leading-relaxed mb-16">
            From the gold mines of Geita to the coffee farms of the highlands — we operate across Tanzania&apos;s most vital economic sectors.
          </p>
        </ScrollRevealWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {businesses.map((biz, i) => (
            <ScrollRevealWrapper key={biz.title} direction="up" delay={i * 0.1}>
              <ServiceCard {...biz} />
            </ScrollRevealWrapper>
          ))}
        </div>

        {/* Image strip */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { src: coffee1, label: "Coffee & Agriculture", span: false },
            { src: agro2, label: "Farming & Export", span: false },
            { src: logi3, label: "Logistics Fleet", span: false },
          ].map((item, i) => (
            <ScrollRevealWrapper key={item.label} direction="up" delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative rounded-2xl overflow-hidden aspect-video group cursor-pointer"
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-white text-xs font-semibold uppercase tracking-widest">{item.label}</span>
                </div>
              </motion.div>
            </ScrollRevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
