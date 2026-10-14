import Image from "next/image";
import { Droplet, Thermometer, Home } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../SectionHeader";
import { Button } from "../ui/Button";
import { unsplash } from "@/lib/images";

export function WaterHeatingSection() {
  return (
    <section id="water-heating" className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Solar Water Heating"
            title="Turn Sunshine Into Hot Water."
            description="Solar thermal systems can reduce dependence on conventional electric water heating for homes, hotels, commercial properties and institutions."
          />

          <p className="mt-6 text-sm leading-relaxed text-charcoal/60">
            Larger systems, such as pressurized configurations, may suit higher-demand properties —
            though every installation is sized to the property&apos;s actual hot water requirements
            rather than a single standard configuration.
          </p>

          <div className="mt-8">
            <Button href="/solutions/solar-water-heating" size="lg">
              Request Water Heating Solution
            </Button>
          </div>
        </div>

        <div className="relative h-72 overflow-hidden rounded-3xl">
          <Image
            src={unsplash("1785402912683-b2e79562b0f9")}
            alt="Rooftop solar water heating system"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/5 to-transparent" />
          <div className="absolute inset-x-0 bottom-6 flex justify-center gap-4">
            <IconTile icon={Droplet} label="Storage Tank" />
            <IconTile icon={Thermometer} label="Solar Collector" />
            <IconTile icon={Home} label="Building" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function IconTile({ icon: Icon, label }: { icon: typeof Droplet; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur">
      <Icon className="h-6 w-6 text-solar-yellow" aria-hidden="true" />
      <span className="text-xs font-semibold text-white">{label}</span>
    </div>
  );
}
