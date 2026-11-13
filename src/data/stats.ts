export type Stat = { value: string; label: string };

/** Platform numbers. Shown in the stats column and reused by the hero badge. */
export const stats = {
  learners: { value: "24K+", label: "active learners" },
  courses: { value: "120+", label: "expert-led courses" },
  completion: { value: "92%", label: "complete their first course" },
} satisfies Record<string, Stat>;
