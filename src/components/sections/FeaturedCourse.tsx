import Image from "next/image";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Overline } from "@/components/ui/Overline";
import { Section } from "@/components/ui/Section";
import { featuredCourse as course } from "@/data/featured-course";
import { sectionIds } from "@/data/navigation";

/*
 * Rendered photo width: 538px from xl, ~40vw on lg (538 / 1060 of the
 * container), full container width when stacked (side padding 40px / 20px).
 */
const photoSizes =
  "(min-width: 80rem) 538px, (min-width: 64rem) 40vw, (min-width: 48rem) calc(100vw - 5rem), calc(100vw - 2.5rem)";

export function FeaturedCourse() {
  return (
    <Section
      tone="primary"
      id={sectionIds.featuredCourse}
      aria-labelledby="featured-title"
    >
      {/* 538fr/522fr = the photo and text columns of the 1280px frame. */}
      <Container className="grid items-center gap-y-10 lg:grid-cols-[538fr_522fr] lg:gap-x-15">
        <div className="relative">
          <p className="absolute -top-3 -left-3 rounded bg-yellow px-3 py-1.5 text-overline text-ink">
            {course.badge}
          </p>
          <Image
            src={course.image.src}
            alt={course.image.alt}
            width={course.image.width}
            height={course.image.height}
            sizes={photoSizes}
            className="w-full rounded-2xl"
          />
        </div>

        <div>
          <Overline tone="white">{course.overline}</Overline>
          <Heading as="h2" variant="h3" id="featured-title" className="mt-4">
            {course.title}
          </Heading>
          <p className="mt-5 text-subtitle-2">{course.description}</p>
          <p className="mt-6 text-subtitle-2">
            with {course.instructor.name}
            {/* Screen readers pause on the comma instead of reading "dot". */}
            <span aria-hidden="true"> · </span>
            <span className="sr-only">, </span>
            {course.instructor.role}
          </p>

          <ul aria-label="Course details" className="mt-6 flex flex-wrap gap-3">
            {course.details.map((detail) => (
              <li
                key={detail}
                className="rounded-md border border-line px-4 py-2 text-sm"
              >
                {detail}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-7">
            <Button href={course.primaryCta.href} variant="yellow">
              {course.primaryCta.label}
            </Button>
            <ArrowLink
              href={course.secondaryCta.href}
              className="self-center sm:self-auto"
            >
              {course.secondaryCta.label}
            </ArrowLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
