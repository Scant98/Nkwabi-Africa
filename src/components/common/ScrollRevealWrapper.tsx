"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsapConfig";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealWrapperProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade";
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export function ScrollRevealWrapper({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  className,
  once = true,
}: ScrollRevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    const fromVars: gsap.TweenVars = {
      up: { y: 50, opacity: 0 },
      down: { y: -50, opacity: 0 },
      left: { x: -50, opacity: 0 },
      right: { x: 50, opacity: 0 },
      fade: { opacity: 0 },
    }[direction];

    gsap.from(ref.current, {
      ...fromVars,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 88%",
        once,
      },
    });
  }, { scope: ref });

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
