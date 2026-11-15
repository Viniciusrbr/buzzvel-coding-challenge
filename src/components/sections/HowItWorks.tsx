import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Overline } from "@/components/ui/Overline";
import { Section } from "@/components/ui/Section";
import { howItWorksSection, steps } from "@/data/how-it-works";
import { sectionIds } from "@/data/navigation";

/*
 * Decorative 56px shapes from the design (not exported as images).
 * `relative` paints them above the connector line.
 */
const stepIcons = {
  focus: (
    <span className="relative block size-14 rounded-full bg-primary-light">
      <span className="absolute top-2 left-2 size-6 rounded-md bg-primary" />
    </span>
  ),
  experience: (
    <span className="relative block size-14">
      <span className="absolute inset-0 rotate-9 rounded-lg bg-peach" />
      <span className="absolute top-6 left-6 size-7 rounded-full bg-orange" />
    </span>
  ),
  practice: (
    <span className="relative block size-14 rounded-xl bg-yellow-light">
      <span className="absolute top-7 left-2 size-5 rounded-full bg-yellow-dark" />
    </span>
  ),
};

export function HowItWorks() {
  return (
    <Section
      tone="cream"
      id={sectionIds.howItWorks}
      aria-labelledby="how-it-works-title"
    >
      <Container>
        <div className="text-center">
          <Overline>{howItWorksSection.overline}</Overline>
          <Heading
            as="h2"
            variant="h3"
            id="how-it-works-title"
            className="mt-4"
          >
            {howItWorksSection.title}
          </Heading>
        </div>

        {/* Screen readers announce "1 of 3", so the visual "Step 01" is hidden from them. */}
        <ol className="mt-10 grid gap-y-18 md:mt-16 md:grid-cols-3 md:gap-x-10 lg:mt-26">
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              <span aria-hidden="true">{stepIcons[step.icon]}</span>

              {/* Connector to the next step: vertical in the gap below on
                  phones, horizontal from icon to icon from tablet up
                  (column + 40px gap − 56px icon = 100% − 1rem). */}
              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-full left-7 mt-6 h-12 w-px bg-line md:top-7 md:left-14 md:mt-0 md:h-px md:w-[calc(100%-1rem)]"
                />
              )}

              {/* text-muted, not the lighter Figma gray: that one is 4.45:1 on cream. */}
              <p aria-hidden="true" className="mt-6 text-overline text-muted">
                Step {String(index + 1).padStart(2, "0")}
              </p>
              <Heading as="h3" variant="h5" className="mt-2">
                {step.title}
              </Heading>
              <p className="mt-3.5 max-w-md text-subtitle-2 text-muted lg:max-w-80">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
