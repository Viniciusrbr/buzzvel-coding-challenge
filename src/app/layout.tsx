import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { brandColors } from "@/lib/brand-colors";
import "./globals.css";

// Both are variable fonts, so every weight comes from a single file.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

const title = "Luma — Build skills that actually move you forward";
const description =
  "Practical courses taught by people who do the work every day. Learn design, technology, business and more — one focused lesson at a time.";

/**
 * Base for absolute URLs (og:url, og:image). SITE_URL wins; on Vercel the
 * production domain is used automatically; localhost only in development.
 */
const siteUrl =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Luma",
    locale: "en_US",
    title,
    description,
  },
};

export const viewport: Viewport = {
  // Matches the header background (--color-cream) in mobile browser UI.
  themeColor: brandColors.cream,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} antialiased`}
    >
      <body>
        <a
          href="#main-content"
          // Padding is set with focus: too, because not-sr-only resets it to 0.
          className="sr-only rounded-lg bg-ink text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-3"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
