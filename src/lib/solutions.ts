import { unsplash, unsplashPlus } from "./images";

export type Solution = {
  slug: string;
  name: string;
  icon:
    | "hybrid"
    | "residential"
    | "commercial"
    | "agricultural"
    | "water-heating"
    | "lighting"
    | "carport"
    | "security";
  shortDescription: string;
  description: string;
  applications: string[];
  image: string;
};

export const solutions: Solution[] = [
  {
    slug: "hybrid-solar-systems",
    name: "Hybrid Solar Systems",
    icon: "hybrid",
    shortDescription:
      "Reliable solar systems combining solar generation, battery storage and grid power for seamless energy management.",
    description:
      "A hybrid system generates power from the sun, stores surplus energy in batteries and draws from the grid only when required — giving you continuous power with minimal disruption during outages.",
    applications: ["Homes", "Offices", "Facilities requiring backup power", "Mixed-use properties"],
    image: unsplash("1780445392484-38a4852a1fd8"),
  },
  {
    slug: "residential-solar",
    name: "Residential Solar",
    icon: "residential",
    shortDescription:
      "Engineered solar and backup solutions sized around how your household actually uses electricity.",
    description:
      "From single-family homes to apartment blocks, Veeteq designs residential solar systems around real consumption patterns, backup needs and future expansion.",
    applications: ["Homes", "Apartments", "Villas", "Backup power systems"],
    image: unsplash("1745187946672-2c1d8cf26a2b"),
  },
  {
    slug: "commercial-solar",
    name: "Commercial Solar",
    icon: "commercial",
    shortDescription:
      "High-capacity solar engineering for businesses that depend on consistent, reliable power.",
    description:
      "Veeteq designs and installs commercial-scale solar and storage systems for facilities where downtime is costly, integrating with existing electrical infrastructure and grid supply.",
    applications: ["Offices", "Hotels", "Retail facilities", "Industrial facilities", "Large commercial properties"],
    image: unsplash("1677938438353-3df2b797568a"),
  },
  {
    slug: "agricultural-solar",
    name: "Agricultural Solar",
    icon: "agricultural",
    shortDescription:
      "Dependable solar power for irrigation, water pumping and remote farm operations.",
    description:
      "Agricultural operations often run in locations with limited or unreliable grid access. Veeteq engineers solar systems that keep irrigation, pumping and cold storage running.",
    applications: ["Farms", "Irrigation", "Agricultural facilities", "Remote operations"],
    image: unsplash("1707656020134-2dd115e5331c"),
  },
  {
    slug: "solar-water-heating",
    name: "Solar Water Heating",
    icon: "water-heating",
    shortDescription:
      "Solar thermal systems that reduce dependence on conventional electric water heating.",
    description:
      "Solar water heating systems capture thermal energy from the sun to heat water for households, hotels and institutions, easing pressure on electrical water heating loads.",
    applications: ["Homes", "Hotels", "Commercial properties", "Institutions"],
    image: unsplash("1785402912683-b2e79562b0f9"),
  },
  {
    slug: "solar-lighting",
    name: "Solar Lighting",
    icon: "lighting",
    shortDescription:
      "Independent solar lighting for compounds, streets and security-sensitive areas.",
    description:
      "Solar lighting solutions provide illumination for compounds, walkways and outdoor areas without adding load to the main electrical supply.",
    applications: ["Compounds", "Streets", "Security lighting", "Outdoor areas"],
    image: unsplash("1740805276608-ef60e2e468ba"),
  },
  {
    slug: "solar-carports",
    name: "Solar Carports",
    icon: "carport",
    shortDescription: "Solar-powered parking structures that generate energy while covering vehicles.",
    description:
      "Solar carports turn unused parking space into a power-generating asset, combining structural fabrication with solar installation.",
    applications: ["Commercial parking", "Institutional car parks", "Residential compounds"],
    image: unsplashPlus("1679953779228-7d98e31dfe87"),
  },
  {
    slug: "cctv-security-infrastructure",
    name: "CCTV & Security Infrastructure",
    icon: "security",
    shortDescription: "Solar-supported security and surveillance installations for continuous monitoring.",
    description:
      "Veeteq integrates solar power with CCTV and security infrastructure so surveillance systems stay operational independent of grid reliability.",
    applications: ["Compounds", "Commercial premises", "Agricultural sites", "Remote installations"],
    image: unsplash("1589935447067-5531094415d1"),
  },
];

export function getSolutionBySlug(slug: string) {
  return solutions.find((s) => s.slug === slug);
}
