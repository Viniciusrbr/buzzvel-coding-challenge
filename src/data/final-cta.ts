import { type NavLink, sectionIds } from "./navigation";

type FinalCta = {
  avatars: string[];
  title: string;
  description: string;
  primaryCta: NavLink;
  secondaryCta: NavLink;
};

export const finalCta: FinalCta = {
  avatars: [
    "/images/avatars/cta-01.png",
    "/images/avatars/cta-02.png",
    "/images/avatars/cta-03.png",
    "/images/avatars/cta-04.png",
  ],
  title: "What will you learn next?",
  description: "Start with one course. Build from there.",
  primaryCta: {
    label: "Explore all courses",
    href: `#${sectionIds.categories}`,
  },
  // Sign-up is out of scope: joining starts with a message to the team.
  secondaryCta: { label: "Join Luma", href: `#${sectionIds.contact}` },
};
