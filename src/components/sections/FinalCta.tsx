import { FinalCtaShapes } from "@/components/sections/FinalCtaShapes";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { finalCta } from "@/data/final-cta";
import { sectionIds } from "@/data/navigation";

export function FinalCta() {
  return (
    <Section
      tone="yellow-light"
      id={sectionIds.getStarted}
      aria-labelledby="final-cta-title"
      // Clips the shapes at the section edges: no horizontal scroll.
      className="relative overflow-hidden"
    >
      {/* Desktop only, as in the design (the mobile frame has no shapes).
          Kept at design size and centered, so they stay around the content. */}
      <FinalCtaShapes className="absolute top-0 left-1/2 hidden max-w-none -translate-x-1/2 text-peach lg:block" />

      {/* relative: paints the content above the shapes. */}
      <Container className="relative flex flex-col items-center text-center">
        <AvatarStack avatars={finalCta.avatars} size={40} />
        <Heading as="h2" id="final-cta-title" className="mt-8">
          {finalCta.title}
        </Heading>
        <p className="mt-4 text-subtitle-1 text-muted">
          {finalCta.description}
        </p>
        <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button href={finalCta.primaryCta.href}>
            {finalCta.primaryCta.label}
          </Button>
          <Button href={finalCta.secondaryCta.href} variant="secondary">
            {finalCta.secondaryCta.label}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
