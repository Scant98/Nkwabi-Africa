"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ScrollRevealWrapper } from "@/components/common/ScrollRevealWrapper";
import { SectionLabel } from "@/components/common/SectionLabel";
import { AnimatedText } from "@/components/common/AnimatedText";
import { Shield, Lightbulb, Leaf, Users, Award } from "lucide-react";

const values = [
  { icon: Shield, title: "Integrity", desc: "Operating with transparency and ethics in every deal and partnership." },
  { icon: Lightbulb, title: "Innovation", desc: "Embracing innovation to drive growth and sustainable development." },
  { icon: Leaf, title: "Sustainability", desc: "Prioritizing environmental and social responsibility in all operations." },
  { icon: Users, title: "Community", desc: "Supporting local communities, artisanal miners, and smallholder farmers." },
  { icon: Award, title: "Excellence", desc: "Committed to ISO 14001 and ISO 45001 standards across all divisions." },
];

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 180, damping: 18 });
  const ySpring = useSpring(y, { stiffness: 180, damping: 18 });

  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-8deg", "8deg"]);
  const glowX = useTransform(xSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(ySpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative h-full"
    >
      {/* Subtle follow glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(201,168,76,0.12), transparent 70%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

export function ValuesSection() {
  return (
    <section className="py-24 lg:py-32 bg-background-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollRevealWrapper direction="up">
          <SectionLabel>Our Values</SectionLabel>
          <AnimatedText
            text="What We Stand For"
            tag="h2"
            className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
          />
          <p className="text-muted-foreground max-w-xl leading-relaxed mb-16">
            Our values guide every decision we make — from the mines of Geita to the export terminals of Dar es Salaam.
          </p>
        </ScrollRevealWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6" style={{ perspective: "1200px" }}>
          {values.map((val, i) => (
            <ScrollRevealWrapper key={val.title} direction="up" delay={i * 0.1}>
              <div className="group h-full">
                <TiltCard>
                  <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors h-full relative overflow-hidden" style={{ transform: "translateZ(0)" }}>
                    {/* Shine line on top */}
                    <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary/60 to-primary group-hover:w-full transition-all duration-500" />

                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                      className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                    >
                      <val.icon className="w-5 h-5 text-primary" />
                    </motion.div>
                    <h4 className="font-bold text-foreground mb-2">{val.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
                  </div>
                </TiltCard>
              </div>
            </ScrollRevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
