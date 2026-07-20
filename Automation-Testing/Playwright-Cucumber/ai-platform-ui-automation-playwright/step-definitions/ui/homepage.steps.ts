import { Given, When, Then } from '@cucumber/cucumber';
import type { DataTable } from '@cucumber/cucumber';
import { HomePage } from '../../src/ui/pages/HomePage';

// Assertions are handled inside HomePage.ts to keep step definitions clean and reusable.
// This step file only connects Gherkin steps with Page Object methods.

Given('the user navigates to {string}', async function (url: string) {
    const homePage = new HomePage(this.page);

    // Navigate to the URL provided from the feature file
    await homePage.navigateTo(url);
});

Given('the user is on the application homepage', async function () {
    const homePage = new HomePage(this.page);

    // Open the default application homepage
    await homePage.open();
});

Then('the homepage should load successfully', async function () {
    const homePage = new HomePage(this.page);

    // Verify that the homepage URL and body are loaded
    await homePage.expectHomepageLoadedSuccessfully();
});

Then('the page title should be {string}', async function (expectedTitle: string) {
    const homePage = new HomePage(this.page);

    // Verify that the browser page title matches the expected title
    await homePage.expectPageTitle(expectedTitle);
});

Then('the company logo should be visible in the header', async function () {
    const homePage = new HomePage(this.page);

    // Verify that the company logo is visible inside the header
    await homePage.expectLogoVisible();
});

Then(
    'the following navigation items should be visible in the header',
    async function (dataTable: DataTable) {
        const homePage = new HomePage(this.page);

        // Convert the Cucumber table into an array of navigation item names
        const items = dataTable.hashes().map((row) => row.item);

        // Verify that each navigation item from the feature table is visible
        await homePage.expectHeaderNavigationItemsVisible(items);
    }
);

Then(
    'the following header navigation items should have correct types',
    async function (dataTable: DataTable) {
        const homePage = new HomePage(this.page);

        // Convert the Cucumber table into an array of item/type objects
        // Example: [{ item: 'Home', type: 'link' }, { item: 'AI Tools', type: 'dropdown' }]
        const items = dataTable.hashes() as { item: string; type: string }[];

        // Verify that each navigation item has the expected UI type
        await homePage.expectHeaderNavigationItemsHaveCorrectTypes(items);
    }
);

Then('the following header links should redirect correctly', async function (dataTable: DataTable) {
    const homePage = new HomePage(this.page);

    // Convert the Cucumber table into an array of header link/expected URL objects
    const links = dataTable.hashes().map((row) => ({
        item: row.item,
        expectedUrl: row['expected url'],
    }));

    // Click each header link and verify the expected redirect
    await homePage.expectHeaderLinksRedirectCorrectly(links);
});

When('the user clicks on {string} in the header', async function (itemName: string) {
    const homePage = new HomePage(this.page);

    // Click the header navigation item provided from the feature file
    await homePage.clickHeaderNavigationItem(itemName);
});

Then('the following dropdown items should be visible', async function (dataTable: DataTable) {
    const homePage = new HomePage(this.page);

    // Convert the Cucumber table into an array of dropdown item names
    const items = dataTable.hashes().map((row) => row.item);

    // Verify that each dropdown item from the feature table is visible
    await homePage.expectDropdownItemsVisible(items);
});

When('the user hovers over {string} in the header', async function (itemName: string) {
    const homePage = new HomePage(this.page);

    // Hover over the header navigation item provided from the feature file
    await homePage.hoverHeaderNavigationItem(itemName);
});

When('the user hovers over {string}', async function (itemName: string) {
    const homePage = new HomePage(this.page);

    // Hover over a dropdown or sub-menu item provided from the feature file
    await homePage.hoverMenuItem(itemName);
});

Then('the following items should be visible', async function (dataTable: DataTable) {
    const homePage = new HomePage(this.page);

    // Convert the Cucumber table into an array of menu item names
    const items = dataTable.hashes().map((row) => row.item);

    // Verify that each menu item from the feature table is visible
    await homePage.expectMenuItemsVisible(items);
});

Then(
    'the following AI Tools submenu links should redirect correctly',
    async function (dataTable: DataTable) {
        const homePage = new HomePage(this.page);

        // Convert the Cucumber table into an array of submenu category/link/expected URL objects
        const links = dataTable.hashes().map((row) => ({
            category: row.category,
            link: row.link,
            expectedUrl: row['expected url'],
        }));

        // Hover category, click submenu link, and verify redirect
        await homePage.expectAIToolsSubmenuLinksRedirectCorrectly(links);
    }
);
Then('the main heading should be {string}', async function (expectedHeading: string) {
    const homePage = new HomePage(this.page);

    // Verify that the main hero heading is visible with the expected text
    await homePage.expectMainHeadingVisible(expectedHeading);
});

Then('the sub-heading should be {string}', async function (expectedSubHeading: string) {
    const homePage = new HomePage(this.page);

    // Verify that the hero sub-heading is visible with the expected text
    await homePage.expectSubHeadingVisible(expectedSubHeading);
});

Then('the description text should be {string}', async function (expectedDescriptionText: string) {
    const homePage = new HomePage(this.page);

    // Verify that the homepage description text is visible with the expected text
    await homePage.expectDescriptionTextVisible(expectedDescriptionText);
});

Then('the following feature cards should be visible', async function (dataTable: DataTable) {
    const homePage = new HomePage(this.page);

    // Convert the Cucumber table into an array of feature card texts
    const cards = dataTable.hashes().map((row) => row.card);

    // Verify that each feature card from the feature table is visible
    await homePage.expectFeatureCardsVisible(cards);
});

Then('the {string} button should be visible', async function (buttonText: string) {
    const homePage = new HomePage(this.page);

    // Verify that the button from the feature file is visible
    await homePage.expectButtonVisible(buttonText);
});

When('the user clicks the {string} button', async function (buttonText: string) {
    const homePage = new HomePage(this.page);

    // Click the button provided from the feature file
    await homePage.clickButton(buttonText);
});

Then('the user should be redirected to the Login page', async function () {
    const homePage = new HomePage(this.page);

    // Verify that the user is redirected to a Login page URL
    await homePage.expectRedirectedToLoginPage();
});
Then('the following extension buttons should be visible', async function (dataTable: DataTable) {
    const homePage = new HomePage(this.page);

    // Convert the Cucumber table into an array of extension button names
    const buttons = dataTable.hashes().map((row) => row.button);

    // Verify that each extension button from the feature table is visible
    await homePage.expectExtensionButtonsVisible(buttons);
});

type ExtensionButtonRedirect = { button: string; expectedUrl: string };

When('the user clicks the following extension buttons', async function (this: any, dataTable: DataTable) {
    // Store button names and expected URLs from the feature table.
    // The actual redirect verification is done in the Then step.
    (this as { extensionButtonRedirects?: ExtensionButtonRedirect[] }).extensionButtonRedirects =
        dataTable.hashes().map((row) => ({
            button: row.button,
            expectedUrl: row['expected url'],
        }));
});

Then('the user should be redirected to the correct store', async function (this: any) {
    const homePage = new HomePage(this.page);

    const redirects =
        (this as { extensionButtonRedirects?: ExtensionButtonRedirect[] }).extensionButtonRedirects ?? [];

    // Verify that each extension button redirects to the expected store URL
    await homePage.expectExtensionButtonsRedirectToCorrectStores(redirects);
});

Then('the following tabs should be visible', async function (dataTable: DataTable) {
    const homePage = new HomePage(this.page);

    // Convert the Cucumber table into an array of tab names
    const tabs = dataTable.hashes().map((row) => row.tab);

    // Verify that each tab from the feature table is visible
    await homePage.expectTabsVisible(tabs);
});

Then(
    'the correct heading should be visible after clicking each tab',
    async function (dataTable: DataTable) {
        const homePage = new HomePage(this.page);

        // Convert the Cucumber table into an array of tab/heading objects
        // Example: [{ tab: 'All-in-one Chatbot', heading: 'Group Chat' }]
        const tabs = dataTable.hashes() as { tab: string; heading: string }[];

        // Click each tab and verify the expected heading
        await homePage.expectCorrectHeadingVisibleAfterClickingEachTab(tabs);
    }
);

Then(
    'the {string} button should be visible for each tab',
    async function (buttonText: string, dataTable: DataTable) {
        const homePage = new HomePage(this.page);

        // Convert the Cucumber table into an array of tab names
        const tabs = dataTable.hashes().map((row) => row.tab);

        // Click each tab and verify that the expected button is visible
        await homePage.expectButtonVisibleForEachTab(buttonText, tabs);
    }
);

Then('the following value cards should be visible', async function (dataTable: DataTable) {
    const homePage = new HomePage(this.page);

    // Convert the Cucumber table into an array of value card title/description objects
    const cards = dataTable.hashes() as { title: string; description: string }[];

    // Verify that each value card title and description is visible
    await homePage.expectValueCardsVisible(cards);
});
 
Then('the AI image gallery should be visible on the page', async function () {
    const homePage = new HomePage(this.page);

    // Verify that the AI image gallery is visible on the homepage
    await homePage.expectAIImageGalleryVisible();
});

Then('the image gallery should display {int} images', async function (expectedCount: number) {
    const homePage = new HomePage(this.page);

    // Verify that the image gallery displays the expected number of visible images
    await homePage.expectImageGalleryImageCount(expectedCount);
});
Then('the GetBotAI logo should be visible in the footer', async function () {
    const homePage = new HomePage(this.page);

    // Verify that the GetBotAI logo is visible inside the footer
    await homePage.expectFooterLogoVisible();
});
Then('the following footer columns should be visible', async function (dataTable: DataTable) {
    const homePage = new HomePage(this.page);

    // Convert the Cucumber table into an array of footer column names
    const columns = dataTable.hashes().map((row) => row.column);

    // Verify that each footer column from the feature table is visible
    await homePage.expectFooterColumnsVisible(columns);
});

Then('the following links should be visible in the Features column', async function (dataTable: DataTable) {
    const homePage = new HomePage(this.page);

    // Convert the Cucumber table into an array of footer link names
    const links = dataTable.hashes().map((row) => row.link);

    // Verify that each Features column link from the feature table is visible
    await homePage.expectFeaturesColumnLinksVisible(links);
});

Then('the following links should be visible in the About column', async function (dataTable: DataTable) {
    const homePage = new HomePage(this.page);

    // Convert the Cucumber table into an array of About column link names
    const links = dataTable.hashes().map((row) => row.link);

    // Verify that each About column link from the feature table is visible
    await homePage.expectAboutColumnLinksVisible(links);
});

Then('the contact email {string} should be visible in the footer', async function (email: string) {
    const homePage = new HomePage(this.page);

    // Verify that the contact email from the feature file is visible in the footer
    await homePage.expectContactEmailVisibleInFooter(email);
});
Then('the following links should be visible in the Learn More column', async function (dataTable: DataTable) {
    const homePage = new HomePage(this.page);

    // Convert the Cucumber table into an array of Learn More column link names
    const links = dataTable.hashes().map((row) => row.link);

    // Verify that each Learn More column link from the feature table is visible
    await homePage.expectLearnMoreColumnLinksVisible(links);
});
Then('the copyright text should be visible in the footer', async function () {
    const homePage = new HomePage(this.page);

    // Verify that the copyright text is visible inside the footer
    await homePage.expectCopyrightTextVisibleInFooter();
});
Then('the contact email {string} should have correct mailto link', async function (email: string) {
    const homePage = new HomePage(this.page);

    // Verify that the contact email has the correct mailto href in the footer
    await homePage.expectContactEmailHasCorrectMailtoLink(email);
});
Then('the following footer links should redirect correctly', async function (dataTable: DataTable) {
    const homePage = new HomePage(this.page);

    // Convert the Cucumber table into an array of footer link/expected URL objects.
    // The table column is named "expected url", so we must read it with row['expected url'].
    const links = dataTable.hashes().map((row) => ({
        link: row.link,
        expectedUrl: row['expected url'],
    }));

    // Click each footer link and verify the expected redirect
    await homePage.expectFooterLinksRedirectCorrectly(links);
});

//update the step definition to handle the new step 