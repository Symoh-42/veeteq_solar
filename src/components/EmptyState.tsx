import { Inbox } from "lucide-react";

export function EmptyState({
  title = "Nothing here yet",
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-charcoal/15 py-16 text-center text-charcoal/50">
      <Inbox className="h-8 w-8" aria-hidden="true" />
      <p className="text-sm font-semibold text-charcoal/70">{title}</p>
      {description ? <p className="max-w-sm text-sm">{description}</p> : null}
    </div>
  );
}
