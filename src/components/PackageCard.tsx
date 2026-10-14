import { BatteryFull } from "lucide-react";
import type { SolarPackage } from "@/lib/packages";
import { Button } from "./ui/Button";

export function PackageCard({ pkg, featured = false }: { pkg: SolarPackage; featured?: boolean }) {
  return (
    <div
      className={`flex flex-col rounded-3xl p-8 ${
        featured
          ? "bg-forest text-white shadow-xl"
          : "border border-charcoal/10 bg-white text-charcoal shadow-sm"
      }`}
    >
      <BatteryFull
        className={`h-9 w-9 ${featured ? "text-solar-yellow" : "text-solar-green"}`}
        aria-hidden="true"
      />
      <h3 className="mt-5 text-xl font-bold uppercase tracking-wide">{pkg.name}</h3>
      <p className={`mt-1 text-sm ${featured ? "text-white/60" : "text-charcoal/50"}`}>
        Battery capacity: {pkg.batteryCapacity}
      </p>

      <div className="mt-6">
        <p className={`text-xs font-semibold uppercase tracking-wide ${featured ? "text-white/50" : "text-charcoal/40"}`}>
          Indicative price
        </p>
        <p className="mt-1 text-3xl font-extrabold">{pkg.indicativePrice}</p>
      </div>

      <p className={`mt-5 flex-1 text-sm leading-relaxed ${featured ? "text-white/70" : "text-charcoal/65"}`}>
        Best for: {pkg.bestFor}
      </p>

      <Button
        href="/assessment"
        variant={featured ? "primary" : "outline"}
        className="mt-6 w-full"
      >
        Request Assessment
      </Button>
    </div>
  );
}
