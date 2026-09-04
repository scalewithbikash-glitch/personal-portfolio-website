import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Stagger, RevealItem } from "@/components/animations/Reveal";
import { GlowOrb } from "@/components/animations/GlowOrb";
import { getAllServices } from "@/lib/content/services";

export async function ServicesPreview() {
  const services = await getAllServices();
  const featured = services.slice(0, 6);

  return (
    <Section className="relative isolate overflow-hidden">
      <GlowOrb
        color="blue"
        size="lg"
        className="-top-32 -right-40 -z-10 opacity-40"
      />

      <Container size="wide">
        <SectionHeading
          eyebrow="Services"
          title="AI-powered marketing services"
          description="Practical AI and digital marketing systems designed to help businesses attract, convert, and retain customers."
          action={
            <Button href="/services" variant="secondary">
              View all services
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Button>
          }
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service) => (
            <RevealItem key={service.slug} className="h-full">
              <ServiceCard service={service} />
            </RevealItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
