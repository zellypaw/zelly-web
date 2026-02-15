import { test, expect } from '@playwright/test';

test.describe('Banner-Hero Holistic Transition', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
    // Ensure the banner is visible initially
    const banner = page.getByTestId('event-banner');
    await expect(banner).toBeVisible();
  });

  test('Transition Consistency: Snatch vs Close Button', async ({ page }) => {
    const hero = page.getByTestId('hero-section');
    const heroHeadline = hero.locator('h2');
    const closeButton = page.locator('button[aria-label="Close banner"]');

    // --- CASE A: Snatch (Scroll past banner) ---
    console.log('Testing Case A: Snatch');
    // Scroll past the banner (approx 110px) to trigger snap to Hero
    await page.mouse.wheel(0, 400);
    await page.waitForTimeout(2000); // Wait for snap animation to stabilize
    
    const snatchHeadlineY = (await heroHeadline.boundingBox())?.y;
    const snatchSectionY = (await hero.boundingBox())?.y;
    console.log(`Snatch Results: headlineY=${snatchHeadlineY}, sectionY=${snatchSectionY}`);

    // --- CASE B: Close Button (Reset and click X) ---
    console.log('Testing Case B: Close Button');
    await page.reload();
    await closeButton.click();
    await page.waitForTimeout(2000); // Wait for close animation + re-snap

    const closeHeadlineY = (await heroHeadline.boundingBox())?.y;
    const closeSectionY = (await hero.boundingBox())?.y;
    console.log(`Close Results: headlineY=${closeHeadlineY}, sectionY=${closeSectionY}`);

    // --- COMPARISON ---
    console.log(`Difference: ${Math.abs((snatchHeadlineY || 0) - (closeHeadlineY || 0))}`);
    expect(Math.abs((snatchHeadlineY || 0) - (closeHeadlineY || 0))).toBeLessThanOrEqual(2);
  });

  test('Visibility: Hero Scroll Indicator must not be cut off', async ({ page }) => {
    const arrow = page.getByTestId('scroll-indicator');
    
    // Check in both Snatch and Close states
    const states = ['snatch', 'close'];
    for (const state of states) {
      if (state === 'snatch') {
        await page.mouse.wheel(0, 400);
      } else {
        await page.reload();
        await page.locator('button[aria-label="Close banner"]').click();
      }
      await page.waitForTimeout(1500);

      const arrowBox = await arrow.boundingBox();
      const viewport = page.viewportSize();
      
      if (arrowBox && viewport) {
        const arrowBottom = arrowBox.y + arrowBox.height;
        console.log(`${state} - Arrow Bottom: ${arrowBottom}, Viewport Height: ${viewport.height}`);
        expect(arrowBottom).toBeLessThanOrEqual(viewport.height - 10);
      }
    }
  });

  test('Regression: Subsequent sections stop exactly once', async ({ page }) => {
    const problemSection = page.locator('#problem-overview');
    
    await problemSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500);
    
    const scrollTop = await page.evaluate(() => document.querySelector('.snap-y')?.scrollTop);
    await page.mouse.wheel(0, 30);
    await page.waitForTimeout(1000);
    const nudgedScrollTop = await page.evaluate(() => document.querySelector('.snap-y')?.scrollTop);
    
    console.log(`Problem Snap Check: initial=${scrollTop}, nudged=${nudgedScrollTop}`);
    expect(Math.abs((scrollTop || 0) - (nudgedScrollTop || 0))).toBeLessThanOrEqual(5);
  });
});
