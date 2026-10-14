"use client";

import { motion } from "framer-motion";
import { Sun, Cpu, BatteryCharging, Home, Zap } from "lucide-react";

const nodeStyle =
  "flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center";

export function EnergyFlow() {
  return (
    <div className="rounded-3xl border border-white/10 bg-charcoal-soft/40 p-6 sm:p-10">
      <div className="flex flex-col items-center gap-6">
        <div className={nodeStyle}>
          <Sun className="h-7 w-7 text-solar-yellow" aria-hidden="true" />
          <span className="text-sm font-bold text-white">SOLAR</span>
        </div>

        <FlowLine vertical />

        <div className={nodeStyle}>
          <Cpu className="h-7 w-7 text-energy-blue" aria-hidden="true" />
          <span className="text-sm font-bold text-white">HYBRID INVERTER</span>
        </div>

        <div className="grid w-full max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-4">
            <FlowLine vertical short />
            <div className={nodeStyle}>
              <BatteryCharging className="h-6 w-6 text-solar-green" aria-hidden="true" />
              <span className="text-xs font-bold text-white">BATTERY</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <FlowLine vertical short />
            <div className={nodeStyle}>
              <Home className="h-6 w-6 text-solar-yellow" aria-hidden="true" />
              <span className="text-xs font-bold text-white">LOAD</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <FlowLine vertical short />
            <div className={nodeStyle}>
              <Zap className="h-6 w-6 text-white/70" aria-hidden="true" />
              <span className="text-xs font-bold text-white">GRID</span>
            </div>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-xl text-center text-sm leading-relaxed text-white/60">
        Solar panels generate energy. The hybrid inverter manages energy flow. Batteries store
        excess energy for later use. The grid provides additional power only when required.
      </p>
    </div>
  );
}

function FlowLine({ vertical, short }: { vertical?: boolean; short?: boolean }) {
  return (
    <svg
      width={vertical ? 4 : 60}
      height={vertical ? (short ? 32 : 40) : 4}
      className="overflow-visible"
      aria-hidden="true"
    >
      <motion.line
        x1={vertical ? 2 : 0}
        y1={vertical ? 0 : 2}
        x2={vertical ? 2 : 60}
        y2={vertical ? (short ? 32 : 40) : 2}
        stroke="var(--color-solar-green)"
        strokeWidth={3}
        strokeLinecap="round"
        strokeDasharray="6 6"
        className="animate-flow"
      />
    </svg>
  );
}
