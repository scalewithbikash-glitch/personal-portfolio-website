import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/animations/Reveal";
import { PortraitPanel } from "@/components/about/PortraitPanel";

const expertise = [
  "AI Marketing Strategy",
  "Customer Acquisition",
  "Offer and Funnel Building",
  "Content and social media",
  "AI and Marketing Automation",
  "Conversion and Analytics",
];

export function AboutPreview() {
  return (
    <Section className="overflow-hidden">
      <Container size="wide">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right" className="order-2 lg:order-1">
            <PortraitPanel imageSrc="/images/bikash-headshot.png" />
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <Badge variant="brand">Meet Bikash</Badge>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="mt-5 text-display-sm font-semibold text-fg">
                I help businesses turn marketing into predictable growth
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-fg-muted">
                <p>
                  I am Bikash Gurung, an AI digital marketing expert and
                  consultant focused on helping businesses attract more
                  customers, convert more leads, and grow with less wasted
                  time and money.
                </p>
                <p>
                  I don&apos;t believe in using AI just because it&apos;s
                  new. I find what&apos;s holding your growth back, build the
                  right system, and use AI and automation where they create
                  real results. The goal is simple: better marketing, more
                  customers, and predictable growth.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {expertise.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-fg-muted"
                  >
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10">
                      <Check
                        className="size-3 text-purple-300"
                        aria-hidden="true"
                      />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.24}>
              <Button href="/about" variant="secondary" className="mt-9">
                More About Me
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
