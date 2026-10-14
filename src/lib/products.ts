import { unsplash, unsplashPlus } from "./images";

export type ProductCategory = {
  slug: string;
  name: string;
  image: string;
  characteristics: string[];
  applications: string[];
  brands?: string[];
};

// Brand mentions are limited to technology Veeteq has referenced publicly (e.g. Deye hybrid
// inverters). Do not present a manufacturer as an official partner unless verified.
export const productCategories: ProductCategory[] = [
  {
    slug: "solar-panels",
    name: "Solar Panels",
    image: unsplash("1624397640148-949b1732bb0a"),
    characteristics: ["Monocrystalline and polycrystalline options", "Rated for outdoor durability", "Sized to site energy requirements"],
    applications: ["Residential", "Commercial", "Agricultural"],
  },
  {
    slug: "hybrid-inverters",
    name: "Hybrid Inverters",
    image: unsplash("1780445392417-68b9dccc45f2"),
    characteristics: ["Manages solar, battery and grid energy flow", "Supports seamless backup switching", "Scalable for residential and commercial loads"],
    applications: ["Hybrid solar systems", "Backup power", "Commercial installations"],
    brands: ["Deye"],
  },
  {
    slug: "battery-storage",
    name: "Battery Storage",
    image: unsplash("1742899273038-67ff67477663"),
    characteristics: ["Stores surplus solar generation", "Sized to backup duration required", "Supports expandable capacity"],
    applications: ["Residential backup", "Commercial resilience", "Off-grid operations"],
  },
  {
    slug: "solar-water-heaters",
    name: "Solar Water Heaters",
    image: unsplashPlus("1661301068444-8ac48208d017"),
    characteristics: ["Solar thermal collection", "Insulated storage tank", "Reduces electric water heating load"],
    applications: ["Homes", "Hotels", "Institutions"],
  },
  {
    slug: "mounting-structures",
    name: "Mounting Structures",
    image: unsplash("1660330589243-4c640d878052"),
    characteristics: ["Engineered for roof or ground mounting", "Built for structural durability", "Configured for optimal panel orientation"],
    applications: ["Rooftop systems", "Ground-mount installations", "Carports"],
  },
  {
    slug: "monitoring-systems",
    name: "Monitoring Systems",
    image: unsplash("1625296276703-3fbc924f07b5"),
    characteristics: ["Real-time generation and consumption data", "Remote system visibility", "Supports proactive maintenance"],
    applications: ["Residential", "Commercial", "Agricultural"],
  },
  {
    slug: "solar-lighting",
    name: "Solar Lighting",
    image: unsplash("1688124968558-974cf707348b"),
    characteristics: ["Independent solar-powered fixtures", "Dusk-to-dawn operation", "Low-maintenance design"],
    applications: ["Compounds", "Streets", "Security areas"],
  },
  {
    slug: "security-systems",
    name: "Security Systems",
    image: unsplash("1618482914248-29272d021005"),
    characteristics: ["Solar-supported power supply", "Continuous surveillance uptime", "Integrates with existing infrastructure"],
    applications: ["Commercial premises", "Agricultural sites", "Compounds"],
  },
];

export function getProductBySlug(slug: string) {
  return productCategories.find((p) => p.slug === slug);
}
