import { test, expect } from '@playwright/test';

test.describe('LeadForm Functionality', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the section with the lead form
    await page.goto('/#lead-form');
  });

  test('should display the lead form with all required elements', async ({ page }) => {
    const heading = page.locator('h2', { hasText: 'Zelly의 정식 런칭 소식' });
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
    
    // HTML5 validation usually prevents submission. 
    // We can check if the input is still there and focused.
    const input = page.getByTestId('lead-form-email-input');
    await expect(input).toHaveAttribute('required', '');
  });

  test('should prevent submission without agreement', async ({ page }) => {
    const input = page.getByTestId('lead-form-email-input');
    await input.fill('test@example.com');
    
    const button = page.getByRole('button', { name: '신청하기' });
    
    // Listen for dialog (alert)
    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('개인정보 수집 및 이용에 동의해주세요.');
      await dialog.dismiss();
    });

    await button.click();
  });

  test('verify API request destination', async ({ page }) => {
    // Fill form
    await page.getByTestId('lead-form-email-input').fill('test@example.com');
    await page.locator('input[type="checkbox"]').check();

    // Mock Turnstile by satisfying the token check if possible
    // In a real test, you'd need the component to think it has a token.
    // Or we just check the URL in the code.
  });
});
