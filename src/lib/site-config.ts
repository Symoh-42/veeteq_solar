export const siteConfig = {
  name: "Veeteq Solar",
  shortName: "VEETEQ",
  tagline: "A Veeteq Limited Company",
  company: "Veeteq Limited",
  location: "Nairobi, Kenya",
  url: "https://www.veeteqsolar.co.ke",
  description:
    "Veeteq Solar provides solar power design, supply, installation, hybrid solar, battery storage, commercial solar, agricultural solar and solar water heating solutions in Kenya.",

  // TODO: replace with Veeteq Limited's confirmed business contact details.
  phone: "+254 700 000 000",
  phoneHref: "tel:+254700000000",
  whatsapp: "254700000000",
  email: undefined as string | undefined, // Not confirmed — omit from UI until supplied.

  social: {
    facebook: undefined as string | undefined,
    tiktok: undefined as string | undefined,
    instagram: undefined as string | undefined,
    linkedin: undefined as string | undefined,
  },

  serviceAreas: [
    "Nairobi",
    "Central Kenya",
    "Rift Valley",
    "Western Kenya",
    "Eastern Kenya",
    "Coastal Kenya",
  ],

  nav: [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/#solutions" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/#technology" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],

  primaryCta: { label: "Get a Solar Assessment", href: "/assessment" },
  secondaryCta: { label: "Explore Our Solutions", href: "/#solutions" },
} as const;

export function whatsappLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsapp}?text=${encoded}`;
}

export const whatsappMessages = {
  general: "Hello Veeteq Solar, I would like to enquire about a hybrid solar system.",
  system: (name: string) => `Hello Veeteq Solar, I would like to enquire about ${name}.`,
  quote: "Hello Veeteq Solar, I would like to request a quote.",
  engineer: "Hello Veeteq Solar, I would like to talk to an engineer about my energy requirements.",
  packages: "Hello Veeteq Solar, I would like to check your solar packages.",
  commercial: "Hello Veeteq Solar, I would like to plan a commercial solar installation.",
};
