"use client";

import { motion } from "framer-motion";
import { Search, LineChart, PenTool, Wrench, Activity } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Site Assessment",
    description: "We evaluate your property, roof or land space, and existing electrical infrastructure.",
    icon: Search,
  },
  {
    number: "02",
    title: "Load & Energy Analysis",
    description: "We study your electricity consumption, peak demand and backup priorities.",
    icon: LineChart,
  },
  {
    number: "03",
    title: "System Design",
    description: "We engineer a system sized to your actual energy requirements — not a fixed package.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Installation & Commissioning",
    description: "Our team installs and commissions the system, testing performance before handover.",
    icon: Wrench,
  },
  {
    number: "05",
    title: "Monitoring & Support",
    description: "We support ongoing monitoring and maintenance to keep your system performing.",
    icon: Activity,
  },
];

export function ProcessTimeline() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((step, i) => {
        const Icon = step.icon;
        return (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <span className="text-4xl font-extrabold text-white/10">{step.number}</span>
            <Icon className="mt-3 h-7 w-7 text-solar-yellow" aria-hidden="true" />
            <h3 className="mt-4 text-base font-bold text-white">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">{step.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
