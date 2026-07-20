import {
  Before,
  After,
  AfterStep,
  BeforeAll,
  AfterAll,
  Status,
  setDefaultTimeout,
} from '@cucumber/cucumber';
import { request, chromium, APIRequestContext } from 'playwright';
import * as fs from 'fs';
import { CustomWorld } from './world';
import { config } from '../config/config';
import { logger } from '../utils/logger';
import { maskSensitiveData } from '../utils/maskSensitiveData';

// ─── Global timeout ───────────────────────────────────────────────────────────
setDefaultTimeout(config.timeouts.ui);

// ─── Ensure report directories exist ─────────────────────────────────────────
BeforeAll(async () => {
  for (const dir of ['reports', 'reports/screenshots', 'reports/videos', 'reports/traces']) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  }
});

// ─── API Context setup ────────────────────────────────────────────────────────
Before({ tags: '@api' }, async function (this: CustomWorld) {
  this.apiContext = await request.newContext({
    baseURL: config.api.baseUrl,
    timeout: config.timeouts.api,
    extraHTTPHeaders: { 'Content-Type': 'application/json' },
  });

  const originalFetch = this.apiContext.fetch.bind(this.apiContext);
  type ApiFetch = APIRequestContext['fetch'];
  type ApiFetchUrl = Parameters<ApiFetch>[0];
  type ApiFetchOptions = Parameters<ApiFetch>[1];

  const apiContextWithMutableFetch = this.apiContext as APIRequestContext & {
    fetch: ApiFetch;
  };

  apiContextWithMutableFetch.fetch = async (url: ApiFetchUrl, options?: ApiFetchOptions) => {
    const response = await originalFetch(url, options);

    const rawResponseText = await response.text();
    let parsedResponseBody: unknown = rawResponseText;
    try {
      parsedResponseBody = JSON.parse(rawResponseText);
    } catch {
      // Keep raw text if not JSON
    }

    const rawRequestBody = options?.data;
    let parsedRequestBody: unknown = rawRequestBody ?? null;
    if (typeof rawRequestBody === 'string') {
      try {
        parsedRequestBody = JSON.parse(rawRequestBody);
      } catch {
        parsedRequestBody = rawRequestBody;
      }
    }

    this.lastApiExchange = {
      timestamp: new Date().toISOString(),
      method: options?.method ?? 'GET',
      url: typeof url === 'string' ? url : String(url),
      requestHeaders: (options?.headers as Record<string, string> | undefined) ?? undefined,
      requestBody: parsedRequestBody,
      status: response.status(),
      responseHeaders: response.headers(),
      responseBody: parsedResponseBody,
    };

    if (response.status() >= 400) {
      logger.error(
        `API ${this.lastApiExchange.method} ${this.lastApiExchange.url} failed with status ${this.lastApiExchange.status}`,
        {
          requestBody: this.lastApiExchange.requestBody,
          responseBody: this.lastApiExchange.responseBody,
        },
      );
    }

    return response;
  };

  logger.debug('API context created');
});

AfterStep({ tags: '@api' }, async function (this: CustomWorld) {
  if (!this.lastApiExchange) return;

  await this.attach(
    `API ${this.lastApiExchange.method} ${this.lastApiExchange.url} -> ${this.lastApiExchange.status}`,
    'text/plain',
  );
  await this.attach(
  JSON.stringify(maskSensitiveData(this.lastApiExchange.requestBody), null, 2),
  'application/json',
);

await this.attach(
  JSON.stringify(maskSensitiveData(this.lastApiExchange.responseBody), null, 2),
  'application/json',
);

  this.lastApiExchange = null;
});

After({ tags: '@api' }, async function (this: CustomWorld) {
  await this.apiContext?.dispose();
  logger.debug('API context disposed');
});

// ─── Browser Context setup ────────────────────────────────────────────────────
Before({ tags: '@ui' }, async function (this: CustomWorld, scenario) {
  this.browser = await chromium.launch({
    headless: config.browser.headless,
    slowMo: config.browser.slowMo,
  });

  this.browserContext = await this.browser.newContext({
    viewport: config.browser.viewport,
    recordVideo: { dir: 'reports/videos/' },
  });

  await this.browserContext.tracing.start({ screenshots: true, snapshots: true });

  this.page = await this.browserContext.newPage();
  logger.debug(`Browser context created for: ${scenario.pickle.name}`);
});

After({ tags: '@ui' }, async function (this: CustomWorld, scenario) {
  if (scenario.result?.status === Status.FAILED) {
    // Screenshot on failure
    const name = scenario.pickle.name.replace(/\W+/g, '-');
    await this.page?.screenshot({ path: `reports/screenshots/${name}.png`, fullPage: true });

    // Save trace
    await this.browserContext?.tracing.stop({
      path: `reports/traces/${name}.zip`,
    });
  } else {
    await this.browserContext?.tracing.stop();
  }

  await this.browserContext?.close();
  await this.browser?.close();
  logger.debug('Browser context closed');
});

// ─── Shared (both API + UI) ───────────────────────────────────────────────────
After(async function (this: CustomWorld, scenario) {
  if (scenario.result?.status === Status.FAILED) {
    logger.error(`Scenario FAILED: ${scenario.pickle.name}`, {
      status: scenario.result.status,
    });
  }
});

AfterAll(async () => {
  logger.info('Test run complete');
});
