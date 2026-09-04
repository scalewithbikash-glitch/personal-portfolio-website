import { cn } from "@/lib/utils";

interface SectionProps extends React.ComponentPropsWithoutRef<"section"> {
  /** Vertical rhythm. `tight` for stacked sections, `spacious` for hero-adjacent. */
  spacing?: "tight" | "default" | "spacious";
}

const spacings = {
  tight: "py-16 sm:py-20",
  default: "py-20 sm:py-24 lg:py-32",
  spacious: "py-24 sm:py-32 lg:py-40",
} as const;

export function Section({
  spacing = "default",
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("relative", spacings[spacing], className)}
      {...props}
    />
  );
}
