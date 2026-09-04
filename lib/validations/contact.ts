import { z } from "zod";

/**
 * Contact form schema — the single source of truth for validation on both
 * the client (React Hook Form) and the server (the API route). Keeping one
 * schema means the two can never silently drift apart.
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter your full name.")
    .max(100, "Name is too long."),
  email: z
    .string()
    .trim()
    .min(1, "Enter your email address.")
    .email("Enter a valid email address.")
    .max(200),
  company: z
    .string()
    .trim()
    .min(2, "Enter your company name.")
    .max(120, "Company name is too long."),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number.")
    .max(30, "Phone number is too long.")
    .regex(/^[0-9+\-\s().]+$/, "Enter a valid phone number."),
  message: z
    .string()
    .trim()
    .min(20, "Tell me a little more — at least 20 characters.")
    .max(4000, "Message is too long."),
  /**
   * Honeypot field. Real visitors never fill this in — it is hidden from
   * sighted users and skipped by screen readers via aria-hidden. Deliberately
   * unconstrained here so a filled-in value still passes schema validation;
   * the route handler checks it and returns a fake success, which only works
   * if this field did not already fail validation.
   */
  website: z.string().max(200).optional().or(z.literal("")),
  /** Timestamp the form was rendered, used for a minimum-fill-time check. */
  renderedAt: z.number().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
