import { cn } from "@/lib/utils";

interface AnimatedMeshGradientProps {
  className?: string;
  /** Controls blob opacity — lower for content pages, higher for the hero. */
  intensity?: "subtle" | "default" | "strong";
  /** Fades the mesh out toward the bottom so it blends into the next section. */
  fade?: boolean;
}

const intensities = {
  subtle: "opacity-40",
  default: "opacity-70",
  strong: "opacity-95",
} as const;

/**
 * Ambient purple/blue mesh gradient.
 *
 * Rendered entirely in CSS — no JavaScript, no client bundle. Blobs are blurred
 * once and then animated with `transform` only, so the compositor handles the
 * motion and the expensive filter is never re-rasterised.
 *
 * Mobile gets a deliberately lighter pass: large CSS `blur()` filters are one
 * of the most GPU-expensive things a phone can be asked to composite every
 * frame, so below `sm` the blobs are smaller and less blurred, and the third
 * (least noticeable) blob is dropped entirely. Desktop keeps the full effect.
 */
export function AnimatedMeshGradient({
  className,
  intensity = "default",
  fade = true,
}: AnimatedMeshGradientProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        fade && "mask-fade-b",
        className,
      )}
    >
      <div className={cn("absolute inset-0", intensities[intensity])}>
        {/* Purple core — upper left */}
        <div
          className={cn(
            "absolute -top-[22%] -left-[12%] h-[18rem] w-[18rem] rounded-full",
            "bg-[radial-gradient(circle_at_center,rgba(112,48,239,0.62),rgba(112,48,239,0.14)_45%,transparent_70%)]",
            "blur-[46px] will-change-transform motion-safe:animate-drift-a",
            "sm:h-[34rem] sm:w-[34rem] sm:blur-[90px]",
            "lg:h-[46rem] lg:w-[46rem] lg:blur-[110px]",
          )}
        />
        {/* Blue counterweight — upper right */}
        <div
          className={cn(
            "absolute -top-[10%] right-[-14%] h-[16rem] w-[16rem] rounded-full",
            "bg-[radial-gradient(circle_at_center,rgba(30,144,255,0.5),rgba(30,144,255,0.12)_45%,transparent_70%)]",
            "blur-[46px] will-change-transform motion-safe:animate-drift-b",
            "sm:h-[30rem] sm:w-[30rem] sm:blur-[90px]",
            "lg:h-[42rem] lg:w-[42rem] lg:blur-[110px]",
          )}
        />
        {/* Deep violet anchor — lower centre. Skipped on mobile: the least
            visually essential of the three, and the third simultaneous blur
            layer is where phones start dropping frames. */}
        <div
          className={cn(
            "absolute top-[38%] left-[26%] hidden h-[26rem] w-[26rem] rounded-full",
            "bg-[radial-gradient(circle_at_center,rgba(92,34,208,0.45),transparent_68%)]",
            "blur-[100px] will-change-transform motion-safe:animate-drift-c",
            "sm:block",
            "lg:h-[38rem] lg:w-[38rem] lg:blur-[130px]",
          )}
        />
      </div>

      {/* Horizon light — grounds the mesh against the page background */}
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(112,48,239,0.5),rgba(30,144,255,0.5),transparent)]" />
    </div>
  );
}
