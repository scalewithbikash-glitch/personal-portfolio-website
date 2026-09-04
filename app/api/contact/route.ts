import { NextResponse, type NextRequest } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";
import { sendContactEmail } from "@/lib/email/send";
import { checkRateLimit } from "@/lib/utils/rateLimit";
import type { ContactSubmissionResult } from "@/types";

export const runtime = "nodejs";

function clientKey(request: NextRequest): string {
  // Trust the platform-set forwarded header when present (Vercel, most
  // reverse proxies); fall back to a shared bucket rather than trusting an
  // arbitrary client-supplied header.
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim();
  return ip || "unknown";
}

export async function POST(request: NextRequest) {
  const key = clientKey(request);
  const { allowed, retryAfterSeconds } = checkRateLimit(key);

  if (!allowed) {
    return NextResponse.json<ContactSubmissionResult>(
      {
        success: false,
        message: "Too many submissions. Please try again in a few minutes.",
      },
      { status: 429, headers: { "Retry-After": String(retryAfterSeconds) } },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json<ContactSubmissionResult>(
      { success: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsed = contactFormSchema.safeParse(payload);

  if (!parsed.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const issue of parsed.error.issues) {
      const field = String(issue.path[0] ?? "form");
      fieldErrors[field] = [...(fieldErrors[field] ?? []), issue.message];
    }

    return NextResponse.json<ContactSubmissionResult>(
      {
        success: false,
        message: "Please check the highlighted fields and try again.",
        fieldErrors,
      },
      { status: 400 },
    );
  }

  const values = parsed.data;

  // Honeypot: a real visitor never populates this hidden field.
  if (values.website) {
    // Respond as if successful so the bot gets no signal to adapt to.
    return NextResponse.json<ContactSubmissionResult>({
      success: true,
      message: "Thanks — your message has been sent.",
    });
  }

  // Minimum fill time: forms submitted faster than a human could plausibly
  // complete them are almost always automated.
  if (values.renderedAt) {
    const elapsed = Date.now() - values.renderedAt;
    if (elapsed < 1500) {
      return NextResponse.json<ContactSubmissionResult>({
        success: true,
        message: "Thanks — your message has been sent.",
      });
    }
  }

  try {
    const result = await sendContactEmail(values);

    if (!result.delivered) {
      return NextResponse.json<ContactSubmissionResult>(
        {
          success: false,
          message:
            "Something went wrong sending your message. Please try emailing directly.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json<ContactSubmissionResult>({
      success: true,
      message: "Thanks — your message has been sent. I'll reply within one business day.",
    });
  } catch (error) {
    console.error("[contact] Unexpected error:", error);
    return NextResponse.json<ContactSubmissionResult>(
      {
        success: false,
        message:
          "Something went wrong on our end. Please try again or email directly.",
      },
      { status: 500 },
    );
  }
}
