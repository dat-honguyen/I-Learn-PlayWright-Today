const { test, expect } = require('@playwright/test');

test.describe('API Documentation Tests', () => {
  test('should load API documentation', async ({ page }) => {
    await page.goto('/docs/api/class-playwright');

    // Verify we're on an API doc page
    await expect(page).toHaveURL(/\/docs\/api/);

    // Check that the page has loaded content
    const body = page.locator('body');
    await expect(body).toBeVisible();
  });

  test('should have API class documentation', async ({ page }) => {
    await page.goto('/docs/api/class-playwright');

    // Check for typical API documentation elements
    const pageContent = await page.textContent('body');
    
    // API docs should have class/method information
    const hasAPIContent = 
      pageContent.includes('class') || 
      pageContent.includes('method') ||
      pageContent.includes('property');
    
    expect(hasAPIContent).toBeTruthy();
  });

  test('should display code examples in API docs', async ({ page }) => {
    await page.goto('/docs/api/class-playwright');

    // Look for code blocks
    const codeBlocks = page.locator('code, pre');
    const count = await codeBlocks.count();
    
    // API documentation should have code examples
    expect(count).toBeGreaterThan(0);
  });
});

test.describe('Browser Support Information', () => {
  test('should have information about supported browsers', async ({ page }) => {
    await page.goto('/docs/browsers');

    // Verify we're on browsers page
    await expect(page).toHaveURL(/\/docs\/browsers/);

    // Check for browser-related content
    const pageContent = await page.textContent('body');
    
    const hasBrowserInfo = 
      pageContent.includes('browser') || 
      pageContent.includes('chromium') ||
      pageContent.includes('firefox') ||
      pageContent.includes('webkit');
    
    expect(hasBrowserInfo).toBeTruthy();
  });
});
