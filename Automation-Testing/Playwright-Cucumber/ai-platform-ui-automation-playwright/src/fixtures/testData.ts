import { config } from '../config/config';

/**
 * Centralised test data used across feature files and step definitions.
 * All values read from .env via config so they can be overridden per environment.
 */
export const testData = {
  auth: {
    email: config.auth.testEmail,
    firstName: config.auth.testFirstName,
    lastName: config.auth.testLastName,
    otpCode: config.auth.otpCode,
    alternateEmail: `alt-${Date.now()}@example.com`,
  },

  organization: {
    name: 'Automation Test Org',
    description: 'Created by automation tests',
    updatedName: 'Updated Automation Org',
  },

  user: {
    updatedFirstName: 'UpdatedFirst',
    updatedLastName: 'UpdatedLast',
  },

  preferences: {
    theme: 'DARK' as const,
    language: 'en',
    emailNotifications: true,
  },

  conversation: {
    title: 'Automation Test Conversation',
    updatedTitle: 'Updated Test Conversation',
    message: 'Hello, this is an automated test message.',
  },

  group: {
    name: 'Test Group',
    updatedName: 'Updated Test Group',
  },

  image: {
    prompt: 'A serene mountain lake at sunset with reflections',
    model: 'dall-e-3' as const,
    size: '1024x1024',
  },

  content: {
    aiDetectionText:
      'Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to the natural intelligence displayed by animals including humans. AI research has been defined as the field of study of intelligent agents, which refers to any system that perceives its environment and takes actions that maximize its chance of achieving its goals. The term "artificial intelligence" had previously been used to describe machines that mimic and display human cognitive skills associated with the human mind, such as learning and problem-solving. This definition has since been rejected by major AI researchers who now describe AI in terms of rationality and acting rationally, which does not limit how intelligence can be articulated. AI applications include advanced web search engines, recommendation systems, understanding human speech, self-driving cars, automated decision-making and competing at the highest level in strategic game systems.',
  },

  tts: {
    text: 'Welcome to GetBot AI. This is an automated test of the text to speech system.',
  },
} as const;
