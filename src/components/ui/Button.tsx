import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

// Every variant has a border: in forced colors mode (Windows High Contrast)
// backgrounds are removed, and the transparent border becomes the button's outline.
const variants = {
  primary: "border-transparent bg-primary text-white hover:bg-primary/90",
  secondary: "border-line bg-white text-ink hover:border-ink",
  yellow: "border-transparent bg-yellow text-ink hover:bg-yellow-dark",
} as const;

const sizes = {
  sm: "min-h-11 px-5", // 44px — header CTA
  md: "min-h-13 px-7", // 52px — default
} as const;

type StyleProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

// `href` decides the element: with it → <a>, without it → <button>.
type ButtonAsButton = StyleProps & ComponentProps<"button"> & { href?: never };
type ButtonAsLink = StyleProps & ComponentProps<"a"> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg border text-center text-sm font-semibold",
    "transition-colors motion-reduce:transition-none",
    "disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  );

  if (props.href !== undefined) {
    return <a {...props} className={classes} />;
  }

  return <button type="button" {...props} className={classes} />;
}
