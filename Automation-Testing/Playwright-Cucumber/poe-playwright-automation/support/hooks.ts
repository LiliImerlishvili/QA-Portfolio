import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { CustomWorld } from './world';

setDefaultTimeout(60_000);

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({
    headless: false,
    slowMo: 50,
    args: ['--no-sandbox', '--disable-blink-features=AutomationControlled']
  });
  this.context = await this.browser.newContext({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    viewport: { width: 1280, height: 800 }
  });
  this.page = await this.context.newPage();
});

After(async function (this: CustomWorld) {
  await this.page?.close();
  await this.context?.close();
  await this.browser?.close();
});