"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { siteConfig, whatsappLink, whatsappMessages } from "@/lib/site-config";
import { Button } from "./ui/Button";
import { MobileMenu } from "./MobileMenu";
import { Logo } from "./Logo";

// Routes that open with a dark, full-bleed hero — safe to overlay with a transparent,
// light-text navbar. Every other route starts with a light background, so the navbar
// must render solid from the first paint or the logo and links become unreadable.
function hasDarkHero(pathname: string) {
  if (pathname === "/") return true;
  if (pathname === "/about") return true;
  if (pathname === "/projects" || pathname.startsWith("/projects/")) return true;
  if (pathname.startsWith("/solutions/")) return true;
  if (pathname.startsWith("/insights/")) return true;
  return false;
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const startsOverHero = hasDarkHero(pathname);
  const transparent = startsOverHero && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 w-full transition-all duration-300",
          transparent ? "bg-transparent" : "bg-white/90 backdrop-blur-md shadow-sm"
        )}
      >
        <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Veeteq Solar home">
          <Logo priority className={cn(transparent && "ring-1 ring-white/20")} />
          <span className="leading-tight">
            <span
              className={cn(
                "block text-lg font-extrabold tracking-tight",
                !transparent ? "text-charcoal" : "text-white"
              )}
            >
              VEETEQ SOLAR
            </span>
            <span
              className={cn(
                "block text-[11px] font-medium tracking-wide",
                !transparent ? "text-charcoal/50" : "text-white/70"
              )}
            >
              A Veeteq Limited Company
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors",
                !transparent ? "text-charcoal/80 hover:text-solar-green-dark" : "text-white/90 hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={whatsappLink(whatsappMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "text-sm font-semibold transition-colors",
              !transparent ? "text-solar-green-dark hover:text-forest" : "text-white hover:text-solar-yellow"
            )}
          >
            WhatsApp
          </a>
          <Button href="/assessment" size="sm">
            Get a Solar Assessment
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-lg lg:hidden",
            !transparent ? "text-charcoal" : "text-white"
          )}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </nav>

        <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
      </header>

      {startsOverHero ? null : <div className="h-20 w-full" aria-hidden="true" />}
    </>
  );
}
