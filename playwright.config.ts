import { defineConfig, devices } from "@playwright/test";

// A port of its own, so a running `pnpm dev` is never reused by mistake.
const PORT = 3100;
const baseURL = `http://localhost:${PORT}`;

// Browser tests against the production build.
export default defineConfig({
  testDir: "./e2e",
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: "list",
  use: { baseURL, trace: "on-first-retry" },
  projects: [
    {
      // The installed Google Chrome, at the width of the mobile Figma frame.
      name: "mobile-chrome",
      use: {
        ...devices["Desktop Chrome"],
        channel: "chrome",
        viewport: { width: 402, height: 874 },
      },
    },
  ],
  webServer: {
    command: `pnpm build && pnpm start --port ${PORT}`,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
});
