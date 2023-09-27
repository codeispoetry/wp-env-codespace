const { devices } = require('@playwright/test');

const TEST_URL = process.env.TEST_URL || 'http://localhost:9101';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = {
	testDir: 'tests/',
	testMatch: /.*.js/,
	timeout: 10 * 1000,
	expect: {
		timeout: 10 * 1000,
	},
	fullyParallel: false,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: 1,
	reporter: 'dot',
	use: {
		actionTimeout: 0,
		baseURL: TEST_URL,
		headless: true,
		trace: 'on-first-retry',
		video: {
			mode: 'retain-on-failure',
			size: { width: 640, height: 480 },
		},
	},

	projects: [
		{
			name: 'chromium',
			use: {
				...devices['Desktop Chrome'],
			},
		},
	],
};

module.exports = config;
