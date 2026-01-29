/**
 * Example Playwright Test Demonstrating Various Features
 * 
 * This test file showcases different Playwright testing capabilities
 * including assertions, locators, and interactions.
 */

const { test, expect } = require('@playwright/test');

test.describe('Playwright Examples - Advanced Features', () => {
  test('example: taking screenshots', async ({ page }) => {
    await page.goto('/');
    
    // Take a screenshot with timestamp for uniqueness
    const timestamp = Date.now();
    await page.screenshot({ 
      path: `test-results/homepage-${timestamp}.png`, 
      fullPage: true 
    });
    
    // Verify page loaded
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('example: working with multiple elements', async ({ page }) => {
    await page.goto('/docs/intro');
    
    // Get all links on the page
    const links = await page.getByRole('link').all();
    
    // Verify we have navigation elements
    expect(links.length).toBeGreaterThan(0);
  });

  test('example: using different locator strategies', async ({ page }) => {
    await page.goto('/');
    
    // Locate by role
    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();
    
    // Locate by text (case-insensitive)
    const getStartedLink = page.getByText(/get started/i);
    
    // Check if element exists (but don't fail if not found)
    const count = await getStartedLink.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('example: checking page content and text', async ({ page }) => {
    await page.goto('/');
    
    // Get text content from the body
    const bodyText = await page.textContent('body');
    
    // Verify page contains relevant content
    expect(bodyText).toBeTruthy();
    expect(bodyText.length).toBeGreaterThan(100);
  });

  test('example: working with page URLs', async ({ page }) => {
    // Navigate to homepage
    await page.goto('/');
    
    // Verify the URL
    await expect(page).toHaveURL('https://playwright.dev/');
    
    // Navigate to a docs page
    await page.goto('/docs/intro');
    
    // Verify URL contains expected path
    await expect(page).toHaveURL(/\/docs\/intro/);
  });

  test.skip('example: testing form interactions (skipped - no forms on this site)', async ({ page }) => {
    // This is an example of how to test forms
    // Skip this test as playwright.dev doesn't have login forms
    
    await page.goto('/');
    
    // Example of filling a form
    // await page.fill('input[name="email"]', 'test@example.com');
    // await page.fill('input[name="password"]', 'password123');
    // await page.click('button[type="submit"]');
  });

  test('example: waiting for page load and elements', async ({ page }) => {
    await page.goto('/docs/intro');
    
    // Wait for the main content to be visible
    const main = page.locator('main');
    await main.waitFor({ state: 'visible' });
    
    await expect(main).toBeVisible();
  });
});

// Example: Using test hooks (beforeEach, afterEach)
test.describe('Playwright Examples - Test Hooks', () => {
  test.beforeEach(async ({ page }) => {
    // This runs before each test in this describe block
    await page.goto('/');
  });

  test('example: using beforeEach hook', async ({ page }) => {
    // Page is already at '/' thanks to beforeEach
    await expect(page).toHaveURL('https://playwright.dev/');
  });

  test('example: checking viewport', async ({ page }) => {
    // Check the viewport size
    const viewport = page.viewportSize();
    
    expect(viewport.width).toBeGreaterThan(0);
    expect(viewport.height).toBeGreaterThan(0);
  });
});
