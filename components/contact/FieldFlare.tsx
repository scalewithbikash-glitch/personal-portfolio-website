import { cn } from "@/lib/utils";

interface Particle {
  left: string;
  edge: "top" | "bottom";
  delay: number;
  blue?: boolean;
}

/** Positions spread across the top and bottom edges of the field. */
const PARTICLES: Particle[] = [
  { left: "6%", edge: "top", delay: 0 },
  { left: "24%", edge: "top", delay: 0.25, blue: true },
  { left: "50%", edge: "top", delay: 0.1 },
  { left: "76%", edge: "top", delay: 0.35, blue: true },
  { left: "94%", edge: "top", delay: 0.15 },
  { left: "14%", edge: "bottom", delay: 0.3, blue: true },
  { left: "50%", edge: "bottom", delay: 0.05 },
  { left: "86%", edge: "bottom", delay: 0.4, blue: true },
];

/**
 * Particle flare that traces a field's border while it has focus.
 *
 * Pure CSS: each dot sits at `opacity-0` by default, and
 * `group-focus-within/field:animate-field-spark` (applied only while the
 * wrapping `FlareField` contains focus) takes over the opacity and scale via
 * its own keyframes for as long as the field is active, fading back to the
 * base `opacity-0` — smoothed by `transition-opacity` — the moment focus
 * leaves. No JavaScript involved, so it can never get stuck either way.
 */
function FieldFlare() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-visible"
    >
      {PARTICLES.map((particle, index) => (
        <span
          key={index}
          className={cn(
            "absolute size-1 rounded-full opacity-0 transition-opacity duration-300",
            "group-focus-within/field:animate-field-spark",
            particle.blue
              ? "bg-blue-300 shadow-[0_0_6px_rgba(107,182,255,0.9)]"
              : "bg-purple-300 shadow-[0_0_6px_rgba(169,127,247,0.9)]",
          )}
          style={{
            left: particle.left,
            top: particle.edge === "top" ? "-3px" : undefined,
            bottom: particle.edge === "bottom" ? "-3px" : undefined,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </span>
  );
}

/**
 * Wraps a single form control with the focus-triggered particle flare,
 * layered around its border on top of the control's own focus glow (set in
 * `fieldClasses()`) — the flare is an addition, not a replacement.
 */
export function FlareField({ children }: { children: React.ReactNode }) {
  return (
    <div className="group/field relative">
      {children}
      <FieldFlare />
    </div>
  );
}
