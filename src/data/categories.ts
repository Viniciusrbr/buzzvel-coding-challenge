import { type NavLink, sectionIds } from "./navigation";

type Category = {
  title: string;
  description: string;
  href: NavLink["href"];
};

export const categoriesSection = {
  overline: "Find your next skill",
  title: "Learn something worth knowing.",
  description:
    "Short, practical courses designed around skills you can put to work immediately.",
};

export const categories: Category[] = [
  {
    title: "Product Design",
    description: "Turn complex problems into clear, useful experiences.",
    href: `#${sectionIds.featuredCourse}`,
  },
  {
    title: "Technology",
    description:
      "Build a stronger understanding of the tools shaping digital products.",
    href: `#${sectionIds.featuredCourse}`,
  },
  {
    title: "Business",
    description:
      "Develop practical skills for better decisions and stronger teams.",
    href: `#${sectionIds.featuredCourse}`,
  },
  {
    title: "Creative",
    description: "Explore new ways to communicate, create and tell stories.",
    href: `#${sectionIds.featuredCourse}`,
  },
];
