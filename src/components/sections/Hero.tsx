import Image from "next/image";
import { StarIcon } from "@/components/icons/StarIcon";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Overline } from "@/components/ui/Overline";
import { Section } from "@/components/ui/Section";
import { hero } from "@/data/hero";
import { stats } from "@/data/stats";

/*
 * Rendered photo width per layout, so the browser downloads the right file:
 * - xl: 500px
 * - lg: grid column, ~38vw (500 / 1040 of the container)
 * - md: 500px, stacked
 * - mobile: 346px, or the container width (100vw − 2 × 20px) on narrower phones
 */
const photoSizes =
  "(min-width: 80rem) 500px, (min-width: 64rem) 38vw, (min-width: 48rem) 500px, (min-width: 24.125rem) 346px, calc(100vw - 2.5rem)";

export function Hero() {
  return (
    // Safety net: decorative shapes sit outside the photo, close to the page edge.
    <Section
      tone="cream"
      aria-labelledby="hero-title"
      className="overflow-x-clip"
    >
      {/* 540fr/500fr = the 540px text and 500px photo columns of the 1280px frame. */}
      <Container className="grid gap-y-10 lg:grid-cols-[540fr_500fr] lg:gap-x-12 xl:gap-x-20">
        {/* min-w-0: the wider h1 below must not widen this grid column. */}
        <div className="min-w-0">
          <Overline>{hero.overline}</Overline>
          {/* "actually move you" is ~551px at 64px, a bit wider than the 540px
              column: 35rem keeps the 3-line break of the design (it runs into the gap). */}
          <Heading as="h1" id="hero-title" className="mt-4 xl:w-140">
            {hero.title}
          </Heading>
          <p className="mt-6 max-w-120 text-subtitle-1 text-muted">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 sm:justify-start">
            <AvatarStack avatars={hero.learners.avatars} size={32} />
            <p className="text-body-1 text-muted">
              <strong className="font-semibold text-ink">
                Trusted by {hero.learners.count}
              </strong>{" "}
              learners
            </p>
          </div>
        </div>

        {/* Image comes first on small screens (design). It has no focusable
            content, so the visual order never contradicts keyboard order. */}
        <HeroMedia />
      </Container>
    </Section>
  );
}

function HeroMedia() {
  const { value, max } = hero.rating;
  const stars = Array.from({ length: max }, (_, index) => index + 1);

  return (
    <div className="relative order-first mx-auto w-full max-w-86.5 md:max-w-125 lg:order-0 lg:mr-0">
      {/* Mobile geometry by default, desktop geometry from md (same image size). */}
      <div
        aria-hidden="true"
        className="absolute top-7 -right-4.5 bottom-4 left-1/2 rounded-lg bg-peach md:top-6 md:-right-10 md:bottom-7 md:rounded-2xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-3 -left-4.5 size-16 rounded-full bg-primary-light md:bottom-2.5 md:-left-11 md:size-27"
      />

      {/* LCP element. The mobile frame is slightly taller, so object-cover trims the sides.
          `relative` paints the photo above the absolutely positioned shapes. */}
      <Image
        src={hero.image.src}
        alt={hero.image.alt}
        width={hero.image.width}
        height={hero.image.height}
        sizes={photoSizes}
        preload
        className="relative aspect-346/380 w-full rounded-2xl object-cover md:aspect-500/520 md:rounded-3xl"
      />

      <p className="absolute top-1.5 -left-2 flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-body-1 shadow-card md:top-4 md:-left-5.5">
        <span className="rounded-md bg-primary-light px-1.5 py-0.75 font-bold text-primary">
          {stats.courses.value}
        </span>{" "}
        {stats.courses.label}
      </p>

      <p className="absolute -right-4.5 bottom-9 flex items-center gap-2.5 rounded-xl bg-white px-4 py-2.5 text-body-1 shadow-card md:-right-14">
        {/* One clear sentence for screen readers instead of five images + "avg". */}
        <span className="sr-only">
          Average rating: {value} out of {max}
        </span>
        <span aria-hidden="true" className="flex gap-1 text-yellow">
          {stars.map((star) => (
            <StarIcon key={star} className="size-3" />
          ))}
        </span>
        <span aria-hidden="true">{value} avg rating</span>
      </p>
    </div>
  );
}
