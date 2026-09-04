import { cn } from "@/lib/utils";
import { Badge } from "./Badge";
import { Reveal } from "@/components/animations/Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  /** Rendered to the right of the heading on large screens when aligned left. */
  action?: React.ReactNode;
  className?: string;
  /** Heading level for correct document outline. */
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        action && !centered
          ? "lg:flex-row lg:items-end lg:justify-between lg:gap-12"
          : null,
        className,
      )}
    >
      <div className={cn("max-w-2xl", centered && "mx-auto text-center")}>
        {eyebrow ? (
          <Reveal>
            <Badge variant="brand" className="mb-5">
              {eyebrow}
            </Badge>
          </Reveal>
        ) : null}

        <Reveal delay={0.06}>
          <Tag
            className={cn(
              "text-display-sm font-semibold text-fg",
              Tag === "h1" && "text-display-md",
            )}
          >
            {title}
          </Tag>
        </Reveal>

        {description ? (
          <Reveal delay={0.12}>
            <p
              className={cn(
                "mt-5 text-base leading-relaxed text-fg-muted sm:text-lg",
                centered && "mx-auto",
              )}
            >
              {description}
            </p>
          </Reveal>
        ) : null}
      </div>

      {action ? (
        <Reveal delay={0.18} className={cn(centered && "mx-auto")}>
          <div className="shrink-0">{action}</div>
        </Reveal>
      ) : null}
    </div>
  );
}
