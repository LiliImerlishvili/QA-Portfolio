import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { CustomWorld } from '../../support/world';
import { LoginPage } from '../../src/ui/pages/LoginPage';

// ─── Given ────────────────────────────────────────────────────────────────────

Given('I am on the Poe login page', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.open();
});

// ─── When ─────────────────────────────────────────────────────────────────────

When('I enter email {string}', async function (this: CustomWorld, email: string) {
  const loginPage = new LoginPage(this.page);
  await loginPage.enterEmail(email);
});

When('I click Go', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.clickGo();
});

// ─── Then ─────────────────────────────────────────────────────────────────────

Then('the login page should be loaded successfully', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  const isLoaded = await loginPage.isPageLoaded();
  expect(isLoaded, 'Login page should be loaded successfully').to.be.true;
});

Then('the page title should contain {string}', async function (this: CustomWorld, text: string) {
  const loginPage = new LoginPage(this.page);
  const title = await loginPage.getPageTitle();
  expect(title.toLowerCase()).to.include(text.toLowerCase());
});

Then('the URL should contain {string}', async function (this: CustomWorld, text: string) {
  const loginPage = new LoginPage(this.page);
  const url = await loginPage.getCurrentUrl();
  expect(url).to.include(text);
});

Then('the Poe logo should be visible', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  const visible = await loginPage.isLogoVisible();
  expect(visible, 'Poe logo should be visible').to.be.true;
});

Then('the heading should contain {string}', async function (this: CustomWorld, text: string) {
  const loginPage = new LoginPage(this.page);
  const heading = await loginPage.getHeadingText();
  expect(heading).to.include(text);
});

Then('the Continue with Google button should be visible', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  const visible = await loginPage.isGoogleButtonVisible();
  expect(visible, 'Continue with Google button should be visible').to.be.true;
});

Then('the Continue with Apple button should be visible', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  const visible = await loginPage.isAppleButtonVisible();
  expect(visible, 'Continue with Apple button should be visible').to.be.true;
});

Then('the email input field should be visible', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  const visible = await loginPage.isEmailInputVisible();
  expect(visible, 'Email input field should be visible').to.be.true;
});

Then('the Go button should be visible', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  const visible = await loginPage.isGoButtonVisible();
  expect(visible, 'Go button should be visible').to.be.true;
});

Then('the Use phone option should be visible', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  const visible = await loginPage.isUsePhoneVisible();
  expect(visible, 'Use phone option should be visible').to.be.true;
});

Then('the Terms of Service link should be visible', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  const visible = await loginPage.isTermsLinkVisible();
  expect(visible, 'Terms of Service link should be visible').to.be.true;
});

Then('the Privacy Policy link should be visible', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  const visible = await loginPage.isPrivacyLinkVisible();
  expect(visible, 'Privacy Policy link should be visible').to.be.true;
});

Then('the login page should still be displayed', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  const url = await loginPage.getCurrentUrl();
  expect(url).to.include('poe.com');
});

Then('the email input field should be empty', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  const isEmpty = await loginPage.isEmailInputEmpty();
  expect(isEmpty, 'Email input field should be empty on initial page load').to.be.true;
});

Then('the email input should contain the value {string}', async function (this: CustomWorld, value: string) {
  const loginPage = new LoginPage(this.page);
  const inputValue = await loginPage.getEmailInputValue();
  expect(inputValue, `Email input should contain "${value}"`).to.include(value);
});

Then('the Go button should display the text {string}', async function (this: CustomWorld, text: string) {
  const loginPage = new LoginPage(this.page);
  const buttonText = await loginPage.getGoButtonText();
  expect(buttonText.trim(), `Go button should display text "${text}"`).to.include(text);
});

Then('no error messages should be displayed on the login page', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  const noErrors = await loginPage.hasNoErrorOnLoad();
  expect(noErrors, 'No error messages should appear on initial page load').to.be.true;
});