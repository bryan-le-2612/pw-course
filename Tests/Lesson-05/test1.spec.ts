import { test } from '@playwright/test';
test('Basic test', async ({ page }) => {
  await test.step('step1', async () => {
    await page.goto('https://material.playwrightvn.com/');
    await page.locator('text=Bài học 1: Register Page (có đủ các element)') .click();
    await page.waitForTimeout(1000);
  });
});