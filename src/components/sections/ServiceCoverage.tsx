import Image from "next/image";
import { MapPin } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../SectionHeader";
import { siteConfig } from "@/lib/site-config";
import { unsplash } from "@/lib/images";

export function ServiceCoverage() {
  return (
    <section className="relative overflow-hidden bg-forest py-20 sm:py-28">
      <Image
        src={unsplash("1643913224222-17cc6adb2dfc", 2000)}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest/95 via-forest/90 to-forest" aria-hidden="true" />
      <Container className="relative">
        <SectionHeader
          eyebrow="Service Coverage"
          title="Solar Engineering Across Kenya."
          description="Veeteq Solar serves residential, agricultural and commercial customers across the country, based out of Nairobi."
          tone="dark"
          align="center"
        />

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3">
          {siteConfig.serviceAreas.map((area) => (
            <div
              key={area}
              className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5"
            >
              <MapPin className="h-4 w-4 shrink-0 text-solar-yellow" aria-hidden="true" />
              <span className="text-sm font-semibold text-white">{area}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
