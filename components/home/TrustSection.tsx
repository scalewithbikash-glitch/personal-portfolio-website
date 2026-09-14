import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardGlow } from "@/components/ui/Card";
import { Stagger, RevealItem } from "@/components/animations/Reveal";

const pillars = [
  {
    number: "01",
    title: "Find the Opportunity",
    description:
      "First, we find what's stopping your business from growing — your offer, marketing, funnel, or follow-up.",
  },
  {
    number: "02",
    title: "Build What Matters",
    description:
      "We focus on the few things that can create the biggest impact, instead of wasting time on everything.",
  },
  {
    number: "03",
    title: "Use AI to Move Faster",
    description:
      "AI and automation handle repetitive work, so your marketing becomes faster, smarter, and more efficient.",
  },
  {
    number: "04",
    title: "Measure and Improve",
    description:
      "We track what works, cut what doesn't, and keep improving the system to create better results over time.",
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
              From Marketing Chaos to Predictable Growth
            </>
          }
          description="I don't just run campaigns. I find what is holding your growth back, fix it, and build a system that brings in more customers."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <RevealItem key={pillar.title} className="h-full">
              <Card interactive padding="md" className="group h-full">
                <CardGlow />
                <div className="relative">
                  <span className="font-mono text-xs text-fg-subtle">
                    {pillar.number}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-fg">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-fg-muted">
                    {pillar.description}
                  </p>
                </div>
              </Card>
            </RevealItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
