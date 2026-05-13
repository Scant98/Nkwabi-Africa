"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import coffee1 from "@/components/images/coffee 1.jpeg";
import agro1 from "@/components/images/agro1.jpeg";
import logi1 from "@/components/images/logi1.jpeg";
import gold1 from "@/components/images/gold1.jpg";

const mosaicImages = [
  { src: coffee1, alt: "Coffee trading in Tanzania", label: "Coffee & Agri", delay: 0.55, rotate: 2, position: "top-0 left-0 w-[54%]" },
  { src: gold1, alt: "Gold mining and trading in Tanzania", label: "Gold Sector", delay: 0.70, rotate: -1.5, position: "top-4 right-0 w-[43%]" },
  { src: logi1, alt: "Logistics fleet", label: "Logistics", delay: 0.85, rotate: 1, position: "bottom-0 right-0 w-[56%]" },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const orbTopY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const orbBottomY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-center overflow-clip bg-background-muted">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-muted to-background" />
      {/* Parallax ambient orbs */}
      <motion.div style={{ y: orbTopY }} className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <motion.div style={{ y: orbBottomY }} className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
      <motion.div style={{ y: orbTopY }} className="absolute top-1/3 left-1/2 w-72 h-72 rounded-full bg-primary/3 blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Left: Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Tanzania&apos;s Leading Resource Company
              </span>
            </motion.div>

            <div className="mb-8 overflow-hidden">
              <motion.h1
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-foreground"
              >
                Powering{" "}
                <span className="text-gold-gradient">Africa&apos;s</span>
              </motion.h1>
              <motion.h1
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-foreground"
              >
                Resource Future
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10"
            >
              A diversified Tanzanian company driving sustainable growth through gold mining, agriculture, and logistics — creating lasting value for communities across Africa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:opacity-90 gap-2">
                <Link href="/services">
                  Explore Our Business
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border hover:border-primary hover:text-primary">
                <Link href="/about">Learn About Us</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="mt-16 flex flex-wrap gap-8"
            >
              {[
                { value: "3", label: "Business Divisions" },
                { value: "500+", label: "Team Members" },
                { value: "10+", label: "Years of Growth" },
                { value: "12+", label: "Markets Served" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-bold text-primary">{stat.value}</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Image mosaic (desktop only) */}
          <div className="hidden lg:block relative h-[520px]">
            {mosaicImages.map((img) => (
              <motion.div
                key={img.alt}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0, rotate: img.rotate }}
                transition={{ duration: 0.85, delay: img.delay, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.04, rotate: 0, zIndex: 20, transition: { duration: 0.25 } }}
                className={`absolute ${img.position} aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/20 cursor-pointer`}
                style={{ zIndex: 1 }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 25vw, 300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="text-[10px] font-semibold text-white/90 uppercase tracking-widest bg-black/35 px-2 py-1 rounded-full backdrop-blur-sm">
                    {img.label}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Central gold badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-background/95 backdrop-blur-sm border border-primary/40 rounded-2xl px-5 py-4 shadow-2xl border-gold-glow"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary leading-none">3</div>
                <div className="text-[9px] text-muted-foreground uppercase tracking-[0.15em] mt-0.5">Sectors</div>
              </div>
            </motion.div>
          </div>

        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
