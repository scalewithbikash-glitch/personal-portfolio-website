import { ArrowRight, Mail, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/animations/Reveal";
import { FloatingParticles } from "@/components/animations/FloatingParticles";
import { primaryCta, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

interface ConsultationCTAProps {
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
  className?: string;
}

/**
 * Closing conversion block. Reused across the homepage, service pages and
 * article pages so the primary call to action stays consistent site-wide.
 */
export function ConsultationCTA({
  eyebrow = "Book a consultation",
  title,
  description = "A 30-minute call to understand what you are working on. You will leave with at least one concrete thing to try, whether or not we work together.",
  className,
}: ConsultationCTAProps) {
  return (
    <Section className={cn("relative", className)}>
      <Container size="wide">
        <Reveal>
          <div className="gradient-border relative isolate overflow-hidden rounded-card-lg bg-[linear-gradient(150deg,var(--color-surface-2),var(--color-ink)_62%)] px-6 py-16 text-center sm:px-12 sm:py-20">
            {/* Ambient lighting */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(112,48,239,0.4),transparent_68%)] blur-[70px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-32 -bottom-32 size-96 rounded-full bg-[radial-gradient(circle,rgba(30,144,255,0.28),transparent_65%)] blur-[70px]"
            />
            <FloatingParticles count={14} seed={77123} className="-z-10" />

            <div className="relative mx-auto max-w-2xl">
              <Badge variant="brand" dot>
                {eyebrow}
              </Badge>

              <h2 className="mt-6 text-display-sm font-semibold text-fg">
                {title ?? (
                  <>
                    Let&apos;s build your next{" "}
                    <GradientText>growth system</GradientText>
                  </>
                )}
              </h2>

              <p className="mt-5 text-base leading-relaxed text-fg-muted sm:text-lg">
                {description}
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href={primaryCta.href} size="lg" className="w-full sm:w-auto">
                  {primaryCta.label}
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Button>
                <Button
                  href={`mailto:${siteConfig.email}`}
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  Email directly
                </Button>
              </div>

              <p className="mt-7 flex items-center justify-center gap-2 text-sm text-fg-subtle">
                <MessageSquare className="size-3.5" aria-hidden="true" />
                Typical reply within one business day
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
