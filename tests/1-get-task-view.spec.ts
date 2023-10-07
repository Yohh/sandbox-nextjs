import { test, expect } from "@playwright/test";
import { BASE_URL } from "./utils/consts";

test.describe("view todolist page", () => {
  test("get page title", async ({ page }) => {
    await page.goto(BASE_URL);

    await expect(page).toHaveTitle(/todolist next.js/);
  });

  test("open modal", async ({ page }) => {
    await page.goto(BASE_URL);

    const modalButton = page.locator("id=new");
    await modalButton.click();
    await page.waitForURL(`${BASE_URL}/?modal=true`);

    expect(page.url()).toBe(`${BASE_URL}/?modal=true`);
  });
});
