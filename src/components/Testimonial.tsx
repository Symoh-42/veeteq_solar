import { Quote } from "lucide-react";

export type TestimonialData = {
  quote: string;
  name: string;
  role: string;
};

// No verified customer testimonials are available yet. This component is ready for use
// once real, attributable testimonials are supplied — do not populate it with fabricated quotes.
export function Testimonial({ testimonial }: { testimonial: TestimonialData }) {
  return (
    <figure className="rounded-3xl border border-charcoal/8 bg-white p-8 shadow-sm">
      <Quote className="h-8 w-8 text-solar-green/40" aria-hidden="true" />
      <blockquote className="mt-4 text-lg leading-relaxed text-charcoal/80">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-5 text-sm font-semibold text-charcoal">
        {testimonial.name}
        <span className="block font-normal text-charcoal/50">{testimonial.role}</span>
      </figcaption>
    </figure>
  );
}
