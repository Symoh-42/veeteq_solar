"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { EmptyState } from "@/components/EmptyState";
import { projectCategories, type Project, type ProjectCategory } from "@/lib/projects";
import { cn } from "@/lib/utils";

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<ProjectCategory | "All">("All");

  const availableCategories = projectCategories.filter((c) => projects.some((p) => p.category === c));
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <FilterButton active={active === "All"} onClick={() => setActive("All")}>
          All
        </FilterButton>
        {availableCategories.map((category) => (
          <FilterButton key={category} active={active === category} onClick={() => setActive(category)}>
            {category}
          </FilterButton>
        ))}
      </div>

      <div className="mt-8">
        {filtered.length === 0 ? (
          <EmptyState title="No projects in this category yet" description="Check back soon, or explore another category." />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
        active
          ? "border-solar-green bg-solar-green/10 text-solar-green-dark"
          : "border-charcoal/15 text-charcoal/60 hover:border-charcoal/30"
      )}
    >
      {children}
    </button>
  );
}
