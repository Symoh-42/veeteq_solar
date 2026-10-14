import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { EnergyProblem } from "@/components/sections/EnergyProblem";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { EngineeringProcess } from "@/components/sections/EngineeringProcess";
import { HybridFeature } from "@/components/sections/HybridFeature";
import { EnergyMonitoring } from "@/components/sections/EnergyMonitoring";
import { CommercialSolar } from "@/components/sections/CommercialSolar";
import { AgriculturalSolar } from "@/components/sections/AgriculturalSolar";
import { WaterHeatingSection } from "@/components/sections/WaterHeatingSection";
import { PackagesSection } from "@/components/sections/PackagesSection";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { ProjectSpotlight } from "@/components/sections/ProjectSpotlight";
import { WhyVeeteq } from "@/components/sections/WhyVeeteq";
import { CalculatorSection } from "@/components/sections/CalculatorSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ServiceCoverage } from "@/components/sections/ServiceCoverage";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <EnergyProblem />
      <SolutionsSection />
      <EngineeringProcess />
      <HybridFeature />
      <EnergyMonitoring />
      <CommercialSolar />
      <AgriculturalSolar />
      <WaterHeatingSection />
      <PackagesSection />
      <TechnologySection />
      <ProjectSpotlight />
      <WhyVeeteq />
      <CalculatorSection />
      <FAQSection />
      <ServiceCoverage />
      <CTASection
        title="Ready to Engineer Your Energy Future?"
        description="Start with a professional site and load assessment, and get a solar system built around how you actually use energy."
      />
    </>
  );
}
