import { cn } from "@/lib/utils";

/**
 * Faint technical grid, masked to a soft radial falloff.
 *
 * Hidden below `sm`: it's purely decorative, and a masked repeating
 * background-image is an easy, invisible-to-the-user cost to cut on phones
 * (masked backgrounds push some mobile GPUs onto a slower rendering path).
 */
export function GridBackdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 hidden grid-lines sm:block",
        "[mask-image:radial-gradient(ellipse_at_center,#000_10%,transparent_72%)]",
        className,
      )}
    />
  );
}
