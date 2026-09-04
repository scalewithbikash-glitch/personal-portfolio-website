import { cn } from "@/lib/utils";

interface GradientTextProps extends React.ComponentPropsWithoutRef<"span"> {
  /**
   * Enables the slow, continuously-sweeping mesh gradient (purple → blue
   * loop) instead of the default static gradient. Reserved for hero
   * headings — the one accent word per page that should draw the eye first.
   */
  animated?: boolean;
}

/** Applies the brand purple → blue gradient to inline text. */
export function GradientText({
  className,
  children,
  animated = false,
  ...props
}: GradientTextProps) {
  return (
    <span
      className={cn(
        animated ? "gradient-text-animated" : "gradient-text",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
