import type { ComponentProps } from "react";

/** Speech bubble with three dots (24×24). Decorative. */
export function ChatIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" />
      <path d="M8 12h.01M12 12h.01M16 12h.01" strokeWidth={2.5} />
    </svg>
  );
}
