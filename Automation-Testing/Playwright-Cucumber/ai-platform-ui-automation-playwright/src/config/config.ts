import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

function requireEnv(key: string, fallback?: string): string {
  const value = process.env[key] ?? fallback;
  if (value === undefined) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

interface OAuthClientConfig {
  client_id?: string;
  client_secret?: string;
}

interface CredentialsFile {
  installed?: OAuthClientConfig;
  web?: OAuthClientConfig;
}

interface TokenFile {
  refresh_token?: string;
}

function readJsonFile<T>(fileName: string): T | undefined {
  const fullPath = path.resolve(process.cwd(), fileName);
  if (!fs.existsSync(fullPath)) {
    return undefined;
  }

  try {
    const raw = fs.readFileSync(fullPath, 'utf8');
    return JSON.parse(raw) as T;
  } catch {
    return undefined;
  }
}

const credentialsFile = readJsonFile<CredentialsFile>('credentials.json');
const oauthClient = credentialsFile?.installed ?? credentialsFile?.web;
const tokenFile = readJsonFile<TokenFile>('token.json');

export const config = {
  api: {
    baseUrl: requireEnv('BASE_URL', 'https://app.example.com'),
    timeout: parseInt(requireEnv('API_TIMEOUT', '30000'), 10),
    version: 'v1',
  },

  auth: {
    testEmail: requireEnv('TEST_EMAIL', 'testuser@example.com'),
    testFirstName: requireEnv('TEST_FIRST_NAME', 'Test'),
    testLastName: requireEnv('TEST_LAST_NAME', 'User'),
    otpCode: requireEnv('OTP_CODE', ''),
    otpMode: requireEnv('OTP_MODE', 'static') as 'static' | 'gmail',
    otpTimeoutMs: parseInt(requireEnv('OTP_TIMEOUT_MS', '90000'), 10),
    otpPollIntervalMs: parseInt(requireEnv('OTP_POLL_INTERVAL_MS', '3000'), 10),
    otpDigitLength: parseInt(requireEnv('OTP_DIGIT_LENGTH', '6'), 10),
    gmailClientId: requireEnv('GMAIL_CLIENT_ID', oauthClient?.client_id ?? ''),
    gmailClientSecret: requireEnv('GMAIL_CLIENT_SECRET', oauthClient?.client_secret ?? ''),
    gmailRefreshToken: requireEnv('GMAIL_REFRESH_TOKEN', tokenFile?.refresh_token ?? ''),
    gmailInboxUser: requireEnv('GMAIL_INBOX_USER', ''),
    gmailSubjectFilter: requireEnv('GMAIL_SUBJECT_FILTER', 'otp'),
  },

  browser: {
    type: requireEnv('BROWSER', 'chromium') as 'chromium' | 'firefox' | 'webkit',
    headless: requireEnv('HEADLESS', 'true') === 'true',
    slowMo: parseInt(requireEnv('SLOW_MO', '0'), 10),
    viewport: {
      width: parseInt(requireEnv('VIEWPORT_WIDTH', '1280'), 10),
      height: parseInt(requireEnv('VIEWPORT_HEIGHT', '720'), 10),
    },
  },

  timeouts: {
    api: parseInt(requireEnv('API_TIMEOUT', '30000'), 10),
    ui: parseInt(requireEnv('UI_TIMEOUT', '30000'), 10),
    navigation: parseInt(requireEnv('NAVIGATION_TIMEOUT', '60000'), 10),
  },

  retry: {
    count: parseInt(requireEnv('RETRY_COUNT', '2'), 10),
  },

  logging: {
    level: requireEnv('LOG_LEVEL', 'info'),
  },

  get apiBasePath(): string {
    return `${this.api.baseUrl}/api/${this.api.version}`;
  },
} as const;
