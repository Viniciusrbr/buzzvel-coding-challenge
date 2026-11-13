import { type NavLink, sectionIds } from "./navigation";

type FeaturedCourse = {
  badge: string;
  overline: string;
  title: string;
  description: string;
  instructor: { name: string; role: string };
  details: string[];
  /** Width/height: rendered size at 1x on desktop (the file is exported at 2x). */
  image: { src: string; alt: string; width: number; height: number };
  primaryCta: NavLink;
  secondaryCta: NavLink;
};

export const featuredCourse: FeaturedCourse = {
  badge: "Featured course",
  overline: "Most popular this month",
  title: "Designing products people understand.",
  description:
    "Learn how to turn complex workflows into simple, intentional product experiences through research, structure and thoughtful interaction design.",
  instructor: { name: "Maya Chen", role: "Senior Product Designer" },
  details: ["8 lessons", "2h 40min", "Intermediate"],
  image: {
    src: "/images/featured-course.png",
    alt: "Product design course — student working on interface designs",
    width: 538,
    height: 408,
  },
  // No course pages exist: enrolling leads to the final call to action.
  primaryCta: { label: "View course", href: `#${sectionIds.getStarted}` },
  secondaryCta: {
    label: "Browse all courses",
    href: `#${sectionIds.categories}`,
  },
};
