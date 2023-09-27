/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line no-undef
const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
	await page.goto('http://localhost:9101');
	const pageContent = await page.textContent();

	expect(pageContent.toContain('Mindblown'));
});
