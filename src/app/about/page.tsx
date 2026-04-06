"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollRevealWrapper } from "@/components/common/ScrollRevealWrapper";
import { SectionLabel } from "@/components/common/SectionLabel";
import { GoldDivider } from "@/components/common/GoldDivider";
import { Shield, Lightbulb, Leaf, Users, MapPin, CheckCircle } from "lucide-react";
import coffee1 from "@/components/images/coffee 1.jpeg";
import agro1 from "@/components/images/agro1.jpeg";
import agro2 from "@/components/images/agro2.jpeg";
import logi1 from "@/components/images/logi1.jpeg";
import logi2 from "@/components/images/logi2.jpeg";
import logi3 from "@/components/images/logi3.jpeg";
import chemi1 from "@/components/images/chemi1.jpeg";
import chemi2 from "@/components/images/chemi2.jpeg";

const slideImages = [logi3, agro1, coffee1, logi1, chemi1, agro2];

const values = [
  { icon: Shield, title: "Integrity", desc: "Operating with transparency and ethics in every transaction and partnership." },
  { icon: Lightbulb, title: "Innovation", desc: "Embracing technology and innovation to drive growth and sustainability." },
  { icon: Leaf, title: "Sustainability", desc: "Prioritizing environmental and social responsibility across all operations." },
  { icon: Users, title: "Community", desc: "Supporting local communities, artisanal miners, and smallholder farmers." },
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
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      {/* ── Hero with slideshow ── */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-clip">
        {/* Slideshow images */}
        <AnimatePresence>
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slideImages[current]}
              alt="Nkwabi Africa operations"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

        {/* Top gold accent */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary/60 to-transparent" />

        {/* Hero text */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                About Us
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-[1.0] tracking-tight mb-6 max-w-4xl">
              Built on the{" "}
              <span className="text-gold-gradient">Heart</span>
              <br />
              <span className="text-gold-gradient">of Africa</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed">
              A Tanzanian company driving sustainable growth through gold mining, agriculture, logistics, and mining chemicals.
            </p>
          </motion.div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {slideImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-0.5 rounded-full transition-all duration-500 ${
                i === current ? "w-8 bg-primary" : "w-4 bg-white/30"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollRevealWrapper direction="left">
              <SectionLabel>Who We Are</SectionLabel>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                A Vision to Drive Sustainable Growth
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Established with a vision to drive sustainable growth and prosperity in Africa, Nkwabi Africa leverages deep expertise and strategic partnerships to create value for stakeholders while contributing meaningfully to local communities.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our operations span across Tanzania&apos;s key economic hubs and connect to international markets in Dubai and Johannesburg, making us a true bridge between Africa&apos;s resources and the world.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Geita & Mwanza — Mining Operations",
                  "Dar es Salaam — Export & Logistics Hub",
                  "International offices — Dubai & Johannesburg",
                ].map((loc) => (
                  <div key={loc} className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm text-foreground">{loc}</span>
                  </div>
                ))}
              </div>
            </ScrollRevealWrapper>

            {/* Image collage */}
            <ScrollRevealWrapper direction="right">
              <div className="grid grid-cols-12 grid-rows-2 gap-3 h-[480px]">
                <div className="col-span-7 row-span-2 relative rounded-2xl overflow-hidden">
                  <Image src={agro1} alt="Agriculture operations" fill className="object-cover transition-transform duration-700 hover:scale-105" sizes="35vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-semibold text-white/90 uppercase tracking-widest bg-black/35 px-2 py-1 rounded-full backdrop-blur-sm">Agriculture</span>
                  </div>
                </div>
                <div className="col-span-5 relative rounded-2xl overflow-hidden">
                  <Image src={coffee1} alt="Coffee trading" fill className="object-cover transition-transform duration-700 hover:scale-105" sizes="20vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs font-semibold text-white/90 uppercase tracking-widest bg-black/35 px-2 py-1 rounded-full backdrop-blur-sm">Coffee</span>
                  </div>
                </div>
                <div className="col-span-5 relative rounded-2xl overflow-hidden">
                  <Image src={chemi2} alt="Mining chemicals" fill className="object-cover transition-transform duration-700 hover:scale-105" sizes="20vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs font-semibold text-white/90 uppercase tracking-widest bg-black/35 px-2 py-1 rounded-full backdrop-blur-sm">Chemicals</span>
                  </div>
                </div>
              </div>
            </ScrollRevealWrapper>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-24 lg:py-32 bg-background-muted relative overflow-clip">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealWrapper className="text-center mb-16">
            <SectionLabel>Core Values</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              The Principles That Guide Us
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every decision at Nkwabi Africa is guided by four core principles.
            </p>
          </ScrollRevealWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <ScrollRevealWrapper key={val.title} direction="up" delay={i * 0.1}>
                <div className="group bg-card border border-border rounded-2xl p-7 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <val.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 text-lg">{val.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
                </div>
              </ScrollRevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ── Operations ── */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealWrapper className="text-center mb-16">
            <SectionLabel>Our Operations</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Across Tanzania &amp; Beyond
            </h2>
          </ScrollRevealWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: logi1, label: "Logistics Fleet", sub: "Mwanza & Dar es Salaam" },
              { src: logi2, label: "Transport Network", sub: "Pan-Tanzania Routes" },
              { src: agro2, label: "Agricultural Fields", sub: "Shinyanga Region" },
            ].map((item, i) => (
              <ScrollRevealWrapper key={item.label} direction="up" delay={i * 0.1}>
                <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <div className="absolute bottom-5 left-5">
                    <p className="text-white font-bold text-base leading-tight">{item.label}</p>
                    <p className="text-white/60 text-xs mt-1">{item.sub}</p>
                  </div>
                </div>
              </ScrollRevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ── Achievements ── */}
      <section className="py-24 lg:py-32 bg-background-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollRevealWrapper direction="left">
              <SectionLabel>Achievements</SectionLabel>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Committed to Excellence &amp; Responsibility
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our achievements reflect our commitment to operating at the highest standards of environmental, safety, and business excellence.
              </p>
              <div className="flex gap-6 mt-8">
                <div className="border-l-2 border-primary pl-4">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Years operating responsibly</div>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Compliance record</div>
                </div>
              </div>
            </ScrollRevealWrapper>

            <ScrollRevealWrapper direction="right">
              <ul className="space-y-4">
                {achievements.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-4 bg-card border border-border rounded-xl p-4 hover:border-primary/40 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm leading-relaxed">{item}</span>
                  </motion.li>
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
