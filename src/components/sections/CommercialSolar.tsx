import Image from "next/image";
import { Building2, Battery, Activity, Network } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../SectionHeader";
import { WhatsAppButton } from "../WhatsAppButton";
import { whatsappMessages } from "@/lib/site-config";
import { unsplash } from "@/lib/images";

const targets = ["Hotels", "Offices", "Retail facilities", "Industrial facilities", "Institutions", "Large properties"];

const capabilities = [
  { label: "Rooftop & flat-roof systems", icon: Building2 },
  { label: "High-capacity battery storage", icon: Battery },
  { label: "System monitoring", icon: Activity },
  { label: "Grid integration", icon: Network },
];

export function CommercialSolar() {
  return (
    <section id="commercial" className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Commercial Solar"
            title="Powering Businesses Beyond the Grid."
            description="Veeteq designs and installs commercial-scale solar and storage systems for facilities where downtime is costly."
          />

          <div className="mt-6 flex flex-wrap gap-2">
            {targets.map((t) => (
              <span key={t} className="rounded-full bg-charcoal/5 px-3.5 py-1.5 text-xs font-semibold text-charcoal/70">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <WhatsAppButton message={whatsappMessages.commercial} label="Plan a Commercial Project" />
          </div>
        </div>

        <div className="relative aspect-4/3 overflow-hidden rounded-3xl">
          <Image
            src={unsplash("1677938438353-3df2b797568a")}
            alt="Commercial rooftop solar installation"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />
          <div className="absolute inset-x-4 bottom-4 grid grid-cols-2 gap-3">
            {capabilities.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.label}
                  className="flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/10 px-3.5 py-3 backdrop-blur"
                >
                  <Icon className="h-4 w-4 shrink-0 text-solar-yellow" aria-hidden="true" />
                  <span className="text-xs font-semibold text-white">{c.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
