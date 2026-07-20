import { IWorldOptions, World, setWorldConstructor } from '@cucumber/cucumber';
import { APIRequestContext, APIResponse, Browser, BrowserContext, Page } from 'playwright';
import { TokenManager } from '../utils/tokenManager';

export interface ApiExchange {
  timestamp: string;
  method: string;
  url: string;
  requestHeaders?: Record<string, string>;
  requestBody: unknown;
  status: number;
  responseHeaders: Record<string, string>;
  responseBody: unknown;
}

/**
 * CustomWorld is instantiated per Cucumber scenario.
 * It holds the shared state (API context, browser page, tokens, IDs) that
 * step definitions read and write across steps.
 */
export class CustomWorld extends World {
  // ─── API ──────────────────────────────────────────────────────────────────
  apiContext!: APIRequestContext;
  /** Raw Playwright response from the last API call. */
  lastResponse!: APIResponse;
  /** Parsed JSON body of the last API response (null if non-JSON). */
  lastResponseBody: unknown = null;
  /** Latest API request/response exchange captured via hook-level interception. */
  lastApiExchange: ApiExchange | null = null;

  // ─── Browser / UI ─────────────────────────────────────────────────────────
  browser!: Browser;
  browserContext!: BrowserContext;
  page!: Page;

  // ─── Auth State ───────────────────────────────────────────────────────────
  tokenManager: TokenManager;
  accessToken?: string;
  refreshToken?: string;
  tokens: Record<string, string> = {};
  // ─── Entity IDs shared between steps ─────────────────────────────────────
  userId?: string;
  orgId?: string;
  orgSlug?: string;
  invitationId?: string;
  invitationToken?: string;
  targetUserId?: string;
  conversationId?: string;
  groupId?: string;
  messageId?: string;
  generatedImageId?: string;
  generatedVideoId?: string;
  ttsGenerationId?: string;
  ttsPresetId?: string;
  ttsVoiceId?: string;
  editedImageId?: string;
  analysisId?: string;
  mediaId?: string;
  creditTypeId?: string;
  otpCode?: string;

  constructor(options: IWorldOptions) {
    super(options);
    this.tokenManager = new TokenManager();
  }

  /** Convenience: store response + parse body in one call. */
  async captureResponse(response: APIResponse): Promise<void> {
    this.lastResponse = response;
    try {
      this.lastResponseBody = await response.json();
    } catch {
      this.lastResponseBody = null;
    }
  }
}

setWorldConstructor(CustomWorld);
