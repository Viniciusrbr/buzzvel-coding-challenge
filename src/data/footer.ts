import { type NavLink, sectionIds } from "./navigation";

type FooterColumn = { title: string; links: NavLink[] };

const categories = `#${sectionIds.categories}` as const;
const contact = `#${sectionIds.contact}` as const;

export const footer: {
  tagline: string;
  columns: FooterColumn[];
  copyright: string;
} = {
  tagline: "Practical learning for curious people.",
  // There are no other pages: links point to the closest section. Pages that
  // would need their own content (careers, journal, legal) lead to Contact.
  columns: [
    {
      title: "Explore",
      links: [
        { label: "Courses", href: categories },
        { label: "Categories", href: categories },
        { label: "Instructors", href: `#${sectionIds.people}` },
        { label: "For Teams", href: contact },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: `#${sectionIds.howItWorks}` },
        { label: "Careers", href: contact },
        { label: "Journal", href: contact },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: contact },
        { label: "Contact", href: contact },
        { label: "Terms", href: contact },
        { label: "Privacy", href: contact },
      ],
    },
  ],
  copyright: "© 2026 Luma Learning",
};
