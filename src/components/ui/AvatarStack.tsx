import Image from "next/image";
import { cn } from "@/lib/cn";

type AvatarStackProps = {
  /** Image paths. The exports already include the ring around each photo. */
  avatars: string[];
  /** Rendered size in px. */
  size: 32 | 40;
  className?: string;
};

/**
 * Overlapping round avatars (8px overlap). Decorative: they illustrate the
 * community, so they use alt="" and the nearby text carries the meaning.
 */
export function AvatarStack({ avatars, size, className }: AvatarStackProps) {
  return (
    <div className={cn("flex -space-x-2", className)}>
      {avatars.map((src) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={size}
          height={size}
          className="rounded-full"
        />
      ))}
    </div>
  );
}
