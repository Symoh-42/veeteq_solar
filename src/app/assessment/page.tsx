import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { AssessmentForm } from "@/components/AssessmentForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { whatsappMessages } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Get a Solar Assessment",
  description:
    "Request a professional solar site and load assessment from Veeteq Solar — the first step to an engineered solar system in Kenya.",
  alternates: { canonical: "/assessment" },
};

export default function AssessmentPage() {
  return (
    <section className="bg-off-white py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeader
          eyebrow="Solar Assessment"
          title="Get a Solar Assessment"
          description="Tell us about your property and energy needs. Our team will review your details and reach out to schedule a site and load assessment — the foundation of every Veeteq system design."
          align="center"
        />

        <div className="mt-12 rounded-3xl border border-charcoal/8 bg-white p-6 shadow-sm sm:p-10">
          <AssessmentForm />
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-charcoal/50">Prefer to talk directly?</p>
          <WhatsAppButton message={whatsappMessages.engineer} label="Talk to an Engineer on WhatsApp" />
        </div>
      </Container>
    </section>
  );
}
