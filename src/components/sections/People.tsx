import { getImageProps } from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Overline } from "@/components/ui/Overline";
import { Section } from "@/components/ui/Section";
import { sectionIds } from "@/data/navigation";
import { peopleSection } from "@/data/people";

const { collage } = peopleSection;

/*
 * Art direction: the desktop and mobile collages are different compositions,
 * so <picture> picks one by viewport. The desktop one (535px at 1x) is used
 * from 768px, where it fits; below that, the mobile one (372px at 1x).
 * `sizes` = rendered width: 535fr of the two columns on lg, the image max
 * width when stacked, the full container width on small phones.
 */
const { props: desktopImage } = getImageProps({
  ...collage.desktop,
  alt: collage.alt,
  sizes: "(min-width: 80rem) 535px, (min-width: 64rem) 42vw, 535px",
});
const { props: mobileImage } = getImageProps({
  ...collage.mobile,
  alt: collage.alt,
  sizes: "(min-width: 25.75rem) 372px, calc(100vw - 2.5rem)",
});

export function People() {
  return (
    <Section tone="cream" id={sectionIds.people} aria-labelledby="people-title">
      {/* 525fr/535fr with a 60px gap = the text and collage columns of the 1280px frame. */}
      <Container className="grid gap-y-6 lg:grid-cols-[525fr_535fr] lg:items-center lg:gap-x-15">
        <div>
          <Overline>{peopleSection.overline}</Overline>
          <Heading as="h2" variant="h3" id="people-title" className="mt-2">
            {peopleSection.title}
          </Heading>
          <p className="mt-6 text-subtitle-1 text-muted lg:mt-8">
            {peopleSection.description}
          </p>
          <Button
            href={peopleSection.cta.href}
            variant="secondary"
            className="mt-6 lg:mt-8"
          >
            {peopleSection.cta.label}
          </Button>
        </div>

        {/* The exports include the photos' soft shadows: no CSS shadow or radius. */}
        <picture className="mx-auto block w-full max-w-93 md:max-w-133.75">
          <source
            media="(min-width: 48rem)"
            srcSet={desktopImage.srcSet}
            sizes={desktopImage.sizes}
            width={desktopImage.width}
            height={desktopImage.height}
          />
          <img {...mobileImage} alt={collage.alt} className="h-auto w-full" />
        </picture>
      </Container>
    </Section>
  );
}
