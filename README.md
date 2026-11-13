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

## Design decisions

### Inconsistencies found in the Figma file
- **How it works — step labels:** the desktop frame labels all three steps "STEP 01". Implemented as 01/02/03 (the mobile frame is correct).
- **How it works — step copy:** desktop and mobile descriptions differ slightly (e.g. "who use these skills" vs "who actually use these skills"). The desktop copy is the single source.
- **How it works — step 2 icon:** the background is peach (`#FFCB9F`) on desktop and orange at 15% on mobile. The desktop color is used on all screens.

### Layout without a design
- **Tablet:** there is no tablet frame. The header uses the mobile menu below 1024px, where the full navigation no longer fits. Categories use 2 columns from 768px. Hero, Featured course, How it works and the testimonial stay stacked until 1024px.

### Links
- There are no other pages, so navigation and CTAs point to page sections. Actions that would need an account or a course page ("Log in", "View course") lead to the final call to action. Category "Explore" links lead to the featured course as the example.
