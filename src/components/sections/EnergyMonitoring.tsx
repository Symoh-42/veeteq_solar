import { Container } from "../ui/Container";
import { SectionHeader } from "../SectionHeader";
import { EnergyStats } from "../EnergyStats";
import { Button } from "../ui/Button";

export function EnergyMonitoring() {
  return (
    <section className="bg-charcoal py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Data & Monitoring"
          title="Designed Around How You Actually Use Energy."
          description="Every system is engineered using real consumption data — generation, peak demand, battery requirements and grid dependency — and once installed, can be monitored continuously."
          tone="dark"
        />

        <div className="mt-14">
          <EnergyStats />
        </div>

        <div className="mt-10">
          <Button href="/assessment" size="lg">
            Request a Load Assessment
          </Button>
        </div>
      </Container>
    </section>
  );
}
