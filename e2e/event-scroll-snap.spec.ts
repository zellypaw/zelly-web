import { test, expect } from '@playwright/test';

test.describe('Event Page Scroll Snapping', () => {
  test('should snap back to the very top (y=0) of the Hero section', async ({ page }) => {
    // Navigate to the event page
    await page.goto('/event');
    
    // Wait for the page to load
    await page.waitForSelector('main', { timeout: 3000 });
    
    const main = page.locator('main');
    
    // 1. Initial State: Hero section should be visible
    const prizeTitle = page.locator('#prize-section h3').first();
    await expect(prizeTitle).not.toBeInViewport();
    
    // 2. Scroll down to the prize section
    await prizeTitle.scrollIntoViewIfNeeded({ timeout: 3000 });
    // Give it a moment to snap (animation takes time)
    await page.waitForTimeout(1000);
    
    // 3. Scroll back up to the hero section
    const heroSection = page.locator('section').first();
    await heroSection.scrollIntoViewIfNeeded({ timeout: 3000 });
    // Snap animation needs some physical time
    await page.waitForTimeout(1000);
    
    // 4. Verify scroll position is at the top
    const scrollTop = await main.evaluate((el) => el.scrollTop);
    console.log(`Scroll Top after snapping back to Hero: ${scrollTop}`);
    
    expect(scrollTop).toBeLessThan(10);
    
    // 5. Verify Prize section title is NOT visible
    const prizeBox = await prizeTitle.boundingBox();
    const viewportHeight = page.viewportSize()?.height || 0;
    
    if (prizeBox) {
      console.log(`Prize title Y position: ${prizeBox.y}, Viewport Height: ${viewportHeight}`);
      expect(prizeBox.y).toBeGreaterThanOrEqual(viewportHeight - 5);
    }
  });
});
