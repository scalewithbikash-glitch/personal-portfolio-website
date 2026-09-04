import { cn } from "@/lib/utils";

const PARTICLE_COUNT = 18;

interface BloomParticle {
  x: number;
  y: number;
  size: number;
  delay: number;
  blue: boolean;
}

/**
 * Scatters particles evenly around a circle with a little jitter on angle
 * and distance, so the burst reads as an organic "blast" rather than a
 * perfect, mechanical ring of dots.
 */
function buildParticles(count: number): BloomParticle[] {
  const step = 360 / count;

  return Array.from({ length: count }, (_, index) => {
    const angle = step * index + (Math.random() * step * 0.6 - step * 0.3);
    const distance = 54 + Math.random() * 60;
    const radians = (angle * Math.PI) / 180;

    return {
      x: Math.round(Math.cos(radians) * distance),
      y: Math.round(Math.sin(radians) * distance),
      size: Math.round((2.5 + Math.random() * 3) * 10) / 10,
      delay: Math.round(Math.random() * 120) / 1000,
      blue: index % 2 === 0,
    };
  });
}

/**
 * One-shot particle burst for the contact form's success state — a "bloom
 * blast" of brand-colour particles from behind the checkmark.
 *
 * Pure CSS (`@keyframes bloom-flash` / `bloom-particle` in globals.css): the
 * component only computes each particle's random trajectory at render time,
 * the browser handles playing the burst once the moment it paints. There's
 * no scroll trigger and no reason to defer this to JavaScript — the success
 * state itself only ever appears after a successful `fetch()` resolves, so
 * unlike the rest of the site's animations this one is already downstream
 * of JavaScript having run. Renders fresh random values on every mount,
 * which is exactly what a celebratory one-off burst should do — this is
 * never part of the server-rendered HTML, so there's no hydration mismatch
 * to worry about.
 */
export function SuccessBloom() {
  const particles = buildParticles(PARTICLE_COUNT);

  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
    >
      <span
        className={cn(
          "absolute size-24 rounded-full opacity-0",
          "bg-[radial-gradient(circle,rgba(112,48,239,0.6),rgba(30,144,255,0.28)_55%,transparent_75%)]",
          "motion-safe:animate-bloom-flash",
        )}
      />
      {particles.map((particle, index) => (
        <span
          key={index}
          className={cn(
            "absolute rounded-full opacity-0 motion-safe:animate-bloom-particle",
            particle.blue
              ? "bg-blue-300 shadow-[0_0_8px_rgba(107,182,255,0.9)]"
              : "bg-purple-300 shadow-[0_0_8px_rgba(169,127,247,0.9)]",
          )}
          style={
            {
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              "--bloom-x": `${particle.x}px`,
              "--bloom-y": `${particle.y}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </span>
  );
}
