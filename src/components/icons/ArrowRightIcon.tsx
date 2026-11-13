import type { ComponentProps } from "react";

/** Right arrow (16×16). Decorative: the link text provides the meaning. */
export function ArrowRightIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={16}
      height={16}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M2 8h12M9 3l5 5-5 5" />
    </svg>
  );
}
