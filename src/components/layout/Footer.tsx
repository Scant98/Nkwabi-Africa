"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mountain, Mail, Phone, MapPin, Share2, Globe2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";

import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Footer() {
  return (
    <footer className="bg-background-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.08 }}
                transition={{ duration: 0.2 }}
                className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center"
              >
                <Mountain className="w-5 h-5 text-primary-foreground" />
              </motion.div>
              <div>
                <span className="font-bold text-base text-foreground group-hover:text-primary transition-colors">Nkwabi Africa</span>
                <p className="text-xs text-muted-foreground">Company Limited</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Driving sustainable growth and prosperity in Africa through responsible business practices across mining, agriculture, and logistics.
            </p>
            <div className="flex gap-3">
              {[Share2, Globe2].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-foreground mb-5 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors relative group inline-flex items-center gap-1"
                  >
                    <span className="absolute -left-3 opacity-0 group-hover:opacity-100 group-hover:-left-2 transition-all duration-200 text-primary text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-foreground mb-5 text-sm uppercase tracking-widest">Services</h4>
            <ul className="space-y-3">
              {[
                "Gold Mining & Trading",
                "Agriculture",
                "Logistics",
                "Mining Chemicals",
                "Consultation",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors relative group inline-flex items-center"
                  >
                    <span className="absolute -left-3 opacity-0 group-hover:opacity-100 group-hover:-left-2 transition-all duration-200 text-primary text-xs">›</span>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-foreground mb-5 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4">
              {[
                { icon: MapPin, text: "Kahama, Shinyanga, Tanzania" },
                { icon: Phone, text: "+255 700 000 000" },
                { icon: Mail, text: "info@nkwabiafrica.com" },
              ].map(({ icon: Icon, text }) => (
                <motion.li
                  key={text}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-3"
                >
                  <Icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <Separator className="my-8" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nkwabi Africa Company Limited. All rights reserved.
          </p>
          <div className="flex gap-2 items-center">
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
            <span className="text-xs text-muted-foreground">Registered in Tanzania</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
