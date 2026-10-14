import { unsplash, unsplashPlus } from "./images";

export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Agricultural"
  | "Water Heating"
  | "Lighting"
  | "Security"
  | "Specialized";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  systemCategory: string;
  capacity?: string;
  description: string;
  overview: string;
  clientRequirement: string;
  engineeringChallenge: string;
  solution: string;
  installation: string;
  systemComponents: string[];
  results: string;
  image: string;
  gallery: string[];
};

// Editable placeholder project data. Replace with confirmed project details, locations,
// capacities and imagery as they become available — do not present placeholder figures as facts.
export const projects: Project[] = [
  {
    slug: "commercial-solar-upgrade",
    title: "Commercial Solar Upgrade",
    category: "Commercial",
    location: "Nairobi, Kenya",
    systemCategory: "Hybrid Commercial Solar",
    description:
      "High-capacity solar engineering solution designed around the facility's operational energy requirements.",
    overview:
      "A commercial facility required a more resilient power supply to support daily operations without full dependence on grid electricity.",
    clientRequirement: "Reduce reliance on grid power while maintaining uninterrupted operations during outages.",
    engineeringChallenge: "Sizing a hybrid system to match variable commercial load patterns and available roof space.",
    solution: "A hybrid solar and battery storage system engineered around the facility's measured load profile.",
    installation: "Rooftop panel installation with hybrid inverter and battery storage integration, commissioned in coordination with facility operations.",
    systemComponents: ["Solar PV array", "Hybrid inverter", "Battery storage", "Monitoring system"],
    results: "Project details available on request.",
    image: unsplash("1707247111552-aaf74241058b"),
    gallery: [
      unsplash("1707247111552-aaf74241058b"),
      unsplash("1677938438353-3df2b797568a"),
      unsplash("1780445392417-68b9dccc45f2"),
    ],
  },
  {
    slug: "residential-backup-installation",
    title: "Residential Backup Installation",
    category: "Residential",
    location: "Nairobi, Kenya",
    systemCategory: "Residential Hybrid Solar",
    description: "A residential hybrid solar and battery system designed for reliable backup power.",
    overview: "A homeowner sought backup power to maintain essential household electricity during grid outages.",
    clientRequirement: "Dependable backup for essential household circuits without oversizing the system.",
    engineeringChallenge: "Balancing backup duration requirements against available roof space and budget.",
    solution: "A right-sized hybrid solar and battery configuration matched to the household's essential load.",
    installation: "Rooftop solar installation with hybrid inverter and battery bank, commissioned and tested on site.",
    systemComponents: ["Solar PV array", "Hybrid inverter", "Battery storage"],
    results: "Project details available on request.",
    image: unsplash("1694327671725-e2a81cda3436"),
    gallery: [
      unsplash("1694327671725-e2a81cda3436"),
      unsplash("1745187946672-2c1d8cf26a2b"),
      unsplash("1660330589257-813305a4a383"),
    ],
  },
  {
    slug: "agricultural-irrigation-power",
    title: "Agricultural Irrigation Power",
    category: "Agricultural",
    location: "Kenya",
    systemCategory: "Agricultural Solar Pumping",
    description: "Solar-powered pumping system supporting irrigation for a farming operation.",
    overview: "A farm required reliable pumping power for irrigation in an area with limited grid access.",
    clientRequirement: "Consistent water pumping capacity to support irrigation scheduling.",
    engineeringChallenge: "Matching solar generation to pumping demand across varying daylight conditions.",
    solution: "A solar pumping system engineered around the farm's water and irrigation schedule.",
    installation: "Ground-mounted solar array connected to a solar-compatible pump, with monitoring for performance tracking.",
    systemComponents: ["Solar PV array", "Solar pump controller", "Water pump", "Monitoring system"],
    results: "Project details available on request.",
    image: unsplash("1741874299706-2b8e16839aaa"),
    gallery: [
      unsplash("1741874299706-2b8e16839aaa"),
      unsplash("1707656020134-2dd115e5331c"),
      unsplash("1518620664663-35a1f6378ec6"),
    ],
  },
  {
    slug: "hotel-water-heating-system",
    title: "Hotel Water Heating System",
    category: "Water Heating",
    location: "Kenya",
    systemCategory: "Solar Thermal Water Heating",
    description: "Solar water heating system installed to ease electric water heating load for a hospitality property.",
    overview: "A hospitality property sought to reduce electric water heating costs and load on backup power.",
    clientRequirement: "Reliable hot water supply with reduced dependence on electric heating.",
    engineeringChallenge: "Sizing thermal storage to match guest occupancy and hot water demand patterns.",
    solution: "A solar thermal water heating system with insulated storage sized to the property's demand.",
    installation: "Rooftop solar thermal collectors connected to insulated storage tanks and integrated with existing plumbing.",
    systemComponents: ["Solar thermal collectors", "Insulated storage tank", "Circulation and control system"],
    results: "Project details available on request.",
    image: unsplashPlus("1682125975211-35d55cc917ff"),
    gallery: [
      unsplashPlus("1682125975211-35d55cc917ff"),
      unsplash("1785402912683-b2e79562b0f9"),
      unsplashPlus("1661301068444-8ac48208d017"),
    ],
  },
  {
    slug: "compound-solar-security-lighting",
    title: "Compound Solar Security Lighting",
    category: "Lighting",
    location: "Kenya",
    systemCategory: "Solar Lighting & Security",
    description: "Solar-powered lighting and security infrastructure for a commercial compound.",
    overview: "A commercial compound required reliable outdoor lighting and surveillance independent of grid supply.",
    clientRequirement: "Continuous outdoor lighting and surveillance uptime, including during outages.",
    engineeringChallenge: "Ensuring consistent dusk-to-dawn operation without adding load to the main supply.",
    solution: "Independent solar lighting fixtures paired with solar-supported CCTV infrastructure.",
    installation: "Perimeter solar lighting installation integrated with existing security infrastructure.",
    systemComponents: ["Solar lighting fixtures", "Solar-supported CCTV power supply", "Battery storage"],
    results: "Project details available on request.",
    image: unsplash("1589935447067-5531094415d1"),
    gallery: [
      unsplash("1589935447067-5531094415d1"),
      unsplash("1740805276608-ef60e2e468ba"),
      unsplash("1618482914248-29272d021005"),
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const projectCategories: ProjectCategory[] = [
  "Residential",
  "Commercial",
  "Agricultural",
  "Water Heating",
  "Lighting",
  "Security",
  "Specialized",
];
