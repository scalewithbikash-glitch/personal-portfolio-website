import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-[var(--ease-out-soft)] disabled:pointer-events-none disabled:opacity-55 motion-safe:hover:-translate-y-0.5 active:translate-y-0";

const variants: Record<Variant, string> = {
  primary: cn(
    "bg-[linear-gradient(100deg,var(--color-purple-500),var(--color-purple-600)_38%,var(--color-blue-600)_72%,var(--color-blue-500))]",
    "bg-[length:180%_100%] bg-[position:0%_50%] text-white",
    "shadow-[0_10px_30px_-12px_rgba(112,48,239,0.75)]",
    "hover:bg-[position:100%_50%] hover:shadow-[0_18px_44px_-12px_rgba(112,48,239,0.85)]",
  ),
  secondary:
    "border border-white/12 bg-white/[0.04] text-fg backdrop-blur-sm hover:border-white/25 hover:bg-white/[0.08]",
  ghost:
    "text-fg-muted hover:bg-white/[0.05] hover:text-fg",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm sm:px-6",
  lg: "h-13 px-6 text-[0.95rem] sm:h-14 sm:px-8 sm:text-base",
};

interface SharedProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsLink = SharedProps &
  Omit<React.ComponentPropsWithoutRef<typeof Link>, "className" | "children"> & {
    href: string;
  };

type ButtonAsButton = SharedProps &
  Omit<React.ComponentPropsWithoutRef<"button">, "className" | "children"> & {
    href?: never;
  };

export type ButtonProps = ButtonAsLink | ButtonAsButton;

/**
 * Primary interactive element. Renders a Next.js Link when `href` is provided,
 * otherwise a native button — so semantics always match behaviour.
 */
export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href !== undefined) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    const isExternal = /^(https?:|mailto:|tel:)/.test(href);

    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          {...(href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          {...(rest as React.ComponentPropsWithoutRef<"a">)}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as ButtonAsButton;

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
