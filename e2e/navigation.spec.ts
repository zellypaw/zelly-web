import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should load the home page', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/젤리 | 반려동물 성장 앨범/);
  });

  test('should navigate to the contact page', async ({ page }) => {
    await page.goto('/contact');
    
    // Check if the contact page content is loaded (not redirected to home)
    const heading = page.locator('h1');
    await expect(heading).toContainText('Contact us');
  });

  test('should navigate to the notice page', async ({ page }) => {
    await page.goto('/notice');
    const title = page.locator('h1');
    await expect(title).toContainText('공지사항');
  });
});
