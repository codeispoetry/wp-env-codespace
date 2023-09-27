const { devices } = require('@playwright/test');

const TEST_URL = process.env.TEST_URL || 'http://localhost:8888';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = {
	testDir: 'plugins/',
	testMatch: /.*.js/,
	timeout: 120 * 1000,
	expect: {
		timeout: 60 * 1000,
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
