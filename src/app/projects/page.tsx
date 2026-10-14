import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { ProjectsGrid } from "./ProjectsGrid";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Veeteq Solar's residential, commercial, agricultural and specialized solar engineering projects across Kenya.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-charcoal py-24 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Projects"
            title="Solar Engineering, Delivered."
            description="A look at the range of residential, commercial and agricultural solar projects Veeteq designs and installs."
            tone="dark"
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <ProjectsGrid projects={projects} />
        </Container>
      </section>

      <CTASection
        title="Have a Project In Mind?"
        description="Tell us about your property and energy requirements — we'll start with a professional assessment."
      />
    </>
  );
}
