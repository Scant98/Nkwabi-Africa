"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/directors", label: "Directors" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" suppressHydrationWarning>
          <div className="flex items-center justify-between h-16 lg:h-20" suppressHydrationWarning>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <Image src="/logo.png" alt="Nkwabi Africa" width={40} height={40} className="rounded-lg object-contain" />
              <div>
                <span className="font-bold text-base leading-tight text-foreground">Nkwabi Africa</span>
                <p className="text-[10px] text-muted-foreground leading-tight hidden sm:block">Company Limited</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors relative group",
                    pathname === link.href
                      ? "text-primary"
                      : "text-foreground-muted hover:text-foreground"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                      pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3" suppressHydrationWarning>
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
              )}
              <Button asChild variant="outline" size="sm" className="hidden lg:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <button
                className="lg:hidden w-9 h-9 flex items-center justify-center text-foreground"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background flex flex-col"
          >
            <div className="flex items-center justify-between px-4 h-16">
              <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                <Image src="/logo.png" alt="Nkwabi Africa" width={36} height={36} className="rounded-lg object-contain" />
                <span className="font-bold text-base text-foreground">Nkwabi Africa</span>
              </Link>
              <button onClick={() => setMobileOpen(false)} className="w-9 h-9 flex items-center justify-center">
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "text-3xl font-bold transition-colors",
                      pathname === link.href ? "text-primary" : "text-foreground hover:text-primary"
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="px-4 pb-8">
              <Button asChild className="w-full bg-primary text-primary-foreground" size="lg">
                <Link href="/contact" onClick={() => setMobileOpen(false)}>Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
