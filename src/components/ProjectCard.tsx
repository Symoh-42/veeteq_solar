import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-charcoal/8 bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
        <span className="absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-widest text-white/80">
          {project.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-solar-green/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-solar-green-dark">
          {project.systemCategory}
        </span>
        <h3 className="mt-3 text-lg font-bold text-charcoal">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/65">{project.description}</p>
        <div className="mt-4 flex items-center justify-between border-t border-charcoal/8 pt-4">
          <span className="flex items-center gap-1.5 text-xs font-medium text-charcoal/50">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {project.location}
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-solar-green-dark group-hover:text-forest">
            View Project
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
