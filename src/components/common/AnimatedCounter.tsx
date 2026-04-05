"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsapConfig";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedCounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({ end, prefix = "", suffix = "", duration = 2.5, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    const counter = { val: 0 };
    gsap.to(counter, {
      val: end,
      duration,
      ease: "power2.out",
      snap: { val: 1 },
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        once: true,
      },
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = prefix + Math.round(counter.val) + suffix;
        }
      },
    });
  }, { scope: ref });

  return <span ref={ref} className={className}>{prefix}0{suffix}</span>;
}
