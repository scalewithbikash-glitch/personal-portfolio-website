import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { navLinks, primaryCta, siteConfig, socialLinks } from "@/lib/site";
import { services } from "@/content/services";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { SocialIcon } from "./SocialIcon";

const contactItems = [
  {
    icon: Mail,
    label: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: siteConfig.phone,
    href: siteConfig.phoneHref,
  },
  {
    icon: MapPin,
    label: siteConfig.location.full,
    href: null,
  },
] as const;

export function Footer() {
  const year = new Date().getFullYear();
  const activeSocials = socialLinks.filter((social) => social.href.length > 0);

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-white/[0.07] bg-ink-deep">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(112,48,239,0.22),transparent_70%)] blur-[80px]"
      />

      <Container size="wide" className="relative">
        {/* Closing call to action */}
        <div className="flex flex-col gap-6 border-b border-white/[0.07] py-14 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
              Have a growth problem worth solving?
            </h2>
            <p className="mt-3 text-fg-muted">
              Tell me what you are working on. If I am not the right fit, I will
              say so and point you somewhere better.
            </p>
          </div>
          <Button href={primaryCta.href} size="lg" className="w-full sm:w-auto">
            {primaryCta.label}
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Button>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 py-14 md:grid-cols-4 lg:gap-x-12">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-fg-muted">
              {siteConfig.tagline}
            </p>
            {activeSocials.length > 0 ? (
              <ul className="mt-6 flex items-center gap-2">
                {activeSocials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${siteConfig.name} on ${social.label}`}
                      className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-fg-subtle transition-colors duration-300 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-fg"
                    >
                      <SocialIcon name={social.icon} className="size-4" />
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <nav aria-labelledby="footer-nav-heading">
            <h3
              id="footer-nav-heading"
              className="text-xs font-semibold tracking-widest text-fg uppercase"
            >
              Navigate
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-fg-muted transition-colors hover:text-fg"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-services-heading">
            <h3
              id="footer-services-heading"
              className="text-xs font-semibold tracking-widest text-fg uppercase"
            >
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-fg-muted transition-colors hover:text-fg"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold tracking-widest text-fg uppercase">
              Contact
            </h3>
            <ul className="mt-5 space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <span className="flex items-start gap-3">
                    <Icon
                      className="mt-0.5 size-4 shrink-0 text-purple-400"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-snug break-words">
                      {item.label}
                    </span>
                  </span>
                );

                return (
                  <li key={item.label} className="text-fg-muted">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="transition-colors hover:text-fg"
                      >
                        {content}
                      </a>
                    ) : (
                      <address className="not-italic">{content}</address>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Legal line */}
        <div className="flex flex-col gap-3 border-t border-white/[0.07] py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-fg-subtle">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-fg-subtle">
            {siteConfig.role} · {siteConfig.location.city}, Nepal
          </p>
        </div>
      </Container>
    </footer>
  );
}
