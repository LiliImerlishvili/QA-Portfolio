import { AuthTokens } from '../types/app.types';
import { logger } from './logger';

/**
 * Manages access/refresh tokens and shared state across steps in a test scenario.
 * One instance is created per Cucumber World (i.e. per scenario).
 */
export class TokenManager {
  private accessToken: string | null = null;
  private refreshToken: string | null = null;

  setTokens(tokens: AuthTokens): void {
    this.accessToken = tokens.accessToken;
    this.refreshToken = tokens.refreshToken;
    logger.debug('Tokens updated');
  }

  getAccessToken(): string {
    if (!this.accessToken) {
      throw new Error('No access token available. Complete authentication first.');
    }
    return this.accessToken;
  }

  getRefreshToken(): string {
    if (!this.refreshToken) {
      throw new Error('No refresh token available. Complete authentication first.');
    }
    return this.refreshToken;
  }

  getBearerHeader(): Record<string, string> {
    return { Authorization: `Bearer ${this.getAccessToken()}` };
  }

  isAuthenticated(): boolean {
    return this.accessToken !== null;
  }

  clear(): void {
    this.accessToken = null;
    this.refreshToken = null;
  }
}
