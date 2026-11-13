This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Tests

```bash
pnpm test       # component tests (Vitest + Testing Library, jsdom)
pnpm test:e2e   # browser tests (Playwright); builds and starts the app on port 3100
```

The tests check what a user sees and does, not implementation details:
- **Contact form** (`src/components/sections/ContactForm.test.tsx`): an empty submit shows an error on every field, focuses the first one and announces the count; a valid submit shows "Sending…" and then the success message, which gets focus.
- **Mobile menu** (`e2e/mobile-menu.spec.ts`): opens and closes with the toggle and with Escape (focus returns to the toggle); choosing a link closes it and scrolls to the section.

The menu runs in a real browser because it depends on CSS (`hidden`, the `lg` breakpoint) and on `matchMedia`, which jsdom does not implement. Playwright uses the installed Google Chrome (`channel: "chrome"`) at the 402px width of the mobile frame. Without Chrome, run `pnpm exec playwright install chrome`.

## Design decisions

### Inconsistencies found in the Figma file
- **How it works — step labels:** the desktop frame labels all three steps "STEP 01". Implemented as 01/02/03 (the mobile frame is correct).
- **How it works — step copy:** desktop and mobile descriptions differ slightly (e.g. "who use these skills" vs "who actually use these skills"). The desktop copy is the single source.
- **How it works — step 2 icon:** the background is peach (`#FFCB9F`) on desktop and orange at 15% on mobile. The desktop color is used on all screens.
- **Contact — language:** the mobile form copy is in Portuguese ("Nome completo", "Enviar mensagem"…) while the rest of the page is in English. The English desktop copy is used on all screens.
- **The people — background:** the frame has no fill in Figma. It uses the light yellow background, which keeps the alternation between white and light yellow sections.
- **The people — copy:** the paragraph is lorem ipsum in Figma. It was replaced with real copy of similar length.

### Accessibility adjustments to the design
- **Contact — "Up to 24 hours on business days":** the Figma gray (`#6D7384`) is 4.45:1 on the light yellow card, below AA. It uses `#656770` (5.3:1).
- **Form errors:** Figma has no error state. Errors use a red not in the palette (`#C62828`, 5.6:1 on white), always with a text message, so color is never the only signal.
- **Form fields on mobile:** the text is 16px instead of 14px, so iOS Safari does not zoom in when a field gets focus.

### Layout without a design
- **Tablet:** there is no tablet frame. The header uses the mobile menu below 1024px, where the full navigation no longer fits. Categories use 2 columns from 768px. Hero, Featured course, How it works, the testimonial, The people and Contact stay stacked until 1024px. The people collage is exported as one image per layout (desktop and mobile are different compositions). `<picture>` shows the desktop one from 768px, where its 535px width fits, and the mobile one below that.
- **Final CTA shapes:** the mobile frame has none, so they appear from 1024px only. They keep their design size, centered on the section, and the section clips them, so they never cause horizontal scrolling.
- **Footer:** the mobile layout (Explore and Company side by side, Support below) is used until 1024px.

### Links
- There are no other pages, so navigation and CTAs point to page sections. Actions that would need an account or a page of their own ("Log in", "View course", "Explore teachers and students") lead to the final call to action.
- "Join Luma" (sign-up is out of scope) leads to the contact form. Footer links without a matching section (Careers, Journal, Terms, Privacy) lead there too.

### Contact form
- There is no backend: submitting validates on the client (required fields, email format), waits 1.5s to simulate a request and shows a success message.
- Built with React Hook Form and a Zod schema (`src/lib/contact-schema.ts`), the single source of the validation rules. Fields validate on submit, then again on every change, so an error disappears as soon as it is fixed.
- Focus moves to the first invalid field only after the errors render, so screen readers read the field together with its error. Category "Explore" links lead to the featured course as the example.
