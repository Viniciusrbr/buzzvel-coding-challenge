import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it } from "vitest";
import { ContactForm } from "./ContactForm";

function renderForm() {
  const user = userEvent.setup();
  render(
    <>
      <h3 id="form-title">Contact us</h3>
      <ContactForm labelledBy="form-title" />
    </>,
  );
  return user;
}

it("shows an error on every empty field and moves focus to the first one", async () => {
  const user = renderForm();

  await user.click(screen.getByRole("button", { name: "Send message" }));

  const name = screen.getByLabelText("Full name");
  expect(name).toHaveAccessibleDescription("Enter your full name.");
  expect(screen.getByLabelText("Email")).toHaveAccessibleDescription(
    "Enter your email address.",
  );
  expect(screen.getByLabelText("Your question")).toHaveAccessibleDescription(
    "Tell us your question.",
  );
  // Focus moves after the errors render.
  await waitFor(() => expect(name).toHaveFocus());
  expect(screen.getByRole("status")).toHaveTextContent(
    "3 fields need your attention.",
  );
});

it("sends a valid message and shows the success state", async () => {
  const user = renderForm();

  await user.type(screen.getByLabelText("Full name"), "Ana Silva");
  await user.type(screen.getByLabelText("Email"), "ana@example.com");
  await user.type(screen.getByLabelText("Your question"), "Team plans?");
  await user.click(screen.getByRole("button", { name: "Send message" }));

  // Blocked while sending, but it keeps focus.
  const sending = screen.getByRole("button", { name: "Sending…" });
  expect(sending).toHaveAttribute("aria-disabled", "true");
  expect(sending).toHaveFocus();

  // The fake request takes 1.5s.
  const title = await screen.findByText("Message sent", {}, { timeout: 3000 });
  expect(screen.queryByRole("form")).not.toBeInTheDocument();
  expect(title.parentElement).toHaveFocus();
});
