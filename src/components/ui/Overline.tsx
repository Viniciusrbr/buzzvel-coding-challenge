import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const tones = {
  primary: "text-primary",
  white: "text-white",
} as const;

type OverlineProps = {
  children: ReactNode;
  tone?: keyof typeof tones;
  className?: string;
};

/** Small uppercase label shown above section headings. */
export function Overline({
  children,
  tone = "primary",
  className,
}: OverlineProps) {
  return (
    <p className={cn("text-overline", tones[tone], className)}>{children}</p>
  );
}
