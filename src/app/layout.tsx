import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
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

export const metadata: Metadata = {
  // Needed to turn relative URLs (like openGraph.url) into absolute ones.
  metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3000"),
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
  themeColor: "#f9f8f3",
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
          className="sr-only rounded-lg bg-ink px-4 py-3 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
