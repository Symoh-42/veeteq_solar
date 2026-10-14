import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ success: false, errors: parsed.error.flatten() }, { status: 400 });
  }

  // TODO: forward to the Django REST Framework backend at POST /api/contact/
  // once it is available. For now, the submission is logged server-side.
  console.log("[contact]", parsed.data);

  return NextResponse.json({ success: true });
}
