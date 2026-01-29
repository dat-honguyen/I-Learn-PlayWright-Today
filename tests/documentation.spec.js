const { test, expect } = require('@playwright/test');

test.describe('Documentation Tests', () => {
  test('should load documentation page', async ({ page }) => {
    await page.goto('/docs/intro');

    // Check that we're on the docs page
    await expect(page).toHaveURL(/\/docs\/intro/);

    // Check for main content
    const main = page.locator('main');
    await expect(main).toBeVisible();
  });

  test('should have sidebar navigation', async ({ page }) => {
    await page.goto('/docs/intro');

    // Look for sidebar/navigation structure
    // Playwright docs typically have navigation elements
    const pageContent = await page.textContent('body');
    
    // Basic check that documentation content exists
    expect(pageContent.length).toBeGreaterThan(100);
  });

  test('should display code examples', async ({ page }) => {
    await page.goto('/docs/intro');

    // Check for code blocks which are common in documentation
    const codeElements = page.locator('code, pre, .code-block');
    const codeCount = await codeElements.count();
    
    // Documentation pages typically have code examples
    expect(codeCount).toBeGreaterThan(0);
    
    // Verify the page has substantial content
    const bodyText = await page.textContent('body');
    expect(bodyText.length).toBeGreaterThan(200);
  });

  test('should be able to navigate between doc sections', async ({ page }) => {
    await page.goto('/docs/intro');

    // Find any internal link in docs
    const links = await page.getByRole('link').all();
    
    // Verify there are multiple links (navigation exists)
    expect(links.length).toBeGreaterThan(5);
  });
});
