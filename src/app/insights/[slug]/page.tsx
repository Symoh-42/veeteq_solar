import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { BlogCard } from "@/components/BlogCard";
import { CTASection } from "@/components/CTASection";
import { getInsightBySlug, insights } from "@/lib/insights";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) return {};

  return {
    title: insight.title,
    description: insight.excerpt,
    alternates: { canonical: `/insights/${insight.slug}` },
  };
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) notFound();

  const related = insights.filter((i) => i.slug !== insight.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.excerpt,
    author: { "@type": "Organization", name: insight.author },
    datePublished: insight.date,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="relative flex h-[40vh] min-h-[300px] items-end overflow-hidden bg-charcoal">
        <Image
          src={insight.image}
          alt={insight.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/65 to-charcoal/30" aria-hidden="true" />
        <Container className="relative pb-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-solar-green-dark">
            {insight.category}
          </span>
          <h1 className="mt-4 max-w-2xl text-3xl font-extrabold text-white sm:text-4xl">
            {insight.title}
          </h1>
          <p className="mt-3 text-sm font-medium text-white/60">
            {insight.author} ·{" "}
            {new Date(insight.date).toLocaleDateString("en-KE", { year: "numeric", month: "long", day: "numeric" })}
            {" · "}
            {insight.readingTime}
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <div className="space-y-6">
            {insight.content.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-charcoal/75">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="bg-off-white py-16 sm:py-20">
          <Container>
            <h2 className="text-xl font-bold text-charcoal">Related Articles</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <BlogCard key={r.slug} insight={r} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CTASection
        title="Have Questions About Your Own Energy Setup?"
        description="Start with a professional site and load assessment."
      />
    </>
  );
}
