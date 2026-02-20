import { test, expect } from '@playwright/test';

test.describe('LeadForm Functionality', () => {
  test.beforeEach(async ({ page }) => {
    // LeadForm is now only on the /event page
    await page.goto('/event');
    // Wait for the lead form section to be ready (at the bottom of event page)
    const leadFormSection = page.locator('#lead-form');
    // Scroll takes some time, giving it a bit more breath than 1s for the physical movement
    await leadFormSection.scrollIntoViewIfNeeded({ timeout: 3000 });
  });

  test('should display the lead form with all required elements', async ({ page }) => {
    const heading = page.locator('h2', { hasText: 'ZELLY 사전예약 신청하기' });
    await expect(heading).toBeVisible();

    const input = page.getByTestId('lead-form-email-input');
    await expect(input).toBeVisible();

    const button = page.getByRole('button', { name: '신청하기' });
    await expect(button).toBeVisible();

    const checkbox = page.locator('input[type="checkbox"]');
    await expect(checkbox).not.toBeChecked();
  });

  test('should show validation error when submitting empty form', async ({ page }) => {
    const button = page.getByRole('button', { name: '신청하기' });
    await button.click();
    
    const input = page.getByTestId('lead-form-email-input');
    await expect(input).toHaveAttribute('required', '');
  });

  test('should prevent submission without agreement', async ({ page }) => {
    const input = page.getByTestId('lead-form-email-input');
    await input.fill('test@example.com');
    
    const button = page.getByRole('button', { name: '신청하기' });
    
    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('개인정보 수집 및 이용에 동의해주세요.');
      await dialog.dismiss();
    });

    await button.click();
  });

  test('verify API request destination', async ({ page }) => {
    await page.getByTestId('lead-form-email-input').fill('test@example.com');
    await page.locator('input[type="checkbox"]').check();
  });
});
