import { Container } from "../ui/Container";
import { SectionHeader } from "../SectionHeader";
import { SolarCalculator } from "../SolarCalculator";

export function CalculatorSection() {
  return (
    <section id="calculator" className="bg-off-white py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Solar Sizing Calculator"
          title="Get an Initial Estimate"
          description="Answer a few questions for an indicative solar and battery range. This is a starting point, not a final quotation."
        />

        <div className="mt-12">
          <SolarCalculator />
        </div>
      </Container>
    </section>
  );
}
