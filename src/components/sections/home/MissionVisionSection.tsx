"use client";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import { SectionLabel } from "@/components/common/SectionLabel";

export function MissionVisionSection() {
  return (
    <section className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Mission */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            animate={{ y: [0, -6, 0] }}
            /* @ts-ignore — Framer Motion supports both whileInView and animate together */
            style={{ animation: "float-y 5s ease-in-out infinite" }}
            className="relative bg-background-muted rounded-3xl p-8 lg:p-12 border border-border overflow-hidden group"
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />

            {/* Animated corner glow */}
            <motion.div
              animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-primary/8 blur-3xl"
            />

            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.08, rotate: 5 }}
                transition={{ duration: 0.25 }}
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6"
              >
                <Target className="w-6 h-6 text-primary" />
              </motion.div>
              <SectionLabel>Our Mission</SectionLabel>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Driving Sustainable Growth
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                To drive sustainable growth and prosperity in Africa through innovative and responsible business practices, creating value for stakeholders, and contributing to local communities.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ animation: "float-y 6s ease-in-out infinite 1.5s" }}
            className="relative bg-secondary rounded-3xl p-8 lg:p-12 overflow-hidden"
          >
            {/* Animated ambient glows */}
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/5 blur-3xl"
            />
            <motion.div
              animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1, ease: "easeInOut" }}
              className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-primary/15 blur-2xl"
            />

            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.08, rotate: -5 }}
                transition={{ duration: 0.25 }}
                className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6"
              >
                <Eye className="w-6 h-6 text-primary" />
              </motion.div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Our Vision</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Leading Diversified Company in Africa
              </h3>
              <p className="text-white/70 leading-relaxed text-base lg:text-lg">
                To be a leading diversified company in Africa, renowned for excellence, integrity, and sustainability across all sectors we operate in.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
