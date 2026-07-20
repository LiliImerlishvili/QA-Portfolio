import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { CustomWorld } from './world';

// Default timeout for all steps (ms).
setDefaultTimeout(60_000);

Before(async function (this: CustomWorld) {
  const headless = process.env.HEADLESS !== 'false';

  this.browser = await chromium.launch({
    headless,
    slowMo: headless ? 0 : 50,
    args: [
      '--no-sandbox',
      '--disable-blink-features=AutomationControlled',
    ],
  });

  this.context = await this.browser.newContext({
    // Use a realistic user-agent so bot-detection middleware doesn't block the session.
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 ' +
      '(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    viewport: { width: 1280, height: 800 },
  });

  this.page = await this.context.newPage();
});

After(async function (this: CustomWorld) {
  await this.page?.close();
  await this.context?.close();
  await this.browser?.close();
});
