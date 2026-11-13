import type { ComponentProps } from "react";

/** Opening quote mark (two tapered strokes). Decorative. */
export function QuoteIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 23 23"
      width={23}
      height={23}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M0 4.5a4.5 4.5 0 0 1 9 0L6 21.5a1.5 1.5 0 0 1-3 0zM14 4.5a4.5 4.5 0 0 1 9 0l-3 17a1.5 1.5 0 0 1-3 0z" />
    </svg>
  );
}
