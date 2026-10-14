"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { assessmentSchema, type AssessmentFormValues } from "@/lib/validations";
import { api } from "@/lib/api";
import { Button } from "./ui/Button";

const propertyTypes = ["Residential", "Commercial", "Agricultural", "Industrial", "Institutional", "Other"] as const;
const powerSources = ["Grid", "Generator", "Solar", "Grid + Solar", "Other"] as const;
const requirements = [
  "Backup Power",
  "Reduce Electricity Costs",
  "Energy Independence",
  "Agricultural Power",
  "Water Heating",
  "Commercial Solar",
  "Other",
] as const;
const preferredSystems = ["Not sure", "Hybrid", "Solar + Battery", "Solar Water Heating", "Commercial Solar"] as const;

export function AssessmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AssessmentFormValues>({
    resolver: zodResolver(assessmentSchema),
    defaultValues: {
      propertyType: "Residential",
      currentPowerSource: "Grid",
      mainRequirement: "Backup Power",
      preferredSystem: "Not sure",
    },
  });

  async function onSubmit(values: AssessmentFormValues) {
    setSubmitError(false);
    try {
      await api.submitAssessment(values);
      setSubmitted(true);
    } catch {
      setSubmitError(true);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-solar-green/20 bg-solar-green/5 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-solar-green" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-bold text-charcoal">Assessment Request Received</h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-charcoal/65">
          Thank you for reaching out to Veeteq Solar. Our team will review your details and
          contact you to schedule a site and load assessment.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full Name" error={errors.name?.message}>
          <input {...register("name")} className={inputClass} autoComplete="name" />
        </Field>
        <Field label="Phone Number" error={errors.phone?.message}>
          <input {...register("phone")} className={inputClass} autoComplete="tel" />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Email (optional)" error={errors.email?.message}>
          <input {...register("email")} type="email" className={inputClass} autoComplete="email" />
        </Field>
        <Field label="Location" error={errors.location?.message}>
          <input {...register("location")} className={inputClass} placeholder="e.g. Nairobi" />
        </Field>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Property Type" error={errors.propertyType?.message}>
          <select {...register("propertyType")} className={inputClass}>
            {propertyTypes.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Current Power Source" error={errors.currentPowerSource?.message}>
          <select {...register("currentPowerSource")} className={inputClass}>
            {powerSources.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Main Requirement" error={errors.mainRequirement?.message}>
        <select {...register("mainRequirement")} className={inputClass}>
          {requirements.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Monthly Electricity Bill (optional)">
          <input {...register("monthlyBill")} className={inputClass} placeholder="e.g. KSh 15,000" />
        </Field>
        <Field label="Estimated Property Size (optional)">
          <input {...register("propertySize")} className={inputClass} placeholder="e.g. 200 sqm roof" />
        </Field>
      </div>

      <Field label="Preferred System">
        <select {...register("preferredSystem")} className={inputClass}>
          {preferredSystems.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Message (optional)">
        <textarea {...register("message")} rows={4} className={inputClass} />
      </Field>

      {submitError ? (
        <p className="text-sm font-medium text-red-600">
          Something went wrong sending your request. Please try again or reach us on WhatsApp.
        </p>
      ) : null}

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Request Solar Assessment"}
      </Button>
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-solar-green focus:ring-2 focus:ring-solar-green/20";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-charcoal">{label}</span>
      {children}
      {error ? <span className="mt-1.5 block text-xs font-medium text-red-600">{error}</span> : null}
    </label>
  );
}
