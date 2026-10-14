import { Container } from "../ui/Container";
import { SectionHeader } from "../SectionHeader";
import { ProjectCard } from "../ProjectCard";
import { Button } from "../ui/Button";
import { projects } from "@/lib/projects";

export function ProjectSpotlight() {
  const featured = projects.slice(0, 3);

  return (
    <section className="bg-off-white py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Selected Projects"
            title="Engineering Solutions, Delivered."
            description="A look at the range of projects Veeteq designs and installs across Kenya."
          />
          <Button href="/projects" variant="outline">
            View All Projects
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
