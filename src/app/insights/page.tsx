import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { BlogCard } from "@/components/BlogCard";
import { insights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description: "Solar buying guides, hybrid solar, battery storage, commercial and agricultural solar insights from Veeteq Solar.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Insights"
          title="Solar Energy Insights"
          description="Practical guides on hybrid solar, battery storage, commercial and agricultural solar, and more."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {insights.map((insight) => (
            <BlogCard key={insight.slug} insight={insight} />
          ))}
        </div>
      </Container>
    </section>
  );
}
