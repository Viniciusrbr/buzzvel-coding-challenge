import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5";

const variants: Record<HeadingLevel, string> = {
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
  h4: "text-h4",
  h5: "text-h5",
};

type HeadingProps = ComponentProps<"h2"> & {
  /** Semantic level (document outline). */
  as: HeadingLevel;
  /** Visual style from Figma. Defaults to the same as `as`. */
  variant?: HeadingLevel;
};

/**
 * Keeps semantics and looks independent: e.g. a section title can be an
 * <h2> for the outline while using the bigger "H1" Figma style.
 * Color is inherited from the parent section.
 */
export function Heading({
  as: Tag,
  variant = Tag,
  className,
  ...props
}: HeadingProps) {
  return <Tag className={cn(variants[variant], className)} {...props} />;
}
