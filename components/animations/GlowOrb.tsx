import { cn } from "@/lib/utils";

interface GlowOrbProps {
  className?: string;
  color?: "purple" | "blue" | "mixed";
  size?: "sm" | "md" | "lg";
}

const colors = {
  purple:
    "bg-[radial-gradient(circle_at_center,rgba(112,48,239,0.5),transparent_68%)]",
  blue: "bg-[radial-gradient(circle_at_center,rgba(30,144,255,0.42),transparent_68%)]",
  mixed:
    "bg-[radial-gradient(circle_at_30%_30%,rgba(112,48,239,0.45),rgba(30,144,255,0.28)_45%,transparent_70%)]",
} as const;

// Smaller, less-blurred by default; sm:/lg: restore the full size on screens
// with GPU headroom to spare. These orbs only animate opacity (cheap), but
// the blur itself still costs a rasterisation pass the first time each one
// scrolls into view, so mobile gets a lighter version of each size.
const sizes = {
  sm: "h-40 w-40 blur-[36px] sm:h-56 sm:w-56 sm:blur-[60px]",
  md: "h-56 w-56 blur-[50px] sm:h-80 sm:w-80 sm:blur-[80px]",
  lg: "h-80 w-80 blur-[70px] sm:h-[24rem] sm:w-[24rem] sm:blur-[90px] lg:h-[32rem] lg:w-[32rem] lg:blur-[110px]",
} as const;

/** A single soft ambient light source. Purely decorative. */
export function GlowOrb({
  className,
  color = "purple",
  size = "md",
}: GlowOrbProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full will-change-transform motion-safe:animate-pulse-soft",
        colors[color],
        sizes[size],
        className,
      )}
    />
  );
}
