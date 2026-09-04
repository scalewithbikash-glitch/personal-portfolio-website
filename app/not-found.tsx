import Link from "next/link";
import { ArrowRight, Compass, Home } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { AnimatedMeshGradient } from "@/components/animations/AnimatedMeshGradient";
import { GridBackdrop } from "@/components/animations/GridBackdrop";
import { primaryCta } from "@/lib/site";

const helpfulLinks = [
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden py-24">
      <AnimatedMeshGradient intensity="default" />
      <GridBackdrop className="-z-10 opacity-50" />

      <Container size="narrow" className="text-center">
        <span className="inline-flex size-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
          <Compass className="size-7 text-purple-300" aria-hidden="true" />
        </span>

        <p className="mt-8 font-mono text-sm text-fg-subtle">Error 404</p>
        <h1 className="mt-3 text-display-sm font-semibold text-fg">
          This page <GradientText animated>doesn&apos;t exist</GradientText>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-fg-muted">
          The page you&apos;re looking for may have moved or never existed.
          Here are a few places that do.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" size="lg">
            <Home className="size-4" aria-hidden="true" />
            Back to home
          </Button>
          <Button href={primaryCta.href} size="lg" variant="secondary">
            {primaryCta.label}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </div>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-white/[0.07] pt-8">
          {helpfulLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-fg-muted transition-colors hover:text-fg"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
