import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
};

/**
 * "luma." wordmark linking to the top of the page. Color is inherited, so the
 * same component works on the cream header and on the dark footer.
 * The accessible name keeps the visible word ("Luma") for voice control users.
 */
export function Logo({ className }: LogoProps) {
  return (
    <a
      href="#top"
      aria-label="Luma home"
      className={cn(
        // 22px: measured from the Figma export, outside the text-style scale.
        "rounded-sm font-heading text-[1.375rem] leading-none font-bold tracking-tight",
        className,
      )}
    >
      luma.
    </a>
  );
}
