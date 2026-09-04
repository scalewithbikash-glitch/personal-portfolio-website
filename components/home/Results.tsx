import { Clock, Filter, LineChart, Repeat } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardGlow } from "@/components/ui/Card";
import { Stagger, RevealItem, Reveal } from "@/components/animations/Reveal";
import { GlowOrb } from "@/components/animations/GlowOrb";

const outcomes = [
  {
    icon: Clock,
    title: "Hours back in the week",
    description:
      "Lead routing, follow-up and reporting stop consuming the time your team should spend on positioning, creative and analysis.",
  },
  {
    icon: Filter,
    title: "Better-fit conversations",
    description:
      "Qualification filters early, so the calls that reach your calendar are the ones worth preparing for.",
  },
  {
    icon: LineChart,
    title: "Numbers everyone trusts",
    description:
      "One set of definitions and one source of truth, so the monthly review is about decisions rather than whose figure is right.",
  },
  {
    icon: Repeat,
    title: "Growth that repeats",
    description:
      "A documented system that produces enquiries every week, instead of a campaign spike followed by a quiet quarter.",
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
          title="What changes when the system works"
          description="Every business starts from a different baseline, so I will not promise you a percentage before seeing your data. These are the changes clients consistently ask for — and the ones the work is designed to produce."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2">
          {outcomes.map((outcome) => {
            const Icon = outcome.icon;
            return (
              <RevealItem key={outcome.title} className="h-full">
                <Card interactive padding="lg" className="group h-full">
                  <CardGlow />
                  <div className="relative flex gap-5">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-blue-300 transition-all duration-400 group-hover:border-blue-500/40 group-hover:bg-blue-500/12">
                      <Icon
                        className="size-5 transition-transform duration-400 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-fg">
                        {outcome.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-fg-muted">
                        {outcome.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </RevealItem>
            );
          })}
        </Stagger>

        <Reveal delay={0.1}>
          <figure className="mx-auto mt-14 max-w-3xl text-center">
            <blockquote className="text-xl leading-relaxed font-medium text-balance text-fg sm:text-2xl">
              &ldquo;The question is never whether AI can do the task. It is
              whether the task was worth doing.&rdquo;
            </blockquote>
            <figcaption className="mt-5 text-sm text-fg-subtle">
              Bikash Gurung — the principle behind every engagement
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </Section>
  );
}
