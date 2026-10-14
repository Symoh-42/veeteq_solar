import Image from "next/image";
import logo from "../../public/images/logo.jpeg";
import { cn } from "@/lib/utils";

// The logo carries its own green/yellow background, so it reads on both light and
// dark surfaces without a wrapper badge.
export function Logo({ className, priority }: { className?: string; priority?: boolean }) {
  return (
    <Image
      src={logo}
      alt="Veeteq logo"
      priority={priority}
      className={cn("h-10 w-auto rounded-lg", className)}
    />
  );
}
