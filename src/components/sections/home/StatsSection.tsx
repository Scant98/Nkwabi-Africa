"use client";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";
import { ScrollRevealWrapper } from "@/components/common/ScrollRevealWrapper";
import { GoldDivider } from "@/components/common/GoldDivider";

const stats = [
  { end: 10, suffix: "+", label: "Years in Operation", desc: "Building trusted partnerships across Tanzania" },
  { end: 500, suffix: "+", label: "Team Members", desc: "Dedicated professionals across all divisions" },
  { end: 12, suffix: "+", label: "Markets Served", desc: "Exporting to Europe, Asia, and Middle East" },
  { end: 4, suffix: "", label: "Business Divisions", desc: "Mining, Agriculture, Logistics & Chemicals" },
];

export function StatsSection() {
  return (
    <section className="py-24 lg:py-32 bg-background-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollRevealWrapper>
          <GoldDivider className="mb-16" />
        </ScrollRevealWrapper>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <ScrollRevealWrapper key={stat.label} direction="up" delay={i * 0.1}>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                </div>
                <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.desc}</div>
              </div>
            </ScrollRevealWrapper>
          ))}
        </div>

        <ScrollRevealWrapper>
          <GoldDivider className="mt-16" />
        </ScrollRevealWrapper>
      </div>
    </section>
  );
}
