import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/animations/Reveal";
import { AnimatedMeshGradient } from "@/components/animations/AnimatedMeshGradient";
import { GridBackdrop } from "@/components/animations/GridBackdrop";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Rendered under the description — CTAs, meta rows, breadcrumbs. */
  children?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

/** Shared hero for interior pages. Keeps rhythm and lighting consistent. */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
  align = "left",
  className,
}: PageHeroProps) {
  const centered = align === "center";

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden pt-32 pb-14 sm:pt-40 sm:pb-16 lg:pt-44 lg:pb-20",
        className,
      )}
    >
      <AnimatedMeshGradient intensity="default" />
      <GridBackdrop className="-z-10 opacity-50" />

      <Container size="wide">
        <div className={cn("max-w-3xl", centered && "mx-auto text-center")}>
          {eyebrow ? (
            <Reveal>
              <Badge variant="brand">{eyebrow}</Badge>
            </Reveal>
          ) : null}

          <Reveal delay={0.06}>
            <h1 className="mt-6 text-display-md font-semibold text-fg">
              {title}
            </h1>
          </Reveal>

          {description ? (
            <Reveal delay={0.12}>
              <div className="mt-6 text-lg leading-relaxed text-fg-muted">
                {description}
              </div>
            </Reveal>
          ) : null}

          {children ? (
            <Reveal delay={0.18}>
              <div className="mt-9">{children}</div>
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
