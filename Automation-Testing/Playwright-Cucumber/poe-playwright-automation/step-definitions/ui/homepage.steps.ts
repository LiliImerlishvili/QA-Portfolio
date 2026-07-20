import { Given, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { CustomWorld } from '../../support/world';
import { HomePage } from '../../src/ui/pages/HomePage';

Given('I navigate to the Poe homepage', async function (this: CustomWorld) {
  const homePage = new HomePage(this.page);
  await homePage.open();
});

Then('I should be redirected to the login page', async function (this: CustomWorld) {
  const homePage = new HomePage(this.page);
  const redirected = await homePage.isRedirectedToLogin();
  expect(redirected).to.be.true;
});

Then('the homepage URL should contain {string}', async function (this: CustomWorld, text: string) {
  const homePage = new HomePage(this.page);
  const url = await homePage.getCurrentUrl();
  expect(url).to.include(text);
});

Then('the homepage title should contain {string}', async function (this: CustomWorld, text: string) {
  const homePage = new HomePage(this.page);
  const title = await homePage.getPageTitle();
  expect(title).to.include(text);
});

Then('the Poe logo should be visible on the homepage', async function (this: CustomWorld) {
  const homePage = new HomePage(this.page);
  const visible = await homePage.isLogoVisible();
  expect(visible).to.be.true;
});

Then('the email input should be visible on the homepage', async function (this: CustomWorld) {
  const homePage = new HomePage(this.page);
  const visible = await homePage.isEmailInputVisible();
  expect(visible).to.be.true;
});

Then('the Google login button should be visible on the homepage', async function (this: CustomWorld) {
  const homePage = new HomePage(this.page);
  const visible = await homePage.isGoogleButtonVisible();
  expect(visible).to.be.true;
});
