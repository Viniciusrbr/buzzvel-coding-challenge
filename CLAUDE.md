# Luma landing page — Buzzvel Front-End coding challenge

## Context
Coding challenge for a Front-End Engineer role at Buzzvel (Lisbon). Build ONE complete responsive
landing page ("Luma", an online-learning brand) from the supplied Figma design.

Evaluation criteria (in their words): design accuracy, responsiveness, code quality, working
interactions, accessibility and performance. "Clear decisions and attention to detail matter."
They also said: "Keep the implementation focused."

Working agreement:
- Prefer simple, idiomatic code over clever code.
- Work in small, reviewable steps; explain decisions after each step.
- After each step, list anything to verify visually against the design and suggest a
  Conventional Commit message.
- Ask before adding any dependency.

## Stack (mandatory)
- Next.js App Router + TypeScript (strict) + Tailwind CSS.
- Linting and formatting: Biome (not ESLint), with the `next` and `react` rule domains enabled
  in `biome.json`. `pnpm lint` checks; `pnpm format` writes. Type checking: `pnpm typecheck`.
- Check the installed Tailwind version before writing config: v4 uses `@theme` in `globals.css`;
  v3 uses `tailwind.config.ts`.
- No UI libraries (no shadcn, MUI, etc.). Icons as small typed inline SVG components.
- Data is local/mock: typed constants in `src/data/`. No backend, no CMS.

## Design reference
- Section screenshots exported from Figma live in `docs/design/desktop/` and `docs/design/mobile/`
  (local reference only, not committed). ALWAYS look at the relevant screenshots before building a section.
- Desktop frame: 1280px wide. Content container: 1120px max (80px side padding).
- Mobile frame: 402px wide. Side padding ≈ 24px (confirm in Figma).
- There is NO tablet design. We must create a sensible tablet layout (see "Decisions").

## Assets (exported from Figma)
Design references (one PNG per section at 1x, numbered top to bottom):
- `docs/design/desktop/01-header.png` … `10-footer.png` (1280px wide)
- `docs/design/mobile/01-header.png` … `10-footer.png` (402px wide)

Images in `public/images/` (exported at 2x; next/image will optimize them):
- `hero.png` (desktop hero photo, 500x520 at 1x) and `hero-mobile.png` (mobile crop, 346x380 at 1x).
  Alt: "Person focused on learning at their laptop".
- `featured-course.png` (538x408 at 1x). Alt: "Product design course — student working on interface designs".
- `avatars/learner-01..03.png` (hero "Trusted by" stack, 32px), `avatars/cta-01..04.png` (final CTA stack, 40px),
  `avatars/alex-morgan.png` (testimonial, 48px).
- `people/people-01..10.png`: the 10 photos of "The people" collage, in layer order (column by column).
  NOTE: these exports already include the rounded corners (4px) and the soft drop shadow from Figma,
  so do NOT add CSS shadow/radius on top of them. Check `docs/design/desktop/07-people.png` for placement.
- Decorative shapes (hero peach block and circle, how-it-works icons, final CTA shapes) are NOT exported:
  build them with CSS/inline SVG, `aria-hidden`.

## Design tokens (from Figma)
Colors (Figma variable names where known):
- `text-primary` #171B2C (headings, body; also the footer background)
- `primary-blue` #3157F6 (primary buttons, overlines, stats, featured section bg)
- `background-light-yellow` #F9F8F3 (hero, how-it-works, people sections; Figma name has a typo: "backgroundd")
- white #FFFFFF (alternating sections, cards)
- light blue #E2E8FF (number badges, decorative circles, icon backgrounds)
- border #DBDFEB, border-light #E7E7EC
- text-secondary #6D7384, text-muted #656770 (confirm which is used where)
- yellow #FFEE7E (Featured Course badge / "View course" button), light yellow #FFF1C2 (final CTA bg), #E9D659
- orange #FF704D (+ 15% opacity variant), peach #FFCB9F (decorative blocks)

Fonts (use `next/font/google`, subsets latin, display swap, expose as CSS variables):
- Headings: Plus Jakarta Sans, ExtraBold 800, letter-spacing -1px.
- Body / UI: Inter (400, 500, 600).
- Overline: Inter SemiBold 600, 12/16, letter-spacing 1.44px (0.12em), uppercase, primary-blue.

Text styles (size/line-height, px):
| Style       | Desktop | Mobile |
|-------------|---------|--------|
| H1          | 64/70   | 40/44  |
| H2          | 56/64   | 36/40  |
| H3          | 48/56   | 32/36  |
| H4          | 40/48   | 28/32  |
| H5          | 20/32   | 20/28  |
| subtitle 1  | 18/28   | 16/26  |
| subtitle 2  | 16/28   | 14/24  |
| quotes      | 30/44   | 20/32  |
| body 1      | 14/24   | 14/24  |
| Overline    | 12/16   | 12/16  |
Create these as reusable tokens/utilities (one source of truth). No hard-coded magic values scattered in components.

## Page sections (top to bottom)
1. **Header**: logo "luma."; nav Courses, For Teams, Community, About; "Log in" link; "Start learning" primary button. Mobile: logo + hamburger ("Toggle menu").
2. **Hero** (bg light-yellow): overline "LEARN AT YOUR OWN PACE"; H1 "Build skills that actually move you forward."; paragraph; buttons "Explore courses" (primary) and "See how it works" (secondary, white with border); avatar stack + "Trusted by **24,000+** learners". Right: rounded photo with a peach block behind it, a light-blue circle at bottom-left, floating cards "120+ expert-led courses" (top-left) and "★★★★★ 4.9 avg rating" (bottom-right). Mobile: image FIRST, then text; buttons full-width and stacked.
3. **Categories** (white): overline "FIND YOUR NEXT SKILL"; heading "Learn something worth knowing."; paragraph; 4 cards (01 Product Design, 02 Technology, 03 Business, 04 Creative) with number badge, title, description and an "Explore →" link. Desktop: 4 columns. Mobile: 1 column.
4. **Featured course** (bg primary-blue): photo with yellow "FEATURED COURSE" badge; overline "MOST POPULAR THIS MONTH"; heading "Designing products people understand."; paragraph; "with Maya Chen · Senior Product Designer"; pills "8 lessons", "2h 40min", "Intermediate"; "View course" (yellow button) and "Browse all courses →" link.
5. **How it works** (bg light-yellow): overline "HOW LUMA WORKS"; centered heading "Less browsing. More learning."; 3 steps with decorative icons connected by a line (horizontal on desktop, vertical on mobile): Choose your focus / Learn from experience / Put it into practice.
6. **Testimonial + stats** (white): blue quote mark; quote "The lessons are short enough to fit into my week, but detailed enough that I actually leave with something I can use."; Alex Morgan, Product Manager (avatar). Vertical divider; stats 24K+ active learners, 120+ expert-led courses, 92% complete their first course. Mobile: stats in a 3-column row under the quote.
7. **The people** (bg light-yellow): overline "THE PEOPLE"; heading "Meet international students & teachers"; paragraph (lorem ipsum in the design); secondary button "Explore teachers and students"; photo collage (10 photos) over a light-blue circle.
8. **Contact** (white): overline "CONTACT"; heading "Get in touch"; paragraph; info cards (Email: contact@luma.com as a mailto link; Response Time: "Up to 24 hours on business days"). Form card "Contact us" / "Fill out the fields and we will get in touch." with Full name, Email, Your question (textarea), "Send message".
9. **Final CTA** (bg light yellow #FFF1C2): decorative shapes; avatar stack; heading "What will you learn next?"; "Start with one course. Build from there."; "Explore all courses" (primary) and "Join Luma" (secondary).
10. **Footer** (bg #171B2C): logo, "Practical learning for curious people."; columns Explore (Courses, Categories, Instructors, For Teams), Company (About, Careers, Journal), Support (Help Center, Contact, Terms, Privacy); divider; "© 2026 Luma Learning". Mobile: 2 columns, Support below, copyright centered.

## Decisions (document all of these in the README)
- **Design inconsistencies found in Figma**:
  1. Desktop "How it works" labels all three steps "STEP 01" — use 01/02/03 (mobile is correct).
  2. Mobile contact form copy is in Portuguese ("Nome completo", "Enviar mensagem"…) while the rest of the page is English — use the English copy from desktop.
  3. Small copy differences between desktop and mobile step descriptions — use one source of truth (desktop copy).
- **Tablet**: no design provided. Define the layout per section (e.g. 2-column category grid, hero stacked or side by side from `lg`), and explain in the README.
- **Mobile menu**: no open state in the design. Implement a disclosure panel: button with `aria-expanded` + `aria-controls`, closes on Esc / link click / resize to desktop, returns focus to the toggle, and is fully keyboard accessible.
- **Navigation**: link nav items and CTAs to in-page sections (anchors) where it makes sense; use `scroll-margin-top` for the sticky header if it's sticky.
- **Contact form**: client-side validation (required fields, email format), accessible errors (`aria-invalid`, `aria-describedby`, live region), mocked submit with loading and success states. No backend.

## Quality rules
Code:
- Server Components by default. `"use client"` only where interaction needs it (mobile menu, contact form).
- Small reusable components with typed props: Container, Section, Overline, Heading, Button (variants: primary, secondary, yellow; can render as link), Card, etc.
- Lists rendered from typed data, not copy-pasted JSX.
- No `any`. No unused code. `pnpm lint` (Biome), `pnpm typecheck` and `pnpm build` must pass. Package manager: pnpm.

Accessibility:
- Semantic landmarks (`header`, `nav`, `main`, `section` with headings, `footer`), one `h1`, no skipped heading levels.
- Skip link to main content. Visible `focus-visible` styles on every interactive element.
- Descriptive `alt` for meaningful images; `alt=""` + `aria-hidden` for decorative shapes.
- Labels for every form field. Color contrast AA (check white text on #3157F6 and text on yellow).
- `<html lang="en">`.

Performance:
- `next/image` everywhere with correct `sizes`; `priority` only on the hero image (LCP). Others lazy.
- `next/font` (no external font requests, no layout shift).
- Fully static page. No layout shift (explicit image dimensions/aspect ratios).
- Any animation/transition respects `prefers-reduced-motion` (Tailwind `motion-safe:`/`motion-reduce:`).

Metadata: Metadata API with title, description, Open Graph, theme color; favicon.

## Out of scope
Backend, CMS, auth, i18n, dark mode, Storybook, heavy animation libraries.