import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card, CardGlow } from "@/components/ui/Card";
import type { Service } from "@/types";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  /** `compact` omits the benefit list — used in the homepage preview grid. */
  variant?: "default" | "compact";
  className?: string;
}

export function ServiceCard({
  service,
  variant = "default",
  className,
}: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Card
      interactive
      padding="none"
      className={cn("group h-full", className)}
    >
      <CardGlow />

      <Link
        href={`/services/${service.slug}`}
        className="relative flex h-full flex-col p-6 focus-visible:outline-none sm:p-7"
      >
        <div className="flex items-start justify-between gap-4">
          <span className="inline-flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-purple-300 transition-all duration-400 group-hover:border-purple-500/40 group-hover:bg-purple-500/12 group-hover:text-purple-200">
            <Icon
              className="size-5 transition-transform duration-400 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </span>
          <span className="text-[0.65rem] font-medium tracking-widest text-fg-subtle uppercase">
            {service.category}
          </span>
        </div>

        <h3 className="mt-6 text-lg font-semibold text-fg">{service.title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-fg-muted">
          {service.shortDescription}
        </p>

        {variant === "default" ? (
          <ul className="mt-6 space-y-2.5 border-t border-white/[0.07] pt-5">
            {service.benefits.slice(0, 3).map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-2.5 text-sm text-fg-subtle"
              >
                <span
                  className="mt-1.5 size-1 shrink-0 rounded-full bg-gradient-to-r from-purple-400 to-blue-400"
                  aria-hidden="true"
                />
                {benefit}
              </li>
            ))}
          </ul>
        ) : null}

        <span className="mt-auto flex items-center gap-1.5 pt-7 text-sm font-medium text-fg-muted transition-colors duration-300 group-hover:text-fg">
          Learn more
          <ArrowUpRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </span>
      </Link>
    </Card>
  );
}
