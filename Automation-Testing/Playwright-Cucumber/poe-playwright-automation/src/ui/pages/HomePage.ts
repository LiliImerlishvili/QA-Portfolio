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

  private logoLocator() {
    return this.page.getByRole('link', { name: 'Poe', exact: true });
  }

  private headingLocator() {
    return this.page.getByRole('heading', { name: 'Chat with the best AI,' });
  }

  private emailInputLocator() {
    return this.page.getByRole('textbox', { name: 'Email address' });
  }

  private goButtonLocator() {
    return this.page.getByRole('button', { name: 'Go', exact: true });
  }

  private googleButtonLocator() {
    return this.page.getByRole('button', { name: 'Continue with Google' });
  }

  private appleButtonLocator() {
    return this.page.getByRole('button', { name: 'Continue with Apple' });
  }

  private phoneOptionLocator() {
    return this.page.getByText('Use phone');
  }

  private termsLinkLocator() {
    return this.page.getByRole('link', { name: 'Terms of Service' });
  }

  private privacyLinkLocator() {
    return this.page.getByRole('link', { name: 'Privacy Policy' });
  }

  private errorLocator() {
    return this.page.locator('[class*="error"], [class*="alert"], [role="alert"]');
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

  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }

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
   * Check whether the login page is fully loaded (email input visible).
   */
  async isLoginPageLoaded(): Promise<boolean> {
    try {
      await this.emailInputLocator().waitFor({ state: 'visible', timeout: 10_000 });
      return true;
    } catch {
      return false;
    }
  }

  async isLogoVisible(): Promise<boolean> {
    try {
      await this.logoLocator().waitFor({ state: 'visible', timeout: 5_000 });
      return true;
    } catch {
      return false;
    }
  }

  async isHeadingVisible(): Promise<boolean> {
    try {
      await this.headingLocator().waitFor({ state: 'visible', timeout: 5_000 });
      return true;
    } catch {
      return false;
    }
  }

  async isEmailInputVisible(): Promise<boolean> {
    try {
      await this.emailInputLocator().waitFor({ state: 'visible', timeout: 10_000 });
      return true;
    } catch {
      return false;
    }
  }

  async isGoButtonVisible(): Promise<boolean> {
    try {
      await this.goButtonLocator().waitFor({ state: 'visible', timeout: 5_000 });
      return true;
    } catch {
      return false;
    }
  }

  async isGoogleButtonVisible(): Promise<boolean> {
    try {
      await this.googleButtonLocator().waitFor({ state: 'visible', timeout: 5_000 });
      return true;
    } catch {
      return false;
    }
  }

  async isAppleButtonVisible(): Promise<boolean> {
    try {
      await this.appleButtonLocator().waitFor({ state: 'visible', timeout: 5_000 });
      return true;
    } catch {
      return false;
    }
  }

  async isPhoneOptionVisible(): Promise<boolean> {
    try {
      await this.phoneOptionLocator().waitFor({ state: 'visible', timeout: 5_000 });
      return true;
    } catch {
      return false;
    }
  }

  async isTermsLinkVisible(): Promise<boolean> {
    try {
      await this.termsLinkLocator().waitFor({ state: 'visible', timeout: 5_000 });
      return true;
    } catch {
      return false;
    }
  }

  async isPrivacyLinkVisible(): Promise<boolean> {
    try {
      await this.privacyLinkLocator().waitFor({ state: 'visible', timeout: 5_000 });
      return true;
    } catch {
      return false;
    }
  }

  async hasNoErrorOnLoad(): Promise<boolean> {
    try {
      const count = await this.errorLocator().count();
      return count === 0;
    } catch {
      return true;
    }
  }
}
