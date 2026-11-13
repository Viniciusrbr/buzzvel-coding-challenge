import { z } from "zod";
import { contactForm } from "@/data/contact";

const { errors } = contactForm;

/** Validation rules of the contact form (values are trimmed first). */
export const contactSchema = z.object({
  name: z.string().trim().min(1, { error: errors.nameRequired }),
  // `pipe` runs the email check only when the field is not empty,
  // so an empty field shows "required" instead of "invalid".
  email: z
    .string()
    .trim()
    .min(1, { error: errors.emailRequired })
    .pipe(z.email({ error: errors.emailInvalid })),
  question: z.string().trim().min(1, { error: errors.questionRequired }),
});

export type ContactValues = z.infer<typeof contactSchema>;
