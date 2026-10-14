export type SolarPackage = {
  slug: string;
  name: string;
  batteryCapacity: string;
  indicativePrice: string;
  bestFor: string;
};

// Prices are indicative reference points only — final pricing always depends on
// site assessment. Do not present these as fixed or guaranteed prices.
export const packages: SolarPackage[] = [
  {
    slug: "5kwh-entry",
    name: "5kWh Entry",
    batteryCapacity: "5kWh",
    indicativePrice: "Around KSh 299,000",
    bestFor: "Residential backup and moderate energy requirements.",
  },
  {
    slug: "10kwh-premium",
    name: "10kWh Premium",
    batteryCapacity: "10kWh",
    indicativePrice: "Around KSh 389,000",
    bestFor: "Higher residential and selected commercial requirements.",
  },
];
