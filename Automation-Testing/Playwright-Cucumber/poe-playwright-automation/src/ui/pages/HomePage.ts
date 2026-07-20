import { Page } from 'playwright';
import { BasePage } from './BasePage';

/**
 * Page Object for the Poe homepage.
 *
 * Poe redirects unauthenticated visitors from poe.com → poe.com/login.
 * This page object navigates to the root URL and verifies that redirect
 * and the elements available after it.
 */
export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // ─── Locators ───────────────────────────────────────────────────────────────

  /**
   * Logo link locator (visible after redirect to login page).
   */
  private logoLocator() {
    return this.page.getByRole('link', { name: 'Poe', exact: true });
  }

  /**
   * Email input locator (visible after redirect to login page).
   */
  private emailInputLocator() {
    return this.page.getByRole('textbox', { name: 'Email address' });
  }

  /**
   * Google login button locator (visible after redirect to login page).
   */
  private googleButtonLocator() {
    return this.page.getByRole('button', { name: 'Continue with Google' });
  }

  // ─── Actions ────────────────────────────────────────────────────────────────

  /**
   * Navigate to the Poe root URL.
   * Poe redirects to /login for unauthenticated users.
   */
  async open(): Promise<void> {
    await this.page.goto('https://poe.com', {
      waitUntil: 'domcontentloaded',
      timeout: 30_000,
    });
  }

  // ─── State Checks ───────────────────────────────────────────────────────────

  /**
   * Get the current page URL.
   */
  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }

  /**
   * Get the current page title.
   */
  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  /**
   * Check whether the browser was redirected to the login page.
   */
  async isRedirectedToLogin(): Promise<boolean> {
    try {
      await this.page.waitForURL(/\/login/, { timeout: 10_000 });
      return this.page.url().includes('/login');
    } catch {
      return false;
    }
  }

  /**
   * Check whether the logo is visible.
   */
  async isLogoVisible(): Promise<boolean> {
    try {
      await this.logoLocator().waitFor({ state: 'visible', timeout: 5_000 });
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Check whether the email input is visible.
   */
  async isEmailInputVisible(): Promise<boolean> {
    try {
      await this.emailInputLocator().waitFor({ state: 'visible', timeout: 10_000 });
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Check whether the Google login button is visible.
   */
  async isGoogleButtonVisible(): Promise<boolean> {
    try {
      await this.googleButtonLocator().waitFor({ state: 'visible', timeout: 5_000 });
      return true;
    } catch {
      return false;
    }
  }
}
