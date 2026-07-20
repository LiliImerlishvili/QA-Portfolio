import { Page } from 'playwright';
import { BasePage } from './BasePage';

/**
 * Page Object for the Chat conversation page.
 */
export class ChatPage extends BasePage {
  private readonly messageInput = '[data-testid="message-input"]';
  private readonly sendButton = '[data-testid="send-button"]';
  private readonly assistantMessage = '[data-testid="assistant-message"]';
  private readonly userMessage = '[data-testid="user-message"]';
  private readonly modelSelector = '[data-testid="model-selector"]';
  private readonly conversationTitle = '[data-testid="conversation-title"]';
  private readonly streamingIndicator = '[data-testid="streaming-indicator"]';

  constructor(page: Page) {
    super(page);
  }

  async typeMessage(message: string): Promise<void> {
    await this.page.fill(this.messageInput, message);
  }

  async sendMessage(message: string): Promise<void> {
    await this.typeMessage(message);
    await this.page.click(this.sendButton);
  }

  async waitForResponse(): Promise<void> {
    // Wait for streaming to start then complete
    await this.page.waitForSelector(this.streamingIndicator, {
      state: 'visible',
      timeout: 10_000,
    });
    await this.page.waitForSelector(this.streamingIndicator, {
      state: 'hidden',
      timeout: 120_000,
    });
  }

  async getLastAssistantMessage(): Promise<string> {
    const messages = this.page.locator(this.assistantMessage);
    const count = await messages.count();
    return messages.nth(count - 1).innerText();
  }

  async getConversationTitle(): Promise<string> {
    return this.page.locator(this.conversationTitle).innerText();
  }

  async selectModel(modelName: string): Promise<void> {
    await this.page.click(this.modelSelector);
    await this.page.getByText(modelName).click();
  }
}
