import { type NavLink, sectionIds } from "./navigation";

type Hero = {
  overline: string;
  title: string;
  description: string;
  primaryCta: NavLink;
  secondaryCta: NavLink;
  /** Width/height: rendered size at 1x (the file is exported at 2x). */
  image: { src: string; alt: string; width: number; height: number };
  courses: { value: string; label: string };
  rating: { value: number; max: number };
  learners: { count: string; avatars: string[] };
};

export const hero: Hero = {
  overline: "Learn at your own pace",
  title: "Build skills that actually move you forward.",
  description:
    "Practical courses taught by people who do the work every day. Learn design, technology, business and more — one focused lesson at a time.",
  primaryCta: { label: "Explore courses", href: `#${sectionIds.categories}` },
  secondaryCta: {
    label: "See how it works",
    href: `#${sectionIds.howItWorks}`,
  },
  image: {
    src: "/images/hero.png",
    alt: "Person focused on learning at their laptop",
    width: 500,
    height: 520,
  },
  courses: { value: "120+", label: "expert-led courses" },
  rating: { value: 4.9, max: 5 },
  learners: {
    count: "24,000+",
    avatars: [
      "/images/avatars/learner-01.png",
      "/images/avatars/learner-02.png",
      "/images/avatars/learner-03.png",
    ],
  },
};
