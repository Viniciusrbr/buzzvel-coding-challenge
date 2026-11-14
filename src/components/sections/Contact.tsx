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

          {/* A <div> inside <dl> may only hold <dt>/<dd>, so the icon lives in
              the <dt> and is positioned in the card's left padding
              (20px edge + 40px icon + 16px gap = pl-19). */}
          <dl className="mt-8 flex flex-col gap-4 lg:mt-10">
            {contactDetails.map((detail) => (
              <div
                key={detail.label}
                className="relative rounded-xl bg-cream py-4 pr-5 pl-19 lg:py-5"
              >
                <dt className="text-sm leading-6 font-medium">
                  <span
                    aria-hidden="true"
                    className="absolute top-1/2 left-5 grid size-10 -translate-y-1/2 place-items-center rounded-lg bg-primary-light text-primary"
                  >
                    {detailIcons[detail.icon]}
                  </span>
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
