import { z } from "zod";

export const assessmentSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email address.").optional().or(z.literal("")),
  location: z.string().min(2, "Please enter your location."),
  propertyType: z.enum([
    "Residential",
    "Commercial",
    "Agricultural",
    "Industrial",
    "Institutional",
    "Other",
  ]),
  currentPowerSource: z.enum(["Grid", "Generator", "Solar", "Grid + Solar", "Other"]),
  mainRequirement: z.enum([
    "Backup Power",
    "Reduce Electricity Costs",
    "Energy Independence",
    "Agricultural Power",
    "Water Heating",
    "Commercial Solar",
    "Other",
  ]),
  monthlyBill: z.string().optional(),
  propertySize: z.string().optional(),
  preferredSystem: z.enum([
    "Not sure",
    "Hybrid",
    "Solar + Battery",
    "Solar Water Heating",
    "Commercial Solar",
  ]),
  message: z.string().optional(),
});

export type AssessmentFormValues = z.infer<typeof assessmentSchema>;

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email address.").optional().or(z.literal("")),
  message: z.string().min(5, "Please enter a message."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
