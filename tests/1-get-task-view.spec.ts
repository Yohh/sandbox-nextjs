import { test, expect } from "@playwright/test";
import { BASE_URL } from "./utils/consts";

test.describe("view todolist page", () => {
  test("get page title", async ({ page }) => {
    await page.goto(BASE_URL);

    await expect(page).toHaveTitle(/todolist next.js/);
  });

  test("get 'new' button", async ({ page }) => {
    await page.goto(BASE_URL);

    const newButton = await page.locator("text=New");

    expect(newButton).toBeTruthy();
  });
});
