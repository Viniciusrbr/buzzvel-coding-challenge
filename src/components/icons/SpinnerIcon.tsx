import type { ComponentProps } from "react";

/** Loading indicator (16×16): a 3/4 ring. Decorative: the button text says "Sending…". */
export function SpinnerIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={16}
      height={16}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M14 8a6 6 0 1 1-6-6" />
    </svg>
  );
}
