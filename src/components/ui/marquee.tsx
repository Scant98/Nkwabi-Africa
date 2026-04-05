"use client";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  duration?: string;
  gap?: string;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  duration = "40s",
  gap = "1rem",
}: MarqueeProps) {
  const animationName = vertical ? "marquee-vertical" : "marquee";
  const animationStyle = {
    "--gap": gap,
    animation: `${animationName} ${duration} linear infinite ${reverse ? "reverse" : ""}`,
  } as React.CSSProperties;

  return (
    <div
      className={cn(
        "group flex overflow-hidden",
        vertical ? "flex-col" : "flex-row",
        className
      )}
      style={{ gap }}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 justify-around",
            vertical ? "flex-col" : "flex-row",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
          style={{ ...animationStyle, gap }}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
