import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type CardProps = ComponentProps<"div">;

/** White bordered card (16px radius; 24px padding on mobile, 28px on desktop). */
export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-line bg-white p-6 lg:p-7",
        className,
      )}
      {...props}
    />
  );
}
