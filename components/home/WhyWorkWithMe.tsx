import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, RevealItem } from "@/components/animations/Reveal";
import { Divider } from "@/components/ui/Divider";

const reasons = [
  {
    number: "01",
    title: "Strategy before tools",
    description:
      "Every engagement starts with what the business needs, not with a software shortlist. Sometimes the recommendation is that you do not need the tool at all.",
  },
  {
    number: "02",
    title: "You keep the system",
    description:
      "Workflows are documented, definitions written down, and your team trained. Nothing I build should require me to keep it running.",
  },
  {
    number: "03",
    title: "Honest measurement",
    description:
      "I report what the data supports, including when a change did not work. Attribution models state their assumptions instead of implying precision they do not have.",
  },
  {
    number: "04",
    title: "Small, sequenced changes",
    description:
      "One change per cycle, measured against a stable baseline. It is slower to start and much faster to knowing what actually moved the number.",
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
              title="A consultant you can hold to a number"
              description="There is no shortage of people willing to sell AI marketing. These are the commitments that shape how I work."
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
