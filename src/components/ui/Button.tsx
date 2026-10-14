import Link from "next/link";
import { cn } from "@/lib/utils";

type BaseProps = {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

const variants: Record<NonNullable<BaseProps["variant"]>, string> = {
  primary:
    "bg-solar-green-dark text-white hover:bg-forest-light shadow-sm shadow-solar-green/20",
  secondary: "bg-forest text-white hover:bg-forest-light",
  outline:
    "border border-charcoal/15 text-charcoal hover:border-solar-green hover:text-solar-green-dark",
  ghost: "text-charcoal hover:text-solar-green-dark",
  whatsapp: "bg-[#25D366] text-white hover:brightness-95",
};

const sizes: Record<NonNullable<BaseProps["size"]>, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm sm:text-base",
  lg: "px-7 py-4 text-base sm:text-lg",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solar-green disabled:opacity-50 disabled:pointer-events-none";

type LinkOnlyProps = Omit<React.ComponentProps<typeof Link>, "href" | "className" | "children">;
type ButtonOnlyProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

type ButtonProps = BaseProps &
  ({ href: string } & LinkOnlyProps | { href?: undefined } & ButtonOnlyProps);

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (rest.href) {
    const { href, ...linkProps } = rest as { href: string } & LinkOnlyProps;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { href: _href, ...buttonProps } = rest as { href?: undefined } & ButtonOnlyProps;
  void _href;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
