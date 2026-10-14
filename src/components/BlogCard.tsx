import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Insight } from "@/lib/insights";

export function BlogCard({ insight }: { insight: Insight }) {
  return (
    <Link
      href={`/insights/${insight.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-charcoal/8 bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="relative h-44 overflow-hidden">
        <Image
          src={insight.image}
          alt={insight.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/5 to-transparent" />
        <span className="absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-widest text-white/85">
          {insight.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-medium text-charcoal/45">
          {new Date(insight.date).toLocaleDateString("en-KE", { year: "numeric", month: "long", day: "numeric" })}
          {" · "}
          {insight.readingTime}
        </span>
        <h3 className="mt-2 text-lg font-bold text-charcoal">{insight.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/65">{insight.excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-solar-green-dark group-hover:text-forest">
          Read Article
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
