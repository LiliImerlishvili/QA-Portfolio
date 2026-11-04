# CL-001 — Registration and Onboarding Checklist

## Multi-Step Forms

- [ ] Progress indicator shows the current step (e.g., `10/10`)
- [ ] Each step can be submitted without server errors
- [ ] Server errors are shown as user-friendly messages, not raw technical errors
- [ ] Editable fields are editable; read-only fields do not block submission
- [ ] Entered data is preserved when navigating back

## Address Validation

- [ ] Valid German addresses are accepted
- [ ] Addresses outside Germany are rejected with a clear message
- [ ] Validation does not depend on device location settings
- [ ] Onboarding and Add Location use the same validation rules
- [ ] Special characters (ß, ü, ö, ä) are supported

## Required Documents

- [ ] Required documents are clearly marked
- [ ] User cannot proceed without required documents
- [ ] Missing document is named in the validation message
- [ ] Uploaded documents are listed and can be replaced

## Status

Not Executed
