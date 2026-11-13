/**
 * Ids of the page sections. Section components use these as their `id`,
 * and every in-page link is built from them, so they never drift apart.
 */
export const sectionIds = {
  categories: "categories",
  featuredCourse: "featured-course",
  howItWorks: "how-it-works",
  people: "people",
  contact: "contact",
  getStarted: "get-started",
} as const;

export type NavLink = {
  label: string;
  href: `#${string}`;
};

/** Header navigation. There are no separate pages, so items point to sections. */
export const mainNav: NavLink[] = [
  { label: "Courses", href: `#${sectionIds.categories}` },
  { label: "For Teams", href: `#${sectionIds.contact}` },
  { label: "Community", href: `#${sectionIds.people}` },
  { label: "About", href: `#${sectionIds.howItWorks}` },
];

/** Auth is out of scope: "Log in" leads to the final call to action ("Join Luma"). */
export const loginLink: NavLink = {
  label: "Log in",
  href: `#${sectionIds.getStarted}`,
};

export const startLearningLink: NavLink = {
  label: "Start learning",
  href: `#${sectionIds.categories}`,
};
