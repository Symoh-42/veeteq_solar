import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ImageGallery } from "@/components/ImageGallery";
import { CTASection } from "@/components/CTASection";
import { getProjectBySlug, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const detailRows = [
    { label: "Client Requirement", value: project.clientRequirement },
    { label: "Engineering Challenge", value: project.engineeringChallenge },
    { label: "Solution", value: project.solution },
    { label: "Installation", value: project.installation },
    { label: "Results", value: project.results },
  ];

  return (
    <>
      <section className="relative flex h-[50vh] min-h-[360px] items-end overflow-hidden bg-charcoal">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/30" aria-hidden="true" />
        <Container className="relative pb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-solar-green/20 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-solar-green">
            {project.systemCategory}
          </span>
          <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">{project.title}</h1>
          <p className="mt-3 flex items-center gap-2 text-sm font-medium text-white/60">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {project.location}
            {project.capacity ? ` · ${project.capacity}` : ""}
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-charcoal">Project Overview</h2>
            <p className="mt-3 text-base leading-relaxed text-charcoal/70">{project.overview}</p>

            <div className="mt-10 space-y-8">
              {detailRows.map((row) => (
                <div key={row.label}>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-solar-green-dark">
                    {row.label}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-charcoal/70">{row.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-bold uppercase tracking-wide text-solar-green-dark">Gallery</h3>
              <div className="mt-4">
                <ImageGallery images={project.gallery} alt={project.title} />
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-3xl border border-charcoal/8 bg-off-white p-7">
            <h3 className="text-sm font-bold uppercase tracking-wide text-charcoal/50">
              System Components
            </h3>
            <ul className="mt-4 space-y-3">
              {project.systemComponents.map((c) => (
                <li key={c} className="text-sm font-medium text-charcoal/75">
                  {c}
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </section>

      <CTASection
        title="Considering a Similar Project?"
        description="Start with a site and load assessment tailored to your property."
      />
    </>
  );
}
