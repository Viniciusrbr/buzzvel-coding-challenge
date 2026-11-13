/**
 * Decorative peach shapes of the final CTA, drawn at their positions in the
 * 1280×470 Figma frame (not exported as images). Hidden from assistive tech.
 */
export function FinalCtaShapes({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1280 470"
      width={1280}
      height={470}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {/* Outlines */}
      <circle cx="76" cy="70" r="53" strokeWidth="2" />
      <circle cx="893" cy="59" r="15" strokeWidth="2" />
      <circle cx="1224" cy="444" r="15" strokeWidth="2" />
      <circle cx="1085" cy="482" r="15" strokeWidth="2" />
      <rect
        x="322"
        y="47"
        width="56"
        height="56"
        rx="6"
        transform="rotate(13 350 75)"
      />
      {/* Open box */}
      <path
        d="M1160 231l30 19v20l-30 20-30-20v-20zM1160 231v19M1130 250l30 20 30-20M1130 270l30-20 30 20M1160 270v20"
        strokeWidth="1.5"
      />
      {/* Card with two halves */}
      <rect
        x="966.75"
        y="390.75"
        width="40.5"
        height="28.5"
        rx="1.5"
        strokeWidth="1.5"
      />
      <path d="M982.5 391v28M990.5 391v28" strokeWidth="1.5" />
      {/* Sun rays around the drop */}
      <path
        d="M1046.5 92v10M1025 101.5l8 7.5M1068 101.5l-8 7.5M1020.5 125h12M1061 125h12"
        strokeWidth="1.5"
      />

      {/* Filled */}
      <g fill="currentColor" stroke="none">
        <circle cx="116" cy="433" r="60" />
        <rect
          x="1160"
          y="-10"
          width="110"
          height="110"
          rx="10"
          transform="rotate(12 1215 45)"
        />
        <rect
          x="-26.4"
          y="231"
          width="56"
          height="56"
          rx="6"
          transform="rotate(12 1.6 259)"
        />
        {/* Speech bubble */}
        <circle cx="157" cy="230" r="14" />
        <path d="M147 237l-3 7 8-2z" />
        {/* "B" shape */}
        <path
          d="M2 0h10a10 10 0 0 1 0 20 14 14 0 0 1 0 28H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"
          transform="translate(320.5 409) rotate(14) translate(-13 -24)"
        />
        <path d="M1046.5 109c0 0-8 8-8 14a8 8 0 0 0 16 0c0-6-8-14-8-14z" />
        <path d="M978 398a5.5 5.5 0 0 0 0 11zM997 398a5.5 5.5 0 0 1 0 11z" />
      </g>
    </svg>
  );
}
