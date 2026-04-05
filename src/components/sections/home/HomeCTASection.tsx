"use client";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollRevealWrapper } from "@/components/common/ScrollRevealWrapper";

function MagneticButton({ children, className, asChild, href }: {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
  href?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 300, damping: 25 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.35);
    y.set((e.clientY - cy) * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-flex"
    >
      <Button asChild={!!href} size="lg" className={className}>
        {href ? <Link href={href}>{children}</Link> : <>{children}</>}
      </Button>
    </motion.div>
  );
}

export function HomeCTASection() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-transparent to-primary/10" />

      {/* Animated rotating gradient ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-[700px] h-[700px] rounded-full border border-primary/8"
          style={{ background: "conic-gradient(from 0deg, transparent 70%, rgba(201,168,76,0.12) 85%, transparent 100%)" }}
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="w-[500px] h-[500px] rounded-full border border-secondary/8"
          style={{ background: "conic-gradient(from 180deg, transparent 70%, rgba(26,71,49,0.12) 85%, transparent 100%)" }}
        />
      </div>

      {/* Center glow */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollRevealWrapper direction="up">

          {/* Pill label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
          >
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Partner With Us</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Ready to Partner with{" "}
            <span className="text-gold-gradient">Nkwabi Africa?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Whether you&apos;re an international buyer, investor, or logistics partner — we&apos;re ready to build long-term, value-driven relationships.
          </motion.p>

          {/* CTA buttons with magnetic effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <MagneticButton href="/contact" className="bg-primary text-primary-foreground hover:opacity-90 gap-2">
              <Mail className="w-4 h-4" />
              Contact Us Today
            </MagneticButton>
            <MagneticButton href="/services" className="border border-border hover:border-primary gap-2 bg-transparent text-foreground hover:text-primary">
              View Our Services
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </motion.div>

        </ScrollRevealWrapper>
      </div>
    </section>
  );
}
