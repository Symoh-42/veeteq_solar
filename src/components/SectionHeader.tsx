import { cn } from "@/lib/utils";
import { Badge } from "./ui/Badge";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <Badge tone={tone === "dark" ? "light" : "green"} className="mb-4">
          {eyebrow}
        </Badge>
      ) : null}
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl",
          tone === "dark" ? "text-white" : "text-charcoal"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-white/70" : "text-charcoal/65"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
