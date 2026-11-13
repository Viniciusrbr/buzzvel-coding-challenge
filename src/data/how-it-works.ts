type Step = {
  /** Picks the decorative shape drawn above the step. */
  icon: "focus" | "experience" | "practice";
  title: string;
  description: string;
};

export const howItWorksSection = {
  overline: "How Luma works",
  title: "Less browsing. More learning.",
};

/**
 * Copy from the desktop design (mobile has slightly different wording).
 * The step number (01–03) comes from the position.
 */
export const steps: Step[] = [
  {
    icon: "focus",
    title: "Choose your focus",
    description:
      "Find courses based on the skill you want to build, not endless content categories.",
  },
  {
    icon: "experience",
    title: "Learn from experience",
    description:
      "Follow concise lessons created by professionals who use these skills.",
  },
  {
    icon: "practice",
    title: "Put it into practice",
    description:
      "Every course includes practical exercises designed to turn knowledge into action.",
  },
];
