# Postman Test Scripts

This directory contains JavaScript extracted from the sanitized Postman collection.
The files are grouped by the original Postman folder and request structure.

**Source collection:** `AI Media Platform API Tests - Sanitized`

## Summary

- Test script files: 82
- Pre-request script files: 14
- Total extracted files: 96

## Scripts

| Method | Request | Type | File |
|---|---|---|---|
| `POST` | VERIFY_USER | `test` | [USER/users/POST-VERIFY_USER-Tests.js](./USER/users/POST-VERIFY_USER-Tests.js) |
| `PATCH` | UPDATE_USER_PROFILE | `test` | [USER/users/PATCH-UPDATE_USER_PROFILE-Tests.js](./USER/users/PATCH-UPDATE_USER_PROFILE-Tests.js) |
| `POST` | CONTINUE_CONVERSATION | `test` | [USER/conversations/POST-CONTINUE_CONVERSATION-Tests.js](./USER/conversations/POST-CONTINUE_CONVERSATION-Tests.js) |
| `POST` | AUTH_USER | `test` | [USER_TESTING/users/POST-AUTH_USER-Tests.js](./USER_TESTING/users/POST-AUTH_USER-Tests.js) |
| `POST` | GOOGLE_AUTH_USER | `test` | [USER_TESTING/users/POST-GOOGLE_AUTH_USER-Tests.js](./USER_TESTING/users/POST-GOOGLE_AUTH_USER-Tests.js) |
| `POST` | VERIFY_USER | `test` | [USER_TESTING/users/POST-VERIFY_USER-Tests.js](./USER_TESTING/users/POST-VERIFY_USER-Tests.js) |
| `GET` | GET_USER_PROFILE | `test` | [USER_TESTING/users/GET-GET_USER_PROFILE-Tests.js](./USER_TESTING/users/GET-GET_USER_PROFILE-Tests.js) |
| `PATCH` | UPDATE_USER_PROFILE | `prerequest` | [USER_TESTING/users/PATCH-UPDATE_USER_PROFILE-Pre-request.js](./USER_TESTING/users/PATCH-UPDATE_USER_PROFILE-Pre-request.js) |
| `PATCH` | UPDATE_USER_PROFILE | `test` | [USER_TESTING/users/PATCH-UPDATE_USER_PROFILE-Tests.js](./USER_TESTING/users/PATCH-UPDATE_USER_PROFILE-Tests.js) |
| `POST` | VERIFY EMAIL EXISTS | `test` | [USER_TESTING/users/POST-VERIFY-EMAIL-EXISTS-Tests.js](./USER_TESTING/users/POST-VERIFY-EMAIL-EXISTS-Tests.js) |
| `POST` | 1. CREATE_CONVERSATION | `test` | [USER_TESTING/conversations/POST-1.-CREATE_CONVERSATION-Tests.js](./USER_TESTING/conversations/POST-1.-CREATE_CONVERSATION-Tests.js) |
| `POST` | 2. CONTINUE_CONVERSATION | `test` | [USER_TESTING/conversations/POST-2.-CONTINUE_CONVERSATION-Tests.js](./USER_TESTING/conversations/POST-2.-CONTINUE_CONVERSATION-Tests.js) |
| `GET` | 3. GET_CONVERSATION_AND_MESSAGES | `test` | [USER_TESTING/conversations/GET-3.-GET_CONVERSATION_AND_MESSAGES-Tests.js](./USER_TESTING/conversations/GET-3.-GET_CONVERSATION_AND_MESSAGES-Tests.js) |
| `GET` | 4. GET_CONVERSATIONS | `test` | [USER_TESTING/conversations/GET-4.-GET_CONVERSATIONS-Tests.js](./USER_TESTING/conversations/GET-4.-GET_CONVERSATIONS-Tests.js) |
| `PATCH` | 5. UPDATE_CONVERSATION | `test` | [USER_TESTING/conversations/PATCH-5.-UPDATE_CONVERSATION-Tests.js](./USER_TESTING/conversations/PATCH-5.-UPDATE_CONVERSATION-Tests.js) |
| `PATCH` | 5. UPDATE_CONVERSATION | `prerequest` | [USER_TESTING/conversations/PATCH-5.-UPDATE_CONVERSATION-Pre-request.js](./USER_TESTING/conversations/PATCH-5.-UPDATE_CONVERSATION-Pre-request.js) |
| `DELETE` | 6. DELETE_CONVERSATION | `test` | [USER_TESTING/conversations/DELETE-6.-DELETE_CONVERSATION-Tests.js](./USER_TESTING/conversations/DELETE-6.-DELETE_CONVERSATION-Tests.js) |
| `POST` | CREATE_ANSWER - PLAGIARISM_TEXT | `test` | [USER_TESTING/answers/POST-CREATE_ANSWER-PLAGIARISM_TEXT-Tests.js](./USER_TESTING/answers/POST-CREATE_ANSWER-PLAGIARISM_TEXT-Tests.js) |
| `POST` | CREATE_ANSWER - PLAGIARISM_TEXT | `prerequest` | [USER_TESTING/answers/POST-CREATE_ANSWER-PLAGIARISM_TEXT-Pre-request.js](./USER_TESTING/answers/POST-CREATE_ANSWER-PLAGIARISM_TEXT-Pre-request.js) |
| `POST` | CREATE_ANSWER - PLAGIARISM_TEXT C Negative | `test` | [USER_TESTING/answers/POST-CREATE_ANSWER-PLAGIARISM_TEXT-C-Negative-Tests.js](./USER_TESTING/answers/POST-CREATE_ANSWER-PLAGIARISM_TEXT-C-Negative-Tests.js) |
| `POST` | CREATE_ANSWER - PLAGIARISM_TEXT C Negative | `prerequest` | [USER_TESTING/answers/POST-CREATE_ANSWER-PLAGIARISM_TEXT-C-Negative-Pre-request.js](./USER_TESTING/answers/POST-CREATE_ANSWER-PLAGIARISM_TEXT-C-Negative-Pre-request.js) |
| `POST` | CREATE_ANSWER - PLAGIARISM_TEXT C   Empty field | `test` | [USER_TESTING/answers/POST-CREATE_ANSWER-PLAGIARISM_TEXT-C-Empty-field-Tests.js](./USER_TESTING/answers/POST-CREATE_ANSWER-PLAGIARISM_TEXT-C-Empty-field-Tests.js) |
| `POST` | CREATE_ANSWER - PLAGIARISM_TEXT C   Empty field | `prerequest` | [USER_TESTING/answers/POST-CREATE_ANSWER-PLAGIARISM_TEXT-C-Empty-field-Pre-request.js](./USER_TESTING/answers/POST-CREATE_ANSWER-PLAGIARISM_TEXT-C-Empty-field-Pre-request.js) |
| `POST` | CREATE_ANSWER - PLAGIARISM_TEXT C   Empty Title and Empty Text | `test` | [USER_TESTING/answers/POST-CREATE_ANSWER-PLAGIARISM_TEXT-C-Empty-Title-and-Empty-Text-Tests.js](./USER_TESTING/answers/POST-CREATE_ANSWER-PLAGIARISM_TEXT-C-Empty-Title-and-Empty-Text-Tests.js) |
| `POST` | CREATE_ANSWER - PLAGIARISM_TEXT C   Empty Title and Empty Text | `prerequest` | [USER_TESTING/answers/POST-CREATE_ANSWER-PLAGIARISM_TEXT-C-Empty-Title-and-Empty-Text-Pre-request.js](./USER_TESTING/answers/POST-CREATE_ANSWER-PLAGIARISM_TEXT-C-Empty-Title-and-Empty-Text-Pre-request.js) |
| `POST` | CREATE_ANSWER - AI_PREDICTION_WEBSITE- Valid Website Link | `test` | [USER_TESTING/answers/POST-CREATE_ANSWER-AI_PREDICTION_WEBSITE-Valid-Website-Link-Tests.js](./USER_TESTING/answers/POST-CREATE_ANSWER-AI_PREDICTION_WEBSITE-Valid-Website-Link-Tests.js) |
| `POST` | CREATE_ANSWER - AI_PREDICTION_WEBSITE- Valid Website Link | `prerequest` | [USER_TESTING/answers/POST-CREATE_ANSWER-AI_PREDICTION_WEBSITE-Valid-Website-Link-Pre-request.js](./USER_TESTING/answers/POST-CREATE_ANSWER-AI_PREDICTION_WEBSITE-Valid-Website-Link-Pre-request.js) |
| `POST` | CREATE_ANSWER - AI_PREDICTION_WEBSITE - Empty Title and Empty Website | `test` | [USER_TESTING/answers/POST-CREATE_ANSWER-AI_PREDICTION_WEBSITE-Empty-Title-and-Empty-Website-Tests.js](./USER_TESTING/answers/POST-CREATE_ANSWER-AI_PREDICTION_WEBSITE-Empty-Title-and-Empty-Website-Tests.js) |
| `POST` | CREATE_ANSWER - AI_PREDICTION_WEBSITE - Empty Title and Empty Website | `prerequest` | [USER_TESTING/answers/POST-CREATE_ANSWER-AI_PREDICTION_WEBSITE-Empty-Title-and-Empty-Website-Pre-request.js](./USER_TESTING/answers/POST-CREATE_ANSWER-AI_PREDICTION_WEBSITE-Empty-Title-and-Empty-Website-Pre-request.js) |
| `POST` | CREATE_ANSWER - AI_PREDICTION_WEBSITE - Empty Title Only | `test` | [USER_TESTING/answers/POST-CREATE_ANSWER-AI_PREDICTION_WEBSITE-Empty-Title-Only-Tests.js](./USER_TESTING/answers/POST-CREATE_ANSWER-AI_PREDICTION_WEBSITE-Empty-Title-Only-Tests.js) |
| `POST` | CREATE_ANSWER - AI_PREDICTION_WEBSITE - Empty Title Only | `prerequest` | [USER_TESTING/answers/POST-CREATE_ANSWER-AI_PREDICTION_WEBSITE-Empty-Title-Only-Pre-request.js](./USER_TESTING/answers/POST-CREATE_ANSWER-AI_PREDICTION_WEBSITE-Empty-Title-Only-Pre-request.js) |
| `POST` | CREATE_ANSWER - AI_PREDICTION_WEBSITE - Empty Website Only | `test` | [USER_TESTING/answers/POST-CREATE_ANSWER-AI_PREDICTION_WEBSITE-Empty-Website-Only-Tests.js](./USER_TESTING/answers/POST-CREATE_ANSWER-AI_PREDICTION_WEBSITE-Empty-Website-Only-Tests.js) |
| `POST` | CREATE_ANSWER - AI_PREDICTION_WEBSITE - Empty Website Only | `prerequest` | [USER_TESTING/answers/POST-CREATE_ANSWER-AI_PREDICTION_WEBSITE-Empty-Website-Only-Pre-request.js](./USER_TESTING/answers/POST-CREATE_ANSWER-AI_PREDICTION_WEBSITE-Empty-Website-Only-Pre-request.js) |
| `POST` | CREATE_ANSWER - AI_PREDICTION_MEDIA | `prerequest` | [USER_TESTING/answers/POST-CREATE_ANSWER-AI_PREDICTION_MEDIA-Pre-request.js](./USER_TESTING/answers/POST-CREATE_ANSWER-AI_PREDICTION_MEDIA-Pre-request.js) |
| `POST` | CREATE_ANSWER - AI_PREDICTION_MEDIA | `test` | [USER_TESTING/answers/POST-CREATE_ANSWER-AI_PREDICTION_MEDIA-Tests.js](./USER_TESTING/answers/POST-CREATE_ANSWER-AI_PREDICTION_MEDIA-Tests.js) |
| `POST` | CREATE_ANSWER - AI_PREDICTION_MEDIA  Negative Case - Without Image/File Upload | `prerequest` | [USER_TESTING/answers/POST-CREATE_ANSWER-AI_PREDICTION_MEDIA-Negative-Case-Without-Image-File-Upload-Pre-request.js](./USER_TESTING/answers/POST-CREATE_ANSWER-AI_PREDICTION_MEDIA-Negative-Case-Without-Image-File-Upload-Pre-request.js) |
| `POST` | CREATE_ANSWER - AI_PREDICTION_MEDIA  Negative Case - Without Image/File Upload | `test` | [USER_TESTING/answers/POST-CREATE_ANSWER-AI_PREDICTION_MEDIA-Negative-Case-Without-Image-File-Upload-Tests.js](./USER_TESTING/answers/POST-CREATE_ANSWER-AI_PREDICTION_MEDIA-Negative-Case-Without-Image-File-Upload-Tests.js) |
| `POST` | CREATE_ANSWER - AI_PREDICTION_MEDIA  Negative Case - Without Title | `prerequest` | [USER_TESTING/answers/POST-CREATE_ANSWER-AI_PREDICTION_MEDIA-Negative-Case-Without-Title-Pre-request.js](./USER_TESTING/answers/POST-CREATE_ANSWER-AI_PREDICTION_MEDIA-Negative-Case-Without-Title-Pre-request.js) |
| `POST` | CREATE_ANSWER - AI_PREDICTION_MEDIA  Negative Case - Without Title | `test` | [USER_TESTING/answers/POST-CREATE_ANSWER-AI_PREDICTION_MEDIA-Negative-Case-Without-Title-Tests.js](./USER_TESTING/answers/POST-CREATE_ANSWER-AI_PREDICTION_MEDIA-Negative-Case-Without-Title-Tests.js) |
| `POST` | CREATE_ANSWER - AI_PREDICTION_MEDIA  Negative Case - Empty Title and Empty File Upload. | `prerequest` | [USER_TESTING/answers/POST-CREATE_ANSWER-AI_PREDICTION_MEDIA-Negative-Case-Empty-Title-and-Empty-File-Upload.-Pre-request.js](./USER_TESTING/answers/POST-CREATE_ANSWER-AI_PREDICTION_MEDIA-Negative-Case-Empty-Title-and-Empty-File-Upload.-Pre-request.js) |
| `POST` | CREATE_ANSWER - AI_PREDICTION_MEDIA  Negative Case - Empty Title and Empty File Upload. | `test` | [USER_TESTING/answers/POST-CREATE_ANSWER-AI_PREDICTION_MEDIA-Negative-Case-Empty-Title-and-Empty-File-Upload.-Tests.js](./USER_TESTING/answers/POST-CREATE_ANSWER-AI_PREDICTION_MEDIA-Negative-Case-Empty-Title-and-Empty-File-Upload.-Tests.js) |
| `GET` | GET_ANSWERS - AI_PREDICTION_WEBSITE | `test` | [USER_TESTING/answers/GET-GET_ANSWERS-AI_PREDICTION_WEBSITE-Tests.js](./USER_TESTING/answers/GET-GET_ANSWERS-AI_PREDICTION_WEBSITE-Tests.js) |
| `GET` | GET_ANSWERS - AI_PLAGIARIMS | `test` | [USER_TESTING/answers/GET-GET_ANSWERS-AI_PLAGIARIMS-Tests.js](./USER_TESTING/answers/GET-GET_ANSWERS-AI_PLAGIARIMS-Tests.js) |
| `GET` | GET_ANSWER_BY_ID - PLAGIARISM | `test` | [USER_TESTING/answers/GET-GET_ANSWER_BY_ID-PLAGIARISM-Tests.js](./USER_TESTING/answers/GET-GET_ANSWER_BY_ID-PLAGIARISM-Tests.js) |
| `POST` | CREATE_GENERATED_IMAGE_GPT-image-1 | `test` | [USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_GPT-image-1-Tests.js](./USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_GPT-image-1-Tests.js) |
| `POST` | CREATE_GENERATED_IMAGE_GPT-image-1_invalid Style - Vivid | `test` | [USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_GPT-image-1_invalid-Style-Vivid-Tests.js](./USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_GPT-image-1_invalid-Style-Vivid-Tests.js) |
| `POST` | CREATE_GENERATED_IMAGE Empty Prompt_GPT-image-1 | `test` | [USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE-Empty-Prompt_GPT-image-1-Tests.js](./USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE-Empty-Prompt_GPT-image-1-Tests.js) |
| `POST` | CREATE_GENERATED_IMAGE_GPT-image-1-mini | `test` | [USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_GPT-image-1-mini-Tests.js](./USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_GPT-image-1-mini-Tests.js) |
| `POST` | CREATE_GENERATED_IMAGE_GPT-image-1-mini_Invalid Style - Vivid | `test` | [USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_GPT-image-1-mini_Invalid-Style-Vivid-Tests.js](./USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_GPT-image-1-mini_Invalid-Style-Vivid-Tests.js) |
| `POST` | CREATE_GENERATED_IMAGE Empty Prompt_GPT-image-1-mini | `test` | [USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE-Empty-Prompt_GPT-image-1-mini-Tests.js](./USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE-Empty-Prompt_GPT-image-1-mini-Tests.js) |
| `POST` | CREATE_GENERATED_IMAGE_Gemini-2.5-Flash-Image | `test` | [USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_Gemini-2.5-Flash-Image-Tests.js](./USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_Gemini-2.5-Flash-Image-Tests.js) |
| `POST` | CREATE_GENERATED_IMAGE_Gemini-2.5-Flash-Image_Negative -Background Field Sent for Gemini | `test` | [USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_Gemini-2.5-Flash-Image_Negative-Background-Field-Sent-for-Gemini-Tests.js](./USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_Gemini-2.5-Flash-Image_Negative-Background-Field-Sent-for-Gemini-Tests.js) |
| `POST` | CREATE_GENERATED_IMAGE_Gemini-2.5-Flash-Image_Negative -Empty Prompt | `test` | [USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_Gemini-2.5-Flash-Image_Negative-Empty-Prompt-Tests.js](./USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_Gemini-2.5-Flash-Image_Negative-Empty-Prompt-Tests.js) |
| `POST` | CREATE_GENERATED_IMAGE_Gemini-3-Pro-Image-Preview | `test` | [USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_Gemini-3-Pro-Image-Preview-Tests.js](./USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_Gemini-3-Pro-Image-Preview-Tests.js) |
| `POST` | CREATE_GENERATED_IMAGE_Gemini-3-Pro-Image-Preview_Negative - Empty Prompt | `test` | [USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_Gemini-3-Pro-Image-Preview_Negative-Empty-Prompt-Tests.js](./USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_Gemini-3-Pro-Image-Preview_Negative-Empty-Prompt-Tests.js) |
| `POST` | CREATE_GENERATED_IMAGE_Gemini-3-Pro-Image-Preview_Negative -  Invalid Background Value | `test` | [USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_Gemini-3-Pro-Image-Preview_Negative-Invalid-Background-Value-Tests.js](./USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_Gemini-3-Pro-Image-Preview_Negative-Invalid-Background-Value-Tests.js) |
| `POST` | CREATE_GENERATED_IMAGE_imagen-4.0 | `test` | [USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_imagen-4.0-Tests.js](./USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_imagen-4.0-Tests.js) |
| `POST` | CREATE_GENERATED_IMAGE_imagen-4.0 _Negative empty prompt | `test` | [USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_imagen-4.0-_Negative-empty-prompt-Tests.js](./USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_imagen-4.0-_Negative-empty-prompt-Tests.js) |
| `POST` | CREATE_GENERATED_IMAGE_imagen-4.0 _Negative invalid aspectRatio | `test` | [USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_imagen-4.0-_Negative-invalid-aspectRatio-Tests.js](./USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_imagen-4.0-_Negative-invalid-aspectRatio-Tests.js) |
| `POST` | CREATE_GENERATED_IMAGE_imagen-4.0 _Negative unsupported background | `test` | [USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_imagen-4.0-_Negative-unsupported-background-Tests.js](./USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_imagen-4.0-_Negative-unsupported-background-Tests.js) |
| `POST` | CREATE_GENERATED_IMAGE_imagen-4.0-fast-generate | `test` | [USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_imagen-4.0-fast-generate-Tests.js](./USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_imagen-4.0-fast-generate-Tests.js) |
| `POST` | CREATE_GENERATED_IMAGE_imagen-4.0-fast-generate _Negative empty prompt | `test` | [USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_imagen-4.0-fast-generate-_Negative-empty-prompt-Tests.js](./USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_imagen-4.0-fast-generate-_Negative-empty-prompt-Tests.js) |
| `POST` | CREATE_GENERATED_IMAGE_stable-image-core | `test` | [USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_stable-image-core-Tests.js](./USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_stable-image-core-Tests.js) |
| `POST` | CREATE_GENERATED_IMAGE_stable-image-core_Empty negativePrompt | `test` | [USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_stable-image-core_Empty-negativePrompt-Tests.js](./USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_stable-image-core_Empty-negativePrompt-Tests.js) |
| `POST` | CREATE_GENERATED_IMAGE_stable-image-core _Negative empty prompt | `test` | [USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_stable-image-core-_Negative-empty-prompt-Tests.js](./USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_stable-image-core-_Negative-empty-prompt-Tests.js) |
| `POST` | CREATE_GENERATED_IMAGE_stable-image-core_Empty prompt and empty negativePrompt | `test` | [USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_stable-image-core_Empty-prompt-and-empty-negativePrompt-Tests.js](./USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_stable-image-core_Empty-prompt-and-empty-negativePrompt-Tests.js) |
| `POST` | CREATE_GENERATED_IMAGE_Stable Diffusion 3.5 Medium | `test` | [USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_Stable-Diffusion-3.5-Medium-Tests.js](./USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_Stable-Diffusion-3.5-Medium-Tests.js) |
| `POST` | CREATE_GENERATED_IMAGE_Stable Diffusion 3.5 Medium Negative empty prompt | `test` | [USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_Stable-Diffusion-3.5-Medium-Negative-empty-prompt-Tests.js](./USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_Stable-Diffusion-3.5-Medium-Negative-empty-prompt-Tests.js) |
| `POST` | CREATE_GENERATED_IMAGE_Stable Diffusion 3.5 Medium Empty prompt and empty negativePrompt | `test` | [USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_Stable-Diffusion-3.5-Medium-Empty-prompt-and-empty-negativePrompt-Tests.js](./USER_TESTING/generated_images/POST-CREATE_GENERATED_IMAGE_Stable-Diffusion-3.5-Medium-Empty-prompt-and-empty-negativePrompt-Tests.js) |
| `GET` | GET_GENERATED_IMAGES_List | `test` | [USER_TESTING/generated_images/GET-GET_GENERATED_IMAGES_List-Tests.js](./USER_TESTING/generated_images/GET-GET_GENERATED_IMAGES_List-Tests.js) |
| `GET` | GET_GENERATED_IMAGES_with_ID | `test` | [USER_TESTING/generated_images/GET-GET_GENERATED_IMAGES_with_ID-Tests.js](./USER_TESTING/generated_images/GET-GET_GENERATED_IMAGES_with_ID-Tests.js) |
| `POST` | Generate Video_veo-2.0 | `test` | [USER_TESTING/generated_videos/POST-Generate-Video_veo-2.0-Tests.js](./USER_TESTING/generated_videos/POST-Generate-Video_veo-2.0-Tests.js) |
| `POST` | Generate Video - Veo 2.0 - Missing Prompt | `test` | [USER_TESTING/generated_videos/POST-Generate-Video-Veo-2.0-Missing-Prompt-Tests.js](./USER_TESTING/generated_videos/POST-Generate-Video-Veo-2.0-Missing-Prompt-Tests.js) |
| `POST` | Generate Video_veo-3.0-fast | `test` | [USER_TESTING/generated_videos/POST-Generate-Video_veo-3.0-fast-Tests.js](./USER_TESTING/generated_videos/POST-Generate-Video_veo-3.0-fast-Tests.js) |
| `POST` | Generate Video_veo-3.0-fast-Empty Prompt | `test` | [USER_TESTING/generated_videos/POST-Generate-Video_veo-3.0-fast-Empty-Prompt-Tests.js](./USER_TESTING/generated_videos/POST-Generate-Video_veo-3.0-fast-Empty-Prompt-Tests.js) |
| `POST` | Generate Video_veo-3.0- Empty Prompt | `test` | [USER_TESTING/generated_videos/POST-Generate-Video_veo-3.0-Empty-Prompt-Tests.js](./USER_TESTING/generated_videos/POST-Generate-Video_veo-3.0-Empty-Prompt-Tests.js) |
| `GET` | Get generated videos | `test` | [USER_TESTING/generated_videos/GET-Get-generated-videos-Tests.js](./USER_TESTING/generated_videos/GET-Get-generated-videos-Tests.js) |
| `POST` | Upscale | `test` | [USER_TESTING/edit-image/POST-Upscale-Tests.js](./USER_TESTING/edit-image/POST-Upscale-Tests.js) |
| `POST` | Upscale Missing Prompt | `test` | [USER_TESTING/edit-image/POST-Upscale-Missing-Prompt-Tests.js](./USER_TESTING/edit-image/POST-Upscale-Missing-Prompt-Tests.js) |
| `POST` | Upscale Missing image | `test` | [USER_TESTING/edit-image/POST-Upscale-Missing-image-Tests.js](./USER_TESTING/edit-image/POST-Upscale-Missing-image-Tests.js) |
| `POST` | Remove Background | `test` | [USER_TESTING/edit-image/POST-Remove-Background-Tests.js](./USER_TESTING/edit-image/POST-Remove-Background-Tests.js) |
| `POST` | Remove Background Image field is missing | `test` | [USER_TESTING/edit-image/POST-Remove-Background-Image-field-is-missing-Tests.js](./USER_TESTING/edit-image/POST-Remove-Background-Image-field-is-missing-Tests.js) |
| `POST` | Remove Background Unsupported File Type | `test` | [USER_TESTING/edit-image/POST-Remove-Background-Unsupported-File-Type-Tests.js](./USER_TESTING/edit-image/POST-Remove-Background-Unsupported-File-Type-Tests.js) |
| `POST` | Replace Background with prompt | `test` | [USER_TESTING/edit-image/POST-Replace-Background-with-prompt-Tests.js](./USER_TESTING/edit-image/POST-Replace-Background-with-prompt-Tests.js) |
| `POST` | Replace Background with image | `test` | [USER_TESTING/edit-image/POST-Replace-Background-with-image-Tests.js](./USER_TESTING/edit-image/POST-Replace-Background-with-image-Tests.js) |
| `POST` | Replace Background with Prompt and Reference Together | `test` | [USER_TESTING/edit-image/POST-Replace-Background-with-Prompt-and-Reference-Together-Tests.js](./USER_TESTING/edit-image/POST-Replace-Background-with-Prompt-and-Reference-Together-Tests.js) |
| `POST` | Search & Replace | `test` | [USER_TESTING/edit-image/POST-Search-&-Replace-Tests.js](./USER_TESTING/edit-image/POST-Search-&-Replace-Tests.js) |
| `POST` | Search Replace - Missing Image | `test` | [USER_TESTING/edit-image/POST-Search-Replace-Missing-Image-Tests.js](./USER_TESTING/edit-image/POST-Search-Replace-Missing-Image-Tests.js) |
| `POST` | Search Replace - Missing Prompt | `test` | [USER_TESTING/edit-image/POST-Search-Replace-Missing-Prompt-Tests.js](./USER_TESTING/edit-image/POST-Search-Replace-Missing-Prompt-Tests.js) |
| `POST` | Search Replace - Missing Search Prompt | `test` | [USER_TESTING/edit-image/POST-Search-Replace-Missing-Search-Prompt-Tests.js](./USER_TESTING/edit-image/POST-Search-Replace-Missing-Search-Prompt-Tests.js) |
| `POST` | Search & Recolor | `test` | [USER_TESTING/edit-image/POST-Search-&-Recolor-Tests.js](./USER_TESTING/edit-image/POST-Search-&-Recolor-Tests.js) |
| `POST` | Search & Recolor Missing Image | `test` | [USER_TESTING/edit-image/POST-Search-&-Recolor-Missing-Image-Tests.js](./USER_TESTING/edit-image/POST-Search-&-Recolor-Missing-Image-Tests.js) |
| `POST` | Search & Recolor  Missing Prompt | `test` | [USER_TESTING/edit-image/POST-Search-&-Recolor-Missing-Prompt-Tests.js](./USER_TESTING/edit-image/POST-Search-&-Recolor-Missing-Prompt-Tests.js) |
| `POST` | Search & Recolor   Missing Select Prompt | `test` | [USER_TESTING/edit-image/POST-Search-&-Recolor-Missing-Select-Prompt-Tests.js](./USER_TESTING/edit-image/POST-Search-&-Recolor-Missing-Select-Prompt-Tests.js) |
| `GET` | Get Edited images | `test` | [USER_TESTING/edit-image/GET-Get-Edited-images-Tests.js](./USER_TESTING/edit-image/GET-Get-Edited-images-Tests.js) |
| `GET` | Get Edit Image by ID | `test` | [USER_TESTING/edit-image/GET-Get-Edit-Image-by-ID-Tests.js](./USER_TESTING/edit-image/GET-Get-Edit-Image-by-ID-Tests.js) |

## Notes

- No credentials or tokens should be included in these files.
- The scripts are extracted from the collection rather than recreated manually.
- Request-specific assertions remain separated so reviewers can inspect real testing coverage.
