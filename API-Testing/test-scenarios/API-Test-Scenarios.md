# API Test Scenarios

## Authentication and Authorization

- Valid email authentication
- Unknown email
- Valid OTP
- Invalid OTP
- Expired OTP
- Empty OTP
- Incorrect OTP data type
- Missing bearer token
- Invalid bearer token
- Expired bearer token
- Standard user accessing admin endpoint
- Cross-user resource access

## User Profile

- Retrieve profile
- Update one field
- Update multiple fields
- Empty required field
- Overly long input
- Invalid image URL
- Verify unchanged fields remain unchanged
- Verify sensitive fields are not returned

## Conversations

- Create
- Continue
- Retrieve by ID
- Retrieve paginated list
- Update title
- Delete
- Retrieve deleted resource
- Update nonexistent resource
- Access another user's conversation
- Validate streamed response structure

## AI Answers

- Valid text analysis
- Text below minimum length
- Empty text
- Empty title
- Invalid analysis type
- Valid website analysis
- Empty website URL
- Invalid website URL
- Valid media analysis
- Empty media URL
- Unsupported media type
- Insufficient credits

## Image Generation

- Valid prompt
- Empty prompt
- Invalid style
- Unsupported aspect ratio
- Invalid background option
- Unsupported field for selected model
- Invalid model
- Multiple valid models
- Image format validation
- Image-count consistency
- Response-time validation
- Insufficient credits

## Image Editing

- Upscale image
- Remove background
- Replace background using prompt
- Replace background using reference image
- Search and replace
- Search and recolor
- Missing file
- Unsupported file format
- Oversized file
- Corrupted file
- Invalid form-data field
- Missing prompt

## Subscription and Organization

- Retrieve plans
- Open billing portal
- Subscribe with valid price ID
- Invalid price ID
- Cancel active subscription
- Cancel already canceled subscription
- Create organization
- Invite user
- Accept invitation
- Reject invitation
- Remove member
- Change role
- Duplicate invitation
- Invalid organization ID

## Cross-Cutting Validation

- Status code
- Content type
- JSON format
- Required fields
- Data types
- ID format
- ISO timestamps
- Pagination
- Boundary values
- Error-message consistency
- Response time
- No stack trace
- No secrets in response
