import { Compass, Ruler, Layers, BatteryCharging, Activity, HardHat } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../SectionHeader";

const reasons = [
  { title: "Engineering-Led Design", description: "Every system starts with an engineering assessment, not a sales pitch.", icon: Compass },
  { title: "System-Specific Sizing", description: "Systems are sized to your actual load and backup requirements.", icon: Ruler },
  { title: "Residential & Commercial Expertise", description: "Capability spanning homes, farms and large commercial facilities.", icon: Layers },
  { title: "Solar + Storage Solutions", description: "Hybrid systems combining generation, storage and grid power.", icon: BatteryCharging },
  { title: "Monitoring & Data", description: "Visibility into how your system generates, stores and uses energy.", icon: Activity },
  { title: "End-to-End Installation", description: "From design through installation and commissioning.", icon: HardHat },
];

export function WhyVeeteq() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Why Veeteq"
          title="An Engineering Partner For Your Energy Future"
          align="center"
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div key={reason.title} className="rounded-3xl border border-charcoal/8 bg-white p-7 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest">
                  <Icon className="h-5 w-5 text-solar-yellow" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-base font-bold text-charcoal">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
