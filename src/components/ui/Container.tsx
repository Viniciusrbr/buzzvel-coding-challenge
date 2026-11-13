import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = ComponentProps<"div">;

/**
 * Centers content at 1120px max (Figma desktop).
 * `box-content` makes max-width apply to the content only, so the side
 * padding (20px mobile, 40px tablet, 80px desktop) sits outside it.
 */
export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto box-content max-w-content px-5 md:px-10 lg:px-20",
        className,
      )}
      {...props}
    />
  );
}
