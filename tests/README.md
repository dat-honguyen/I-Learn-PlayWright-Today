# Playwright Learning Examples

This directory contains various test examples demonstrating Playwright's capabilities.

## Test Files

### 1. `homepage.spec.js`
Basic tests for the Playwright homepage including:
- Title verification
- Navigation testing
- Element visibility checks
- Button and link interactions

### 2. `documentation.spec.js`
Tests for the documentation pages:
- Loading documentation pages
- Sidebar navigation
- Installation instructions
- Multi-section navigation

### 3. `api-docs.spec.js`
API documentation specific tests:
- API documentation loading
- Class documentation verification
- Code examples checking
- Browser support information

### 4. `examples.spec.js`
Advanced examples showcasing:
- Screenshot capabilities
- Multiple element handling
- Different locator strategies
- Page content verification
- URL navigation
- Test hooks (beforeEach, afterEach)
- Viewport testing

## Running Specific Tests

Run a specific test file:
```bash
npx playwright test tests/homepage.spec.js
```

Run a specific test by name:
```bash
npx playwright test -g "should have correct title"
```

Run tests in debug mode:
```bash
npx playwright test --debug
```

## Test Patterns Used

### Locators
- `page.getByRole()` - Accessible role-based locators
- `page.getByText()` - Text content locators
- `page.locator()` - CSS/selector locators

### Assertions
- `expect(page).toHaveTitle()` - Page title assertions
- `expect(element).toBeVisible()` - Visibility assertions
- `expect(page).toHaveURL()` - URL assertions
- `expect(value).toBeGreaterThan()` - Numeric comparisons

### Navigation
- `page.goto()` - Navigate to URLs
- `page.click()` - Click elements
- `page.waitForURL()` - Wait for navigation

## Best Practices Demonstrated

1. **Use meaningful test descriptions** - Each test clearly states what it's testing
2. **Use role-based selectors** - Prefer accessibility-focused locators
3. **Add proper waits** - Wait for elements and navigation
4. **Group related tests** - Use `test.describe()` blocks
5. **Use test hooks** - Share setup logic with `beforeEach()`
6. **Handle edge cases** - Use `.count()` to check element existence

## Learn More

- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Writing Tests](https://playwright.dev/docs/writing-tests)
- [Locators](https://playwright.dev/docs/locators)
- [Assertions](https://playwright.dev/docs/test-assertions)
