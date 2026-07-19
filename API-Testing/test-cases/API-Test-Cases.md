# API Test Cases

| ID | Area | Scenario | Method | Endpoint | Preconditions | Expected Result | Priority |
|---|---|---|---|---|---|---|---|
| API-TC-001 | Authentication | Authenticate with valid email | POST | `/v1/users/authenticate` | Registered test user | `204 No Content` | High |
| API-TC-002 | Authentication | Verify with valid OTP | POST | `/v1/users/verify` | Valid OTP generated | `200 OK`, token and profile returned | Critical |
| API-TC-003 | Authentication | Verify with invalid OTP | POST | `/v1/users/verify` | Authentication initiated | Validation error returned | High |
| API-TC-004 | Authorization | Access protected endpoint without token | GET | `/v1/users/me` | None | `401 Unauthorized` | Critical |
| API-TC-005 | Profile | Retrieve authenticated profile | GET | `/v1/users/me` | Valid token | Profile object returned | High |
| API-TC-006 | Profile | Update profile fields | PATCH | `/v1/users` | Valid token | Updated values returned | High |
| API-TC-007 | Conversations | Create conversation | POST | `/v2/conversations` | Valid token | Conversation ID returned | Critical |
| API-TC-008 | Conversations | Continue conversation | POST | `/v2/conversations/{id}/message` | Conversation exists | New messages returned | High |
| API-TC-009 | Conversations | Retrieve conversation by ID | GET | `/v1/conversations/{id}` | Conversation exists | Correct conversation returned | High |
| API-TC-010 | Conversations | Update conversation title | PATCH | `/v1/conversations/{id}` | Conversation exists | Title updated | Medium |
| API-TC-011 | Conversations | Delete conversation | DELETE | `/v1/conversations/{id}` | Conversation exists | Successful deletion | High |
| API-TC-012 | AI Answers | Submit valid text analysis | POST | `/v1/answers` | Valid token and credits | Structured result returned | High |
| API-TC-013 | AI Answers | Submit text below minimum length | POST | `/v1/answers` | Valid token | `400 Bad Request` | High |
| API-TC-014 | AI Answers | Submit empty title | POST | `/v1/answers` | Valid token | Validation error returned | Medium |
| API-TC-015 | Image Generation | Generate image with valid input | POST | `/v2/generated_images` | Valid token and credits | Image data and ID returned | Critical |
| API-TC-016 | Image Generation | Submit empty prompt | POST | `/v2/generated_images` | Valid token | `400 Bad Request` | High |
| API-TC-017 | Image Generation | Submit unsupported style | POST | `/v2/generated_images` | Valid token | Validation error returned | High |
| API-TC-018 | Image Generation | Submit unsupported aspect ratio | POST | `/v2/generated_images` | Valid token | Validation error returned | High |
| API-TC-019 | Image Editing | Remove image background | POST | `/v2/edit-image/remove-background` | Valid image | Edited image returned | High |
| API-TC-020 | Image Editing | Search and replace object | POST | `/v2/edit-image/search-replace` | Valid image and prompts | Edited image returned | High |
| API-TC-021 | File Validation | Upload unsupported format | POST | `/v2/edit-image/upscale` | Invalid file | Validation error returned | High |
| API-TC-022 | Subscriptions | Retrieve plans | GET | `/v1/subscriptions` | None | Plans returned | Medium |
| API-TC-023 | Organization | Invite user | POST | `/v1/organizations/{id}/invite` | Owner/admin token | Invitation created | High |
| API-TC-024 | Organization | Remove user without permission | DELETE | `/v1/organizations/{id}/remove_user` | Member token | `403 Forbidden` | Critical |
| API-TC-025 | Admin | Retrieve users with admin token | GET | `/v1/admin/users` | Admin token | User list returned | High |
| API-TC-026 | Admin | Access admin endpoint with user token | GET | `/v1/admin/users` | Standard user token | `403 Forbidden` | Critical |
| API-TC-027 | Error Handling | Request invalid resource ID | GET | `/v1/conversations/invalid-id` | Valid token | Clear client error returned | Medium |
| API-TC-028 | Error Handling | Use unsupported HTTP method | PUT | `/v1/conversations` | Valid token | `405 Method Not Allowed` or documented equivalent | Medium |
| API-TC-029 | Performance | Validate profile response time | GET | `/v1/users/me` | Valid token | Response below threshold | Medium |
| API-TC-030 | Security | Verify sensitive fields are absent | GET | `/v1/users/me` | Valid token | Passwords and tokens absent | Critical |

## Notes

- All endpoints and identifiers are generalized.
- Test data is synthetic.
- Expected status codes should follow the documented API contract.
