import axios from 'axios';
import { config } from '../config/config';
import { logger } from './logger';

interface TokenResponse {
  access_token: string;
}

interface GmailMessage {
  id: string;
  threadId: string;
}

interface GmailListResponse {
  messages?: GmailMessage[];
}

interface GmailMessagePayload {
  headers?: Array<{ name: string; value: string }>;
  parts?: GmailMessagePayload[];
  body?: { data?: string };
  mimeType?: string;
}

interface GmailMessageResponse {
  id: string;
  internalDate?: string;
  payload?: GmailMessagePayload;
  snippet?: string;
}

function getHeaderValue(
  headers: GmailMessagePayload['headers'],
  name: string,
): string | undefined {
  return headers?.find((header) => header.name.toLowerCase() === name.toLowerCase())?.value;
}

async function getAccessToken(): Promise<string> {
  const { gmailClientId, gmailClientSecret, gmailRefreshToken } = config.auth;

  if (!gmailClientId || !gmailClientSecret || !gmailRefreshToken) {
    throw new Error(
      'OTP_MODE=gmail requires GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET, and GMAIL_REFRESH_TOKEN in .env',
    );
  }

  const res = await axios.post<TokenResponse>(
    'https://oauth2.googleapis.com/token',
    new URLSearchParams({
      client_id: gmailClientId,
      client_secret: gmailClientSecret,
      refresh_token: gmailRefreshToken,
      grant_type: 'refresh_token',
    }),
    { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
  );

  return res.data.access_token;
}

function extractOtp(text: string, length: number): string | null {
  const htmlBlockPattern = new RegExp(
    `letter-spacing\\s*:\\s*\\d+px[^>]*>\\s*([A-Za-z0-9]{${length}})\\s*<`,
    'i',
  );
  const htmlBlockMatch = text.match(htmlBlockPattern);
  if (htmlBlockMatch?.[1]) {
    return htmlBlockMatch[1].toUpperCase();
  }

  const contextualPatterns = [
    new RegExp(`(?:one[-\\s]?time\\s+password|verification\\s+code|otp)[\\s\\S]{0,300}?\\b([A-Za-z0-9]{${length}})\\b`, 'i'),
    new RegExp(`(?:use\\s+the\\s+following\\s+one[-\\s]?time\\s+password|code\\s+will\\s+expire)[\\s\\S]{0,200}?\\b([A-Za-z0-9]{${length}})\\b`, 'i'),
  ];

  for (const pattern of contextualPatterns) {
    const match = text.match(pattern);
    if (match?.[1]) {
      return match[1].toUpperCase();
    }
  }

  const candidates = text.match(new RegExp(`\\b[A-Za-z0-9]{${length}}\\b`, 'g')) ?? [];
  const alphaNum = candidates.find((candidate) => /[A-Za-z]/.test(candidate) && /\d/.test(candidate));
  if (alphaNum) {
    return alphaNum.toUpperCase();
  }

  const numericOnly = candidates.find((candidate) => /^\d+$/.test(candidate));
  if (numericOnly) {
    return numericOnly;
  }

  return candidates[0]?.toUpperCase() ?? null;
}

function decodeBase64Url(encoded: string): string {
  const base64 = encoded.replace(/-/g, '+').replace(/_/g, '/');
  return Buffer.from(base64, 'base64').toString('utf8');
}

function extractTextFromPayload(payload: GmailMessagePayload): string {
  if (payload.parts && payload.parts.length > 0) {
    return payload.parts.map(extractTextFromPayload).join('\n');
  }
  if (payload.body?.data) {
    return decodeBase64Url(payload.body.data);
  }
  return '';
}

async function readLatestOtpFromGmail(targetEmail: string): Promise<string> {
  if (!config.auth.gmailInboxUser) {
    throw new Error('OTP_MODE=gmail requires GMAIL_INBOX_USER in .env');
  }

  const startedAt = Date.now();
  const timeoutAt = startedAt + config.auth.otpTimeoutMs;
  let hasLoggedConnection = false;

  while (Date.now() < timeoutAt) {
    const accessToken = await getAccessToken();
    const authHeader = `Bearer ${accessToken}`;

    if (!hasLoggedConnection) {
      logger.info(`Connected to Gmail API for inbox ${config.auth.gmailInboxUser}`);
      hasLoggedConnection = true;
    }

    const afterDate = new Date(startedAt);
    const afterEpoch = Math.floor(afterDate.getTime() / 1000);

    const queryBase = `to:${targetEmail} after:${afterEpoch}`;
    const queries = config.auth.gmailSubjectFilter
      ? [`${queryBase} subject:${config.auth.gmailSubjectFilter}`, queryBase]
      : [queryBase];

    const seenMessageIds = new Set<string>();
    let foundAnyMessage = false;

    for (const query of queries) {
      logger.info(`Checking Gmail inbox for OTP email with query: ${query}`);

      const listRes = await axios.get<GmailListResponse>(
        'https://gmail.googleapis.com/gmail/v1/users/me/messages',
        {
          headers: { Authorization: authHeader },
          params: { q: query, maxResults: 10 },
        },
      );

      const messages = listRes.data.messages ?? [];

      if (messages.length === 0) {
        logger.info(`No Gmail messages found for query: ${query}`);
      }

      for (const msg of messages) {
        if (seenMessageIds.has(msg.id)) {
          continue;
        }
        seenMessageIds.add(msg.id);
        foundAnyMessage = true;

        const msgRes = await axios.get<GmailMessageResponse>(
          `https://gmail.googleapis.com/gmail/v1/users/me/messages/${msg.id}`,
          {
            headers: { Authorization: authHeader },
            params: { format: 'full' },
          },
        );

        const payload = msgRes.data.payload;
        if (!payload) continue;

        const subject = getHeaderValue(payload.headers, 'Subject') ?? '(no subject)';
        logger.info(`Gmail email found for ${targetEmail}: subject="${subject}"`);

        const body = extractTextFromPayload(payload);
        const snippet = msgRes.data.snippet ?? '';
        const otp = extractOtp(body, config.auth.otpDigitLength)
          ?? extractOtp(snippet, config.auth.otpDigitLength);

        if (otp) {
          logger.info(`OTP extracted from Gmail email for ${targetEmail}`);
          return otp;
        }

        logger.warn(
          `Gmail email found for ${targetEmail}, but no OTP matched expected length ${config.auth.otpDigitLength}`,
        );
      }
    }

    if (!foundAnyMessage) {
      logger.info(`OTP email not found yet for ${targetEmail}; retrying in ${config.auth.otpPollIntervalMs}ms`);
    }

    await new Promise((resolve) => setTimeout(resolve, config.auth.otpPollIntervalMs));
  }

  throw new Error(`OTP was not found in Gmail inbox within ${config.auth.otpTimeoutMs}ms`);
}

export async function resolveOtpForEmail(targetEmail: string): Promise<string> {
  if (config.auth.otpMode === 'gmail') {
    return readLatestOtpFromGmail(targetEmail);
  }

  return config.auth.otpCode;
}
