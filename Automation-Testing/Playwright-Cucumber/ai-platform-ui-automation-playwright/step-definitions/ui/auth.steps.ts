import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { CustomWorld } from '../../src/support/world';
import { LoginPage } from '../../src/ui/pages/LoginPage';
import { config } from '../../src/config/config';

// ─── Given ────────────────────────────────────────────────────────────────────

Given('the browser is open', function (this: CustomWorld) {

  // Browser is initialised in the Before hook for @ui tags.
  // Nothing is needed here.

});

Given('I am logged in as {string} with OTP {string}', async function (this: CustomWorld, email: string, otp: string) {
  const loginPage = new LoginPage(this.page);

  // Full login flow: open login page → enter email → click sign in → enter OTP → verify.
  await loginPage.open();
  await loginPage.enterEmail(email);
  await loginPage.clickSignIn();
  await loginPage.enterOtp(otp);
  await loginPage.clickVerify();

  // Wait until the browser navigates away from the login page.
  await this.page.waitForURL(/(?!.*login)/i, { timeout: 15_000 });
});

// ─── When ─────────────────────────────────────────────────────────────────────

When('I open the login page', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);

  // Open the Login page using the LoginPage page object.
  // Navigation logic belongs to LoginPage.ts, not to the step definition.
  await loginPage.open();
});

When('I enter email {string}', async function (this: CustomWorld, email: string) {
  const loginPage = new LoginPage(this.page);

  // Enter the email value from the feature file.
  await loginPage.enterEmail(email);
});

When('I click sign in', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);

  // Click the Sign In button on the login form.
  await loginPage.clickSignIn();
});

When('I enter OTP {string}', async function (this: CustomWorld, otp: string) {
  const loginPage = new LoginPage(this.page);

  // Enter the OTP value from the feature file.
  await loginPage.enterOtp(otp);
});

When('I click verify', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);

  // Click the Verify button after entering OTP.
  await loginPage.clickVerify();
});

When('I click the change email option', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);

  // Click the Back link to return to the email step.
  await loginPage.clickChangeEmail();
});

When('I logout from the application', async function (this: CustomWorld) {
  // Click the logout / sign out button on the current page.
  await this.page
    .getByRole('button', { name: /log.?out|sign.?out/i })
    .or(this.page.getByText(/log.?out|sign.?out/i))
    .first()
    .click();
});

// ─── Then ─────────────────────────────────────────────────────────────────────

Then('the login page should be loaded successfully', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);

  // Check that the Login page opened successfully.
  const isLoaded = await loginPage.isLoginPageLoadedSuccessfully();

  expect(isLoaded, 'Login page should be loaded successfully').to.be.true;
});

Then('the URL should contain {string}', async function (this: CustomWorld, path: string) {
  const loginPage = new LoginPage(this.page);

  // Check that the current URL contains the expected path.
  const url = await loginPage.getCurrentUrl();

  expect(url, `URL should contain "${path}"`).to.include(path);
});

Then('the page title should contain {string}', async function (this: CustomWorld, title: string) {
  const loginPage = new LoginPage(this.page);

  // Check that the page title contains the expected text.
  const pageTitle = await loginPage.getPageTitle();

  expect(pageTitle, `Page title should contain "${title}"`).to.include(title);
});

Then('the email input should be visible', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);

  // Check that the email input is visible on the Login page.
  const visible = await loginPage.isEmailInputVisible();

  expect(visible, 'Email input should be visible').to.be.true;
});

Then('the sign in button should be visible', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);

  // Check that the Sign In button is visible on the Login page.
  const buttonText = await loginPage.getSignInButtonText();

  expect(buttonText, 'Sign In button should be visible').to.be.a('string').and.have.length.greaterThan(0);
});

Then('the logo should be visible', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);

  // Check that the GetBot logo is visible on the Login page.
  const visible = await loginPage.isLogoVisible();

  expect(visible, 'Logo should be visible').to.be.true;
});

Then('the sign in button should have text {string}', async function (this: CustomWorld, text: string) {
  const loginPage = new LoginPage(this.page);

  // Check that the Sign In button has the correct label text.
  const buttonText = await loginPage.getSignInButtonText();

  expect(buttonText, `Sign In button should have text "${text}"`).to.include(text);
});

Then('the email field placeholder should contain {string}', async function (this: CustomWorld, placeholder: string) {
  const loginPage = new LoginPage(this.page);

  // Check that the email input placeholder contains the expected text (case-insensitive).
  const placeholderText = await loginPage.getEmailFieldPlaceholder();

  expect(
    placeholderText.toLowerCase(),
    `Email field placeholder should contain "${placeholder}"`,
  ).to.include(placeholder.toLowerCase());
});

Then('an email validation message should be displayed', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);

  // Check that an email validation message is displayed.
  const errorText = await loginPage.getEmailValidationMessage();

  expect(errorText, 'Email validation message should be displayed')
    .to.be.a('string')
    .and.have.length.greaterThan(0);
});

Then('the OTP input should be visible', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);

  // Check that the OTP input becomes visible after submitting a valid email.
  const visible = await loginPage.isOtpInputVisible();

  expect(visible, 'OTP input should be visible').to.be.true;
});

Then('the OTP screen heading should be visible', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);

  // Check that the OTP screen heading is visible.
  const visible = await loginPage.isOtpScreenHeadingVisible();

  expect(visible, 'OTP screen heading should be visible').to.be.true;
});

Then('the entered email should be displayed on the OTP screen', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);

  // Check that the entered email is displayed on the OTP screen.
  const isDisplayed = await loginPage.isEmailDisplayedOnOtpScreen('testuser@example.com');

  expect(isDisplayed, 'Entered email should be displayed on the OTP screen').to.be.true;
});

Then('the re-send code option should be visible', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);

  // Check that the re-send code option is visible on the OTP screen.
  const visible = await loginPage.isResendCodeVisible();

  expect(visible, 'Re-send code option should be visible').to.be.true;
});

Then('the verify button should be visible', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);

  // Check that the verify button is visible on the OTP screen.
  const visible = await loginPage.isVerifyButtonVisible();

  expect(visible, 'Verify button should be visible').to.be.true;
});

Then('the OTP screen should have {int} input boxes', async function (this: CustomWorld, count: number) {
  const loginPage = new LoginPage(this.page);

  // Use LoginPage.getOtpInputCount() so the locator stays in one place.
  const inputCount = await loginPage.getOtpInputCount();

  expect(inputCount, `OTP screen should have ${count} input boxes`).to.equal(count);
});

Then('the OTP field should contain {string}', async function (this: CustomWorld, expectedOtp: string) {
  const loginPage = new LoginPage(this.page);

  // Use LoginPage.getOtpValue() so the locator stays in one place.
  const actualOtp = await loginPage.getOtpValue();

  expect(actualOtp, 'OTP field value should match').to.equal(expectedOtp);
});

Then('the OTP field should be empty', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);

  // Use LoginPage.getOtpValue() so the locator stays in one place.
  const value = await loginPage.getOtpValue();

  expect(value.trim(), 'OTP field should be empty').to.equal('');
});

Then('the verify button should be disabled', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);

  // Check that the verify button is disabled when OTP is incomplete.
  const disabled = await loginPage.isVerifyButtonDisabled();

  expect(disabled, 'Verify button should be disabled').to.be.true;
});

Then('an error message should be displayed', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);

  // Check that an error message is displayed after invalid OTP submission.
  const errorText = await loginPage.getErrorMessage();

  expect(errorText, 'Error message should be displayed')
    .to.be.a('string')
    .and.have.length.greaterThan(0);
});

Then('the user should be redirected away from the login page', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);

  // Wait until the URL no longer contains "login" (function predicate is more reliable than regex).
  await this.page.waitForURL((url) => !url.href.includes('login'), { timeout: 15_000 });
  const url = await loginPage.getCurrentUrl();

  expect(url).to.not.include('login');
});

Then('I should be redirected to the login page', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);

  // Check that the URL contains /login after logout.
  await this.page.waitForURL(/login/i, { timeout: 15_000 });
  const url = await loginPage.getCurrentUrl();

  expect(url, 'Should be redirected to the login page').to.include('login');
});
