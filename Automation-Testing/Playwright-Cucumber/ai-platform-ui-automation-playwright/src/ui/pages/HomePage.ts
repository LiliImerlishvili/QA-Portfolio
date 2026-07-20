import { expect } from '@playwright/test';
import type { Locator, Page } from 'playwright';

export class HomePage {
    readonly page: Page;

    readonly header: Locator;
    readonly logo: Locator;

    constructor(page: Page) {
        this.page = page;

        // Main header container
        this.header = this.page.locator('header');

        // Company logo inside the header
        this.logo = this.header.locator('img').first();
    }

    /**
     * Navigate to the provided URL.
     * This method is reusable because we may need to open different pages later.
     */
    async navigateTo(url: string): Promise<void> {
        const response = await this.page.goto(url, {
            waitUntil: 'domcontentloaded',
        });

        expect(response, `Navigation to ${url} should return an HTTP response`).not.toBeNull();
        expect(response!.status(), `Navigation to ${url} should not return an HTTP error`).toBeLessThan(400);
    }

    /**
     * Open the application homepage.
     * This method is used when the scenario says:
     * "Given the user is on the application homepage"
     */
    async open(): Promise<void> {
        await this.navigateTo(process.env.BASE_URL ?? 'https://app.example.com/');
    }

    /**
     * Verify that the homepage loaded successfully.
     * We check URL and visible body element.
     */
    async expectHomepageLoadedSuccessfully(): Promise<void> {
        await expect(this.page).toHaveURL(/getbot\.ai/);
        await expect(this.page.locator('body')).toBeVisible();
    }

    /**
     * Verify the page title.
     */
    async expectPageTitle(expectedTitle: string): Promise<void> {
        await expect(this.page).toHaveTitle(expectedTitle);
    }

    /**
     * Verify that the company logo is visible in the header.
     */
    async expectLogoVisible(): Promise<void> {
        await expect(this.logo).toBeVisible();
    }

    /**
     * Get header navigation item by visible text.
     * We are checking both links and buttons because some header items can be <a>,
     * and some items can be <button>.
     */
    getHeaderNavigationItem(itemName: string): Locator {
        return this.header
            .locator('a, button')
            .filter({
                hasText: new RegExp(`^\\s*${this.escapeRegExp(itemName)}\\s*$`, 'i'),
            })
            .first();
    }

    /**
     * Verify that a single header navigation item is visible.
     */
    async expectHeaderNavigationItemVisible(itemName: string): Promise<void> {
        await expect(
            this.getHeaderNavigationItem(itemName),
            `Header navigation item should be visible: ${itemName}`
        ).toBeVisible();
    }

    /**
     * Verify that all header navigation items from the feature table are visible.
     */
    async expectHeaderNavigationItemsVisible(items: string[]): Promise<void> {
        for (const item of items) {
            await this.expectHeaderNavigationItemVisible(item);
        }
    }

    /**
     * Verify that a single header navigation item has the expected UI type.
     * Supported types:
     * - link: item should be an anchor element with href
     * - button: item should be a button element
     * - dropdown: item should open or represent a dropdown menu
     */
    async expectHeaderNavigationItemHasType(itemName: string, expectedType: string): Promise<void> {
        const navItem = this.getHeaderNavigationItem(itemName);
        const normalizedType = expectedType.toLowerCase();

        // First, make sure the item exists and is visible
        await expect(
            navItem,
            `Header navigation item should be visible: ${itemName}`
        ).toBeVisible();

        if (normalizedType === 'link') {
            // A link should have an href attribute
            await expect(navItem, `${itemName} should be a link`).toHaveAttribute('href', /.+/);
            return;
        }

        if (normalizedType === 'button') {
            // A button should be a real button element
            const tagName = await navItem.evaluate((element) => element.tagName.toLowerCase());

            expect(tagName, `${itemName} should be a button`).toBe('button');
            return;
        }

        if (normalizedType === 'dropdown') {
            await this.expectHeaderNavigationItemIsDropdown(itemName);
            return;
        }

        throw new Error(`Unsupported navigation item type: ${expectedType}`);
    }

    /**
     * Verify that all header navigation items from the feature table have correct UI types.
     */
    async expectHeaderNavigationItemsHaveCorrectTypes(
        items: { item: string; type: string }[]
    ): Promise<void> {
        for (const row of items) {
            await this.expectHeaderNavigationItemHasType(row.item, row.type);
        }
    }

    /**
 * Click a header navigation link and verify that it redirects correctly.
 * We reopen the homepage before each click because each link changes the current page URL.
 */
async clickHeaderLinkAndVerifyRedirect(itemName: string, expectedUrl: string): Promise<void> {
    await this.open();

    const headerLink = this.getHeaderNavigationItem(itemName);

    await expect(
        headerLink,
        `Header link should be visible before click: ${itemName}`
    ).toBeVisible();

    await headerLink.click();

    await expect(
        this.page,
        `Header link should redirect correctly: ${itemName}`
    ).toHaveURL(expectedUrl);
}

/**
 * Verify that all header links from the feature table redirect correctly.
 */
async expectHeaderLinksRedirectCorrectly(
    links: { item: string; expectedUrl: string }[]
): Promise<void> {
    for (const row of links) {
        await this.clickHeaderLinkAndVerifyRedirect(row.item, row.expectedUrl);
    }
}

    /**
     * Verify that a header navigation item behaves like a dropdown.
     * We check common dropdown indicators and then try hover behavior.
     */
    async expectHeaderNavigationItemIsDropdown(itemName: string): Promise<void> {
        const navItem = this.getHeaderNavigationItem(itemName);

        // cspell:ignore haspopup
        // Some dropdowns use ARIA attributes like aria-haspopup or aria-expanded
        const hasDropdownAttribute = await navItem.evaluate((element) => {
            const ariaHasPopup = element.getAttribute('aria-haspopup');
            const ariaExpanded = element.getAttribute('aria-expanded');

            return (
                (ariaHasPopup !== null && ariaHasPopup.toLowerCase() !== 'false') ||
                (ariaExpanded !== null && ariaExpanded.toLowerCase() !== 'false')
            );
        });

        if (hasDropdownAttribute) {
            return;
        }

        // If there are no ARIA attributes, try hover because many menus open on hover
        await navItem.hover();

        const possibleDropdown = this.header
            .locator(
                '[role="menu"], .dropdown-menu, .sub-menu, .submenu, [class*="dropdown"], [class*="submenu"]'
            )
            .first();

        await expect(
            possibleDropdown,
            `${itemName} should open or represent a dropdown menu`
        ).toBeVisible();
    }

    /**
     * Click a header navigation item by visible text.
     * This method is used when the scenario says:
     * "When the user clicks on 'AI Tools' in the header"
     */
    async clickHeaderNavigationItem(itemName: string): Promise<void> {
        const navItem = this.getHeaderNavigationItem(itemName);

        // Make sure the navigation item is visible before clicking it
        await expect(
            navItem,
            `Header navigation item should be visible before click: ${itemName}`
        ).toBeVisible();

        await navItem.click();
    }

    /**
     * Get a dropdown item by visible text.
     * Dropdown items can be links, buttons, or elements with role="menuitem".
     */
    getDropdownItem(itemName: string): Locator {
        return this.page
            .locator('a, button, [role="menuitem"]')
            .filter({
                hasText: new RegExp(`^\\s*${this.escapeRegExp(itemName)}\\s*$`, 'i'),
            })
            .first();
    }

    /**
     * Verify that a single dropdown item is visible.
     */
    async expectDropdownItemVisible(itemName: string): Promise<void> {
        const dropdownItem = this.getDropdownItem(itemName);

        await expect(
            dropdownItem,
            `Dropdown item should be visible: ${itemName}`
        ).toBeVisible();
    }

    /**
     * Verify that all dropdown items from the feature table are visible.
     */
    async expectDropdownItemsVisible(items: string[]): Promise<void> {
        for (const item of items) {
            await this.expectDropdownItemVisible(item);
        }
    }
       /**
     * Hover over a header navigation item by visible text.
     * This is used for menu items that open dropdowns on hover.
     */
    async hoverHeaderNavigationItem(itemName: string): Promise<void> {
        const navItem = this.getHeaderNavigationItem(itemName);

        // Make sure the header item is visible before hovering
        await expect(
            navItem,
            `Header navigation item should be visible before hover: ${itemName}`
        ).toBeVisible();

        await navItem.hover();
    }

    /**
     * Get any visible menu item by text.
     * This can be used for dropdown and sub-menu items.
     */
    getMenuItem(itemName: string): Locator {
        return this.page
            .locator('a, button, [role="menuitem"]')
            .filter({
                hasText: new RegExp(`^\\s*${this.escapeRegExp(itemName)}\\s*$`, 'i'),
            })
            .first();
    }

    /**
     * Hover over a dropdown or sub-menu item by visible text.
     * Example: hover over "Image Tools" after opening "AI Tools".
     */
    async hoverMenuItem(itemName: string): Promise<void> {
        const menuItem = this.getMenuItem(itemName);

        // Make sure the menu item is visible before hovering
        await expect(
            menuItem,
            `Menu item should be visible before hover: ${itemName}`
        ).toBeVisible();

        await menuItem.hover();
    }

    /**
     * Verify that a single menu item is visible.
     */
    async expectMenuItemVisible(itemName: string): Promise<void> {
        const menuItem = this.getMenuItem(itemName);

        await expect(
            menuItem,
            `Menu item should be visible: ${itemName}`
        ).toBeVisible();
    }

    /**
     * Verify that all menu items from the feature table are visible.
     */
    async expectMenuItemsVisible(items: string[]): Promise<void> {
        for (const item of items) {
            await this.expectMenuItemVisible(item);
        }
    }

    /**
 * Click an AI Tools submenu link and verify that it redirects correctly.
 * Flow:
 * 1. Open homepage
 * 2. Hover AI Tools
 * 3. Hover submenu category, for example Image Tools
 * 4. Click submenu link
 * 5. Verify URL
 */
async clickAIToolsSubmenuLinkAndVerifyRedirect(
    categoryName: string,
    linkText: string,
    expectedUrl: string
): Promise<void> {
    await this.open();

    await this.hoverHeaderNavigationItem('AI Tools');
    await this.hoverMenuItem(categoryName);

    const submenuLink = this.getMenuItem(linkText);

    await expect(
        submenuLink,
        `AI Tools submenu link should be visible before click: ${linkText}`
    ).toBeVisible();

    await submenuLink.click();

    await expect(
        this.page,
        `AI Tools submenu link should redirect correctly: ${linkText}`
    ).toHaveURL(expectedUrl);
}

/**
 * Verify that all AI Tools submenu links from the feature table redirect correctly.
 */
async expectAIToolsSubmenuLinksRedirectCorrectly(
    links: { category: string; link: string; expectedUrl: string }[]
): Promise<void> {
    for (const row of links) {
        await this.clickAIToolsSubmenuLinkAndVerifyRedirect(
            row.category,
            row.link,
            row.expectedUrl
        );
    }
}

        /**
     * Verify that the main hero heading is visible and has the expected text.
     * We use getByRole because the main heading should be an accessible heading element.
     */
    async expectMainHeadingVisible(expectedHeading: string): Promise<void> {
        const mainHeading = this.page.getByRole('heading', {
            name: expectedHeading,
        });

        await expect(
            mainHeading,
            `Main heading should be visible: ${expectedHeading}`
        ).toBeVisible();
    }

        /**
     * Verify that the hero sub-heading is visible and has the expected text.
     * We use text locator because the sub-heading may be a paragraph or another text element.
     */
    async expectSubHeadingVisible(expectedSubHeading: string): Promise<void> {
        const subHeading = this.page.getByText(expectedSubHeading, {
            exact: true,
        });

        await expect(
            subHeading,
            `Sub-heading should be visible: ${expectedSubHeading}`
        ).toBeVisible();
    }  

          /**
     * Verify that the homepage description text is visible and matches the expected text.
     * The expected text comes from the feature file.
     */
    async expectDescriptionTextVisible(expectedDescriptionText: string): Promise<void> {
        const descriptionText = this.page.getByText(expectedDescriptionText, {
            exact: true,
        });

        await expect(
            descriptionText,
            `Description text should be visible: ${expectedDescriptionText}`
        ).toBeVisible();
    }

      /**
     * Get a homepage feature card by visible text.
     * We use a flexible text match because card text can be split into multiple lines in the DOM.
     */
    getFeatureCard(cardText: string): Locator {
        const flexibleCardText = new RegExp(
            this.escapeRegExp(cardText).replace(/\s+/g, '\\s+'),
            'i'
        );

        return this.page
            .locator('main')
            .getByText(flexibleCardText)
            .first();
    }

    /**
     * Verify that a single homepage feature card is visible.
     */
    async expectFeatureCardVisible(cardText: string): Promise<void> {
        const featureCard = this.getFeatureCard(cardText);

        await expect(
            featureCard,
            `Feature card should be visible: ${cardText}`
        ).toBeVisible();
    }

    /**
     * Verify that all homepage feature cards from the feature table are visible.
     */
    async expectFeatureCardsVisible(cards: string[]): Promise<void> {
        for (const card of cards) {
            await this.expectFeatureCardVisible(card);
        }
    }

        /**
     * Verify that a button with the provided text is visible on the homepage.
     * The button text comes from the feature file.
     */
    async expectButtonVisible(buttonText: string): Promise<void> {
        const button = this.page.getByRole('button', {
            name: buttonText,
        });

        await expect(
            button,
            `Button should be visible: ${buttonText}`
        ).toBeVisible();
    }

        /**
     * Click a button by visible text.
     * This is used for CTA buttons such as "Get Started".
     */
    async clickButton(buttonText: string): Promise<void> {
        const button = this.page.getByRole('button', {
            name: buttonText,
        });

        // Make sure the button is visible before clicking it
        await expect(
            button,
            `Button should be visible before click: ${buttonText}`
        ).toBeVisible();

        await button.click();
    }

    /**
     * Verify that the user is redirected to the Login page.
     * We check the URL because redirect behavior should update the browser location.
     */
    async expectRedirectedToLoginPage(): Promise<void> {
        await expect(
            this.page,
            'User should be redirected to the Login page'
        ).toHaveURL(/login/i);
    }

        /**
     * Get an extension button by visible text.
     * Extension buttons can be real buttons or links styled as buttons.
     */
    getExtensionButton(buttonText: string): Locator {
        return this.page
            .locator('main a, main button')
            .filter({
                hasText: new RegExp(`^\\s*${this.escapeRegExp(buttonText)}\\s*$`, 'i'),
            })
            .first();
    }

    /**
     * Verify that a single extension button is visible.
     */
    async expectExtensionButtonVisible(buttonText: string): Promise<void> {
        const extensionButton = this.getExtensionButton(buttonText);

        await expect(
            extensionButton,
            `Extension button should be visible: ${buttonText}`
        ).toBeVisible();
    }

    /**
     * Verify that all extension buttons from the feature table are visible.
     */
    async expectExtensionButtonsVisible(buttons: string[]): Promise<void> {
        for (const button of buttons) {
            await this.expectExtensionButtonVisible(button);
        }
    }

        /**
     * Click an extension button and verify that it redirects to the expected store URL.
     * The store may open in the same tab or in a new browser tab.
     */
    async clickExtensionButtonAndVerifyStore(buttonText: string, expectedUrl: string): Promise<void> {
        const extensionButton = this.getExtensionButton(buttonText);

        // Make sure the extension button is visible before clicking it
        await expect(
            extensionButton,
            `Extension button should be visible before click: ${buttonText}`
        ).toBeVisible();

        // Start waiting for a new tab before clicking.
        // If no new tab opens, we will continue checking the current page.
        const popupPromise = this.page.waitForEvent('popup', {
            timeout: 5000,
        }).catch(() => null);

        await extensionButton.click();

        const popupPage = await popupPromise;
        const targetPage = popupPage ?? this.page;

        // Wait for the target page to load enough for URL verification
        await targetPage.waitForLoadState('domcontentloaded', {
            timeout: 10000,
        }).catch(() => null);

        await expect(
            targetPage,
            `${buttonText} should redirect to: ${expectedUrl}`
        ).toHaveURL(new RegExp(`^${this.escapeRegExp(expectedUrl)}`, 'i'), {
            timeout: 10000,
        });

        // Close popup tab if the store opened in a new tab
        if (popupPage) {
            await popupPage.close();
        }
    }

    /**
     * Verify that all extension buttons redirect to their expected store URLs.
     * We reopen the homepage before each check because clicking a button may leave the homepage.
     */
    async expectExtensionButtonsRedirectToCorrectStores(
        buttons: { button: string; expectedUrl: string }[]
    ): Promise<void> {
        for (const row of buttons) {
            await this.open();
            await this.clickExtensionButtonAndVerifyStore(row.button, row.expectedUrl);
        }
    }

        /**
     * Get a homepage tab by visible text.
     * Tabs can be real buttons, links, or elements with role="tab".
     */
    getTab(tabName: string): Locator {
        return this.page
            .locator('main button, main a, main [role="tab"]')
            .filter({
                hasText: new RegExp(`^\\s*${this.escapeRegExp(tabName)}\\s*$`, 'i'),
            })
            .first();
    }

    /**
     * Verify that a single homepage tab is visible.
     */
    async expectTabVisible(tabName: string): Promise<void> {
        const tab = this.getTab(tabName);

        await expect(
            tab,
            `Tab should be visible: ${tabName}`
        ).toBeVisible();
    }

    /**
     * Verify that all homepage tabs from the feature table are visible.
     */
    async expectTabsVisible(tabs: string[]): Promise<void> {
        for (const tab of tabs) {
            await this.expectTabVisible(tab);
        }
    }

    /**
     * Click a homepage tab by visible text.
     * This method reuses getTab() because tabs can be buttons, links, or elements with role="tab".
     */
    async clickTab(tabName: string): Promise<void> {
        const tab = this.getTab(tabName);

        // Make sure the tab is visible before clicking it
        await expect(
            tab,
            `Tab should be visible before click: ${tabName}`
        ).toBeVisible();

        await tab.scrollIntoViewIfNeeded();
        await tab.click();
    }

/**
 * Verify that a heading or tab content title is visible on the page.
 * We try semantic headings first and fall back to flexible text matching
 * for non-heading tab content titles.
 */
async expectHeadingVisible(headingText: string): Promise<void> {
    const heading = this.page.getByRole('heading', {
        name: headingText,
    });

    if (await heading.count()) {
        await expect(
            heading,
            `Heading should be visible: ${headingText}`
        ).toBeVisible();
        return;
    }

    const flexibleHeadingText = new RegExp(
        this.escapeRegExp(headingText).replace(/\s+/g, '\\s+'),
        'i'
    );

    const flexibleHeading = this.page
        .locator('main')
        .getByText(flexibleHeadingText)
        .first();

    await expect(
        flexibleHeading,
        `Heading should be visible: ${headingText}`
    ).toBeVisible();
}

/**
 * Click each tab from the feature table and verify that the correct heading appears.
 */
async expectCorrectHeadingVisibleAfterClickingEachTab(
    tabs: { tab: string; heading: string }[]
): Promise<void> {
    for (const row of tabs) {
        await this.clickTab(row.tab);
        await this.expectHeadingVisible(row.heading);
    }
}

        /**
     * Verify that a button or link with the provided text is visible in the main content.
     * We check all matching elements because inactive tab panels may contain hidden duplicate buttons.
     */
    async expectMainButtonVisible(buttonText: string): Promise<void> {
        const buttonTextRegex = new RegExp(
            `^\\s*${this.escapeRegExp(buttonText)}\\s*$`,
            'i'
        );

        const buttons = this.page
            .locator('main a, main button')
            .filter({
                hasText: buttonTextRegex,
            });

        const buttonCount = await buttons.count();

        for (let i = 0; i < buttonCount; i++) {
            const button = buttons.nth(i);

            if (await button.isVisible()) {
                return;
            }
        }

        throw new Error(`No visible "${buttonText}" button was found in main content`);
    }
        /**
     * Click each tab from the feature table and verify that the expected button is visible.
     * This is used for checking the "Install now" button inside every tab content.
     */
    async expectButtonVisibleForEachTab(buttonText: string, tabs: string[]): Promise<void> {
        for (const tab of tabs) {
            await this.clickTab(tab);
            await this.expectMainButtonVisible(buttonText);
        }
    }

        /**
     * Verify that a value card title and description are visible on the homepage.
     * We check both title and description because the card is validated by its content.
     */
    async expectValueCardVisible(title: string, description: string): Promise<void> {
        const titleRegex = new RegExp(
            this.escapeRegExp(title).replace(/\s+/g, '\\s+'),
            'i'
        );

        const descriptionRegex = new RegExp(
            this.escapeRegExp(description).replace(/\s+/g, '\\s+'),
            'i'
        );

        const valueCardTitle = this.page
            .locator('main')
            .getByText(titleRegex)
            .first();

        const valueCardDescription = this.page
            .locator('main')
            .getByText(descriptionRegex)
            .first();

        await expect(
            valueCardTitle,
            `Value card title should be visible: ${title}`
        ).toBeVisible();

        await expect(
            valueCardDescription,
            `Value card description should be visible: ${description}`
        ).toBeVisible();
    }

    /**
     * Verify that all value cards from the feature table are visible.
     */
    async expectValueCardsVisible(
        cards: { title: string; description: string }[]
    ): Promise<void> {
        for (const card of cards) {
            await this.expectValueCardVisible(card.title, card.description);
        }
    }
     

      /**
 * Verify that the AI image gallery is visible on the homepage.
 * We scroll down because the gallery may be below the initial viewport.
 */
    async expectAIImageGalleryVisible(): Promise<void> {
    await this.page.waitForLoadState('networkidle');

    const galleryImages = this.page.locator('main img');

    const count = await galleryImages.count();

    if (count === 0) {
        throw new Error('No images found on homepage');
    }

    await expect(galleryImages.first()).toBeVisible();
}

           /**
     * Verify that the AI image gallery displays the expected number of visible images.
     * We look for a container inside main content that has exactly the expected number of large visible images.
     * This avoids counting unrelated images from other homepage sections.
     */
    async expectImageGalleryImageCount(expectedCount: number): Promise<void> {
        // Scroll down because the gallery is lower on the homepage
        await this.page.mouse.wheel(0, 5000);
        await this.page.waitForTimeout(500);

        const containers = this.page.locator('main div');
        const containerCount = await containers.count();

        for (let i = 0; i < containerCount; i++) {
            const container = containers.nth(i);
            const images = container.locator('img');
            const imageCount = await images.count();

            let visibleGalleryImageCount = 0;

            for (let j = 0; j < imageCount; j++) {
                const image = images.nth(j);

                if (!(await image.isVisible())) {
                    continue;
                }

                const box = await image.boundingBox();

                if (!box) {
                    continue;
                    
                }
               
                // Gallery images are larger than small icons/logos
                if (box.width >= 100 && box.height >= 100) {
                    visibleGalleryImageCount++;
                }
            }

            if (visibleGalleryImageCount === expectedCount) {
    for (let j = 0; j < imageCount; j++) {
        const image = images.nth(j);

        if (!(await image.isVisible())) {
            continue;
        }

        const box = await image.boundingBox();

        if (!box) {
            continue;
        }

        if (box.width >= 100 && box.height >= 100) {
            await expect(image).toBeVisible();
        }
    }

    return;
}
            
        }

        throw new Error(`Image gallery should display ${expectedCount} visible images`);
    }
        /**
     * Verify that the GetBotAI logo is visible in the footer.
     * We search inside the footer only, so it does not accidentally match the header logo.
     */
    async expectFooterLogoVisible(): Promise<void> {
        const footer = this.page.locator('footer');

        const footerLogo = footer.locator('img').first();

        await expect(
            footerLogo,
            'GetBotAI logo should be visible in the footer'
        ).toBeVisible();
    }
        /**
     * Verify that a single footer column title is visible.
     * We search inside the footer only, so it does not match similar text from other sections.
     */
    async expectFooterColumnVisible(columnName: string): Promise<void> {
        const footerColumn = this.page
            .locator('footer')
            .getByText(new RegExp(`^\\s*${this.escapeRegExp(columnName)}\\s*$`, 'i'))
            .first();

        await expect(
            footerColumn,
            `Footer column should be visible: ${columnName}`
        ).toBeVisible();
    }

    /**
     * Verify that all footer column titles from the feature table are visible.
     */
    async expectFooterColumnsVisible(columns: string[]): Promise<void> {
        for (const column of columns) {
            await this.expectFooterColumnVisible(column);
        }
    }

        /**
     * Get a footer link by visible text.
     * We search inside the footer only to avoid matching links from the header or main content.
     */
    getFooterLink(linkText: string): Locator {
        return this.page
            .locator('footer a')
            .filter({
                hasText: new RegExp(`^\\s*${this.escapeRegExp(linkText)}\\s*$`, 'i'),
            })
            .first();
    }

    /**
     * Verify that a single footer link is visible.
     */
    async expectFooterLinkVisible(linkText: string): Promise<void> {
        const footerLink = this.getFooterLink(linkText);

        await expect(
            footerLink,
            `Footer link should be visible: ${linkText}`
        ).toBeVisible();
    }

    /**
     * Verify that all links from the feature table are visible in the footer Features column.
     */
    async expectFeaturesColumnLinksVisible(links: string[]): Promise<void> {
        for (const link of links) {
            await this.expectFooterLinkVisible(link);
        }
    }
        /**
     * Verify that all links from the feature table are visible in the footer About column.
     * We reuse the generic footer link check because these links are inside the footer.
     */
    async expectAboutColumnLinksVisible(links: string[]): Promise<void> {
        for (const link of links) {
            await this.expectFooterLinkVisible(link);
        }
    }

        /**
     * Verify that the contact email is visible in the footer.
     * We search inside the footer only, so it does not match the same email from another section.
     */
    async expectContactEmailVisibleInFooter(email: string): Promise<void> {
        const contactEmail = this.page
            .locator('footer')
            .getByText(email, {
                exact: true,
            });

        await expect(
            contactEmail,
            `Contact email should be visible in the footer: ${email}`
        ).toBeVisible();
    }

        /**
     * Verify that all links from the feature table are visible in the footer Learn More column.
     * We reuse the generic footer link check because these links are inside the footer.
     */
    async expectLearnMoreColumnLinksVisible(links: string[]): Promise<void> {
        for (const link of links) {
            await this.expectFooterLinkVisible(link);
        }
    }
              /**
 * Verify that the copyright/trademark text is visible in the footer.
 * The year may change, and the symbol can be either @ or ©.
 */
async expectCopyrightTextVisibleInFooter(): Promise<void> {
    const footer = this.page.locator('footer');

    const copyrightText = footer.getByText(
        /[@©]\s*20\d{2}\s+GETBOT\.AI is registered trademark of FUTURE TECH NEXUS, LLC\./i
    );

    await expect(
        copyrightText,
        'Copyright/trademark text should be visible in the footer'
    ).toBeVisible();
}
        /**
     * Verify that the contact email has the correct mailto link in the footer.
     * We search inside the footer only, because the scenario is about footer content.
     */
    async expectContactEmailHasCorrectMailtoLink(email: string): Promise<void> {
        const emailLink = this.page
            .locator('footer a')
            .filter({
                hasText: new RegExp(`^\\s*${this.escapeRegExp(email)}\\s*$`, 'i'),
            })
            .first();

        await expect(
            emailLink,
            `Contact email link should be visible in the footer: ${email}`
        ).toBeVisible();

        await expect(
            emailLink,
            `Contact email should have correct mailto link: ${email}`
        ).toHaveAttribute('href', `mailto:${email}`);
    }
        /**
     * Click a footer link and verify that it redirects to the expected URL.
     * We check only that the current URL contains the expected URL part,
     * because footer links may use full URLs or relative paths.
     */
    async clickFooterLinkAndVerifyRedirect(linkText: string, expectedUrlPart: string): Promise<void> {
        await this.open();

        const footerLink = this.getFooterLink(linkText);

        await expect(
            footerLink,
            `Footer link should be visible before click: ${linkText}`
        ).toBeVisible();

        await footerLink.click();

        await expect(
            this.page,
            `Footer link should redirect correctly: ${linkText}`
        ).toHaveURL(new RegExp(this.escapeRegExp(expectedUrlPart), 'i'));
    }

    /**
     * Verify that all footer links from the feature table redirect correctly.
     */
    async expectFooterLinksRedirectCorrectly(
        links: { link: string; expectedUrl: string }[]
    ): Promise<void> {
        for (const row of links) {
            await this.clickFooterLinkAndVerifyRedirect(row.link, row.expectedUrl);
        }
    }
    
    /**
     * Escape special characters before using text inside RegExp.
     */
    private escapeRegExp(text: string): string {
        return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
}
   /**
     * update the HomePage.ts file to include the new methods 
     */