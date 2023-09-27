/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line no-undef
const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
	await page.goto('http://localhost:9100');

	await expect(page).toHaveTitle(/wp-env-codespace/);
});
