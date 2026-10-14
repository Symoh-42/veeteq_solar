import type { AssessmentFormValues, ContactFormValues } from "./validations";

// Central API abstraction layer. Today these calls hit local Next.js route handlers;
// when the Django REST Framework backend is available, only the base URL and endpoint
// paths below need to change — components should never call fetch() directly.
const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

async function postJson<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`Request to ${path} failed with status ${res.status}`);
  }

  return res.json();
}

export const api = {
  submitAssessment: (data: AssessmentFormValues) =>
    postJson<{ success: boolean }>("/api/solar-assessments", data),
  submitContact: (data: ContactFormValues) =>
    postJson<{ success: boolean }>("/api/contact", data),
};

// Future Django endpoints this frontend is designed to consume once connected:
//   GET  /api/solutions/
//   GET  /api/products/
//   GET  /api/projects/
//   GET  /api/packages/
//   GET  /api/insights/
//   GET  /api/faqs/
//   POST /api/assessments/
//   POST /api/contact/
