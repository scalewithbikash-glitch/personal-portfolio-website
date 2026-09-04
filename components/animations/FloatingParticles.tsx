import { cn } from "@/lib/utils";

/**
 * Deterministic pseudo-random generator.
 * Positions must be identical on server and client, so Math.random is not an
 * option here — a seeded LCG keeps the markup stable across hydration.
 */
function createRandom(seed: number) {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
}

interface Particle {
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  driftX: number;
  driftY: number;
  blue: boolean;
}

function buildParticles(count: number, seed: number): Particle[] {
  const random = createRandom(seed);
  return Array.from({ length: count }, () => ({
    left: Math.round(random() * 1000) / 10,
    top: Math.round(random() * 1000) / 10,
    size: Math.round((random() * 2.5 + 1.5) * 10) / 10,
    duration: Math.round(random() * 12 + 12),
    delay: Math.round(random() * 100) / 10,
    opacity: Math.round((random() * 0.45 + 0.25) * 100) / 100,
    driftX: Math.round(random() * 40 - 20),
    driftY: Math.round(-(random() * 40 + 20)),
    blue: random() > 0.5,
  }));
}

interface FloatingParticlesProps {
  count?: number;
  seed?: number;
  className?: string;
}

/**
 * Ambient drifting light points. CSS-animated, zero client JavaScript.
 */
export function FloatingParticles({
  count = 26,
  seed = 20260903,
  className,
}: FloatingParticlesProps) {
  const particles = buildParticles(count, seed);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      {particles.map((particle, index) => (
        <span
          key={index}
          className={cn(
            "absolute rounded-full will-change-transform motion-safe:animate-particle",
            particle.blue
              ? "bg-blue-300 shadow-[0_0_8px_rgba(107,182,255,0.85)]"
              : "bg-purple-300 shadow-[0_0_8px_rgba(169,127,247,0.85)]",
            // Thin out the field on small screens to keep paint cost low —
            // phones render roughly a third of the particles, tablets and up
            // get the full field.
            index % 3 !== 0 && "hidden sm:block",
          )}
          style={
            {
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              "--particle-opacity": particle.opacity,
              "--particle-x": `${particle.driftX}px`,
              "--particle-y": `${particle.driftY}px`,
              opacity: particle.opacity,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
