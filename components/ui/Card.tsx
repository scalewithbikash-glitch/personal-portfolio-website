import { cn } from "@/lib/utils";

interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
  /** Adds hover elevation and a brand-tinted border glow. */
  interactive?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const paddings = {
  none: "",
  sm: "p-5",
  md: "p-6 sm:p-7",
  lg: "p-7 sm:p-9",
} as const;

export function Card({
  interactive = false,
  padding = "md",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-card border border-white/[0.07] bg-surface/70 shadow-card",
        "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px",
        "before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)]",
        interactive && [
          "transition-[transform,border-color,box-shadow,background-color] duration-400 ease-[var(--ease-out-soft)]",
          "hover:border-purple-500/35 hover:bg-surface-2/70 hover:shadow-lift",
          "motion-safe:hover:-translate-y-1",
        ],
        paddings[padding],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/** Soft brand glow revealed on card hover. Place as the first child of a Card. */
export function CardGlow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500",
        "bg-[radial-gradient(420px_circle_at_50%_0%,rgba(112,48,239,0.16),transparent_70%)]",
        "group-hover:opacity-100",
        className,
      )}
    />
  );
}
