import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/site-config";

export function WhatsAppButton({
  message,
  label = "Chat on WhatsApp",
  className,
  variant = "solid",
}: {
  message: string;
  label?: string;
  className?: string;
  variant?: "solid" | "outline" | "icon";
}) {
  const href = whatsappLink(message);

  if (variant === "icon") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={cn(
          "inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-105",
          className
        )}
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors sm:text-base",
        variant === "solid"
          ? "bg-[#25D366] text-white hover:brightness-95"
          : "border border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10",
        className
      )}
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      {label}
    </a>
  );
}
