import { Container } from "../ui/Container";
import { SectionHeader } from "../SectionHeader";
import { FAQ } from "../FAQ";
import { faqs } from "@/lib/faqs";

export function FAQSection() {
  return (
    <section id="faqs" className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeader eyebrow="FAQs" title="Frequently Asked Questions" align="center" />

        <div className="mt-12">
          <FAQ items={faqs} />
        </div>
      </Container>
    </section>
  );
}
