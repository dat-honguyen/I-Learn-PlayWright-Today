const { test, expect } = require('@playwright/test');

test.describe('Playwright Homepage Tests', () => {
  test('should have correct title and display homepage', async ({ page }) => {
    // Navigate to Playwright homepage
    await page.goto('/');

    // Check title
    await expect(page).toHaveTitle(/Playwright/);

    // Check for main heading
    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();

    // Check for Get Started button
    const getStartedButton = page.getByRole('link', { name: /get started/i });
    await expect(getStartedButton).toBeVisible();
  });

  test('should navigate to Getting Started page', async ({ page }) => {
    await page.goto('/');

    // Click on Getting Started link
    await page.getByRole('link', { name: /get started/i }).first().click();

    // Wait for navigation
    await page.waitForURL(/\/docs\/intro/);

    // Verify we're on the docs page
    await expect(page).toHaveURL(/\/docs\/intro/);
    
    // Check that the page has content
    const mainContent = page.locator('main');
    await expect(mainContent).toBeVisible();
  });

  test('should have navigation menu', async ({ page }) => {
    await page.goto('/');

    // Check for navigation elements
    const nav = page.locator('nav').first();
    await expect(nav).toBeVisible();

    // Check for Docs link
    const docsLink = page.getByRole('link', { name: /docs/i }).first();
    await expect(docsLink).toBeVisible();
  });

  test('should display main content sections', async ({ page }) => {
    await page.goto('/');

    // Verify main content area exists
    const main = page.locator('main, article, .content, [role="main"]').first();
    
    // Check that the page has substantial content
    const bodyText = await page.textContent('body');
    expect(bodyText.length).toBeGreaterThan(500);
    
    // Verify page is interactive (has clickable elements)
    const links = await page.getByRole('link').all();
    expect(links.length).toBeGreaterThan(3);
  });
});
