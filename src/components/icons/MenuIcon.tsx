import type { ComponentProps } from "react";

/** Hamburger icon (24×24). Decorative: the button provides the accessible name. */
export function MenuIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M2 6h20M2 12h20M2 18h20" />
    </svg>
  );
}
