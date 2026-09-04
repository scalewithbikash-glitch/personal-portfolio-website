"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import type { ServiceProcessStep } from "@/types";
import { cn } from "@/lib/utils";

interface ServiceProcessProps {
  steps: ServiceProcessStep[];
  className?: string;
}

/**
 * Vertical process timeline with a rail that fills as the section scrolls
 * through the viewport. The rail is a single transform-animated element, so
 * the effect costs one composited layer rather than per-step scroll listeners.
 */
export function ServiceProcess({ steps, className }: ServiceProcessProps) {
  const containerRef = useRef<HTMLOListElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 65%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  const scaleY = useTransform(
    prefersReducedMotion ? scrollYProgress : smoothProgress,
    (value) => (prefersReducedMotion ? 1 : value),
  );

  return (
    <ol ref={containerRef} className={cn("relative", className)}>
      {/* Static rail */}
      <div
        aria-hidden="true"
        className="absolute top-3 bottom-3 left-[1.4375rem] w-px bg-white/[0.08] sm:left-[1.6875rem]"
      />
      {/* Progress rail */}
      <motion.div
        aria-hidden="true"
        style={{ scaleY }}
        className="absolute top-3 bottom-3 left-[1.4375rem] w-px origin-top bg-[linear-gradient(180deg,var(--color-purple-400),var(--color-blue-400))] sm:left-[1.6875rem]"
      />

      {steps.map((step, index) => (
        <motion.li
          key={step.step}
          className="relative flex gap-5 pb-10 last:pb-0 sm:gap-7"
          // `initial={false}` renders each step at its final, visible state
          // immediately rather than gating it behind a scroll-triggered
          // IntersectionObserver callback that needs JavaScript to fire —
          // see Reveal.tsx for why that matters on a slow connection.
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -12% 0px" }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.55,
            delay: prefersReducedMotion ? 0 : index * 0.05,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-white/12 bg-surface-2 text-sm font-semibold text-fg shadow-[0_8px_24px_-12px_rgba(0,0,0,0.9)] sm:size-14">
            <span className="bg-[linear-gradient(120deg,var(--color-purple-200),var(--color-blue-300))] bg-clip-text text-transparent">
              {step.step}
            </span>
          </span>

          <div className="pt-2 sm:pt-3">
            <h3 className="text-lg font-semibold text-fg sm:text-xl">
              {step.title}
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-fg-muted sm:text-base">
              {step.description}
            </p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
