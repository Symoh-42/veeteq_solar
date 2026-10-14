import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { WhatsAppButton } from "./WhatsAppButton";
import { whatsappMessages } from "@/lib/site-config";

export function CTASection({
  title,
  description,
  primaryLabel = "Get a Solar Assessment",
  primaryHref = "/assessment",
}: {
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="bg-forest py-20 sm:py-24">
      <Container className="flex flex-col items-center text-center">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            {description}
          </p>
        ) : null}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button href={primaryHref} size="lg">
            {primaryLabel}
          </Button>
          <WhatsAppButton message={whatsappMessages.engineer} label="Talk to an Engineer" variant="outline" />
        </div>
      </Container>
    </section>
  );
}
