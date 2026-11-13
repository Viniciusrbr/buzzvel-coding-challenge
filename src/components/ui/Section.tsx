import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

const tones = {
  white: "bg-white text-ink",
  cream: "bg-cream text-ink",
  "yellow-light": "bg-yellow-light text-ink",
  // On blue, the default blue focus ring would be invisible.
  primary: "bg-primary text-white [--focus-color:var(--color-white)]",
} as const;

export type SectionTone = keyof typeof tones;

type SectionProps = ComponentProps<"section"> & {
  tone?: SectionTone;
};

/** Page section with background tone and vertical spacing (60px mobile, 100px desktop). */
export function Section({ tone = "white", className, ...props }: SectionProps) {
  return (
    <section
      className={cn("py-15 lg:py-25", tones[tone], className)}
      {...props}
    />
  );
}
