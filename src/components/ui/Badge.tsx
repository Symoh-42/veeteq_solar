import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  tone = "green",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "green" | "yellow" | "blue" | "light";
}) {
  const tones: Record<string, string> = {
    green: "bg-solar-green/10 text-solar-green-dark",
    yellow: "bg-solar-yellow/15 text-charcoal",
    blue: "bg-energy-blue/10 text-energy-blue",
    light: "bg-white/10 text-white",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
