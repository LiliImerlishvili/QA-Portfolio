import { Page } from 'playwright';
import { BasePage } from './BasePage';

/**
 * Page Object for the main Dashboard page.
 */
export class DashboardPage extends BasePage {
  private readonly newChatButton = '[data-testid="new-chat-button"]';
  private readonly userMenuButton = '[data-testid="user-menu-button"]';
  private readonly logoutMenuItem = '[data-testid="logout-menu-item"]';
  private readonly conversationList = '[data-testid="conversation-list"]';
  private readonly orgSwitcher = '[data-testid="org-switcher"]';

  constructor(page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    await this.navigate('/dashboard');
  }

  async clickNewChat(): Promise<void> {
    await this.page.click(this.newChatButton);
  }

  async openUserMenu(): Promise<void> {
    await this.page.click(this.userMenuButton);
  }

  async logout(): Promise<void> {
    await this.openUserMenu();
    await this.page.click(this.logoutMenuItem);
    await this.waitForUrl(/login/);
  }

  async isConversationListVisible(): Promise<boolean> {
    return this.page.locator(this.conversationList).isVisible();
  }

  async switchOrganization(orgName: string): Promise<void> {
    await this.page.click(this.orgSwitcher);
    await this.page.getByText(orgName).click();
  }
}
