import Image from "next/image";
import { QuoteIcon } from "@/components/icons/QuoteIcon";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { stats } from "@/data/stats";
import { testimonial } from "@/data/testimonial";

export function Testimonial() {
  const { author } = testimonial;

  return (
    <Section aria-labelledby="testimonial-title">
      {/* The design has no visible title; this keeps the heading outline complete. */}
      <h2 id="testimonial-title" className="sr-only">
        What our learners say
      </h2>

      {/* Desktop: quote | 1px divider | 336px stats column, 48px gaps (1280px frame). */}
      <Container className="grid gap-y-15 lg:grid-cols-[1fr_auto_21rem] lg:items-center lg:gap-x-12">
        <figure>
          <QuoteIcon className="size-6 text-primary" />
          <blockquote className="mt-3.5 max-w-150 text-quote">
            <p>{testimonial.quote}</p>
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            {/* Decorative: the name is right next to it. */}
            <Image
              src={author.avatar}
              alt=""
              width={48}
              height={48}
              className="size-12 rounded-full"
            />
            <div>
              <p className="text-base leading-6 font-bold">{author.name}</p>
              <p className="text-body-1 text-muted">{author.role}</p>
            </div>
          </figcaption>
        </figure>

        <div
          aria-hidden="true"
          className="hidden w-px self-stretch bg-line lg:block"
        />

        {/* Label (dt) comes first in the DOM, so it reads "active learners: 24K+";
            order-first shows the number on top. */}
        <dl className="grid grid-cols-3 lg:grid-cols-1 lg:gap-y-4">
          {Object.values(stats).map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <dt className="mt-1 text-body-1 text-subtle">{stat.label}</dt>
              <dd className="order-first text-h1 text-primary">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
