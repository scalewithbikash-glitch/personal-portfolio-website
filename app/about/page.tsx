import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Compass,
  Lightbulb,
  MousePointerClick,
  PenLine,
  Search,
  Target,
  Workflow,
} from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardGlow } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { Divider } from "@/components/ui/Divider";
import { Reveal, Stagger, RevealItem } from "@/components/animations/Reveal";
import { GlowOrb } from "@/components/animations/GlowOrb";
import { PortraitPanel } from "@/components/about/PortraitPanel";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { primaryCta, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "About Bikash Gurung",
  description:
    "Bikash Gurung is an AI digital marketing expert and consultant in Pokhara, Nepal, helping businesses build practical, measurable AI-powered growth systems.",
  path: "/about",
});

const expertise = [
  {
    icon: BrainCircuit,
    title: "AI Marketing",
    description:
      "Applying AI where it compresses time or improves a decision, and saying so when it does not.",
  },
  {
    icon: Compass,
    title: "Digital Marketing Strategy",
    description:
      "Positioning, channel priorities and sequencing built from your data rather than channel fashion.",
  },
  {
    icon: Workflow,
    title: "Marketing Automation",
    description:
      "Monitored workflows for lead routing, follow-up, reporting and distribution.",
  },
  {
    icon: PenLine,
    title: "AI Content Systems",
    description:
      "Production processes that hold quality as volume increases, with a human owning the argument.",
  },
  {
    icon: Target,
    title: "Lead Generation",
    description:
      "Offers, capture paths and qualification that produce conversations worth having.",
  },
  {
    icon: MousePointerClick,
    title: "Conversion Optimization",
    description:
      "Evidence-led improvements to the traffic you already have, prioritised by impact.",
  },
  {
    icon: Search,
    title: "Growth Strategy",
    description:
      "Acquisition and retention treated as one system with shared measurement.",
  },
  {
    icon: BarChart3,
    title: "Marketing Analytics",
    description:
      "Definitions everyone agrees on, tracking that matches them, and reports people read.",
  },
];

const values = [
  {
    title: "Strategy before tools",
    description:
      "The tool is the last decision, not the first. Deciding what problem to solve eliminates most of the shortlist on its own.",
  },
  {
    title: "Data over assumptions",
    description:
      "If a claim cannot be checked against your numbers, it stays a hypothesis — including my own.",
  },
  {
    title: "Automation with purpose",
    description:
      "Automating a step that should not exist is more expensive than the manual work it replaced.",
  },
  {
    title: "Customer-first thinking",
    description:
      "Marketing that works starts from what someone is actually trying to do, not from what we want to sell them.",
  },
  {
    title: "Continuous experimentation",
    description:
      "One change per cycle, measured against a stable baseline, documented so the next cycle is faster.",
  },
];

const approach = [
  {
    step: "Small scope first",
    description:
      "Most engagements start with a defined piece of work rather than a long retainer. It is a lower-risk way for both of us to find out whether this is a good fit.",
  },
  {
    step: "Written over verbal",
    description:
      "Findings, definitions and plans are documented. A conversation is easy to misremember; a measurement plan is not.",
  },
  {
    step: "Your team stays capable",
    description:
      "Every workflow ships with a runbook and a training session. If you need me to keep it running, I built it wrong.",
  },
  {
    step: "Honest about limits",
    description:
      "I say when something is outside what I do well, when data is too thin to support a conclusion, and when a change did not work.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <PageHero
        eyebrow="About"
        title={
          <>
            Building smarter growth with <GradientText animated>AI</GradientText>
          </>
        }
        description="I work with businesses that want marketing to behave like a system — measurable, documented, and capable of running without heroics."
      />

      {/* Introduction */}
      <Section spacing="tight">
        <Container size="wide">
          <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal direction="right">
              <PortraitPanel />
            </Reveal>

            <Reveal delay={0.08}>
              <div className="space-y-5 text-base leading-relaxed text-fg-muted lg:text-lg">
                <h2 className="text-display-sm font-semibold text-fg">
                  Hello — I&apos;m Bikash Gurung
                </h2>
                <p>
                  I&apos;m an AI digital marketing expert and consultant based in{" "}
                  {siteConfig.location.city}, Nepal, working with clients across
                  time zones. My work sits where marketing strategy, automation
                  and measurement meet — the parts of a business that decide
                  whether growth is repeatable or accidental.
                </p>
                <p>
                  Most of what I do is less exciting than the phrase &ldquo;AI
                  marketing&rdquo; suggests. It is finding where a funnel leaks,
                  fixing tracking nobody trusts, removing manual steps that
                  should never have existed, and writing down the definitions a
                  team has been arguing about for a year. AI enters where it
                  genuinely helps: classification at volume, research synthesis,
                  drafting, personalisation, and the repetitive work that
                  consumes a team&apos;s week.
                </p>
                <p>
                  I came to this through hands-on digital marketing — running
                  campaigns, writing content, watching analytics contradict
                  itself — which is why I am sceptical of tools that promise to
                  replace judgement. The businesses getting real value from AI
                  are the ones that decided what problem it should solve first.
                </p>
                <p>
                  If you are weighing an AI investment, deciding which channel
                  deserves budget, or trying to work out why marketing activity
                  is not showing up in revenue, that is the kind of problem I
                  like.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Mission */}
      <Section className="relative isolate overflow-hidden border-y border-white/[0.06] bg-ink-deep/60">
        <GlowOrb
          color="mixed"
          size="lg"
          className="top-0 left-1/2 -z-10 -translate-x-1/2 opacity-50"
        />
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold tracking-widest text-purple-300 uppercase">
                Mission
              </p>
              <p className="mt-7 text-2xl leading-snug font-medium text-balance text-fg sm:text-3xl lg:text-4xl">
                Make AI-powered marketing{" "}
                <GradientText>practical, measurable</GradientText> and
                accessible to ambitious businesses.
              </p>
              <p className="mt-7 text-base leading-relaxed text-fg-muted">
                Not every business needs a machine learning model. Every
                business does need to know which activity produces customers,
                and to stop spending hours on work a system should handle.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Expertise */}
      <Section>
        <Container size="wide">
          <SectionHeading
            eyebrow="Expertise"
            title="What I work on"
            description="Eight areas that come up in almost every engagement. Most projects touch three or four of them."
          />

          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {expertise.map((item) => {
              const Icon = item.icon;
              return (
                <RevealItem key={item.title} className="h-full">
                  <Card interactive padding="md" className="group h-full">
                    <CardGlow />
                    <div className="relative">
                      <span className="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-purple-300 transition-all duration-400 group-hover:border-purple-500/40 group-hover:bg-purple-500/12">
                        <Icon
                          className="size-4 transition-transform duration-400 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </span>
                      <h3 className="mt-5 text-base font-semibold text-fg">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                </RevealItem>
              );
            })}
          </Stagger>
        </Container>
      </Section>

      {/* Approach */}
      <Section className="border-t border-white/[0.06]">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <SectionHeading
                eyebrow="How I work"
                title="What working together looks like"
                description="Four things that shape every engagement, so you know what to expect before the first call."
              />
            </div>

            <Stagger className="flex flex-col">
              {approach.map((item, index) => (
                <RevealItem key={item.step}>
                  <div className="py-7 first:pt-0">
                    <div className="flex items-start gap-5">
                      <span className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                        <Lightbulb
                          className="size-4 text-blue-300"
                          aria-hidden="true"
                        />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-fg">
                          {item.step}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-fg-muted sm:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  {index < approach.length - 1 ? <Divider /> : null}
                </RevealItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section className="relative isolate overflow-hidden border-t border-white/[0.06] bg-ink-deep/50">
        <Container size="wide">
          <SectionHeading
            align="center"
            eyebrow="Values"
            title="Principles I do not trade away"
          />

          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <RevealItem key={value.title} className="h-full">
                <Card interactive padding="lg" className="group h-full">
                  <CardGlow />
                  <div className="relative">
                    <span className="font-mono text-xs text-fg-subtle">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-fg">
                      {value.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-fg-muted">
                      {value.description}
                    </p>
                  </div>
                </Card>
              </RevealItem>
            ))}

            <RevealItem className="h-full">
              <Card
                padding="lg"
                className="flex h-full flex-col justify-center bg-[linear-gradient(150deg,var(--color-surface-2),var(--color-ink))]"
              >
                <h3 className="text-lg font-semibold text-fg">
                  Ready to start?
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-fg-muted">
                  Tell me what you are working on and I will tell you honestly
                  whether I can help.
                </p>
                <Button href={primaryCta.href} className="mt-6 self-start">
                  Let&apos;s work together
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Button>
              </Card>
            </RevealItem>
          </Stagger>
        </Container>
      </Section>

      <ConsultationCTA
        title={
          <>
            Let&apos;s <GradientText>work together</GradientText>
          </>
        }
        description="Bring a marketing problem, a growth target, or an AI idea you are not sure about. A 30-minute call is usually enough to tell whether there is something worth building."
      />
    </>
  );
}
