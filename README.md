# I-Learn-PlayWright-Today

A Playwright testing project that demonstrates automated testing of the [Playwright documentation website](https://playwright.dev).

## 📋 Overview

This project contains example Playwright tests that test various features of the Playwright website itself, including:
- Homepage functionality
- Documentation navigation
- API documentation
- Browser support information

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/dat-honguyen/I-Learn-PlayWright-Today.git
cd I-Learn-PlayWright-Today
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## 🧪 Running Tests

### Run all tests
```bash
npm test
```

### Run tests in headed mode (see browser)
```bash
npm run test:headed
```

### Run tests in UI mode (interactive)
```bash
npm run test:ui
```

### Run tests on specific browsers
```bash
npm run test:chromium
npm run test:firefox
npm run test:webkit
```

### View test report
```bash
npm run test:report
```

## 📁 Project Structure

```
I-Learn-PlayWright-Today/
├── tests/
│   ├── homepage.spec.js       # Tests for Playwright homepage
│   ├── documentation.spec.js  # Tests for documentation pages
│   └── api-docs.spec.js       # Tests for API documentation
├── playwright.config.js        # Playwright configuration
├── package.json               # Project dependencies and scripts
└── README.md                  # This file
```

## 🧰 Configuration

The project is configured to run tests on:
- Chromium
- Firefox
- WebKit

Configuration can be modified in `playwright.config.js`.

## 📝 Test Examples

### Homepage Test
```javascript
test('should have correct title and display homepage', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Playwright/);
});
```

### Documentation Navigation Test
```javascript
test('should navigate to Getting Started page', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: /get started/i }).first().click();
  await expect(page).toHaveURL(/\/docs\/intro/);
});
```

## 📚 Learn More

- [Playwright Documentation](https://playwright.dev)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Best Practices](https://playwright.dev/docs/best-practices)

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

ISC