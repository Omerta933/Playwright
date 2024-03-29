import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://lifelenshcp.azurewebsites.net/login');
  await page.getByLabel('Enter your work email address.').click();
  await page.getByLabel('Enter your work email address.').fill('okurza@lifelenstech.com');
  await page.getByLabel('Enter your password.').click();
  await page.getByLabel('Enter your password.').fill('Admin_777');
  await page.getByLabel('LOGIN button').click();
  await page.locator('a').filter({ hasText: 'Logout' }).click();
  await page.getByLabel('OK').click();
});