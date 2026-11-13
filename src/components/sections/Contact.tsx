import { ChatIcon } from "@/components/icons/ChatIcon";
import { ClockIcon } from "@/components/icons/ClockIcon";
import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Overline } from "@/components/ui/Overline";
import { Section } from "@/components/ui/Section";
import { contactDetails, contactForm, contactSection } from "@/data/contact";
import { sectionIds } from "@/data/navigation";

const detailIcons = {
  email: <ChatIcon className="size-6" />,
  time: <ClockIcon className="size-6" />,
};

export function Contact() {
  return (
    <Section id={sectionIds.contact} aria-labelledby="contact-title">
      {/* 480fr/540fr with a 100px gap = the two columns of the 1280px frame. */}
      <Container className="grid gap-y-10 lg:grid-cols-[480fr_540fr] lg:items-center lg:gap-x-25">
        <div>
          <Overline>{contactSection.overline}</Overline>
          <Heading as="h2" variant="h3" id="contact-title" className="mt-4">
            {contactSection.title}
          </Heading>
          <p className="mt-4 text-body-1 text-muted lg:text-subtitle-1">
            {contactSection.description}
          </p>

          <dl className="mt-8 flex flex-col gap-4 lg:mt-10">
            {contactDetails.map((detail) => (
              <div
                key={detail.label}
                className="flex items-center gap-4 rounded-xl bg-cream px-5 py-4 lg:py-5"
              >
                <span
                  aria-hidden="true"
                  className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary-light text-primary"
                >
                  {detailIcons[detail.icon]}
                </span>
                <div>
                  <dt className="text-sm leading-6 font-medium">
                    {detail.label}
                  </dt>
                  {/* text-muted, not the lighter Figma gray: that one is 4.45:1 on cream. */}
                  <dd className="mt-0.5 text-body-1 text-muted">
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="text-primary underline-offset-4 hover:underline"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      detail.value
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-2xl border border-line bg-white px-5 py-6 shadow-card lg:p-10">
          <h3
            id="contact-form-title"
            className="font-heading text-xl font-bold lg:text-2xl"
          >
            {contactForm.title}
          </h3>
          <p className="mt-2 text-body-1 text-muted">
            {contactForm.description}
          </p>
          <ContactForm labelledBy="contact-form-title" />
        </div>
      </Container>
    </Section>
  );
}
