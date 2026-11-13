import { ArrowLink } from "@/components/ui/ArrowLink";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Overline } from "@/components/ui/Overline";
import { Section } from "@/components/ui/Section";
import { categories, categoriesSection } from "@/data/categories";
import { sectionIds } from "@/data/navigation";

export function Categories() {
  return (
    <Section id={sectionIds.categories} aria-labelledby="categories-title">
      <Container>
        <div className="max-w-135">
          <Overline>{categoriesSection.overline}</Overline>
          <Heading as="h2" variant="h3" id="categories-title" className="mt-4">
            {categoriesSection.title}
          </Heading>
          <p className="mt-4 text-subtitle-1 text-muted">
            {categoriesSection.description}
          </p>
        </div>

        {/* Ordered list: screen readers already announce "1 of 4", so the
            visual "01" badge is hidden from them. */}
        <ol className="mt-12 grid gap-4 md:grid-cols-2 md:gap-5 lg:mt-10 lg:grid-cols-4">
          {categories.map((category, index) => (
            <li key={category.title}>
              <Card className="flex h-full flex-col">
                <span
                  aria-hidden="true"
                  className="self-start rounded-md bg-primary-light px-2 py-1 text-overline text-primary"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Heading as="h3" variant="h5" className="mt-5">
                  {category.title}
                </Heading>
                <p className="mt-3 text-body-1 text-subtle">
                  {category.description}
                </p>
                {/* mt-auto pins the link to the bottom, aligned across cards. */}
                <div className="mt-auto pt-6">
                  <ArrowLink href={category.href}>
                    Explore
                    <span className="sr-only"> {category.title}</span>
                  </ArrowLink>
                </div>
              </Card>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
