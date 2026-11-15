"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useId, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { type FieldErrors, useForm } from "react-hook-form";
import { SpinnerIcon } from "@/components/icons/SpinnerIcon";
import { Button } from "@/components/ui/Button";
import { type ContactFieldName, contactForm as copy } from "@/data/contact";
import { cn } from "@/lib/cn";
import { type ContactValues, contactSchema } from "@/lib/contact-schema";

/** Fake request: there is no backend. */
const SUBMIT_DELAY_MS = 1500;

const emptyValues: ContactValues = { name: "", email: "", question: "" };

const fieldClasses =
  "mt-2 block w-full rounded-lg border border-line bg-cream px-4 text-ink " +
  // 16px on small screens stops iOS Safari from zooming in on focus.
  "text-base placeholder:text-muted lg:text-sm aria-invalid:border-error";

type ContactFormProps = {
  /** Id of the visible card title that names the form. */
  labelledBy: string;
};

export function ContactForm({ labelledBy }: ContactFormProps) {
  const id = useId();
  const [announcement, setAnnouncement] = useState("");
  const firstInvalidField = useRef<ContactFieldName | null>(null);
  const successRef = useRef<HTMLDivElement>(null);

  // Validates on submit, then again on every change (react-hook-form defaults),
  // so an error disappears as soon as it is fixed.
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors, isSubmitting, isSubmitSuccessful, submitCount },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: emptyValues,
    // The built-in focus runs before the errors render; see the effect below.
    shouldFocusError: false,
  });

  async function onValid() {
    setAnnouncement(copy.sendingLabel);
    await new Promise((resolve) => setTimeout(resolve, SUBMIT_DELAY_MS));
    setAnnouncement("");
  }

  function onInvalid(fieldErrors: FieldErrors<ContactValues>) {
    const invalidFields = copy.fields.filter(
      (field) => fieldErrors[field.name],
    );
    firstInvalidField.current = invalidFields[0]?.name ?? null;
    setAnnouncement(
      invalidFields.length === 1
        ? "1 field needs your attention."
        : `${invalidFields.length} fields need your attention.`,
    );
  }

  // After the render that shows the errors (submitCount changes with them),
  // so the screen reader reads aria-invalid and the message with the field.
  useEffect(() => {
    if (submitCount === 0 || !firstInvalidField.current) return;
    setFocus(firstInvalidField.current);
    firstInvalidField.current = null;
  }, [submitCount, setFocus]);

  // The form (and the focused submit button) is replaced: move focus to the result.
  useEffect(() => {
    if (isSubmitSuccessful) successRef.current?.focus();
  }, [isSubmitSuccessful]);

  function handleReset() {
    // Render the empty form first, then focus its first field.
    flushSync(() => reset());
    setFocus(copy.fields[0].name);
  }

  const submit = handleSubmit(onValid, onInvalid);

  return (
    <>
      {isSubmitSuccessful ? (
        <div ref={successRef} tabIndex={-1} className="mt-6 outline-none">
          <p className="text-h5">{copy.success.title}</p>
          <p className="mt-2 text-body-1 text-muted">{copy.success.text}</p>
          <Button variant="secondary" className="mt-6" onClick={handleReset}>
            {copy.success.resetLabel}
          </Button>
        </div>
      ) : (
        <form
          noValidate
          aria-labelledby={labelledBy}
          // Ignore new submits (button or Enter) while the fake request is running.
          onSubmit={(event) =>
            isSubmitting ? event.preventDefault() : submit(event)
          }
          className="mt-6 flex flex-col gap-5"
        >
          {copy.fields.map((field) => {
            const inputId = `${id}-${field.name}`;
            const errorId = `${inputId}-error`;
            const error = errors[field.name]?.message;
            const shared = {
              ...register(field.name),
              id: inputId,
              placeholder: field.placeholder,
              autoComplete: field.autoComplete,
              required: true,
              "aria-invalid": error ? true : undefined,
              "aria-describedby": error ? errorId : undefined,
            };

            return (
              <div key={field.name}>
                <label
                  htmlFor={inputId}
                  className="block text-sm leading-6 font-semibold"
                >
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    {...shared}
                    className={cn(
                      fieldClasses,
                      "min-h-25 resize-y py-3 lg:min-h-30",
                    )}
                  />
                ) : (
                  <input
                    {...shared}
                    type={field.type}
                    className={cn(fieldClasses, "h-12")}
                  />
                )}
                {error && (
                  <p id={errorId} className="mt-2 text-sm text-error">
                    {error}
                  </p>
                )}
              </div>
            );
          })}

          {/* aria-disabled instead of disabled: a disabled button loses focus,
              which would drop the keyboard user back to the top of the page. */}
          <Button
            type="submit"
            aria-disabled={isSubmitting || undefined}
            className="mt-1 w-full"
          >
            {isSubmitting ? (
              <>
                <SpinnerIcon className="motion-safe:animate-spin" />
                {copy.sendingLabel}
              </>
            ) : (
              copy.submitLabel
            )}
          </Button>
        </form>
      )}

      {/* <output> is a live region (role="status"). It stays in the DOM, so text changes are announced. */}
      <output className="sr-only">{announcement}</output>
    </>
  );
}
