import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { Container } from "./ui/Container";
import { Logo } from "./Logo";
import { siteConfig, whatsappLink, whatsappMessages } from "@/lib/site-config";

const solutionLinks = [
  { label: "Hybrid Solar", href: "/solutions/hybrid-solar-systems" },
  { label: "Residential Solar", href: "/solutions/residential-solar" },
  { label: "Commercial Solar", href: "/solutions/commercial-solar" },
  { label: "Agricultural Solar", href: "/solutions/agricultural-solar" },
  { label: "Solar Water Heating", href: "/solutions/solar-water-heating" },
  { label: "Solar Lighting", href: "/solutions/solar-lighting" },
  { label: "Solar Carports", href: "/solutions/solar-carports" },
  { label: "Security Solutions", href: "/solutions/cctv-security-infrastructure" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const resourceLinks = [
  { label: "Solar Calculator", href: "/#calculator" },
  { label: "FAQs", href: "/#faqs" },
  { label: "Solar Assessment", href: "/assessment" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-2.5">
            <Logo />
            <span className="text-lg font-extrabold tracking-tight">VEETEQ SOLAR</span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
            An engineering partner for your energy future — designing, supplying and installing
            solar power systems for residential, agricultural and commercial customers across
            Kenya.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={whatsappLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <FooterColumn title="Solutions" links={solutionLinks} />
        <FooterColumn title="Company" links={companyLinks} />
        <FooterColumn title="Resources" links={resourceLinks} />

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/50">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-solar-green" aria-hidden="true" />
              {siteConfig.location}
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-solar-green" aria-hidden="true" />
              <a href={siteConfig.phoneHref} className="hover:text-white">
                {siteConfig.phone}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-center text-xs text-white/50 sm:flex-row sm:text-left">
          <p>
            © {year} Veeteq Solar / {siteConfig.company}. All rights reserved.
          </p>
          <p>Engineering better energy solutions across Kenya.</p>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-white/50">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-white/70 hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
