/**
 * Central site configuration.
 * Every piece of brand/contact data lives here so it is changed in one place.
 */

export const siteConfig = {
  name: "Scalewithbikash",
  legalName: "Scalewithbikash",
  person: "Bikash Gurung",
  role: "AI Digital Marketing Expert & Consultant",
  tagline: "AI-powered strategies for smarter digital growth.",
  description:
    "Bikash Gurung is an AI digital marketing expert and consultant helping businesses use artificial intelligence, automation, and modern marketing systems to grow smarter.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://scalewithbikash.com",
  locale: "en_US",
  email: "scalewithbikash@gmail.com",
  phone: "9824190130",
  phoneHref: "tel:+9779824190130",
  location: {
    street: "03-Nadipur",
    city: "Pokhara",
    region: "Gandaki",
    country: "Nepal",
    countryCode: "NP",
    full: "Pokhara, 03-Nadipur, Nepal",
  },
  founded: "2021",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const primaryCta = {
  label: "Book a Consultation",
  href: "/contact",
} as const;

/**
 * Social profiles. Set `href` to an empty string to hide a profile from the UI
 * without removing the configuration.
 */
export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/scalewithbikash", icon: "linkedin" },
  { label: "X", href: "https://x.com/scalewithbikash", icon: "x" },
  { label: "Facebook", href: "https://www.facebook.com/scalewithbikash", icon: "facebook" },
  { label: "Instagram", href: "https://www.instagram.com/scalewithbikash", icon: "instagram" },
] as const;

export type SocialLink = (typeof socialLinks)[number];
