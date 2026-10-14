import type { Metadata } from "next";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/Button";
import { siteConfig, whatsappMessages } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Veeteq Solar in Nairobi, Kenya — call, WhatsApp or send a message to start your solar engineering project.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Contact"
          title="Talk to Veeteq Solar"
          description="Based in Nairobi, serving customers across Kenya. Reach out to start a conversation about your energy requirements."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <ContactRow icon={MapPin} label="Location" value={siteConfig.location} />
            <ContactRow icon={Phone} label="Phone" value={siteConfig.phone} href={siteConfig.phoneHref} />
            <ContactRow icon={MessageCircle} label="WhatsApp" value="Chat with our team" href="#whatsapp" />

            <div className="flex flex-col gap-3 pt-2">
              <WhatsAppButton message={whatsappMessages.general} label="Chat on WhatsApp" />
              <Button href={siteConfig.phoneHref} variant="outline" size="lg">
                Call Veeteq
              </Button>
            </div>

            <div className="mt-8 flex h-56 items-center justify-center rounded-3xl border border-dashed border-charcoal/15 bg-off-white">
              <span className="text-sm font-medium text-charcoal/40">Map placeholder</span>
            </div>
          </div>

          <div className="rounded-3xl border border-charcoal/8 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3">
            <h2 className="text-lg font-bold text-charcoal">Send a Message</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-solar-green/10">
        <Icon className="h-5 w-5 text-solar-green-dark" aria-hidden="true" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-charcoal/40">{label}</p>
        <p className="text-sm font-semibold text-charcoal">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}
