import { Container } from "../ui/Container";
import { SectionHeader } from "../SectionHeader";
import { PackageCard } from "../PackageCard";
import { Button } from "../ui/Button";
import { packages } from "@/lib/packages";

export function PackagesSection() {
  return (
    <section id="packages" className="bg-off-white py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Solar Packages"
          title="Indicative Package Pricing"
          description="Final system pricing depends on site assessment, system configuration, components and installation requirements."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:max-w-3xl">
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.slug} pkg={pkg} featured={i === 1} />
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-charcoal/8 bg-white p-6 sm:flex sm:items-center sm:justify-between">
          <p className="text-sm font-semibold text-charcoal">Need something larger?</p>
          <Button href="/assessment" variant="secondary" className="mt-4 sm:mt-0">
            Design My System
          </Button>
        </div>
      </Container>
    </section>
  );
}
