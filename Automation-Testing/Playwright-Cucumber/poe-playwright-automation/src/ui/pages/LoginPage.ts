import { Page } from 'playwright';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

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

  private googleButtonLocator() {
    return this.page.getByRole('button', { name: 'Continue with Google' });
  }

  private appleButtonLocator() {
    return this.page.getByRole('button', { name: 'Continue with Apple' });
  }

  private emailInputLocator() {
    return this.page.getByRole('textbox', { name: 'Email address' });
  }

  private goButtonLocator() {
    return this.page.getByRole('button', { name: 'Go', exact: true });
  }

  private usePhoneLocator() {
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

  async open(): Promise<void> {
    await this.page.goto('https://poe.com/login', {
      waitUntil: 'domcontentloaded',
      timeout: 30_000,
    });
  }

  async enterEmail(email: string): Promise<void> {
    await this.emailInputLocator().waitFor({ state: 'visible', timeout: 10_000 });
    await this.emailInputLocator().fill(email);
  }

  async clickGo(): Promise<void> {
    await this.goButtonLocator().click();
  }

  // ─── Checks ─────────────────────────────────────────────────────────────────

  async isPageLoaded(): Promise<boolean> {
    try {
      await this.emailInputLocator().waitFor({ state: 'visible', timeout: 10_000 });
      return true;
    } catch {
      return false;
    }
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }

  async isLogoVisible(): Promise<boolean> {
    try {
      await this.logoLocator().waitFor({ state: 'visible', timeout: 5_000 });
      return true;
    } catch {
      return false;
    }
  }

  async getHeadingText(): Promise<string> {
    try {
      await this.headingLocator().waitFor({ state: 'visible', timeout: 5_000 });
      return this.headingLocator().innerText();
    } catch {
      return '';
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

  async isEmailInputVisible(): Promise<boolean> {
    try {
      await this.emailInputLocator().waitFor({ state: 'visible', timeout: 5_000 });
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

  async isUsePhoneVisible(): Promise<boolean> {
    try {
      await this.usePhoneLocator().waitFor({ state: 'visible', timeout: 5_000 });
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

  /**
   * Check that the email input field is empty on initial page load.
   */
  async isEmailInputEmpty(): Promise<boolean> {
    try {
      await this.emailInputLocator().waitFor({ state: 'visible', timeout: 5_000 });
      const value = await this.emailInputLocator().inputValue();
      return value.trim() === '';
    } catch {
      return false;
    }
  }

  /**
   * Get the current value typed into the email input field.
   */
  async getEmailInputValue(): Promise<string> {
    try {
      await this.emailInputLocator().waitFor({ state: 'visible', timeout: 5_000 });
      return this.emailInputLocator().inputValue();
    } catch {
      return '';
    }
  }

  /**
   * Get the label text of the Go button.
   */
  async getGoButtonText(): Promise<string> {
    try {
      await this.goButtonLocator().waitFor({ state: 'visible', timeout: 5_000 });
      return this.goButtonLocator().innerText();
    } catch {
      return '';
    }
  }

  /**
   * Check that no error messages are visible on the page.
   */
  async hasNoErrorOnLoad(): Promise<boolean> {
    try {
      const count = await this.errorLocator().count();
      return count === 0;
    } catch {
      return true;
    }
  }
}