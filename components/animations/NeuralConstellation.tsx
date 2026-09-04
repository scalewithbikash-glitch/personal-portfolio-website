import { TrendingUp, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

/** Graph geometry, in the SVG's 400×400 user space. */
const HUB = { x: 198, y: 200 } as const;

const NODES = [
  { id: "a", x: 68, y: 100, r: 6, tone: "purple" },
  { id: "b", x: 154, y: 54, r: 4.5, tone: "blue" },
  { id: "c", x: 322, y: 112, r: 6.5, tone: "blue" },
  { id: "d", x: 56, y: 244, r: 5, tone: "purple" },
  { id: "e", x: 336, y: 268, r: 5.5, tone: "purple" },
  { id: "f", x: 168, y: 340, r: 4.5, tone: "blue" },
  { id: "g", x: 288, y: 356, r: 5, tone: "blue" },
] as const;

const EDGES = [
  { from: HUB, to: NODES[0], key: "h-a" },
  { from: HUB, to: NODES[1], key: "h-b" },
  { from: HUB, to: NODES[2], key: "h-c" },
  { from: HUB, to: NODES[3], key: "h-d" },
  { from: HUB, to: NODES[4], key: "h-e" },
  { from: HUB, to: NODES[5], key: "h-f" },
  { from: NODES[0], to: NODES[1], key: "a-b" },
  { from: NODES[1], to: NODES[2], key: "b-c" },
  { from: NODES[2], to: NODES[4], key: "c-e" },
  { from: NODES[3], to: NODES[5], key: "d-f" },
  { from: NODES[5], to: NODES[6], key: "f-g" },
] as const;

/** Edges that carry a travelling data pulse, with their timing. */
const PULSES = [
  { edge: EDGES[0], duration: 4.4, delay: 0 },
  { edge: EDGES[2], duration: 5.2, delay: 1.1 },
  { edge: EDGES[3], duration: 4.8, delay: 2.3 },
  { edge: EDGES[4], duration: 5.6, delay: 0.7 },
  { edge: EDGES[7], duration: 6, delay: 3.1 },
] as const;

function pathFor(from: { x: number; y: number }, to: { x: number; y: number }) {
  return `M ${from.x} ${from.y} L ${to.x} ${to.y}`;
}

/**
 * Abstract AI system visual for the hero.
 *
 * A hub-and-spoke node graph with travelling data pulses. Every animation
 * here is pure CSS — no Framer Motion, no client component, no dependency on
 * React ever hydrating. The edge "draw-in" uses the standard SVG trick of
 * setting `pathLength={1}` (which re-normalises the path's dash units to
 * 0–1 regardless of its actual pixel length), so a plain `@keyframes` can
 * animate `stroke-dashoffset` from 1 to 0 without knowing each edge's real
 * length. This used to run on Framer Motion's `initial`/`animate`, which
 * requires JavaScript to execute before anything appears — on a slow
 * connection or an underpowered phone that left the whole graphic sitting
 * invisible indefinitely. A CSS animation has no such dependency: the
 * browser plays it the moment the SVG paints, hydrated or not.
 * `prefers-reduced-motion` is handled by the global media query in
 * globals.css, which already neutralises every CSS animation on the site.
 */
export function NeuralConstellation({ className }: { className?: string }) {
  return (
    <div className={cn("relative aspect-square w-full", className)}>
      {/* Ambient light behind the graph */}
      <div
        aria-hidden="true"
        className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(112,48,239,0.4),rgba(30,144,255,0.14)_45%,transparent_70%)] blur-[32px] sm:blur-[60px]"
      />

      {/* Slowly rotating orbital rings */}
      <div
        aria-hidden="true"
        className="absolute inset-[6%] rounded-full border border-white/[0.06] motion-safe:animate-[spin_64s_linear_infinite]"
      >
        <span className="absolute top-1/2 -left-[3px] size-1.5 -translate-y-1/2 rounded-full bg-purple-300 shadow-[0_0_10px_rgba(169,127,247,0.9)]" />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-[20%] rounded-full border border-dashed border-white/[0.08] motion-safe:animate-[spin_48s_linear_infinite_reverse]"
      />

      <svg
        viewBox="0 0 400 400"
        className="relative size-full overflow-visible"
        role="img"
        aria-label="Abstract diagram of an AI-driven marketing system: a central hub connected to data nodes"
      >
        <defs>
          <linearGradient id="edge-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7030EF" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#1E90FF" stopOpacity="0.35" />
          </linearGradient>
          <radialGradient id="hub-fill">
            <stop offset="0%" stopColor="#C9ADFB" />
            <stop offset="55%" stopColor="#7030EF" />
            <stop offset="100%" stopColor="#1E90FF" />
          </radialGradient>
          <radialGradient id="node-purple">
            <stop offset="0%" stopColor="#E3D6FD" />
            <stop offset="100%" stopColor="#7030EF" />
          </radialGradient>
          <radialGradient id="node-blue">
            <stop offset="0%" stopColor="#CFE7FF" />
            <stop offset="100%" stopColor="#1E90FF" />
          </radialGradient>
        </defs>

        {/* Connections */}
        <g>
          {EDGES.map((edge, index) => (
            <path
              key={edge.key}
              d={pathFor(edge.from, edge.to)}
              stroke="url(#edge-gradient)"
              strokeWidth={1.1}
              fill="none"
              pathLength={1}
              strokeDasharray={1}
              className="motion-safe:animate-edge-draw"
              style={{
                animationDelay: `${0.35 + index * 0.07}s`,
              }}
            />
          ))}
        </g>

        {/* Travelling data pulses */}
        {PULSES.map((pulse) => (
          <circle
            key={`pulse-${pulse.edge.key}`}
            r={2.6}
            fill="#CFE7FF"
            className="motion-safe:animate-trace"
            style={{
              offsetPath: `path("${pathFor(pulse.edge.from, pulse.edge.to)}")`,
              animationDuration: `${pulse.duration}s`,
              animationDelay: `${pulse.delay}s`,
              filter: "drop-shadow(0 0 4px rgba(107,182,255,0.9))",
            }}
          />
        ))}

        {/* Satellite nodes */}
        {NODES.map((node, index) => (
          <g
            key={node.id}
            className="motion-safe:animate-node-pop"
            style={{
              transformOrigin: `${node.x}px ${node.y}px`,
              animationDelay: `${0.5 + index * 0.09}s`,
            }}
          >
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r + 6}
              fill={node.tone === "purple" ? "#7030EF" : "#1E90FF"}
              opacity={0.16}
            />
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill={`url(#node-${node.tone})`}
            />
          </g>
        ))}

        {/* Central hub */}
        <g
          className="motion-safe:animate-node-pop"
          style={{
            transformOrigin: `${HUB.x}px ${HUB.y}px`,
            animationDuration: "0.7s",
          }}
        >
          <circle
            cx={HUB.x}
            cy={HUB.y}
            r={40}
            fill="#7030EF"
            opacity={0.12}
            className="origin-center motion-safe:animate-ring"
            style={{ transformOrigin: `${HUB.x}px ${HUB.y}px` }}
          />
          <circle cx={HUB.x} cy={HUB.y} r={26} fill="#7030EF" opacity={0.18} />
          <circle
            cx={HUB.x}
            cy={HUB.y}
            r={15}
            fill="url(#hub-fill)"
            className="motion-safe:animate-pulse-soft"
          />
          <circle
            cx={HUB.x}
            cy={HUB.y}
            r={15}
            fill="none"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth={0.8}
          />
        </g>
      </svg>

      {/* Floating metric cards */}
      <FloatingCard
        className="absolute top-[8%] -left-2 sm:-left-6"
        delay={1.15}
        icon={<TrendingUp className="size-3.5 text-blue-300" aria-hidden="true" />}
        label="Pipeline"
        value="Tracked"
      />
      <FloatingCard
        className="absolute right-0 bottom-[12%] sm:-right-4"
        delay={1.35}
        icon={<Zap className="size-3.5 text-purple-300" aria-hidden="true" />}
        label="Follow-up"
        value="Instant"
      />
    </div>
  );
}

interface FloatingCardProps {
  className?: string;
  delay: number;
  icon: React.ReactNode;
  label: string;
  value: string;
}

function FloatingCard({
  className,
  delay,
  icon,
  label,
  value,
}: FloatingCardProps) {
  return (
    <div
      className={cn(
        "glass-panel rounded-2xl px-3.5 py-2.5 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.9)]",
        "motion-safe:animate-card-enter",
        className,
      )}
      style={{ "--card-delay": `${delay}s` } as React.CSSProperties}
    >
      <div className="flex items-center gap-2.5">
        <span className="flex size-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05]">
          {icon}
        </span>
        <div>
          <p className="text-[0.65rem] tracking-wide text-fg-subtle uppercase">
            {label}
          </p>
          <p className="text-sm font-semibold text-fg">{value}</p>
        </div>
      </div>
    </div>
  );
}
