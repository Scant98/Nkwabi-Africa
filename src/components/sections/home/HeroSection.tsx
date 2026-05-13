"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import agro1   from "@/components/images/agro1.jpeg";
import agro2   from "@/components/images/agro2.jpeg";
import coffee1 from "@/components/images/coffee 1.jpeg";
import coffee2 from "@/components/images/coffee2.jpeg";
import logi1   from "@/components/images/logi1.jpeg";
import logi2   from "@/components/images/logi2.jpeg";
import logi3   from "@/components/images/logi3.jpeg";
import gold1   from "@/components/images/gold1.jpg";
import gold2   from "@/components/images/gold2.jpg";

const slideImages = [
  { src: gold1,   label: "Gold Mining"           },
  { src: agro1,   label: "Agriculture"           },
  { src: coffee1, label: "Coffee Export"         },
  { src: logi3,   label: "Logistics"             },
  { src: gold2,   label: "Gold Trading"          },
  { src: agro2,   label: "Farming"               },
  { src: coffee2, label: "Coffee Sourcing"       },
  { src: logi1,   label: "Transport Fleet"       },
  { src: logi2,   label: "Supply Chain"          },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [current, setCurrent] = useState(0);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const contentY      = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-center overflow-clip">

      {/* Slideshow background */}
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
            src={slideImages[current].src}
            alt={slideImages[current].label}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-black/20" />
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-transparent" />

      {/* Top gold accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-primary via-primary/60 to-transparent" />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full"
      >
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

        <div className="mb-8 overflow-hidden max-w-4xl">
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.02] tracking-tight text-white"
          >
            Powering{" "}
            <span className="text-gold-gradient">Africa&apos;s</span>
          </motion.h1>
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.02] tracking-tight text-white"
          >
            Resource Future
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed mb-10"
        >
          A diversified Tanzanian company driving sustainable growth through gold mining, agriculture, and logistics — creating lasting value for communities across Africa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap gap-4 mb-16"
        >
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:opacity-90 gap-2">
            <Link href="/services">
              Explore Our Business
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white/60">
            <Link href="/about">Learn About Us</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="flex flex-wrap gap-10"
        >
          {[
            { value: "3",    label: "Business Divisions" },
            { value: "500+", label: "Team Members"       },
            { value: "10+",  label: "Years of Growth"    },
            { value: "12+",  label: "Markets Served"     },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-2xl font-bold text-primary">{stat.value}</span>
              <span className="text-xs text-white/50 uppercase tracking-wide">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Slide indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
        {slideImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-0.5 rounded-full transition-all duration-500 ${
              i === current ? "w-8 bg-primary" : "w-3 bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* Current label */}
      <div className="absolute bottom-20 right-6 sm:right-10 z-10">
        <AnimatePresence mode="wait">
          <motion.span
            key={current}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.4 }}
            className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40"
          >
            {slideImages[current].label}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown className="w-4 h-4 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
