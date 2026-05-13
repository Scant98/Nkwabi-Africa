"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollRevealWrapper } from "@/components/common/ScrollRevealWrapper";
import { SectionLabel } from "@/components/common/SectionLabel";
import { GoldDivider } from "@/components/common/GoldDivider";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import chairman from "@/components/images/chairman.jpeg";
import ceo from "@/components/images/ceo.jpeg";

const directors = [
  {
    name: "Steven Emmanuel Nkwabi",
    title: "Chairman",
    objectPosition: "center top",
    image: chairman,
    bio: "A visionary leader with extensive experience in Tanzania's mining and resource sectors. Steven founded Nkwabi Africa with a commitment to responsible business practices that create lasting value for communities across the region.",
    responsibilities: [
      "Strategic direction & corporate governance",
      "Stakeholder and investor relations",
      "Long-term vision and growth strategy",
      "Board oversight and leadership",
    ],
  },
  // {
  //   name: "Emiliana Richard Msekela",
  //   title: "Chief Executive Officer",
  //   objectPosition: "center 20%",
  //   image: ceo,
  //   bio: "An accomplished executive driving Nkwabi Africa's operational excellence and growth across all business divisions. Emiliana brings deep expertise in resource management, trade, and sustainable development across East Africa.",
  //   responsibilities: [
  //     "Day-to-day business operations",
  //     "Cross-divisional performance management",
  //     "Strategic partnerships & business development",
  //     "Regulatory compliance and governance",
  //   ],
  // },
];

export default function DirectorsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24 bg-background-muted relative overflow-clip">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-primary via-primary/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Leadership</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-5 leading-tight max-w-3xl">
              Meet Our <span className="text-gold-gradient">Directors</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              The leaders guiding Nkwabi Africa&apos;s vision of sustainable growth and responsible business across Tanzania.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Directors grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {directors.map((director, i) => (
              <motion.div
                key={director.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-colors duration-300"
                >
                  {/* Photo */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <Image
                      src={director.image}
                      alt={director.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ objectPosition: director.objectPosition }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

                    {/* Name + title over image */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.15 + 0.3 }}
                      className="absolute bottom-0 left-0 right-0 p-5"
                    >
                      <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-primary-foreground bg-primary px-2.5 py-0.5 rounded-full mb-2">
                        {director.title}
                      </span>
                      <h2 className="text-xl font-bold text-white leading-snug">
                        {director.name}
                      </h2>
                    </motion.div>

                    {/* Gold top accent */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-primary/80 via-primary to-primary/20" />
                  </div>

                  {/* Details */}
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {director.bio}
                    </p>

                    <div className="border-t border-border pt-4">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                        Key Responsibilities
                      </p>
                      <ul className="space-y-1.5">
                        {director.responsibilities.map((r, ri) => (
                          <motion.li
                            key={r}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: i * 0.1 + ri * 0.06 }}
                            className="flex items-start gap-2.5"
                          >
                            <div className="w-1 h-1 rounded-full bg-primary shrink-0 mt-1.5" />
                            <span className="text-xs text-foreground leading-relaxed">{r}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollRevealWrapper>
            <SectionLabel>Get in Touch</SectionLabel>
            <h2 className="text-3xl font-bold text-foreground mb-3">Connect With Our Leadership</h2>
            <p className="text-muted-foreground mb-7 max-w-md mx-auto text-sm">
              Reach out through our contact page and our team will connect you with the right person.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:opacity-90 gap-2">
                <Link href="/contact">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">About Nkwabi Africa</Link>
              </Button>
            </div>
          </ScrollRevealWrapper>
        </div>
      </section>

      <GoldDivider className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16" />
    </main>
  );
}
