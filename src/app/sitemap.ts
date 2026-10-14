import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { solutions } from "@/lib/solutions";
import { projects } from "@/lib/projects";
import { insights } from "@/lib/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/projects", "/assessment", "/contact", "/insights"].map(
    (route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
    })
  );

  const solutionRoutes = solutions.map((s) => ({
    url: `${siteConfig.url}/solutions/${s.slug}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${siteConfig.url}/projects/${p.slug}`,
    lastModified: new Date(),
  }));

  const insightRoutes = insights.map((i) => ({
    url: `${siteConfig.url}/insights/${i.slug}`,
    lastModified: new Date(i.date),
  }));

  return [...staticRoutes, ...solutionRoutes, ...projectRoutes, ...insightRoutes];
}
