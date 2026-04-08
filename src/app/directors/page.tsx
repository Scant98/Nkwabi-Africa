import Link from "next/link";
import { ScrollRevealWrapper } from "@/components/common/ScrollRevealWrapper";
import { SectionLabel } from "@/components/common/SectionLabel";
import { GoldDivider } from "@/components/common/GoldDivider";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Mail } from "lucide-react";

const directors = [
  {
    name: "Steven Emmanuel Nkwabi",
    title: "Chairman",
    initials: "SN",
    bio: "A visionary leader with extensive experience in Tanzania's mining and resource sectors. Steven founded Nkwabi Africa with a commitment to responsible business practices that create lasting value for communities across the region.",
    responsibilities: [
      "Strategic direction and corporate governance",
      "Stakeholder and investor relations",
      "Long-term vision and growth strategy",
      "Board oversight and leadership",
    ],
  },
  {
    name: "Emiliana Richard Msekela",
    title: "Chief Executive Officer",
    initials: "EM",
    bio: "An accomplished executive driving Nkwabi Africa's operational excellence and growth across all business divisions. Emiliana brings deep expertise in resource management, trade, and sustainable development across East Africa.",
    responsibilities: [
      "Day-to-day business operations",
      "Cross-divisional performance management",
      "Strategic partnerships and business development",
      "Regulatory compliance and governance",
    ],
  },
];

function Avatar({ initials }: { initials: string }) {
  return (
    <div className="relative w-full aspect-square bg-background-muted flex items-center justify-center overflow-hidden">
      {/* Subtle pattern background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />
      {/* Gold gradient ring */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10" />

      {/* Silhouette SVG */}
      <svg
        viewBox="0 0 200 200"
        className="absolute bottom-0 w-[75%] text-border"
        fill="currentColor"
        aria-hidden="true"
      >
        {/* Head */}
        <circle cx="100" cy="72" r="34" />
        {/* Shoulders / body */}
        <ellipse cx="100" cy="175" rx="64" ry="50" />
      </svg>

      {/* Initials badge */}
      <div className="relative z-10 w-20 h-20 rounded-full bg-primary/15 border-2 border-primary/40 flex items-center justify-center mb-4 self-start mt-8">
        <span className="text-2xl font-bold text-primary tracking-wide">{initials}</span>
      </div>

      {/* "Photo coming soon" pill */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm border border-border rounded-full px-3 py-1">
        <span className="text-[10px] text-muted-foreground uppercase tracking-widest whitespace-nowrap">Photo coming soon</span>
      </div>
    </div>
  );
}

export default function DirectorsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-background-muted relative overflow-clip">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Leadership</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight max-w-3xl">
            Meet Our <span className="text-gold-gradient">Directors</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            The experienced leaders guiding Nkwabi Africa&apos;s vision of sustainable growth and responsible business across Tanzania and the continent.
          </p>
        </div>
      </section>

      {/* Directors */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {directors.map((director, i) => (
              <ScrollRevealWrapper key={director.name} direction="up" delay={i * 0.15}>
                <div className="group bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
                  {/* Avatar */}
                  <Avatar initials={director.initials} />

                  {/* Info */}
                  <div className="p-8">
                    {/* Title badge */}
                    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                      {director.title}
                    </span>

                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-tight">
                      {director.name}
                    </h2>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {director.bio}
                    </p>

                    {/* Responsibilities */}
                    <div className="border-t border-border pt-6">
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                        Key Responsibilities
                      </p>
                      <ul className="space-y-2">
                        {director.responsibilities.map((r) => (
                          <li key={r} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                            <span className="text-sm text-foreground leading-relaxed">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollRevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollRevealWrapper>
            <SectionLabel>Get in Touch</SectionLabel>
            <h2 className="text-4xl font-bold text-foreground mb-4">Want to Connect With Our Leadership?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Reach out through our contact page and our team will connect you with the right person.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
