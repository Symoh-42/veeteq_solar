import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/CTASection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getSolutionBySlug, solutions } from "@/lib/solutions";
import { whatsappMessages } from "@/lib/site-config";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};

  return {
    title: solution.name,
    description: solution.shortDescription,
    alternates: { canonical: `/solutions/${solution.slug}` },
  };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: solution.name,
    areaServed: "KE",
    description: solution.description,
    provider: { "@type": "Organization", name: "Veeteq Solar" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="relative overflow-hidden bg-charcoal py-24 sm:py-28">
        <Image
          src={solution.image}
          alt={solution.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/85 to-charcoal" aria-hidden="true" />
        <Container className="relative max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-solar-yellow">
            Solutions
          </span>
          <h1 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl">{solution.name}</h1>
          <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
            {solution.description}
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h2 className="text-sm font-bold uppercase tracking-wide text-solar-green-dark">
            Applications
          </h2>
          <ul className="mt-4 space-y-3">
            {solution.applications.map((app) => (
              <li key={app} className="flex items-center gap-2.5 text-base text-charcoal/75">
                <Check className="h-5 w-5 text-solar-green" aria-hidden="true" />
                {app}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <WhatsAppButton message={whatsappMessages.system(solution.name)} label="Ask About This System" />
          </div>
        </Container>
      </section>

      <CTASection
        title={`Considering ${solution.name}?`}
        description="Start with a professional site and load assessment so your system is sized correctly."
      />
    </>
  );
}
