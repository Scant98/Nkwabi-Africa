"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/* ── Helpers ─────────────────────────────────────────────────────────── */
type Atom = { x: number; y: number; label: string; color: string; r: number };
type Bond = { from: number; to: number; order?: 1 | 2 | 3 };

function float(duration: number, delay: number, y = 18, x = 0) {
  return {
    animate: {
      y: [0, -y, 0],
      x: [0, x, 0],
      transition: { duration, delay, repeat: Infinity, ease: "easeInOut" as const },
    },
  };
}

function rotate(duration: number, delay: number) {
  return {
    animate: {
      rotate: [0, 360],
      transition: { duration, delay, repeat: Infinity, ease: "linear" as const },
    },
  };
}

/* ── Molecule renderer ───────────────────────────────────────────────── */
function Molecule({
  atoms,
  bonds,
  opacity = 0.55,
}: {
  atoms: Atom[];
  bonds: Bond[];
  opacity?: number;
}) {
  const pad = 30;
  const xs = atoms.map((a) => a.x);
  const ys = atoms.map((a) => a.y);
  const minX = Math.min(...xs) - pad;
  const minY = Math.min(...ys) - pad;
  const w = Math.max(...xs) - minX + pad;
  const h = Math.max(...ys) - minY + pad;

  return (
    <svg
      viewBox={`${minX} ${minY} ${w} ${h}`}
      width={w}
      height={h}
      style={{ opacity }}
      overflow="visible"
    >
      <defs>
        {atoms.map((a, i) => (
          <radialGradient key={i} id={`glow-${i}-${a.label}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={a.color} stopOpacity="0.6" />
            <stop offset="100%" stopColor={a.color} stopOpacity="0" />
          </radialGradient>
        ))}
      </defs>

      {/* Bonds */}
      {bonds.map((b, bi) => {
        const a1 = atoms[b.from];
        const a2 = atoms[b.to];
        const dx = a2.x - a1.x;
        const dy = a2.y - a1.y;
        const len = Math.sqrt(dx * dx + dy * dy);
        const nx = -dy / len;
        const ny = dx / len;
        const offsets = b.order === 2 ? [-3, 3] : b.order === 3 ? [-5, 0, 5] : [0];

        return offsets.map((off, oi) => (
          <line
            key={`${bi}-${oi}`}
            x1={a1.x + nx * off}
            y1={a1.y + ny * off}
            x2={a2.x + nx * off}
            y2={a2.y + ny * off}
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        ));
      })}

      {/* Glow halos */}
      {atoms.map((a, i) => (
        <circle
          key={`halo-${i}`}
          cx={a.x}
          cy={a.y}
          r={a.r * 2.2}
          fill={`url(#glow-${i}-${a.label})`}
        />
      ))}

      {/* Atom circles */}
      {atoms.map((a, i) => (
        <g key={`atom-${i}`}>
          <circle cx={a.x} cy={a.y} r={a.r} fill={a.color} fillOpacity={0.18} stroke={a.color} strokeWidth="1.5" />
          <text
            x={a.x}
            y={a.y}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={a.r * 0.85}
            fontWeight="700"
            fill={a.color}
            fontFamily="monospace"
          >
            {a.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ── Molecule definitions ────────────────────────────────────────────── */
const GOLD = "#dda63a";
const SLATE = "#94a3b8";
const BLUE = "#7dd3fc";
const RED = "#f87171";
const PURPLE = "#c084fc";
const WHITE = "#e2e8f0";
const GREEN = "#6ee7b7";

// NaCN — Sodium Cyanide (linear)
const NaCN: { atoms: Atom[]; bonds: Bond[] } = {
  atoms: [
    { x: 0, y: 0, label: "Na", color: GOLD, r: 22 },
    { x: 70, y: 0, label: "C", color: SLATE, r: 16 },
    { x: 130, y: 0, label: "N", color: BLUE, r: 16 },
  ],
  bonds: [{ from: 0, to: 1 }, { from: 1, to: 2, order: 3 }],
};

// Benzene / Activated Carbon hexagonal ring
const Benzene: { atoms: Atom[]; bonds: Bond[] } = {
  atoms: [0, 1, 2, 3, 4, 5].map((i) => ({
    x: Math.cos((i * Math.PI) / 3 - Math.PI / 6) * 52,
    y: Math.sin((i * Math.PI) / 3 - Math.PI / 6) * 52,
    label: "C",
    color: SLATE,
    r: 14,
  })),
  bonds: [
    { from: 0, to: 1, order: 2 }, { from: 1, to: 2 },
    { from: 2, to: 3, order: 2 }, { from: 3, to: 4 },
    { from: 4, to: 5, order: 2 }, { from: 5, to: 0 },
  ],
};

// Au — Gold atom (single, large)
const AuAtom: { atoms: Atom[]; bonds: Bond[] } = {
  atoms: [{ x: 0, y: 0, label: "Au", color: GOLD, r: 30 }],
  bonds: [],
};

// Ca(OH)₂ — Hydrated Lime
const CaOH2: { atoms: Atom[]; bonds: Bond[] } = {
  atoms: [
    { x: 0, y: 25, label: "H", color: WHITE, r: 11 },
    { x: 50, y: 10, label: "O", color: RED, r: 15 },
    { x: 110, y: 0, label: "Ca", color: PURPLE, r: 22 },
    { x: 170, y: 10, label: "O", color: RED, r: 15 },
    { x: 220, y: 25, label: "H", color: WHITE, r: 11 },
  ],
  bonds: [{ from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 }],
};

// H₂O₂ — Hydrogen Peroxide
const H2O2: { atoms: Atom[]; bonds: Bond[] } = {
  atoms: [
    { x: 0, y: 15, label: "H", color: WHITE, r: 11 },
    { x: 45, y: 0, label: "O", color: RED, r: 15 },
    { x: 95, y: 0, label: "O", color: RED, r: 15 },
    { x: 140, y: 15, label: "H", color: WHITE, r: 11 },
  ],
  bonds: [{ from: 0, to: 1 }, { from: 1, to: 2, order: 2 }, { from: 2, to: 3 }],
};

// C (Activated carbon node cluster)
const CarbonCluster: { atoms: Atom[]; bonds: Bond[] } = {
  atoms: [
    { x: 0, y: 0, label: "C", color: GREEN, r: 14 },
    { x: 46, y: -26, label: "C", color: GREEN, r: 14 },
    { x: 46, y: 26, label: "C", color: GREEN, r: 14 },
    { x: 92, y: 0, label: "C", color: GREEN, r: 14 },
  ],
  bonds: [
    { from: 0, to: 1 }, { from: 0, to: 2 },
    { from: 1, to: 3 }, { from: 2, to: 3 },
    { from: 0, to: 3 },
  ],
};

/* ── Scattered molecule positions ────────────────────────────────────── */
const molecules = [
  { mol: NaCN,        top: "12%",  left: "4%",   ...float(7, 0, 16, 6),   opacity: 0.6 },
  { mol: Benzene,     top: "8%",   left: "60%",  ...rotate(22, 0.5),      opacity: 0.45 },
  { mol: AuAtom,      top: "50%",  left: "48%",  ...float(5, 1, 12),      opacity: 0.7 },
  { mol: CaOH2,       top: "70%",  left: "5%",   ...float(9, 2, 14, -5),  opacity: 0.45 },
  { mol: H2O2,        top: "72%",  left: "65%",  ...float(6, 1.5, 18, 8), opacity: 0.5 },
  { mol: CarbonCluster, top: "30%", left: "78%", ...float(8, 3, 10),      opacity: 0.5 },
  { mol: NaCN,        top: "40%",  left: "18%",  ...float(10, 4, 20, -8), opacity: 0.3 },
  { mol: Benzene,     top: "55%",  left: "28%",  ...rotate(30, 2),        opacity: 0.25 },
  { mol: AuAtom,      top: "18%",  left: "86%",  ...float(6, 0.8, 14),    opacity: 0.55 },
  { mol: H2O2,        top: "20%",  left: "35%",  ...float(7.5, 2.5, 12),  opacity: 0.3 },
];

/* ── Main export ─────────────────────────────────────────────────────── */
export function ChemicalHero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end overflow-clip bg-zinc-950">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle, #c9a84c 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      {/* Radial depth gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(201,168,76,0.08),transparent)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-transparent to-transparent" />

      {/* Gold top accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary/60 to-transparent" />

      {/* Animated molecules */}
      {molecules.map(({ mol, top, left, animate, opacity }, i) => (
        <motion.div
          key={i}
          animate={animate}
          className="absolute pointer-events-none"
          style={{ top, left }}
        >
          <Molecule atoms={mol.atoms} bonds={mol.bonds} opacity={opacity} />
        </motion.div>
      ))}

      {/* Hero text */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32 w-full">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Services
        </Link>

        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Regulated Supply</span>
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 max-w-4xl">
          Gold Mining <span className="text-gold-gradient">Chemicals</span>
        </h1>
        <p className="text-lg sm:text-xl text-white/60 max-w-2xl">
          Safe, compliant supply of essential mining reagents — sourced internationally, delivered responsibly across Tanzania.
        </p>
      </div>
    </section>
  );
}
