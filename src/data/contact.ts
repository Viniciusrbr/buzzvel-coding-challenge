export const contactSection = {
  overline: "Contact",
  title: "Get in touch",
  description:
    "Have a question? We’re here to help. Whether you’re looking for the right course, learning with your team or interested in teaching with Luma, we’d love to hear from you.",
};

export type ContactDetail = {
  icon: "email" | "time";
  label: string;
  value: string;
  href?: string;
};

export const contactDetails: ContactDetail[] = [
  {
    icon: "email",
    label: "Email",
    value: "contact@luma.com",
    href: "mailto:contact@luma.com",
  },
  {
    icon: "time",
    label: "Response Time",
    value: "Up to 24 hours on business days",
  },
];

export type ContactFieldName = "name" | "email" | "question";

export type ContactField = {
  name: ContactFieldName;
  label: string;
  placeholder: string;
  type: "text" | "email" | "textarea";
  autoComplete?: string;
};

// English copy from the desktop frame (the mobile frame is in Portuguese).
export const contactForm = {
  title: "Contact us",
  description: "Fill out the fields and we will get in touch.",
  fields: [
    {
      name: "name",
      label: "Full name",
      placeholder: "Your name",
      type: "text",
      autoComplete: "name",
    },
    {
      name: "email",
      label: "Email",
      placeholder: "youremail@example.com",
      type: "email",
      autoComplete: "email",
    },
    {
      name: "question",
      label: "Your question",
      placeholder: "Tell us how we can help...",
      type: "textarea",
    },
  ] satisfies ContactField[],
  // Used by the validation schema (src/lib/contact-schema.ts).
  errors: {
    nameRequired: "Enter your full name.",
    emailRequired: "Enter your email address.",
    emailInvalid: "Enter an email address like name@example.com.",
    questionRequired: "Tell us your question.",
  },
  submitLabel: "Send message",
  sendingLabel: "Sending…",
  success: {
    title: "Message sent",
    text: "Thanks for reaching out. We will reply within 24 hours on business days.",
    resetLabel: "Send another message",
  },
};
