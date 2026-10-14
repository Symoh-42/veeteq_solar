import { Container } from "../ui/Container";
import { SectionHeader } from "../SectionHeader";
import { ProductCard } from "../ProductCard";
import { productCategories } from "@/lib/products";

export function TechnologySection() {
  return (
    <section id="technology" className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Technology We Work With"
          title="Components Engineered For Reliability"
          description="Veeteq works with proven solar technology — including Deye hybrid inverter systems — matched to each project's requirements."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
