import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { GridBackdrop } from "@/components/animations/GridBackdrop";
import { GlowOrb } from "@/components/animations/GlowOrb";

export const marketingProcess = [
  {
    step: "01",
    title: "Understand",
    description:
      "Know your business before we build anything. We understand your goals, customers, offer, market, and current marketing.",
  },
  {
    step: "02",
    title: "Find the Bottleneck",
    description:
      "Fix what is holding growth back. We find the biggest gaps in your offer, marketing, funnel, conversion, or follow-up.",
  },
  {
    step: "03",
    title: "Build the Growth Plan",
    description:
      "Focus on what can create the biggest result. We create a clear strategy, offer, funnel, and growth plan based on your business.",
  },
  {
    step: "04",
    title: "Launch & Automate",
    description:
      "Put the system to work. We launch the campaigns, content, funnels, and automation needed to attract and convert customers.",
  },
  {
    step: "05",
    title: "Measure & Scale",
    description:
      "Keep what works. Fix what doesn't. We track the numbers, improve the weakest part, and scale what produces results.",
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
              title="From Business Problem to Measurable Growth"
              description="A simple five-step process designed to find what is holding your business back, build what matters, and improve what works."
            />
          </div>

          <ServiceProcess steps={marketingProcess} />
        </div>
      </Container>
    </Section>
  );
}
