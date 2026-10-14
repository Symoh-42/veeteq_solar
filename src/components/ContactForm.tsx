"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { contactSchema, type ContactFormValues } from "@/lib/validations";
import { api } from "@/lib/api";
import { Button } from "./ui/Button";

const inputClass =
  "w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-solar-green focus:ring-2 focus:ring-solar-green/20";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(values: ContactFormValues) {
    setSubmitError(false);
    try {
      await api.submitContact(values);
      setSubmitted(true);
    } catch {
      setSubmitError(true);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-solar-green/20 bg-solar-green/5 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-solar-green" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-bold text-charcoal">Message Sent</h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-charcoal/65">
          Thank you for contacting Veeteq Solar. Our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-charcoal">Full Name</span>
        <input {...register("name")} className={inputClass} autoComplete="name" />
        {errors.name ? <span className="mt-1.5 block text-xs font-medium text-red-600">{errors.name.message}</span> : null}
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-charcoal">Phone Number</span>
        <input {...register("phone")} className={inputClass} autoComplete="tel" />
        {errors.phone ? <span className="mt-1.5 block text-xs font-medium text-red-600">{errors.phone.message}</span> : null}
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-charcoal">Email (optional)</span>
        <input {...register("email")} type="email" className={inputClass} autoComplete="email" />
        {errors.email ? <span className="mt-1.5 block text-xs font-medium text-red-600">{errors.email.message}</span> : null}
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-charcoal">Message</span>
        <textarea {...register("message")} rows={5} className={inputClass} />
        {errors.message ? <span className="mt-1.5 block text-xs font-medium text-red-600">{errors.message.message}</span> : null}
      </label>

      {submitError ? (
        <p className="text-sm font-medium text-red-600">
          Something went wrong sending your message. Please try again or reach us on WhatsApp.
        </p>
      ) : null}

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
