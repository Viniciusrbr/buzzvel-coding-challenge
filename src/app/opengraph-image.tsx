import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { hero } from "@/data/hero";
import { brandColors as colors } from "@/lib/brand-colors";

// Generated once at build time (no request-time data), served as a static PNG.
export const alt = `Luma — ${hero.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// ImageResponse needs static TTF files (no woff2, no variable fonts).
const fontDir = join(process.cwd(), "src/assets/fonts");
const [bold, extraBold] = await Promise.all([
  readFile(join(fontDir, "PlusJakartaSans-Bold.ttf")),
  readFile(join(fontDir, "PlusJakartaSans-ExtraBold.ttf")),
]);

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: 80,
        background: colors.cream,
        color: colors.ink,
        fontFamily: "Plus Jakarta Sans",
      }}
    >
      {/* Decorative shapes, echoing the hero: peach block, light-blue circle,
          blue square. Kept right of x = 800, clear of the title (~690px wide). */}
      <div
        style={{
          position: "absolute",
          top: 70,
          right: 80,
          width: 240,
          height: 300,
          borderRadius: 32,
          background: colors.peach,
          transform: "rotate(6deg)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 60,
          right: 200,
          width: 170,
          height: 170,
          borderRadius: 9999,
          background: colors.primaryLight,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 120,
          right: 270,
          width: 72,
          height: 72,
          borderRadius: 16,
          background: colors.primary,
        }}
      />

      <div style={{ fontSize: 48, fontWeight: 700, letterSpacing: -1 }}>
        luma.
      </div>
      {/* The desktop H1 style (64/70, -1px) scaled by 1.25. */}
      <div
        style={{
          maxWidth: 700,
          fontSize: 80,
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: -1.25,
        }}
      >
        {hero.title}
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Plus Jakarta Sans", data: bold, weight: 700, style: "normal" },
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
