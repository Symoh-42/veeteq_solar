import { Container } from "../ui/Container";
import { SectionHeader } from "../SectionHeader";
import { EnergyFlow } from "../EnergyFlow";

export function HybridFeature() {
  return (
    <section className="bg-forest py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Hybrid Solar"
          title="Solar When You Need It. Power When You Need It."
          description="Hybrid systems combine solar generation, battery storage and grid power so your property stays powered without interruption."
          tone="dark"
        />

        <div className="mt-14">
          <EnergyFlow />
        </div>
      </Container>
    </section>
  );
}
