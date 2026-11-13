import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("opens and closes with the toggle and with Escape", async ({ page }) => {
  const toggle = page.getByRole("button", { name: "Toggle menu" });
  const menu = page.getByRole("navigation", { name: "Main" });
  await expect(menu).toBeHidden();

  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await expect(menu.getByRole("link", { name: "Courses" })).toBeVisible();

  await toggle.click();
  await expect(menu).toBeHidden();

  await toggle.click();
  await page.keyboard.press("Escape");
  await expect(menu).toBeHidden();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(toggle).toBeFocused();
});

test("closes after a link is chosen and goes to its section", async ({
  page,
}) => {
  await page.getByRole("button", { name: "Toggle menu" }).click();
  const menu = page.getByRole("navigation", { name: "Main" });

  await menu.getByRole("link", { name: "Courses" }).click();

  await expect(menu).toBeHidden();
  await expect(page).toHaveURL(/#categories$/);
  await expect(
    page.getByRole("heading", { name: "Learn something worth knowing." }),
  ).toBeInViewport();
});
