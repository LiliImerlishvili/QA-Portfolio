import { Page } from 'playwright';
import { config } from '../../config/config';
import { logger } from '../../utils/logger';

/**
 * BasePage provides common navigation, interaction, and wait utilities
 * shared across all Page Object Models.
 */
export abstract class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  protected get baseUrl(): string {
    return config.api.baseUrl;
  }

  async navigate(path = ''): Promise<void> {
    const url = `${this.baseUrl}${path}`;
    logger.debug(`Navigating to ${url}`);
    await this.page.goto(url, { timeout: config.timeouts.navigation });
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }

  async waitForUrl(pattern: string | RegExp): Promise<void> {
    await this.page.waitForURL(pattern, { timeout: config.timeouts.navigation });
  }

  async takeScreenshot(name: string): Promise<Buffer> {
    return this.page.screenshot({ path: `reports/screenshots/${name}.png`, fullPage: true });
  }

  async clickByTestId(testId: string): Promise<void> {
    await this.page.getByTestId(testId).click();
  }

  async fillByTestId(testId: string, value: string): Promise<void> {
    await this.page.getByTestId(testId).fill(value);
  }

  async getTextByTestId(testId: string): Promise<string> {
    return this.page.getByTestId(testId).innerText();
  }

  async isVisible(testId: string): Promise<boolean> {
    return this.page.getByTestId(testId).isVisible();
  }

  async waitForVisible(testId: string): Promise<void> {
    await this.page.getByTestId(testId).waitFor({ state: 'visible', timeout: config.timeouts.ui });
  }

  async waitForHidden(testId: string): Promise<void> {
    await this.page.getByTestId(testId).waitFor({ state: 'hidden', timeout: config.timeouts.ui });
  }
}
