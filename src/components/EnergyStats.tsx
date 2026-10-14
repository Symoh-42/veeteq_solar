"use client";

import { motion } from "framer-motion";
import { Sun, BatteryMedium, Zap, Home } from "lucide-react";

const bars = [
  { label: "Solar Generation", value: 82, color: "bg-solar-green" },
  { label: "Battery Storage", value: 64, color: "bg-energy-blue" },
  { label: "Grid Consumption", value: 28, color: "bg-white/30" },
];

const liveStats = [
  { label: "Solar", value: "8.4 kW", icon: Sun, color: "text-solar-yellow" },
  { label: "Battery", value: "76%", icon: BatteryMedium, color: "text-solar-green" },
  { label: "Grid", value: "2.1 kW", icon: Zap, color: "text-energy-blue" },
  { label: "Load", value: "6.8 kW", icon: Home, color: "text-white" },
];

export function EnergyStats() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
          Sample System Profile
        </p>
        <div className="mt-6 space-y-5">
          {bars.map((bar, i) => (
            <div key={bar.label}>
              <div className="mb-2 flex items-center justify-between text-sm text-white/70">
                <span>{bar.label}</span>
                <span className="font-semibold text-white">{bar.value}%</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${bar.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: i * 0.15, ease: "easeOut" }}
                  className={`h-full rounded-full ${bar.color}`}
                />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-white/40">
          Illustrative sample profile — actual generation, storage and grid figures depend on your
          system design.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
          Live Energy Monitoring (Demo)
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4">
          {liveStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-charcoal/40 p-5">
                <Icon className={`h-5 w-5 ${stat.color}`} aria-hidden="true" />
                <p className="mt-3 text-2xl font-extrabold text-white">{stat.value}</p>
                <p className="text-xs font-medium uppercase tracking-wide text-white/40">{stat.label}</p>
              </div>
            );
          })}
        </div>
        <p className="mt-6 text-xs text-white/40">
          Visual demonstration only — connects to real monitoring data once your system is
          installed.
        </p>
      </div>
    </div>
  );
}
