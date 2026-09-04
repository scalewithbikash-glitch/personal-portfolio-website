import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock,
  Minus,
  Sparkles,
  Target,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardGlow } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { GradientText } from "@/components/ui/GradientText";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { FAQ } from "@/components/services/FAQ";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Reveal, Stagger, RevealItem } from "@/components/animations/Reveal";
import { AnimatedMeshGradient } from "@/components/animations/AnimatedMeshGradient";
import { GridBackdrop } from "@/components/animations/GridBackdrop";
import { GlowOrb } from "@/components/animations/GlowOrb";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getServiceBySlug,
  getServiceSlugs,
  getOtherServices,
} from "@/lib/content/services";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { primaryCta, siteConfig } from "@/lib/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return buildMetadata({
      title: "Service not found",
      description: "The service you are looking for does not exist.",
      path: `/services/${slug}`,
      index: false,
    });
  }

  return buildMetadata({
    title: service.title,
    description: service.shortDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) notFound();

  const others = await getOtherServices(slug, 3);
  const Icon = service.icon;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: service.description,
          serviceType: service.category,
          url: `${siteConfig.url}/services/${service.slug}`,
          provider: {
            "@type": "Person",
            name: siteConfig.person,
            jobTitle: siteConfig.role,
            url: siteConfig.url,
          },
          areaServed: "Worldwide",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${service.title} deliverables`,
            itemListElement: service.deliverables.map((item) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: item },
            })),
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40">
        <AnimatedMeshGradient intensity="default" />
        <GridBackdrop className="-z-10 opacity-50" />

        <Container size="wide">
          <Reveal>
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: service.title },
              ]}
            />
          </Reveal>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16">
            <div>
              <Reveal delay={0.05}>
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl border border-purple-500/25 bg-purple-500/10 text-purple-200">
                    <Icon className="size-5.5" aria-hidden="true" />
                  </span>
                  <Badge variant="brand">{service.category}</Badge>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="mt-7 text-display-md font-semibold text-fg">
                  {service.title}
                </h1>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">
                  {service.description}
                </p>
              </Reveal>

              <Reveal delay={0.22}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button href={primaryCta.href} size="lg">
                    {primaryCta.label}
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Button>
                  <Button href="/services" size="lg" variant="secondary">
                    All services
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Key facts */}
            <Reveal delay={0.18} direction="left">
              <Card padding="lg" className="gradient-border">
                <h2 className="text-sm font-semibold tracking-widest text-fg-subtle uppercase">
                  At a glance
                </h2>

                <dl className="mt-6 space-y-5">
                  <div className="flex items-start gap-3">
                    <Clock
                      className="mt-0.5 size-4 shrink-0 text-purple-400"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="text-sm text-fg-subtle">
                        Typical timeline
                      </dt>
                      <dd className="text-sm font-medium text-fg">
                        {service.timeline}
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target
                      className="mt-0.5 size-4 shrink-0 text-blue-400"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="text-sm text-fg-subtle">Focus</dt>
                      <dd className="text-sm font-medium text-fg">
                        {service.category}
                      </dd>
                    </div>
                  </div>
                </dl>

                <div className="mt-7 border-t border-white/[0.07] pt-6">
                  <p className="flex items-center gap-2 text-sm font-medium text-fg">
                    <Sparkles
                      className="size-3.5 text-purple-400"
                      aria-hidden="true"
                    />
                    What you gain
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {service.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-2.5 text-sm text-fg-muted"
                      >
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-purple-300"
                          aria-hidden="true"
                        />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Problem & solution */}
      <Section className="border-t border-white/[0.06]">
        <Container size="wide">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <Reveal>
              <Card padding="lg" className="h-full">
                <p className="text-xs font-semibold tracking-widest text-fg-subtle uppercase">
                  The problem
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-fg">
                  {service.problem.heading}
                </h2>
                <p className="mt-4 leading-relaxed text-fg-muted">
                  {service.problem.body}
                </p>
                <ul className="mt-7 space-y-3 border-t border-white/[0.07] pt-6">
                  {service.problem.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm text-fg-muted"
                    >
                      <Minus
                        className="mt-0.5 size-4 shrink-0 text-fg-subtle"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>

            <Reveal delay={0.08}>
              <Card
                padding="lg"
                className="gradient-border relative h-full overflow-hidden bg-[linear-gradient(150deg,var(--color-surface-2),var(--color-ink)_70%)]"
              >
                <GlowOrb
                  color="purple"
                  size="md"
                  className="-top-20 -right-16 opacity-60"
                />
                <div className="relative">
                  <p className="text-xs font-semibold tracking-widest text-purple-300 uppercase">
                    The approach
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold text-fg">
                    {service.solution.heading}
                  </h2>
                  <p className="mt-4 leading-relaxed text-fg-muted">
                    {service.solution.body}
                  </p>

                  <div className="mt-7 border-t border-white/[0.07] pt-6">
                    <p className="text-sm font-medium text-fg">
                      What I help with
                    </p>
                    <ul className="mt-4 grid gap-2.5">
                      {service.helpsWith.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm text-fg-muted"
                        >
                          <span
                            className="mt-1.5 size-1 shrink-0 rounded-full bg-gradient-to-r from-purple-400 to-blue-400"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Deliverables */}
      <Section className="relative isolate overflow-hidden border-t border-white/[0.06] bg-ink-deep/50">
        <Container size="wide">
          <SectionHeading
            eyebrow="Deliverables"
            title="What you actually receive"
            description="Concrete artefacts, not a summary slide. Everything below is documented and handed over."
          />

          <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.deliverables.map((deliverable, index) => (
              <RevealItem key={deliverable} className="h-full">
                <Card interactive padding="md" className="group h-full">
                  <CardGlow />
                  <div className="relative flex items-start gap-4">
                    <span className="font-mono text-xs text-fg-subtle transition-colors duration-300 group-hover:text-purple-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-relaxed text-fg">
                      {deliverable}
                    </p>
                  </div>
                </Card>
              </RevealItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Process */}
      <Section className="border-t border-white/[0.06]">
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <SectionHeading
                eyebrow="Process"
                title="How the work runs"
                description={`The ${service.title.toLowerCase()} engagement in five phases.`}
              />
            </div>
            <ServiceProcess steps={service.process} />
          </div>
        </Container>
      </Section>

      {/* Outcomes & audience */}
      <Section className="relative isolate overflow-hidden border-t border-white/[0.06]">
        <GlowOrb
          color="blue"
          size="lg"
          className="top-1/3 -right-40 -z-10 opacity-40"
        />
        <Container size="wide">
          <SectionHeading
            eyebrow="Outcomes"
            title="What to expect"
            description="Results depend on your baseline, so these are the changes the work is designed to produce rather than a promised percentage."
          />

          <Stagger className="mt-14 grid gap-5 lg:grid-cols-3">
            {service.outcomes.map((outcome) => (
              <RevealItem key={outcome.label} className="h-full">
                <Card interactive padding="lg" className="group h-full">
                  <CardGlow />
                  <div className="relative">
                    <h3 className="text-lg font-semibold text-fg">
                      {outcome.label}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-fg-muted">
                      {outcome.description}
                    </p>
                  </div>
                </Card>
              </RevealItem>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <div className="mt-16 grid gap-8 rounded-card border border-white/[0.07] bg-surface/60 p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
              <div>
                <h3 className="text-xl font-semibold text-fg">
                  Who this is for
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                  This engagement fits best when at least two of these describe
                  your situation.
                </p>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {service.audience.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-fg-muted"
                  >
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10">
                      <Check
                        className="size-3 text-purple-300"
                        aria-hidden="true"
                      />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="border-t border-white/[0.06]">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
          />
          <Reveal delay={0.1}>
            <FAQ items={service.faq} className="mt-10" />
          </Reveal>
        </Container>
      </Section>

      {/* Related services */}
      <Section spacing="tight" className="border-t border-white/[0.06]">
        <Container size="wide">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-2xl font-semibold text-fg">
              Other <GradientText>services</GradientText>
            </h2>
            <Link
              href="/services"
              className="group flex shrink-0 items-center gap-1.5 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
            >
              View all
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>

          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((other) => (
              <RevealItem key={other.slug} className="h-full">
                <ServiceCard service={other} variant="compact" />
              </RevealItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <ConsultationCTA
        title={
          <>
            Start with <GradientText>{service.title}</GradientText>
          </>
        }
        description="Bring your current setup and the outcome you need. The first call is about deciding whether this engagement is the right one — not about selling you into it."
      />
    </>
  );
}
