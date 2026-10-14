import type { Metadata } from "next";
import Image from "next/image";
import { Compass, Eye, Target, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { WhyVeeteq } from "@/components/sections/WhyVeeteq";
import { ServiceCoverage } from "@/components/sections/ServiceCoverage";
import { CTASection } from "@/components/CTASection";
import { siteConfig } from "@/lib/site-config";
import { unsplash } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Veeteq Solar",
  description:
    "Veeteq Solar is a renewable energy and engineering firm specializing in the design, supply, installation and engineering of solar power systems across Kenya.",
  alternates: { canonical: "/about" },
};

const industries = ["Residential", "Commercial", "Agricultural", "Hospitality", "Institutional"];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-charcoal py-24 sm:py-28">
        <Image
          src={unsplash("1509391366360-2e959784a276", 2000)}
          alt="Solar panels across a landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/85 to-charcoal" aria-hidden="true" />
        <Container className="relative">
          <SectionHeader
            eyebrow="About Veeteq Solar"
            title="Engineering Better Energy Solutions."
            description={`Operating under ${siteConfig.company} in ${siteConfig.location}, Veeteq Solar designs, supplies, installs and engineers solar power systems for residential, agricultural and commercial customers across Kenya.`}
            tone="dark"
          />
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="grid gap-6 sm:grid-cols-3">
          <InfoCard
            icon={Target}
            title="Mission"
            description="To deliver reliable, engineered solar energy solutions that give Kenyan homes, farms and businesses greater control over their energy future."
          />
          <InfoCard
            icon={Eye}
            title="Vision"
            description="To be recognized as an engineering-led renewable energy partner, not simply a solar equipment supplier."
          />
          <InfoCard
            icon={Compass}
            title="Engineering Approach"
            description="Every project begins with a site and load assessment, so systems are sized to real energy requirements rather than a fixed package."
          />
        </Container>
      </section>

      <section className="bg-off-white py-20 sm:py-24">
        <Container>
          <SectionHeader eyebrow="Industries Served" title="Where Veeteq Delivers Solar Engineering" />
          <div className="mt-8 flex flex-wrap gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-charcoal/10 bg-white px-4 py-2 text-sm font-semibold text-charcoal/70"
              >
                {industry}
              </span>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-2.5 text-sm font-semibold text-charcoal/60">
            <MapPin className="h-4 w-4 text-solar-green" aria-hidden="true" />
            Based in {siteConfig.location}, serving customers across the country.
          </div>
        </Container>
      </section>

      <WhyVeeteq />
      <ServiceCoverage />

      <CTASection
        title="Work With an Engineering Partner, Not Just a Supplier."
        description="Get in touch to start with a professional site and load assessment."
      />
    </>
  );
}

function InfoCard({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Target;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-charcoal/8 bg-white p-8 shadow-sm">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest">
        <Icon className="h-5 w-5 text-solar-yellow" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-lg font-bold text-charcoal">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-charcoal/65">{description}</p>
    </div>
  );
}
