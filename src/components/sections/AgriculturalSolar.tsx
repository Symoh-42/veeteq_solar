import Image from "next/image";
import { Droplets, Wheat, Snowflake, Radio } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../SectionHeader";
import { Button } from "../ui/Button";
import { unsplash } from "@/lib/images";

const applications = [
  { label: "Irrigation", icon: Droplets },
  { label: "Water pumping", icon: Droplets },
  { label: "Farm operations", icon: Wheat },
  { label: "Cold storage", icon: Snowflake },
  { label: "Remote energy requirements", icon: Radio },
];

export function AgriculturalSolar() {
  return (
    <section id="agricultural" className="bg-off-white py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative order-2 h-72 overflow-hidden rounded-3xl lg:order-1">
          <Image
            src={unsplash("1707656020134-2dd115e5331c")}
            alt="Solar-powered irrigation on a farm"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/15 to-transparent" />
          <div className="absolute inset-x-6 bottom-6 grid grid-cols-2 gap-3">
            {["Solar Array", "Pump", "Water Tank", "Battery"].map((label) => (
              <div key={label} className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-center text-xs font-semibold text-white backdrop-blur">
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeader
            eyebrow="Agricultural Solar"
            title="Reliable Energy For Modern Agriculture."
            description="Solar power keeps irrigation, pumping and farm operations running, particularly in areas with limited or unreliable grid access."
          />

          <div className="mt-6 grid grid-cols-2 gap-3">
            {applications.map((a) => {
              const Icon = a.icon;
              return (
                <div key={a.label} className="flex items-center gap-2.5 rounded-xl border border-charcoal/8 bg-white px-4 py-3">
                  <Icon className="h-4 w-4 text-solar-green-dark" aria-hidden="true" />
                  <span className="text-sm font-medium text-charcoal">{a.label}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-8">
            <Button href="/solutions/agricultural-solar" size="lg" variant="secondary">
              Explore Agricultural Solar
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
