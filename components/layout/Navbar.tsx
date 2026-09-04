"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { navLinks, primaryCta } from "@/lib/site";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const panelRef = useRef<HTMLDivElement>(null);
  const checkboxRef = useRef<HTMLInputElement>(null);
  const toggleLabelRef = useRef<HTMLLabelElement>(null);

  function closeMenu() {
    if (checkboxRef.current) checkboxRef.current.checked = false;
    setOpen(false);
  }

  // Compact the bar once the page has moved away from the top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes. Adjusting state during
  // render (rather than in an effect) avoids an extra render pass — this is
  // React's documented pattern for resetting state in response to a prop
  // change. See https://react.dev/learn/you-might-not-need-an-effect
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  // The checkbox is uncontrolled (native `:checked` drives the CSS, not
  // React), so closing it on navigation needs an effect — refs can't be
  // touched during render. This one only ever mutates the ref, never calls
  // setState, so it doesn't fall into the "setState in an effect" pattern
  // the state reset above deliberately avoids.
  useEffect(() => {
    if (checkboxRef.current) checkboxRef.current.checked = false;
  }, [pathname]);

  // Lock scroll, trap focus loosely, and restore focus on close. This is a
  // progressive enhancement layer: the menu already opens and closes without
  // any of it (see the CSS `:has()` rules below), so if this effect never
  // runs — slow hydration, JS disabled — the menu is still fully usable,
  // just without scroll-lock and keyboard niceties.
  useEffect(() => {
    if (!open) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        toggleLabelRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={cn(
        // Named group ("nav"), not the bare `group` Button.tsx already uses
        // for its own hover effect — `:has()`-based variants match via
        // `:where(.group)`, which isn't scoped to the nearest ancestor, so a
        // bare `group` here would make hovering anywhere in the navbar
        // incorrectly trigger the CTA button's icon-slide hover animation.
        "group/nav fixed inset-x-0 top-0 z-50 transition-[padding] duration-500 ease-[var(--ease-out-soft)]",
        scrolled ? "py-2.5" : "py-4",
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <nav
          aria-label="Primary"
          className={cn(
            "relative flex items-center justify-between gap-4 rounded-full border transition-all duration-500 ease-[var(--ease-out-soft)]",
            scrolled
              ? "border-white/10 bg-ink/90 py-2 pr-2 pl-4 shadow-[0_18px_44px_-28px_rgba(0,0,0,0.95)] backdrop-blur-md sm:bg-ink/80 sm:backdrop-blur-xl sm:pl-5"
              : "border-transparent bg-transparent py-2.5 pr-2 pl-1 sm:pl-2",
          )}
        >
          <Logo />

          {/* Desktop navigation */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                      active ? "text-fg" : "text-fg-muted hover:text-fg",
                    )}
                  >
                    {active ? (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/[0.06]"
                        transition={
                          prefersReducedMotion
                            ? { duration: 0 }
                            : { type: "spring", stiffness: 420, damping: 34 }
                        }
                      />
                    ) : null}
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Button
              href={primaryCta.href}
              size="sm"
              className="hidden sm:inline-flex"
            >
              {primaryCta.label}
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Button>

            {/*
              The toggle is a real checkbox, not a button with an onClick
              handler. A checkbox's checked/unchecked state — and every CSS
              rule below keyed off it via `:has()` — is native browser
              behaviour: it needs no JavaScript to work at all. React only
              listens in (onChange) to drive the accessibility extras above
              (scroll lock, Escape, focus trap) once it has hydrated; the
              menu itself opens and closes with or without that ever
              happening, which matters on a slow connection or a phone where
              hydration takes a while.
            */}
            <input
              ref={checkboxRef}
              type="checkbox"
              id="mobile-menu-toggle"
              className="sr-only"
              defaultChecked={false}
              onChange={(event) => setOpen(event.target.checked)}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            />
            <label
              ref={toggleLabelRef}
              htmlFor="mobile-menu-toggle"
              tabIndex={0}
              className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-fg transition-colors hover:bg-white/[0.09] lg:hidden"
              onKeyDown={(event) => {
                // The checkbox itself is visually hidden (sr-only) for
                // custom icon styling, so give the visible label the same
                // Enter/Space activation a real button would have.
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  checkboxRef.current?.click();
                }
              }}
            >
              <Menu
                className={cn("size-5", "group-has-checked/nav:hidden")}
                aria-hidden="true"
              />
              <X
                className={cn("absolute hidden size-5", "group-has-checked/nav:block")}
                aria-hidden="true"
              />
            </label>
          </div>
        </nav>
      </div>

      {/* Mobile menu overlay + panel — always in the DOM; visibility, focus
          reachability and animation are driven entirely by the checkbox's
          :checked state via CSS, not by conditional rendering. */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-ink-deep/70 backdrop-blur-sm lg:hidden",
          "pointer-events-none opacity-0 transition-opacity duration-[250ms]",
          "group-has-checked/nav:pointer-events-auto group-has-checked/nav:opacity-100",
        )}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <div
        ref={panelRef}
        id="mobile-menu"
        className={cn(
          "fixed inset-x-4 top-[4.75rem] z-50 origin-top overflow-hidden rounded-3xl border border-white/10 bg-surface/95 p-3 shadow-[0_40px_80px_-40px_rgba(0,0,0,1)] backdrop-blur-md lg:hidden",
          // Closed: invisible (removes it from the tab order — `visibility`
          // transitions stay at their pre-transition value for the whole
          // duration when animating towards `hidden`, so this doesn't cut
          // the fade-out short) and non-interactive.
          "pointer-events-none invisible -translate-y-3 scale-95 opacity-0",
          "transition-all duration-300 ease-[var(--ease-out-expo)]",
          "group-has-checked/nav:pointer-events-auto group-has-checked/nav:visible group-has-checked/nav:translate-y-0 group-has-checked/nav:scale-100 group-has-checked/nav:opacity-100",
        )}
      >
        <ul className="flex flex-col">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium transition-colors",
                    active
                      ? "bg-white/[0.07] text-fg"
                      : "text-fg-muted hover:bg-white/[0.04] hover:text-fg",
                  )}
                >
                  {link.label}
                  {active ? (
                    <span
                      className="size-1.5 rounded-full bg-purple-400"
                      aria-hidden="true"
                    />
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-2 border-t border-white/[0.07] p-2 pt-4">
          <Button href={primaryCta.href} className="w-full" size="md">
            {primaryCta.label}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </header>
  );
}
