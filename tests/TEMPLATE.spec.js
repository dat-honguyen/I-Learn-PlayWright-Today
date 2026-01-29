/**
 * Template for Creating New Playwright Tests
 * 
 * Copy this file and rename it to create your own tests.
 * Example: my-feature.spec.js
 */

const { test, expect } = require('@playwright/test');

// Group related tests using test.describe
test.describe('Your Feature Name', () => {
  
  // Optional: Run before each test in this group
  test.beforeEach(async ({ page }) => {
    // Setup code that runs before each test
    await page.goto('/');
  });

  // Basic test example
  test('should do something specific', async ({ page }) => {
    // Navigate to a page
    await page.goto('/your-path');
    
    // Interact with elements
    await page.click('button#your-button');
    
    // Make assertions
    await expect(page).toHaveTitle(/Expected Title/);
  });

  // Test with different locators
  test('should find elements using different strategies', async ({ page }) => {
    await page.goto('/');
    
    // By role (recommended)
    const button = page.getByRole('button', { name: 'Submit' });
    
    // By text
    const link = page.getByText('Click here');
    
    // By CSS selector
    const element = page.locator('.my-class');
    
    // By test ID
    const testElement = page.getByTestId('my-test-id');
    
    // Make assertions
    await expect(button).toBeVisible();
  });

  // Test with form interactions
  test('should handle form inputs', async ({ page }) => {
    await page.goto('/form-page');
    
    // Fill text inputs
    await page.fill('input[name="username"]', 'testuser');
    await page.fill('input[name="email"]', 'test@example.com');
    
    // Select from dropdown
    await page.selectOption('select[name="country"]', 'US');
    
    // Check checkbox
    await page.check('input[type="checkbox"]');
    
    // Click submit
    await page.click('button[type="submit"]');
    
    // Wait for navigation or response
    await page.waitForURL('**/success');
  });

  // Test with waiting for elements
  test('should wait for elements to appear', async ({ page }) => {
    await page.goto('/');
    
    // Wait for element to be visible
    await page.waitForSelector('.loaded-content', { state: 'visible' });
    
    // Wait for network to be idle
    await page.waitForLoadState('networkidle');
    
    // Assertions
    const content = page.locator('.loaded-content');
    await expect(content).toBeVisible();
  });

  // Test with screenshots
  test('should take screenshots', async ({ page }) => {
    await page.goto('/');
    
    // Use unique filenames with timestamp to avoid conflicts in parallel execution
    const timestamp = Date.now();
    
    // Full page screenshot
    await page.screenshot({ 
      path: `test-results/my-screenshot-${timestamp}.png`,
      fullPage: true 
    });
    
    // Element screenshot
    const element = page.locator('#specific-element');
    await element.screenshot({ 
      path: `test-results/element-screenshot-${timestamp}.png` 
    });
  });

  // Test that should be skipped
  test.skip('this test is skipped', async ({ page }) => {
    // This test will be skipped during execution
    await page.goto('/');
  });

  // Test that only runs when focused (use for debugging)
  // Remove the .only to run all tests, or use it alone for focused execution
  test('focused test for debugging', async ({ page }) => {
    // When you add .only to this test, it will be the only test that runs
    // Useful when developing/debugging a specific test
    // Example: test.only('focused test for debugging', async ({ page }) => {
    await page.goto('/');
  });
});

// Another describe block for different feature
test.describe('Another Feature', () => {
  
  test('should test another aspect', async ({ page }) => {
    await page.goto('/another-page');
    
    // Your test logic
    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();
  });
});

// Useful Playwright methods and assertions:
// 
// Navigation:
// - await page.goto(url)
// - await page.goBack()
// - await page.reload()
//
// Locators:
// - page.getByRole('button', { name: 'Submit' })
// - page.getByText('text')
// - page.getByLabel('label')
// - page.getByPlaceholder('placeholder')
// - page.getByTestId('test-id')
// - page.locator('css-selector')
//
// Interactions:
// - await element.click()
// - await element.fill('text')
// - await element.check()
// - await element.uncheck()
// - await element.selectOption('value')
//
// Assertions:
// - await expect(page).toHaveTitle('title')
// - await expect(page).toHaveURL('url')
// - await expect(element).toBeVisible()
// - await expect(element).toBeHidden()
// - await expect(element).toHaveText('text')
// - await expect(element).toHaveCount(number)
//
// Waiting:
// - await page.waitForSelector('selector')
// - await page.waitForURL('url')
// - await page.waitForLoadState('networkidle')
// - await element.waitFor()
