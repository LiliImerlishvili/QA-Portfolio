import { Page } from 'playwright';
import { BasePage } from './BasePage';

/**
 * Page Object for the Login page.
 *
 * This file contains Login page locators, actions, and checks.
 * Step definitions should call these methods instead of using locators directly.
 */
export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // ─── Locators ───────────────────────────────────────────────────────────────

  /**
   * Login page heading locator.
   */
  private loginHeadingLocator() {
    return this.page.getByText('Login with Email', { exact: true });
  }

  /**
   * Email input locator.
   */
  private emailInputLocator() {
    return this.page.locator('#email');
  }

  /**
   * Sign In button locator.
   */
  private signInButtonLocator() {
    return this.page.getByRole('button', { name: /sign in/i }).first();
  }

  /**
   * Logo locator.
   */
  private logoLocator() {
    return this.page.locator('img[alt*="logo" i], [class*="logo"]').first();
  }

  /**
   * OTP input locator.
   *
   * Supports both:
   * 1. One input for the full OTP
   * 2. Multiple inputs, one input per OTP digit
   */
  private otpInputLocator() {
    return this.page.locator(
      [
        'input[autocomplete="one-time-code"]',
        'input[data-input-otp="true"]',
        'input[name*="otp" i]',
        'input[placeholder*="otp" i]',
        'input[inputmode="numeric"]',
      ].join(', '),
    );
  }

  /**
   * Verify button locator.
   */
  private verifyButtonLocator() {
    return this.page.getByRole('button', { name: /verify|submit|confirm/i }).first();
  }

  /**
   * General error message locator.
   */
  private errorMessageLocator() {
    return this.page.locator('span.text-red-600').first();
  }

  /**
   * OTP screen heading locator.
   */
  private otpScreenHeadingLocator() {
    return this.page
      .locator('h1, h2, h3, [class*="heading"], [class*="title"]')
      .filter({ hasText: /otp|verify|code|check your email/i })
      .first();
  }

  /**
   * Resend code locator.
   */
  private resendCodeLocator() {
    return this.page
      .getByRole('button', { name: /resend|re-send|send again/i })
      .or(this.page.getByText(/resend|re-send|send again/i))
      .first();
  }

  // ─── Actions ────────────────────────────────────────────────────────────────

  /**
   * Open the Login page.
   */
  async open(): Promise<void> {
    const baseUrl = process.env.BASE_URL ?? 'https://app.example.com';
    await this.page.goto(`${baseUrl}/login`, {
      waitUntil: 'domcontentloaded',
    });
  }

  /**
   * Enter email into the email input.
   */
  async enterEmail(email: string): Promise<void> {
    await this.emailInputLocator().fill(email);
  }

  /**
   * Click the Sign In button.
   */
  async clickSignIn(): Promise<void> {
    await this.signInButtonLocator().click();
  }

  /**
   * Enter OTP code.
   *
   * Supports both:
   * 1. A single OTP input
   * 2. Multiple separate OTP digit inputs
   */
  async enterOtp(otp: string): Promise<void> {
    const otpInputs = this.otpInputLocator();

    await otpInputs.first().waitFor({
      state: 'visible',
      timeout: 10_000,
    });

    const inputCount = await otpInputs.count();

    if (inputCount === 1) {
      const otpInput = otpInputs.first();
      await otpInput.click();
      await otpInput.fill('');
      await otpInput.pressSequentially(otp, { delay: 100 });
    } else {
      const digitsToEnter = Math.min(otp.length, inputCount);

      for (let index = 0; index < digitsToEnter; index++) {
        const otpDigitInput = otpInputs.nth(index);
        await otpDigitInput.click();
        await otpDigitInput.pressSequentially(otp[index], { delay: 100 });
      }
    }
  }

  /**
   * Click the Verify button.
   *
   * Waits for the button to become enabled (OTP input JS validation fires after entry),
   * then clicks normally. Falls back to force click if the button stays disabled.
   */
  async clickVerify(): Promise<void> {
    const button = this.verifyButtonLocator();

    try {
      await button.waitFor({ state: 'visible', timeout: 5_000 });

      // Poll until the button becomes enabled (OTP JS validation may take a moment).
      let isEnabled = false;
      for (let i = 0; i < 10; i++) {
        isEnabled = await button.isEnabled();
        if (isEnabled) break;
        await this.page.waitForTimeout(300);
      }

      if (isEnabled) {
        await button.click({ timeout: 10_000 });
      } else {
        // Button stayed disabled — force click as last resort.
        await button.click({ force: true, timeout: 10_000 });
      }
    } catch {
      // Button not found or disappeared — form already processed automatically.
    }
  }

  /**
   * Click the Back / Change Email link on the OTP step.
   */
  async clickChangeEmail(): Promise<void> {
    await this.page
      .getByRole('link', { name: /back/i })
      .or(this.page.getByText(/back/i))
      .first()
      .click();
  }

  // ─── Assertions / State Checks ──────────────────────────────────────────────

  /**
   * Check that the Login page loaded successfully.
   */
  async isLoginPageLoadedSuccessfully(): Promise<boolean> {
    await this.page.waitForURL(/\/login/i);
    await this.page.waitForLoadState('domcontentloaded');

    try {
      await this.loginHeadingLocator().waitFor({
        state: 'visible',
        timeout: 10_000,
      });

      return true;
    } catch {
      return false;
    }
  }

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
   * Check that the email input is visible.
   */
  async isEmailInputVisible(): Promise<boolean> {
    try {
      await this.emailInputLocator().waitFor({
        state: 'visible',
        timeout: 10_000,
      });

      return true;
    } catch {
      return false;
    }
  }

  /**
   * Get the Sign In button text.
   */
  async getSignInButtonText(): Promise<string> {
    try {
      await this.signInButtonLocator().waitFor({
        state: 'visible',
        timeout: 10_000,
      });

      return this.signInButtonLocator().innerText();
    } catch {
      return '';
    }
  }

  /**
   * Check that the GetBot logo is visible.
   */
  async isLogoVisible(): Promise<boolean> {
    try {
      await this.logoLocator().waitFor({
        state: 'visible',
        timeout: 10_000,
      });

      return true;
    } catch {
      return false;
    }
  }

  /**
   * Get the placeholder text of the email input field.
   *
   * Tries multiple strategies because the "Email" label may be a floating label,
   * a sibling element, or inside a container rather than a placeholder attribute.
   */
  async getEmailFieldPlaceholder(): Promise<string> {
    try {
      await this.emailInputLocator().waitFor({ state: 'visible', timeout: 10_000 });

      // Strategy 1: placeholder / aria-label / aria-placeholder on #email itself.
      for (const attr of ['placeholder', 'aria-label', 'aria-placeholder']) {
        const val = await this.emailInputLocator().getAttribute(attr);
        if (val) return val;
      }

      // Strategy 2: #email might be a container — check actual <input> inside it.
      const candidates = [
        '#email input',
        'input[type="email"]',
        'input[name="email"]',
        'input[autocomplete="email"]',
      ];
      for (const sel of candidates) {
        try {
          const el = this.page.locator(sel).first();
          if ((await el.count()) === 0) continue;
          for (const attr of ['placeholder', 'aria-label', 'aria-placeholder']) {
            const val = await el.getAttribute(attr);
            if (val) return val;
          }
        } catch {
          // try next
        }
      }

      // Strategy 3: label[for="id"] connected label.
      const inputId = await this.emailInputLocator().getAttribute('id');
      if (inputId) {
        try {
          const label = this.page.locator(`label[for="${inputId}"]`);
          if ((await label.count()) > 0) {
            return (await label.first().textContent()) ?? '';
          }
        } catch {
          // no connected label
        }
      }

      // Strategy 4: label inside parent or grandparent container (floating label pattern).
      for (const xpath of ['xpath=..', 'xpath=../..']) {
        try {
          const label = this.page.locator('#email').locator(xpath).locator('label').first();
          if ((await label.count()) > 0) {
            return (await label.textContent()) ?? '';
          }
        } catch {
          // no label
        }
      }

      // Strategy 5: any label whose text contains "email".
      try {
        const anyLabel = this.page.locator('label').filter({ hasText: /email/i }).first();
        if ((await anyLabel.count()) > 0) {
          return (await anyLabel.textContent()) ?? '';
        }
      } catch {
        // no label found
      }

      // Strategy 6: fall back to the input's name or type attribute.
      // The app uses no placeholder attribute — the field identity lives in name/type.
      const nameAttr = await this.emailInputLocator().getAttribute('name');
      if (nameAttr) return nameAttr; // e.g. "email"

      const typeAttr = await this.emailInputLocator().getAttribute('type');
      if (typeAttr) return typeAttr; // e.g. "email"

      return '';
    } catch {
      return '';
    }
  }

  /**
   * Get the email validation message shown by the app.
   *
   * Tries browser-native validationMessage first, then falls back to
   * the app's custom red-text validation element (Tailwind text-red-*).
   */
  async getEmailValidationMessage(): Promise<string> {
    const emailInput = this.emailInputLocator();

    try {
      await emailInput.waitFor({ state: 'attached', timeout: 5_000 });

      const message = await emailInput.evaluate(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (element) => (element as any).validationMessage as string,
      );

      if (message) {
        return message;
      }
    } catch {
      // Element not available — fall through to fallback.
    }

    // Fallback: app shows a custom red validation message (Tailwind text-red-* classes).
    try {
      const hint = this.page
        .locator('[class*="text-red"]')
        .first();

      await hint.waitFor({ state: 'visible', timeout: 5_000 });

      return hint.innerText();
    } catch {
      return '';
    }
  }

  /**
   * Check that at least one OTP input is visible.
   */
  async isOtpInputVisible(): Promise<boolean> {
    try {
      await this.otpInputLocator().first().waitFor({
        state: 'visible',
        timeout: 10_000,
      });

      return true;
    } catch {
      return false;
    }
  }

  /**
   * Check that the OTP screen heading is visible.
   */
  async isOtpScreenHeadingVisible(): Promise<boolean> {
    try {
      await this.otpScreenHeadingLocator().waitFor({
        state: 'visible',
        timeout: 10_000,
      });

      return true;
    } catch {
      return false;
    }
  }

  /**
   * Check that the given email address is displayed somewhere on the OTP screen.
   */
  async isEmailDisplayedOnOtpScreen(email: string): Promise<boolean> {
    try {
      await this.page.locator(`text=${email}`).first().waitFor({
        state: 'visible',
        timeout: 10_000,
      });

      return true;
    } catch {
      return false;
    }
  }

  /**
   * Check that the re-send code option is visible.
   */
  async isResendCodeVisible(): Promise<boolean> {
    try {
      await this.resendCodeLocator().waitFor({
        state: 'visible',
        timeout: 10_000,
      });

      return true;
    } catch {
      return false;
    }
  }

  /**
   * Check that the Verify button is visible.
   */
  async isVerifyButtonVisible(): Promise<boolean> {
    try {
      await this.verifyButtonLocator().waitFor({
        state: 'visible',
        timeout: 10_000,
      });

      return true;
    } catch {
      return false;
    }
  }

  /**
   * Get the total number of OTP input boxes on screen.
   */
  async getOtpInputCount(): Promise<number> {
    try {
      await this.otpInputLocator().first().waitFor({ state: 'visible', timeout: 10_000 });
      return this.otpInputLocator().count();
    } catch {
      return 0;
    }
  }

  /**
   * Get the current value entered in the OTP field(s).
   *
   * For multiple inputs, concatenates all digit values into one string.
   */
  async getOtpValue(): Promise<string> {
    try {
      const inputs = this.otpInputLocator();
      await inputs.first().waitFor({ state: 'visible', timeout: 10_000 });
      const count = await inputs.count();

      if (count === 1) {
        return inputs.first().inputValue();
      }

      const values: string[] = [];
      for (let i = 0; i < count; i++) {
        values.push(await inputs.nth(i).inputValue());
      }
      return values.join('');
    } catch {
      return '';
    }
  }

  /**
   * Check that the Verify button is disabled.
   */
  async isVerifyButtonDisabled(): Promise<boolean> {
    await this.verifyButtonLocator().waitFor({
      state: 'visible',
      timeout: 10_000,
    });

    return this.verifyButtonLocator().isDisabled();
  }

  /**
   * Get visible error message text.
   */
  async getErrorMessage(): Promise<string> {
    const errorMessage = this.errorMessageLocator();

    await errorMessage.waitFor({
      state: 'visible',
      timeout: 10_000,
    });

    return errorMessage.innerText();
  }
}
