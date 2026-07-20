import { Page } from 'playwright';

/**
 * Reusable navigation component present on most authenticated pages.
 */
export class NavigationComponent {
  constructor(private readonly page: Page) {}

  async clickLogo(): Promise<void> {
    await this.page.getByTestId('nav-logo').click();
  }

  async navigateTo(section: 'chat' | 'images' | 'videos' | 'tts' | 'settings'): Promise<void> {
    await this.page.getByTestId(`nav-${section}`).click();
  }

  async isActive(section: string): Promise<boolean> {
    return this.page.getByTestId(`nav-${section}`).evaluate((el) =>
      el.classList.contains('active'),
    );
  }
}
