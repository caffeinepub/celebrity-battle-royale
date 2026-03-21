import { motion } from "motion/react";

interface StatBarProps {
  label: string;
  value: number;
  max?: number;
  delay?: number;
}

export function StatBar({ label, value, max = 100, delay = 0 }: StatBarProps) {
  const pct = Math.min(100, (value / max) * 100);

  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span
          className="text-xs tracking-widest"
          style={{
            color: "oklch(0.70 0.01 265)",
            fontFamily: "'Bebas Neue', sans-serif",
          }}
        >
          {label}
        </span>
        <span
          className="text-xs font-bold"
          style={{ color: "oklch(0.78 0.15 70)" }}
        >
          {value}
        </span>
      </div>
      <div className="stat-bar-track">
        <motion.div
          className="stat-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
