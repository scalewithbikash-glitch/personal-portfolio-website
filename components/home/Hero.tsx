import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { GradientText } from "@/components/ui/GradientText";
import { Stagger, RevealItem } from "@/components/animations/Reveal";
import { AnimatedMeshGradient } from "@/components/animations/AnimatedMeshGradient";
import { FloatingParticles } from "@/components/animations/FloatingParticles";
import { GridBackdrop } from "@/components/animations/GridBackdrop";
import { NeuralConstellation } from "@/components/animations/NeuralConstellation";
import { ChannelMarquee } from "@/components/home/ChannelMarquee";
import { primaryCta, siteConfig } from "@/lib/site";

const capabilities = [
  "AI marketing strategy",
  "Automation systems",
  "Lead generation",
  "Analytics you trust",
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24">
      <AnimatedMeshGradient intensity="strong" />
      <GridBackdrop className="-z-10 opacity-70" />
      <FloatingParticles className="-z-10" count={24} />

      <Container size="wide">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 xl:gap-16">
          {/* Copy */}
          <Stagger className="max-w-2xl" stagger={0.09}>
            <RevealItem>
              <Badge variant="brand" dot>
                {siteConfig.role}
              </Badge>
            </RevealItem>

            <RevealItem>
              <h1 className="mt-7 text-display-lg font-semibold text-fg">
                Scale your business with{" "}
                <GradientText animated>AI-powered marketing</GradientText>
              </h1>
            </RevealItem>

            <RevealItem>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted sm:text-xl">
                I help ambitious businesses leverage AI, automation, and digital
                marketing to build growth systems that keep working after the
                campaign ends.
              </p>
            </RevealItem>

            <RevealItem>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href={primaryCta.href} size="lg">
                  {primaryCta.label}
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Button>
                <Button href="/services" size="lg" variant="secondary">
                  Explore Services
                </Button>
              </div>
            </RevealItem>

            <RevealItem>
              <div className="mt-11 border-t border-white/[0.07] pt-7">
                <p className="flex items-center gap-2 text-xs font-medium tracking-widest text-fg-subtle uppercase">
                  <Sparkles className="size-3.5 text-purple-400" aria-hidden="true" />
                  What I work on
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2.5">
                  {capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="flex items-center gap-2 text-sm text-fg-muted"
                    >
                      <span
                        className="size-1 rounded-full bg-gradient-to-r from-purple-400 to-blue-400"
                        aria-hidden="true"
                      />
                      {capability}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 flex items-center gap-2 text-sm text-fg-subtle">
                  <MapPin className="size-3.5" aria-hidden="true" />
                  Based in {siteConfig.location.city}, Nepal — working with
                  clients worldwide
                </p>
              </div>
            </RevealItem>
          </Stagger>

          {/* Visual */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <NeuralConstellation />
          </div>
        </div>
      </Container>

      {/* Sits outside the Container so the track runs edge to edge */}
      <ChannelMarquee className="mt-16 sm:mt-20" />
    </section>
  );
}
