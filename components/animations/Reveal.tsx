import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Seconds to wait before the animation starts. */
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
}

const animationName: Record<Direction, string> = {
  up: "reveal-up",
  down: "reveal-down",
  left: "reveal-left",
  right: "reveal-right",
  none: "reveal-fade",
};

/**
 * Entrance animation for content as it appears on the page.
 *
 * Pure CSS (`@keyframes` in globals.css) — no client component, no
 * JavaScript, no IntersectionObserver. This used to run on Framer Motion's
 * `whileInView`, which requires React to hydrate and an observer to fire
 * before content becomes visible; the server-rendered HTML shipped
 * `opacity:0` and nothing made it visible until JS caught up. On a slow
 * connection or an underpowered phone that left real users staring at a
 * blank page indefinitely, with every button unresponsive because hydration
 * hadn't reached them yet either. A CSS animation has no such dependency:
 * the browser plays it the moment the element paints, hydrated or not, so
 * content is guaranteed to reach full opacity within `delay + duration`
 * seconds no matter how slow or broken the JS turns out to be.
 * `prefers-reduced-motion` is handled by the global media query in
 * globals.css, which already neutralises every CSS animation on the site.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 18,
}: RevealProps) {
  return (
    <div
      className={cn(className)}
      style={
        {
          "--reveal-distance": `${distance}px`,
          animationName: animationName[direction],
          animationDuration: `${duration}s`,
          animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          animationDelay: `${delay}s`,
          animationFillMode: "both",
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  /** Seconds between each direct child's entrance. */
  stagger?: number;
  delay?: number;
}

/**
 * Container that reveals its direct `RevealItem` children in sequence.
 *
 * The stagger itself is CSS too: `--stagger-step` and `--stagger-base` feed
 * the `nth-child` delay rules in the `stagger-children` utility, so no
 * JavaScript orchestrates the sequence — see Reveal's doc comment for why
 * that matters.
 */
export function Stagger({
  children,
  className,
  stagger = 0.08,
  delay = 0,
}: StaggerProps) {
  return (
    <div
      className={cn("stagger-children", className)}
      style={
        {
          "--stagger-step": `${stagger}s`,
          "--stagger-base": `${delay}s`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(className)}
      style={
        {
          "--reveal-distance": "18px",
          animationName: "reveal-up",
          animationDuration: "0.55s",
          animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          animationFillMode: "both",
          // animation-delay is deliberately left unset here — it comes from
          // the parent Stagger's nth-child CSS rule, keyed off this
          // element's position among its siblings.
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
