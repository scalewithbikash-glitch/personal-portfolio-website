import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GradientText } from "@/components/ui/GradientText";
import { Card, CardGlow } from "@/components/ui/Card";
import { Stagger, RevealItem, Reveal } from "@/components/animations/Reveal";
import { GlowOrb } from "@/components/animations/GlowOrb";

const outcomes = [
  {
    title: "More Customers",
    description:
      "Turn your marketing into a customer pipeline. I'll help you attract the right prospects, capture their interest, and move more of them toward becoming customers.",
  },
  {
    title: "Less Wasted Time",
    description:
      "Spend less time chasing and managing. I'll identify repetitive marketing tasks that can be streamlined or automated — from lead follow-up to reporting — so you can focus on running your business.",
  },
  {
    title: "Know What Works",
    description:
      "Know where your time and money are going. You'll have a clearer view of your leads, conversions, and marketing performance, so you can make decisions based on what's actually happening.",
  },
  {
    title: "Growth You Can Repeat",
    description:
      "Stop starting from zero every month. Together, we'll turn what works into a repeatable system that can be improved as your business grows.",
  },
];

export function Results() {
  return (
    <Section className="relative isolate overflow-hidden">
      <GlowOrb
        color="mixed"
        size="lg"
        className="-bottom-40 -left-40 -z-10 opacity-40"
      />

      <Container size="wide">
        <SectionHeading
          align="center"
          eyebrow="Outcomes"
          title="A Clear Path to More Customers"
          description="More Customers. Less Guesswork. Better Growth. Marketing should do more than keep you busy. It should help you attract customers, improve conversions, and grow with confidence."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2">
          {outcomes.map((outcome) => (
            <RevealItem key={outcome.title} className="h-full">
              <Card interactive padding="lg" className="group h-full">
                <CardGlow />
                <div className="relative">
                  <h3 className="text-lg font-semibold text-fg">
                    {outcome.title}
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
          <figure className="relative mx-auto mt-16 max-w-3xl text-center">
            <Quote
              className="mx-auto size-9 text-purple-400/60"
              aria-hidden="true"
            />
            <blockquote className="mt-5 text-2xl leading-snug font-semibold text-balance text-fg sm:text-3xl lg:text-[2.75rem] lg:leading-[1.15]">
              AI isn&apos;t valuable because it can do more. It is valuable
              when it helps your business{" "}
              <GradientText animated>achieve more</GradientText>.
            </blockquote>
            <figcaption className="mt-6 text-sm text-fg-subtle">
              The principle behind every engagement
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </Section>
  );
}
