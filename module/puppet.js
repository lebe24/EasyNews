const puppeteer = require('puppeteer');

const withBrowser = async (fn) => {
	const browser = await puppeteer.launch({headless: true});
	try {
		return await fn(browser);
	} finally {
		await browser.close();
	}
}

const withPage = (browser) => async (fn) => {
	const page = await browser.newPage();
	try {
		return await fn(page);
	} finally {
		await page.close();
	}
}

module.exports = {
    withBrowser,
    withPage
}