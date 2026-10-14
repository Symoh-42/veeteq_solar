"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Home, Building2, Wheat, Cpu } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { unsplash } from "@/lib/images";

const floatingCards = [
  { label: "Residential", icon: Home },
  { label: "Commercial", icon: Building2 },
  { label: "Agricultural", icon: Wheat },
  { label: "Engineering", icon: Cpu },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      <Image
        src={unsplash("1642950863398-1fc3600a5313", 2400)}
        alt="Large-scale solar power installation"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(22,163,74,0.35),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.25),transparent_50%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/75 via-charcoal/80 to-charcoal" aria-hidden="true" />

      <Container className="relative flex min-h-[88vh] flex-col justify-center py-28 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-solar-yellow">
            Solar Energy &amp; Engineering
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl">
            Powering Kenya With Smarter Solar Energy.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            From residential backup systems to high-capacity commercial and agricultural
            installations, Veeteq Solar designs and delivers reliable renewable energy solutions
            built around your energy needs.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="/assessment" size="lg">
              Get a Solar Assessment
            </Button>
            <Button href="/#solutions" variant="outline" size="lg" className="border-white/25 text-white hover:border-solar-green hover:text-solar-yellow">
              Explore Our Solutions
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5"
        >
          {floatingCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.label}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 backdrop-blur"
              >
                <Icon className="h-5 w-5 text-solar-green" aria-hidden="true" />
                <span className="text-sm font-semibold text-white">{card.label}</span>
              </div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
