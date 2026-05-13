"use client";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

const keywords = [
  { text: "Gold Mining & Trading", dot: true },
  { text: "Coffee Export", dot: false },
  { text: "Logistics Fleet", dot: true },
  // { text: "Mining Chemicals", dot: false },
  { text: "Tanzania", dot: true },
  { text: "Sustainable Growth", dot: false },
  { text: "ISO 14001", dot: true },
  { text: "ISO 45001", dot: false },
  { text: "AMCOS Partners", dot: true },
  { text: "TCB Certified", dot: false },
  { text: "Africa", dot: true },
  { text: "Export Ready", dot: false },
  { text: "Geita & Mwanza", dot: true },
  { text: "Kahama HQ", dot: false },
];

function Pill({ text, dot }: { text: string; dot: boolean }) {
  return (
    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-border bg-card/60 text-sm font-medium text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors duration-200 cursor-default select-none whitespace-nowrap">
      {dot ? (
        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
      ) : (
        <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
      )}
      {text}
    </div>
  );
}

interface MarqueeStripProps {
  className?: string;
}

export function MarqueeStrip({ className }: MarqueeStripProps) {
  const half = Math.ceil(keywords.length / 2);
  const row1 = keywords.slice(0, half);
  const row2 = keywords.slice(half);

  return (
    <div className={cn("relative overflow-hidden border-y border-border bg-background-muted py-6 space-y-3", className)}>
      {/* Fade masks on edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-28 bg-linear-to-r from-background-muted to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-28 bg-linear-to-l from-background-muted to-transparent z-10" />

      {/* Row 1 — left to right */}
      <Marquee pauseOnHover duration="38s" gap="0.75rem">
        {row1.map((k) => (
          <Pill key={k.text} text={k.text} dot={k.dot} />
        ))}
      </Marquee>

      {/* Row 2 — right to left */}
      <Marquee pauseOnHover reverse duration="42s" gap="0.75rem">
        {row2.map((k) => (
          <Pill key={k.text} text={k.text} dot={k.dot} />
        ))}
      </Marquee>
    </div>
  );
}
