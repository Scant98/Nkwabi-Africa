import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-2 mb-4", className)}>
      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
      <span
        className="text-xs font-semibold uppercase tracking-[0.15em] text-primary relative overflow-hidden"
        style={{
          background: "linear-gradient(90deg, #c9a84c 25%, #fdf3d5 50%, #c9a84c 75%)",
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          animation: "shiny-text 4s linear infinite",
          "--shiny-width": "80px",
        } as React.CSSProperties}
      >
        {children}
      </span>
    </div>
  );
}
