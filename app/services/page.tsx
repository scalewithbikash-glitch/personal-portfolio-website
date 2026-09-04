import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GradientText } from "@/components/ui/GradientText";
import { PageHero } from "@/components/layout/PageHero";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { FAQ } from "@/components/services/FAQ";
import { Stagger, RevealItem, Reveal } from "@/components/animations/Reveal";
import { GridBackdrop } from "@/components/animations/GridBackdrop";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { marketingProcess } from "@/components/home/Process";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllServices } from "@/lib/content/services";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "AI-Powered Marketing Services",
  description:
    "Practical AI and digital marketing systems designed to help businesses attract, convert, and retain customers — strategy, automation, content, lead generation and analytics.",
  path: "/services",
});

const engagementFaq = [
  {
    question: "How do engagements usually start?",
    answer:
      "With a 30-minute call to understand the problem, followed by a written proposal with scope, timeline and price. Most clients start with one defined piece of work rather than a retainer, which keeps the risk low on both sides.",
  },
  {
    question: "Do you work with businesses outside Nepal?",
    answer:
      "Yes. Most of my work is remote and spans several time zones. Calls are scheduled to overlap with your working hours, and everything substantive is documented in writing so nothing depends on catching me live.",
  },
  {
    question: "What size of business do you work with?",
    answer:
      "Typically businesses with between two and fifty people, where marketing is either one person's job or split across a small team. That is where a system makes the biggest difference relative to headcount.",
  },
  {
    question: "Can you work alongside our existing agency?",
    answer:
      "Often, yes. I frequently work on strategy, measurement or automation while an agency handles execution. It works best when the division of responsibility is written down at the start.",
  },
  {
    question: "What does an engagement cost?",
    answer:
      "It depends on scope and duration, and I quote after the first call rather than from a price list. If your budget is tight, say so early — it usually changes what I recommend rather than whether I can help.",
  },
];

export default async function ServicesPage() {
  const services = await getAllServices();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "AI-Powered Marketing Services",
          itemListElement: services.map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: service.title,
            description: service.shortDescription,
            url: `${siteConfig.url}/services/${service.slug}`,
          })),
        }}
      />

      <PageHero
        eyebrow="Services"
        title={
          <>
            <GradientText animated>AI-powered</GradientText> marketing services
          </>
        }
        description="Practical AI and digital marketing systems designed to help businesses attract, convert, and retain customers."
      />

      <Section spacing="tight">
        <Container size="wide">
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <RevealItem key={service.slug} className="h-full">
                <ServiceCard service={service} />
              </RevealItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Process */}
      <Section className="relative isolate overflow-hidden border-y border-white/[0.06] bg-ink-deep/60">
        <GridBackdrop className="-z-10 opacity-60" />
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <SectionHeading
                eyebrow="The process"
                title="How every engagement runs"
                description="The same five phases apply whether the work is a three-week strategy sprint or an ongoing retainer. What changes is depth, not sequence."
              />
            </div>
            <ServiceProcess steps={marketingProcess} />
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Questions"
            title="Working together"
            description="The questions that come up most often before a first call."
          />
          <Reveal delay={0.1}>
            <FAQ items={engagementFaq} className="mt-10" />
          </Reveal>
        </Container>
      </Section>

      <ConsultationCTA
        description="Not sure which service fits? Describe the problem and I will tell you which of these is the right starting point — or whether you need something else entirely."
      />
    </>
  );
}
