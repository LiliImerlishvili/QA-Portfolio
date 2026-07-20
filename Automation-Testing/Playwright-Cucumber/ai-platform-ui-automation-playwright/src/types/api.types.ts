// ─── Auth ────────────────────────────────────────────────────────────────────

export interface SignUpRequest {
  email: string;
  firstName: string;
  lastName: string;
}

export interface SignInRequest {
  email: string;
}

export interface VerifyOtpRequest {
  email: string;
  otpCode: string;
}

export interface ResendOtpRequest {
  email: string;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface SwitchOrganizationRequest {
  organizationId: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface AuthResponse extends AuthTokens {
  user: User;
}

export interface Session {
  id?: string;
  device: string;
  browser: string;
  os: string;
  ip: string;
  createdAt: string;
  isCurrent?: boolean;
}

// ─── User ─────────────────────────────────────────────────────────────────────

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  profileImage?: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

export type UserRole = 'ADMIN' | 'USER';

export interface UpdateUserRequest {
  firstName?: string;
  lastName?: string;
  profileImage?: string;
}

// ─── Preferences ─────────────────────────────────────────────────────────────

export type Theme = 'LIGHT' | 'DARK' | 'SYSTEM';

export interface Preferences {
  id: string;
  userId: string;
  defaultOrganizationId?: string;
  language?: string;
  responseLanguage?: string;
  timezone?: string;
  theme: Theme;
  emailNotifications: boolean;
  pushNotifications: boolean;
}

export interface UpdatePreferencesRequest {
  defaultOrganizationId?: string;
  language?: string;
  responseLanguage?: string;
  timezone?: string;
  theme?: Theme;
  emailNotifications?: boolean;
  pushNotifications?: boolean;
}

// ─── Organization ─────────────────────────────────────────────────────────────

export type OrgMemberRole = 'ADMIN' | 'MEMBER';
export type OrgMemberStatus = 'ACTIVE' | 'FROZEN';

export interface Organization {
  id: string;
  name: string;
  description?: string;
  avatarUrl?: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  deletionScheduledAt?: string;
}

export interface OrgMember {
  id: string;
  userId: string;
  organizationId: string;
  role: OrgMemberRole;
  status: OrgMemberStatus;
  user: Pick<User, 'id' | 'email' | 'firstName' | 'lastName' | 'profileImage'>;
}

export interface CreateOrganizationRequest {
  name: string;
  description?: string;
}

export interface UpdateOrganizationRequest {
  name?: string;
  description?: string;
  avatarUrl?: string;
}

export interface TransferAdminRequest {
  userId: string;
}

// ─── Invitation ───────────────────────────────────────────────────────────────

export type InvitationStatus = 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'EXPIRED' | 'REVOKED';

export interface Invitation {
  id: string;
  email: string;
  organizationId: string;
  status: InvitationStatus;
  token: string;
  expiresAt: string;
  createdAt: string;
}

export interface CreateInvitationRequest {
  email: string;
}

export interface AcceptInvitationRequest {
  token: string;
}

// ─── Credits ─────────────────────────────────────────────────────────────────

export interface CreditBalance {
  creditTypeId: string;
  creditTypeName: string;
  balance: number;
  allocated: number;
  used: number;
}

export interface CreditType {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
}

export interface CreditUsageEntry {
  id: string;
  creditTypeId: string;
  productId: string;
  amount: number;
  createdAt: string;
}

export interface AllocateCreditsRequest {
  userId: string;
  creditTypeId: string;
  amount: number;
}

export interface ReclaimCreditsRequest {
  userId: string;
  creditTypeId: string;
  amount: number;
}

export interface TransferCreditsRequest {
  fromUserId: string;
  toUserId: string;
  creditTypeId: string;
  amount: number;
}

// ─── Conversations ────────────────────────────────────────────────────────────

export type ConversationType =
  | 'CHAT'
  | 'DOC'
  | 'WEB'
  | 'EMAIL'
  | 'VS_CODE'
  | 'YOUTUBE_TRANSCRIPT';

export interface Conversation {
  id: string;
  title?: string;
  type: ConversationType;
  userId: string;
  organizationId: string;
  groupId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Message {
  id: string;
  conversationId: string;
  role: 'user' | 'assistant';
  content: string;
  createdAt: string;
}

export interface UpdateConversationRequest {
  title?: string;
}

// ─── Chat ─────────────────────────────────────────────────────────────────────

export type ChatModel =
  | 'gpt-4o'
  | 'gpt-4o-mini'
  | 'o3-mini'
  | 'gpt-5'
  | 'gpt-5-mini'
  | 'gpt-5-nano'
  | 'claude-sonnet'
  | 'claude-haiku'
  | 'claude-opus'
  | 'gemini-3-flash-preview'
  | 'gemini-2.5-pro'
  | 'gemini-2.5-flash'
  | 'gemini-2.5-flash-lite'
  | 'deepseek-chat'
  | 'deepseek-reasoner';

export interface CreateConversationRequest {
  message: string;
  type?: ConversationType;
  mediaIds?: string[];
  organizationId?: string;
}

export interface ContinueConversationRequest {
  message: string;
  mediaIds?: string[];
}

// ─── Conversation Groups ──────────────────────────────────────────────────────

export interface ConversationGroup {
  id: string;
  name: string;
  userId: string;
  sortOrder?: number;
  createdAt: string;
}

export interface CreateGroupRequest {
  name: string;
  sortOrder?: number;
}

export interface MoveConversationRequest {
  groupId: string | null;
}

// ─── Image Generation ─────────────────────────────────────────────────────────

export type ImageGenerationModel =
  | 'dall-e-3'
  | 'gpt-image-1'
  | 'gpt-image-1-mini'
  | 'gpt-image-1.5'
  | 'chatgpt-image-latest'
  | 'gemini-2.5-flash-image'
  | 'imagen-4.0-generate-001'
  | 'stable-diffusion-3.5-large'
  | 'stable-image-core'
  | 'stable-image-ultra';

export interface GenerateImageRequest {
  prompt: string;
  model: ImageGenerationModel;
  size?: string;
  quality?: string;
  style?: string;
  n?: number;
  aspectRatio?: string;
}

export interface GeneratedImage {
  id: string;
  prompt: string;
  model: string;
  imageUrl: string;
  userId: string;
  createdAt: string;
}

// ─── Storage ─────────────────────────────────────────────────────────────────

export type StorageFolder = 'profile-images' | 'organization-images' | 'attachments';

export interface PresignedUrlRequest {
  folder: StorageFolder;
  fileName: string;
  fileSize: number;
  mimeType: string;
}

export interface PresignedUrlResponse {
  uploadUrl: string;
  fileUrl: string;
  key: string;
  expiresIn: number;
  uploadFields?: Record<string, string>;
}

// ─── Media ───────────────────────────────────────────────────────────────────

export type MediaType = 'IMAGE' | 'DOCUMENT' | 'VIDEO' | 'AUDIO';

export interface Media {
  id: string;
  url: string;
  mediaType: MediaType;
  fileName: string;
  fileSize: number;
  mimeType: string;
  userId: string;
  createdAt: string;
}

export interface CreateMediaRequest {
  url: string;
  mediaType: MediaType;
  fileName: string;
  fileSize: number;
  mimeType: string;
}

// ─── Content Analysis ────────────────────────────────────────────────────────

export type AnalysisType = 'AI_PREDICTION' | 'PLAGIARISM';
export type AnalysisInputType = 'text' | 'file' | 'website' | 'youtube';

export interface ContentAnalysis {
  id: string;
  type: AnalysisType;
  inputType: AnalysisInputType;
  result: Record<string, unknown>;
  userId: string;
  createdAt: string;
}

export interface CreateAnalysisRequest {
  type: AnalysisType;
  inputType: AnalysisInputType;
  text?: string;
  url?: string;
  mediaId?: string;
}

// ─── Subscription ────────────────────────────────────────────────────────────

export interface Subscription {
  organizationId: string;
  tier: string;
  status: string;
  currentPeriodStart: string;
  currentPeriodEnd: string;
  cancelAtPeriodEnd: boolean;
}

export interface CreateCheckoutSessionRequest {
  priceId: string;
  successUrl: string;
  cancelUrl: string;
}

export interface ChangePlanRequest {
  priceId: string;
}

export interface CancelSubscriptionRequest {
  immediate?: boolean;
}

// ─── Pagination ───────────────────────────────────────────────────────────────

export interface PaginationParams {
  page?: number;
  limit?: number;
  cursor?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total?: number;
  page?: number;
  limit?: number;
  nextCursor?: string;
  hasMore?: boolean;
}

// ─── API Error ────────────────────────────────────────────────────────────────

export interface ApiError {
  statusCode: number;
  message: string | string[];
  error?: string;
}
