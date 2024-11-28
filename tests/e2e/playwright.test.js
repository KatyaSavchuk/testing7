const { test, expect } = require('@playwright/test');

// Тест для перевірки заголовка сайту
test('Перевірка заголовка сайту', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

// Тест для перевірки наявності меню навігації
test('Перевірка наявності меню навігації', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const nav = await page.locator('nav');
  await expect(nav).toBeVisible();
});

// Тест для перевірки переходу за посиланням
test('Перевірка перехід за посиланням', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.click('text=Get started');
  await expect(page).toHaveURL(/docs\/intro/);
});
 
