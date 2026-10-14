import { Container } from "../ui/Container";
import { SectionHeader } from "../SectionHeader";
import { SolutionCard } from "../SolutionCard";
import { solutions } from "@/lib/solutions";

export function SolutionsSection() {
  return (
    <section id="solutions" className="bg-off-white py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Our Solutions"
          title="Engineered Solar Solutions For Every Energy Need"
          description="From homes to farms to commercial facilities, Veeteq designs solar systems around how energy is actually used."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => (
            <SolutionCard key={solution.slug} solution={solution} />
          ))}
        </div>
      </Container>
    </section>
  );
}
