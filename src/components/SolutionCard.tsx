import Link from "next/link";
import Image from "next/image";
import {
  BatteryCharging,
  Home,
  Building2,
  Wheat,
  Droplets,
  Lightbulb,
  Car,
  ShieldCheck,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import type { Solution } from "@/lib/solutions";

const icons: Record<Solution["icon"], LucideIcon> = {
  hybrid: BatteryCharging,
  residential: Home,
  commercial: Building2,
  agricultural: Wheat,
  "water-heating": Droplets,
  lighting: Lightbulb,
  carport: Car,
  security: ShieldCheck,
};

export function SolutionCard({ solution }: { solution: Solution }) {
  const Icon = icons[solution.icon];

  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-charcoal/8 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative h-40 overflow-hidden">
        <Image
          src={solution.image}
          alt={solution.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/10 to-transparent" />
        <span className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 backdrop-blur">
          <Icon className="h-5 w-5 text-solar-yellow" aria-hidden="true" strokeWidth={1.75} />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-charcoal">{solution.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/65">
          {solution.shortDescription}
        </p>
        <Link
          href={`/solutions/${solution.slug}`}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-solar-green-dark transition-colors group-hover:text-forest"
        >
          Learn More
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
