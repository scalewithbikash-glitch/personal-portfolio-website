import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { GradientText } from "@/components/ui/GradientText";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { Reveal } from "@/components/animations/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch to discuss AI marketing strategy, automation, or your next growth system. Based in Pokhara, Nepal, working with clients worldwide.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <PageHero
        eyebrow="Get in touch"
        title={
          <>
            Let&apos;s build your next{" "}
            <GradientText animated>growth system</GradientText>
          </>
        }
        description="Have a marketing challenge, growth opportunity, or AI idea? Let's talk."
      />

      <Section spacing="tight" className="pb-24 sm:pb-32">
        <Container size="wide">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
            <Reveal>
              <Card padding="lg" className="sm:p-9">
                <div className="mb-8 flex items-center gap-3">
                  <Badge variant="brand">Book a consultation</Badge>
                </div>
                <ContactForm />
              </Card>
            </Reveal>

            <Reveal delay={0.1}>
              <ContactInfo />
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
