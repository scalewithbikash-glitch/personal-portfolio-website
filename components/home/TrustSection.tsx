import { BrainCircuit, Database, Workflow, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardGlow } from "@/components/ui/Card";
import { Stagger, RevealItem } from "@/components/animations/Reveal";

const pillars = [
  {
    icon: BrainCircuit,
    title: "AI Strategy",
    description:
      "Decide where AI creates real leverage in your marketing, and where a simpler fix will do more.",
  },
  {
    icon: Database,
    title: "Data-Driven Marketing",
    description:
      "Measurement your team agrees on, so budget decisions rest on evidence instead of instinct.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description:
      "Reliable workflows for the repetitive work — lead routing, follow-up, reporting, distribution.",
  },
  {
    icon: TrendingUp,
    title: "Growth Systems",
    description:
      "Acquisition and conversion built as a system that compounds, not a campaign that spikes.",
  },
];

export function TrustSection() {
  return (
    <Section>
      <Container size="wide">
        <SectionHeading
          eyebrow="How I work"
          title={
            <>
              Turning AI into measurable business growth
            </>
          }
          description="Four disciplines that sit behind every engagement. They are deliberately ordered — strategy decides what to measure, measurement decides what to automate, and automation is what makes growth repeatable."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <RevealItem key={pillar.title} className="h-full">
                <Card interactive padding="md" className="group h-full">
                  <CardGlow />
                  <div className="relative">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-purple-300 transition-all duration-400 group-hover:border-purple-500/40 group-hover:bg-purple-500/12 group-hover:text-purple-200">
                      <Icon
                        className="size-5 transition-transform duration-400 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-fg">
                      {pillar.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-fg-muted">
                      {pillar.description}
                    </p>
                  </div>
                </Card>
              </RevealItem>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}
