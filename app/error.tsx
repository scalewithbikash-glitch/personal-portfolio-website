"use client";

import { useEffect } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[app-error]", error);
  }, [error]);

  return (
    <section className="flex min-h-[60dvh] items-center py-24">
      <Container size="narrow" className="text-center">
        <span className="inline-flex size-16 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/[0.06]">
          <AlertTriangle className="size-7 text-red-300" aria-hidden="true" />
        </span>
        <h1 className="mt-8 text-2xl font-semibold text-fg sm:text-3xl">
          Something went wrong
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-fg-muted">
          An unexpected error occurred while loading this page. You can try
          again, or head back to the homepage.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button onClick={reset} size="lg">
            <RotateCcw className="size-4" aria-hidden="true" />
            Try again
          </Button>
          <Button href="/" size="lg" variant="secondary">
            Back to home
          </Button>
        </div>
      </Container>
    </section>
  );
}
