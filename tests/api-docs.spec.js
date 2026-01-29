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

  test('should have structured API documentation', async ({ page }) => {
    await page.goto('/docs/api/class-playwright');

    // Check for headings which indicate structured documentation
    const headings = page.locator('h1, h2, h3, h4');
    const headingCount = await headings.count();
    
    // API docs should have multiple sections with headings
    expect(headingCount).toBeGreaterThan(1);
    
    // Verify there's substantial documentation content
    const bodyText = await page.textContent('body');
    expect(bodyText.length).toBeGreaterThan(300);
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
  test('should load browsers documentation page', async ({ page }) => {
    await page.goto('/docs/browsers');

    // Verify we're on browsers page
    await expect(page).toHaveURL(/\/docs\/browsers/);

    // Verify page has headings (structured content)
    const headings = page.locator('h1, h2, h3');
    const headingCount = await headings.count();
    expect(headingCount).toBeGreaterThan(0);
    
    // Verify the page has documentation content
    const bodyText = await page.textContent('body');
    expect(bodyText.length).toBeGreaterThan(200);
  });
});
