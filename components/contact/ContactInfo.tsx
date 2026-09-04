import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { GlowOrb } from "@/components/animations/GlowOrb";
import { siteConfig, socialLinks } from "@/lib/site";
import { SocialIcon } from "@/components/layout/SocialIcon";

const items = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
  },
  {
    icon: MapPin,
    label: "Location",
    value: siteConfig.location.full,
    href: null,
  },
] as const;

export function ContactInfo() {
  const activeSocials = socialLinks.filter((social) => social.href.length > 0);

  return (
    <Card
      padding="lg"
      className="gradient-border relative overflow-hidden bg-[linear-gradient(150deg,var(--color-surface-2),var(--color-ink)_70%)]"
    >
      <GlowOrb color="mixed" size="md" className="-top-16 -right-16 opacity-60" />

      <div className="relative">
        <h2 className="text-lg font-semibold text-fg">Direct contact</h2>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted">
          Prefer email or a call? Reach out directly — everything below goes
          straight to me.
        </p>

        <ul className="mt-7 space-y-5">
          {items.map((item) => {
            const Icon = item.icon;
            const content = (
              <span className="flex items-start gap-3.5">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-purple-300">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs text-fg-subtle">
                    {item.label}
                  </span>
                  <span className="block text-sm font-medium break-words text-fg">
                    {item.value}
                  </span>
                </span>
              </span>
            );

            return (
              <li key={item.label}>
                {item.href ? (
                  <a
                    href={item.href}
                    className="block transition-opacity hover:opacity-80"
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

        <div className="mt-7 flex items-start gap-3.5 border-t border-white/[0.07] pt-6">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-blue-300">
            <Clock className="size-4" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-xs text-fg-subtle">Response time</span>
            <span className="block text-sm font-medium text-fg">
              Typically within one business day
            </span>
          </span>
        </div>

        {activeSocials.length > 0 ? (
          <div className="mt-7 border-t border-white/[0.07] pt-6">
            <p className="text-xs text-fg-subtle">Follow along</p>
            <ul className="mt-3 flex items-center gap-2">
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
          </div>
        ) : null}
      </div>
    </Card>
  );
}
