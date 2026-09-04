import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { GridBackdrop } from "@/components/animations/GridBackdrop";
import { GlowOrb } from "@/components/animations/GlowOrb";

export const marketingProcess = [
  {
    step: "01",
    title: "Discover",
    description:
      "Understand business goals, customers, positioning, and the marketing systems already in place.",
  },
  {
    step: "02",
    title: "Diagnose",
    description:
      "Identify the bottlenecks, the opportunities, and the work that is genuinely worth automating.",
  },
  {
    step: "03",
    title: "Strategize",
    description:
      "Build a practical AI-powered growth strategy with sequencing, owners and a measurement model.",
  },
  {
    step: "04",
    title: "Implement",
    description:
      "Deploy the workflows, campaigns, content systems and automation the strategy calls for.",
  },
  {
    step: "05",
    title: "Optimize",
    description:
      "Measure against the plan, improve the weakest step each cycle, and document what worked.",
  },
];

export function Process() {
  return (
    <Section className="relative isolate overflow-hidden border-y border-white/[0.06] bg-ink-deep/60">
      <GridBackdrop className="-z-10 opacity-60" />
      <GlowOrb
        color="purple"
        size="lg"
        className="top-1/4 -left-48 -z-10 opacity-40"
      />

      <Container size="wide">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow="The process"
              title="How an engagement runs"
              description="The same five phases apply whether the work is a three-week strategy sprint or an ongoing retainer. What changes is depth, not sequence."
            />
          </div>

          <ServiceProcess steps={marketingProcess} />
        </div>
      </Container>
    </Section>
  );
}
