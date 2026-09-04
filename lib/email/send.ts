import "server-only";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site";
import type { ContactFormValues } from "@/lib/validations/contact";

/**
 * Email delivery for the contact form.
 *
 * In production, set RESEND_API_KEY and (optionally) CONTACT_EMAIL /
 * CONTACT_FROM_EMAIL in the environment — see .env.example. Without a key,
 * submissions are logged to the server console instead of failing, so local
 * development and preview deployments keep working with zero configuration.
 */

const resendApiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.CONTACT_EMAIL || siteConfig.email;
// Resend requires a verified sending domain; falls back to their shared
// onboarding address so the integration works before a domain is verified.
const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmailBody(values: ContactFormValues) {
  const rows: [string, string][] = [
    ["Name", values.name],
    ["Email", values.email],
    ["Company", values.company],
    ["Phone", values.phone],
  ];

  const text = [
    "New consultation enquiry from scalewithbikash.com",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    values.message,
  ].join("\n");

  const html = `
    <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:560px;margin:0 auto;">
      <h2 style="color:#090820;">New consultation enquiry</h2>
      <table style="width:100%;border-collapse:collapse;margin-top:12px;">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding:6px 12px 6px 0;color:#666;font-size:13px;white-space:nowrap;">${escapeHtml(
              label,
            )}</td>
            <td style="padding:6px 0;color:#111;font-size:14px;">${escapeHtml(
              value,
            )}</td>
          </tr>`,
          )
          .join("")}
      </table>
      <p style="margin-top:20px;color:#666;font-size:13px;">Message</p>
      <p style="white-space:pre-wrap;color:#111;font-size:14px;line-height:1.6;border-left:3px solid #7030EF;padding-left:14px;">${escapeHtml(
        values.message,
      )}</p>
    </div>
  `;

  return { text, html };
}

export interface SendResult {
  delivered: boolean;
  /** True when no provider is configured and the submission was only logged. */
  simulated: boolean;
}

export async function sendContactEmail(
  values: ContactFormValues,
): Promise<SendResult> {
  const { text, html } = buildEmailBody(values);

  if (!resendApiKey) {
    // Development fallback: no secret is present, so nothing is sent over the
    // network. The submission is still visible in the server log for testing.
    console.info(
      "[contact] RESEND_API_KEY not set — logging submission instead of sending email.\n" +
        text,
    );
    return { delivered: true, simulated: true };
  }

  const resend = new Resend(resendApiKey);

  const { error } = await resend.emails.send({
    from: `Scalewithbikash <${fromEmail}>`,
    to: toEmail,
    replyTo: values.email,
    subject: `New consultation enquiry from ${values.name}`,
    text,
    html,
  });

  if (error) {
    console.error("[contact] Resend delivery failed:", error);
    return { delivered: false, simulated: false };
  }

  return { delivered: true, simulated: false };
}
