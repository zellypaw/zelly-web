import { test, expect } from '@playwright/test';

test.describe('Event Page Scroll Snapping', () => {
  test('should snap back to the very top (y=0) of the Hero section', async ({ page }) => {
    // Navigate to the event page
    await page.goto('/event');
    
    // Wait for the page to load
    await page.waitForSelector('main');
    
    const main = page.locator('main');
    
    // 1. Initial State: Hero section should be visible, Prize section should NOT be visible (or at least its title)
    const prizeTitle = page.locator('#prize-section h2');
    await expect(prizeTitle).not.toBeInViewport();
    
    // 2. Scroll down to the prize section
    await prizeTitle.scrollIntoViewIfNeeded();
    // Give it a moment to snap
    await page.waitForTimeout(1000);
    
    // 3. Scroll back up to the hero section
    const heroSection = page.locator('section').first();
    await heroSection.scrollIntoViewIfNeeded();
    // Give it a moment to snap
    await page.waitForTimeout(2000);
    
    // 4. Verify scroll position is at the top
    const scrollTop = await main.evaluate((el) => el.scrollTop);
    console.log(`Scroll Top after snapping back to Hero: ${scrollTop}`);
    
    // Verification: ScrollTop should be 0 if perfectly snapped
    // We allow a small margin if there's any browser offset, but it should be very close to 0
    expect(scrollTop).toBeLessThan(5);
    
    // 5. Verify Prize section title is NOT visible in the viewport when at the top
    // The user reported seeing this text at the bottom of the hero section
    const isPrizeTitleVisible = await prizeTitle.isVisible();
    const prizeBox = await prizeTitle.boundingBox();
    const viewportHeight = page.viewportSize()?.height || 0;
    
    if (prizeBox) {
      console.log(`Prize title Y position: ${prizeBox.y}, Viewport Height: ${viewportHeight}`);
      // Prize title should be below the viewport
      expect(prizeBox.y).toBeGreaterThanOrEqual(viewportHeight);
    }
  });
});
