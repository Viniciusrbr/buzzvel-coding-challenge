import { type NavLink, sectionIds } from "./navigation";

type CollageImage = { src: string; width: number; height: number };

type PeopleSection = {
  overline: string;
  title: string;
  description: string;
  cta: NavLink;
  /**
   * The photo collage, exported from Figma as one image per layout (they are
   * different compositions, not crops). Width/height: pixel size of the file (2x).
   */
  collage: { alt: string; desktop: CollageImage; mobile: CollageImage };
};

export const peopleSection: PeopleSection = {
  overline: "The people",
  title: "Meet international students & teachers",
  // The Figma file has lorem ipsum here.
  description:
    "Luma brings together learners and teachers from all over the world. Our instructors work in the fields they teach, and our students bring real projects, questions and perspectives to every lesson.",
  // A directory of teachers and students needs its own page, so it leads to the final call to action.
  cta: {
    label: "Explore teachers and students",
    href: `#${sectionIds.getStarted}`,
  },
  collage: {
    alt: "Collage of Luma students and teachers: learning at home and in class, on video calls, practicing music and graduating",
    desktop: {
      src: "/images/people-desktop.png",
      width: 1069,
      height: 1060,
    },
    mobile: { src: "/images/people-mobile.png", width: 744, height: 660 },
  },
};
