import { unsplash } from "./images";

export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readingTime: string;
  image: string;
  content: string[];
};

// Editorial placeholder content pending real publication dates and authorship attribution.
// Author is listed as the team, not an individual, until a named author is confirmed.
export const insights: Insight[] = [
  {
    slug: "how-hybrid-solar-systems-work",
    title: "How Hybrid Solar Systems Work",
    excerpt: "A practical look at how solar, battery storage and grid power combine to keep your property running.",
    category: "Hybrid Solar",
    author: "Veeteq Solar Team",
    date: "2026-01-12",
    readingTime: "5 min read",
    image: unsplash("1780445392484-38a4852a1fd8"),
    content: [
      "A hybrid solar system combines three energy sources: solar generation, battery storage and the national grid. The hybrid inverter is the component that manages the flow of energy between them.",
      "During daylight hours, solar panels generate electricity that powers your property directly, with any surplus routed to battery storage. Once batteries are charged, additional surplus can be exported or curtailed depending on system configuration.",
      "When solar generation drops — at night or during cloud cover — the system draws first from stored battery power, then from the grid if battery reserves are depleted.",
      "This layered approach is what allows hybrid systems to reduce grid dependence while still providing a reliable fallback, rather than leaving a property fully exposed during an outage.",
    ],
  },
  {
    slug: "sizing-your-solar-system-correctly",
    title: "Why Solar System Sizing Should Start With Your Energy Use",
    excerpt: "Why buying a predetermined solar package rarely fits real-world energy needs.",
    category: "Solar Buying Guides",
    author: "Veeteq Solar Team",
    date: "2026-01-26",
    readingTime: "4 min read",
    image: unsplash("1624397640148-949b1732bb0a"),
    content: [
      "One of the most common mistakes in solar adoption is choosing a system size before understanding actual energy consumption.",
      "Two properties with the same square footage can have very different load profiles — different appliances, different usage patterns, different backup priorities.",
      "A proper sizing process starts with a load assessment: reviewing electricity bills, identifying peak demand periods, and understanding which circuits need to stay powered during an outage.",
      "Only once these variables are understood can a system be engineered to match — rather than guessed at.",
    ],
  },
  {
    slug: "battery-storage-basics",
    title: "Battery Storage Basics for Solar Systems",
    excerpt: "What battery capacity actually determines, and how to think about backup duration.",
    category: "Battery Storage",
    author: "Veeteq Solar Team",
    date: "2026-02-09",
    readingTime: "4 min read",
    image: unsplash("1742899273038-67ff67477663"),
    content: [
      "Battery storage capacity, typically measured in kWh, determines how much energy can be stored for later use — most commonly during grid outages or periods of low solar generation.",
      "Backup duration depends on both battery capacity and the total load you want to keep running. A larger battery can power more appliances for longer, but oversizing adds unnecessary cost.",
      "This is why battery sizing should be tied directly to a defined list of essential loads, rather than a generic capacity figure.",
    ],
  },
  {
    slug: "solar-for-commercial-properties",
    title: "What Commercial Properties Should Consider Before Going Solar",
    excerpt: "Key engineering considerations for offices, hotels and industrial facilities.",
    category: "Commercial Solar",
    author: "Veeteq Solar Team",
    date: "2026-02-23",
    readingTime: "6 min read",
    image: unsplash("1677938438353-3df2b797568a"),
    content: [
      "Commercial solar projects differ from residential installations in scale, complexity and the cost of downtime.",
      "Load profiles for commercial properties often vary significantly throughout the day, requiring careful analysis of peak demand periods before sizing a system.",
      "Structural assessment of roofing or available land, integration with existing electrical infrastructure, and monitoring capability are all considerations that shape a commercial solar design.",
    ],
  },
  {
    slug: "agricultural-solar-applications",
    title: "Solar Applications in Modern Agriculture",
    excerpt: "How solar power supports irrigation, pumping and remote farm operations.",
    category: "Agricultural Solar",
    author: "Veeteq Solar Team",
    date: "2026-03-09",
    readingTime: "4 min read",
    image: unsplash("1707656020134-2dd115e5331c"),
    content: [
      "Agricultural operations frequently run in areas with limited or unreliable grid access, making solar an increasingly practical option for irrigation and pumping.",
      "Solar-powered pumping systems can be engineered to match water demand schedules, reducing dependence on diesel generators.",
      "Beyond pumping, solar can support cold storage, lighting and other on-site energy needs for farm operations.",
    ],
  },
  {
    slug: "solar-water-heating-explained",
    title: "How Solar Water Heating Reduces Electricity Load",
    excerpt: "Understanding solar thermal systems and where they fit alongside solar PV.",
    category: "Solar Water Heating",
    author: "Veeteq Solar Team",
    date: "2026-03-23",
    readingTime: "3 min read",
    image: unsplash("1785402912683-b2e79562b0f9"),
    content: [
      "Solar water heating uses solar thermal collectors to heat water directly, rather than converting sunlight into electricity first.",
      "Because electric water heating is often one of the largest loads in a household or hospitality property, offloading it to a solar thermal system can meaningfully reduce electrical demand.",
      "Solar water heating and solar PV systems can operate independently or alongside each other, depending on a property's overall energy strategy.",
    ],
  },
];

export function getInsightBySlug(slug: string) {
  return insights.find((i) => i.slug === slug);
}
