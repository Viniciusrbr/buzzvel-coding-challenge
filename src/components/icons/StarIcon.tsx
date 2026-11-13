import type { ComponentProps } from "react";

/** Filled star (24×24 grid). Decorative: the rating is given as text. */
export function StarIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M12 1.5l3.09 6.88 7.41.8-5.55 5.03 1.54 7.29L12 17.77 5.51 21.5l1.54-7.29L1.5 9.18l7.41-.8z" />
    </svg>
  );
}
