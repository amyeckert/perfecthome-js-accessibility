// Basic Playwright test to check for axe region landmark violation
// Requires: @playwright/test, axe-core/playwright

const { test, expect } = require('@playwright/test');
const { injectAxe, checkA11y } = require('axe-playwright');

test.describe('Accessibility', () => {
  const path = require('path');
  const fileUrl = 'file://' + path.resolve(__dirname, 'index.html');

  test.beforeEach(async ({ page }) => {
    await page.goto(fileUrl);
    await injectAxe(page);
  });

  test('All content is contained by landmarks (region rule)', async ({ page }) => {
    await checkA11y(page, null, {
      runOnly: ['region'],
      detailedReport: true,
      detailedReportOptions: { html: true },
    });
  });

  test('Selected rules smoke test (image-alt, label, heading-order)', async ({ page }) => {
    await checkA11y(page, null, {
      runOnly: {
        type: 'rule',
        values: ['image-alt', 'label', 'heading-order']
      },
      detailedReport: true,
      detailedReportOptions: { html: true },
    });
  });

  test('Additional focused rules (contrast, title, link-name, duplicate-id, lang, meta-viewport, ARIA)', async ({ page }) => {
    await checkA11y(page, null, {
      runOnly: {
        type: 'rule',
        values: [
          'color-contrast',
          'document-title',
          'link-name',
          'duplicate-id',
          'html-has-lang',
          'meta-viewport',
          'aria-allowed-attr',
          'aria-valid-attr'
        ]
      },
      detailedReport: true,
      detailedReportOptions: { html: true },
    });
  });

  test('Full page axe scan (all rules)', async ({ page }) => {
    // Run a full page scan; this will fail the test if any violations are found.
    await checkA11y(page, null, {
      detailedReport: true,
      detailedReportOptions: { html: true },
    });
  });
});
