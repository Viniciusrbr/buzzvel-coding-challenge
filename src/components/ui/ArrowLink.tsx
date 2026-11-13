import type { ComponentProps } from "react";
import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import { cn } from "@/lib/cn";

type ArrowLinkProps = ComponentProps<"a"> & { href: string };

/**
 * Text link followed by an arrow ("Explore →", "Browse all courses →").
 * Color is inherited, so it works on white and on blue sections.
 * Hover: underline + arrow nudge (the nudge only without reduced motion).
 */
export function ArrowLink({ className, children, ...props }: ArrowLinkProps) {
  return (
    <a
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-sm text-body-1 font-semibold",
        className,
      )}
      {...props}
    >
      <span className="underline-offset-4 group-hover:underline">
        {children}
      </span>
      <ArrowRightIcon className="size-4 shrink-0 motion-safe:transition-transform motion-safe:group-hover:translate-x-1" />
    </a>
  );
}
