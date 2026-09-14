import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, RevealItem } from "@/components/animations/Reveal";
import { Divider } from "@/components/ui/Divider";

const reasons = [
  {
    number: "01",
    title: "Results Before Tools",
    description:
      "We start with your business goal — not the latest AI tool. Every recommendation is tied to a real business outcome, so you're investing your time and money where it can have the biggest impact.",
  },
  {
    number: "02",
    title: "Focus on What Matters",
    description:
      "No unnecessary work. No complicated strategies. I focus on the few opportunities most likely to move your business forward — and ignore the rest.",
  },
  {
    number: "03",
    title: "One Expert, Directly Involved",
    description:
      "You work directly with me — not a rotating agency team. From strategy to implementation, I stay involved in the work, make the decisions with you, and handle the technical and marketing details so you don't have to coordinate multiple people.",
  },
  {
    number: "04",
    title: "Measure What Matters",
    description:
      "No guessing. No vanity metrics. We track the numbers that actually matter to your business — leads, customers, conversion, and growth — so you know what's working and where to improve.",
  },
  {
    number: "05",
    title: "Always Improve",
    description:
      "Build it. Measure it. Make it better. What works gets optimized. What doesn't gets fixed. Your growth system keeps improving as we learn what works best for your business.",
  },
];

export function WhyWorkWithMe() {
  return (
    <Section>
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow="Why work with me"
              title="Because Your Growth Should Be Measurable."
              description="You don't need more marketing activity. You need someone who can look at the bigger picture, find what's holding your business back, and help you build a system that actually moves the numbers."
            />
          </div>

          <Stagger className="flex flex-col">
            {reasons.map((reason, index) => (
              <RevealItem key={reason.number}>
                <div className="group py-7 first:pt-0">
                  <div className="flex items-baseline gap-5 sm:gap-7">
                    <span className="font-mono text-sm text-fg-subtle transition-colors duration-300 group-hover:text-purple-300">
                      {reason.number}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-fg sm:text-xl">
                        {reason.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-fg-muted sm:text-base">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
                {index < reasons.length - 1 ? <Divider /> : null}
              </RevealItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </Section>
  );
}
