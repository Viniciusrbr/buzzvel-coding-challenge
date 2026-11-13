import type { ComponentProps } from "react";

/** "X" icon (24×24). Decorative: the button provides the accessible name. */
export function CloseIcon(props: ComponentProps<"svg">) {
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
      <path d="M5 5l14 14M19 5L5 19" />
    </svg>
  );
}
