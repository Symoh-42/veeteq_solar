import { Container } from "../ui/Container";
import { SectionHeader } from "../SectionHeader";
import { ProcessTimeline } from "../ProcessTimeline";

export function EngineeringProcess() {
  return (
    <section className="bg-charcoal py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Our Process"
          title="We Don't Guess. We Engineer."
          description="System sizing is based on your actual energy requirements — not on selling a predetermined package."
          tone="dark"
        />

        <div className="mt-14">
          <ProcessTimeline />
        </div>
      </Container>
    </section>
  );
}
