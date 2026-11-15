import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { brandColors as colors } from "@/lib/brand-colors";

// Favicon: "l." from the wordmark on a primary-blue tile, readable on light and dark tab bars.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

const extraBold = await readFile(
  join(process.cwd(), "src/assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
);

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        borderRadius: 8,
        background: colors.primary,
        color: colors.white,
        fontFamily: "Plus Jakarta Sans",
        fontSize: 24,
        fontWeight: 800,
        letterSpacing: -1,
        // Optical centering: the glyphs sit low in the line box.
        paddingBottom: 3,
      }}
    >
      l.
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Plus Jakarta Sans",
          data: extraBold,
          weight: 800,
          style: "normal",
        },
      ],
    },
  );
}
