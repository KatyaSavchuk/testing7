// tests/e2e/local.test.js
const { test, expect } = require('@playwright/test');

// Тест для перевірки форми входу
test('Перевірка форми входу', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.fill('#username', 'test_user');
  await page.fill('#password', 'password123');
  await page.click('#loginButton');
  await expect(page.locator('#successMessage')).toBeVisible();
});

// Тест для перевірки заголовка сторінки
test('Перевірка заголовка сторінки', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle(/Локальна сторінка/);
});

// Тест для перевірки обов’язкових полів форми
test('Валідація обов’язкових полів форми', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.click('#loginButton');
  const error = await page.evaluate(() => document.querySelector(':invalid'));
  expect(error).not.toBeNull();
});
 
