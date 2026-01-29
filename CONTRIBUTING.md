# Contributing to I-Learn-PlayWright-Today

Thank you for your interest in contributing to this Playwright learning project!

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/I-Learn-PlayWright-Today.git
   cd I-Learn-PlayWright-Today
   ```
3. Install dependencies:
   ```bash
   npm install
   npx playwright install
   ```

## Adding New Tests

When adding new test examples:

1. Create a new `.spec.js` file in the `tests/` directory
2. Follow the existing naming convention: `feature-name.spec.js`
3. Add descriptive test names and comments
4. Use `test.describe()` to group related tests
5. Include examples of different Playwright features

### Test Example Template

```javascript
const { test, expect } = require('@playwright/test');

test.describe('Feature Name Tests', () => {
  test('should test specific behavior', async ({ page }) => {
    await page.goto('/path');
    
    // Your test logic here
    await expect(page).toHaveTitle(/Expected Title/);
  });
});
```

## Code Style

- Use meaningful variable and function names
- Add comments to explain complex logic
- Follow existing code formatting
- Use async/await for asynchronous operations

## Testing Your Changes

Before submitting:

1. Run all tests:
   ```bash
   npm test
   ```

2. Run tests in headed mode to visually verify:
   ```bash
   npm run test:headed
   ```

3. Check for any warnings or errors

## Submitting Changes

1. Commit your changes with clear messages:
   ```bash
   git add .
   git commit -m "Add: description of your changes"
   ```

2. Push to your fork:
   ```bash
   git push origin main
   ```

3. Create a Pull Request from your fork to the main repository

## Types of Contributions

- Add new test examples
- Improve existing tests
- Fix bugs or issues
- Improve documentation
- Add new Playwright features demonstrations

## Questions?

Feel free to open an issue if you have questions or suggestions!
