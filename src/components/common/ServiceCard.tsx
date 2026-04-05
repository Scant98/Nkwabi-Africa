"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  badge?: string;
  className?: string;
  gradient?: string;
}

export function ServiceCard({ title, description, icon: Icon, href, badge, className, gradient }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "group relative bg-card border border-border rounded-2xl p-6 overflow-hidden cursor-pointer hover:border-primary/50 transition-colors duration-300",
        className
      )}
    >
      {/* Top gold border animation */}
      <div className="absolute top-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500" />

      {/* Gradient bg */}
      {gradient && (
        <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500", gradient)} />
      )}

      <Link href={href} className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          {badge && <Badge variant="gold">{badge}</Badge>}
        </div>

        <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">{description}</p>

        <div className="flex items-center gap-1 mt-4 text-primary text-sm font-medium">
          <span>Learn more</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </motion.div>
  );
}
