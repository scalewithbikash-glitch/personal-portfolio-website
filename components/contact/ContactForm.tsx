"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FormField, fieldClasses } from "@/components/ui/FormField";
import { FlareField } from "@/components/contact/FieldFlare";
import { SuccessBloom } from "@/components/contact/SuccessBloom";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validations/contact";
import type { ContactSubmissionResult } from "@/types";
import { cn } from "@/lib/utils";

type SubmitState = "idle" | "submitting" | "success" | "error";

/**
 * Contact form: React Hook Form for interaction, Zod for validation shared
 * with the API route, and a honeypot + timing field for lightweight anti-spam.
 */
export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
      website: "",
    },
  });

  // Records when the form became interactive, used server-side as a
  // minimum-fill-time spam check. Set from an effect (not during render, and
  // not read from a ref) so it flows through RHF's own values like any other
  // field.
  useEffect(() => {
    setValue("renderedAt", Date.now());
  }, [setValue]);

  async function onSubmit(values: ContactFormValues) {
    setState("submitting");
    setServerMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result: ContactSubmissionResult = await response.json();

      if (!response.ok || !result.success) {
        setState("error");
        setServerMessage(
          result.message ||
            "Something went wrong. Please try again or email directly.",
        );
        return;
      }

      setState("success");
      setServerMessage(result.message);
      reset();
    } catch {
      setState("error");
      setServerMessage(
        "Network error — please check your connection and try again.",
      );
    }
  }

  if (state === "success") {
    return (
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center rounded-card border border-green-500/25 bg-green-500/[0.06] px-6 py-14 text-center sm:px-10"
      >
        <span className="relative flex size-14 items-center justify-center">
          <SuccessBloom />
          <span className="relative flex size-14 items-center justify-center rounded-full border border-green-500/30 bg-green-500/10">
            <CheckCircle2
              className="size-7 text-green-300"
              aria-hidden="true"
            />
          </span>
        </span>
        <h3 className="mt-6 text-xl font-semibold text-fg">
          Message sent
        </h3>
        <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-fg-muted">
          {serverMessage}
        </p>
        <Button
          variant="secondary"
          className="mt-7"
          onClick={() => {
            setState("idle");
            setServerMessage(null);
          }}
        >
          Send another message
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-6"
    >
      {/* Honeypot — hidden from sighted users, present in the DOM for bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="Name" htmlFor="name" error={errors.name?.message}>
          <FlareField>
            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder="Your full name"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={fieldClasses(!!errors.name)}
              {...register("name")}
            />
          </FlareField>
        </FormField>

        <FormField label="Email" htmlFor="email" error={errors.email?.message}>
          <FlareField>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={fieldClasses(!!errors.email)}
              {...register("email")}
            />
          </FlareField>
        </FormField>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          label="Company"
          htmlFor="company"
          error={errors.company?.message}
        >
          <FlareField>
            <input
              id="company"
              type="text"
              autoComplete="organization"
              placeholder="Company name"
              aria-invalid={errors.company ? "true" : "false"}
              aria-describedby={errors.company ? "company-error" : undefined}
              className={fieldClasses(!!errors.company)}
              {...register("company")}
            />
          </FlareField>
        </FormField>

        <FormField label="Phone" htmlFor="phone" error={errors.phone?.message}>
          <FlareField>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+977 98XXXXXXXX"
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={fieldClasses(!!errors.phone)}
              {...register("phone")}
            />
          </FlareField>
        </FormField>
      </div>

      <FormField
        label="Message"
        htmlFor="message"
        error={errors.message?.message}
      >
        <textarea
          id="message"
          rows={5}
          placeholder="What are you working on? What would a good outcome look like?"
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(fieldClasses(!!errors.message), "resize-none")}
          {...register("message")}
        />
      </FormField>

      <AnimatePresence>
        {state === "error" && serverMessage ? (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div
              role="alert"
              className="flex items-start gap-3 rounded-2xl border border-red-500/25 bg-red-500/[0.06] px-4 py-3.5 text-sm text-red-200"
            >
              <AlertCircle
                className="mt-0.5 size-4 shrink-0"
                aria-hidden="true"
              />
              {serverMessage}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Submitting…
          </>
        ) : (
          <>
            Submit Now
            <Send
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </>
        )}
      </Button>

      <p className="text-xs text-fg-subtle">
        By submitting, you agree to be contacted about your enquiry. Your
        information is never sold or shared with third parties.
      </p>
    </form>
  );
}
