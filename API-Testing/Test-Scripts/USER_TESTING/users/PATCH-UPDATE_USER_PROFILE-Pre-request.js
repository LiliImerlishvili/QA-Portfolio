/**
 * Postman Pre-request Script
 * Request: UPDATE_USER_PROFILE
 * Method: PATCH
 * Endpoint: {{domain}}/v1/users
 *
 * Extracted automatically from the sanitized Postman collection.
 * The JavaScript below is the original collection script.
 */
// Generate random names and choose a profile image url for update
// We save values in environment to use them in request body.

const firstNames = [
  "Liam", "Olivia", "Noah", "Emma", "Oliver",
  "Ava", "Elijah", "Sophia", "James", "Charlotte"
];

const lastNames = [
  "Smith", "Johnson", "Williams", "Brown", "Jones",
  "Miller", "Davis", "Garcia", "Rodriguez", "Wilson"
];

function getRandomName(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const updatedFirstName = getRandomName(firstNames);
const updatedLastName = getRandomName(lastNames);

// Pick image url (toggle between 2 urls so we can see change)
const currentImage = pm.environment.get("profileImage") || "";
const url1 = pm.environment.get("testProfileImageUrl1") || "";
const url2 = pm.environment.get("testProfileImageUrl2") || "";

let updatedProfileImage = url1;

// If current image is already url1, switch to url2 (so it actually changes)
if (currentImage && url1 && url2 && currentImage === url1) {
  updatedProfileImage = url2;
} else if (currentImage && url1 && url2 && currentImage === url2) {
  updatedProfileImage = url1;
} else if (!updatedProfileImage && url2) {
  updatedProfileImage = url2;
}

// Save variables used in request body
pm.environment.set("updatedFirstName", updatedFirstName);
pm.environment.set("updatedLastName", updatedLastName);
pm.environment.set("updatedProfileImage", updatedProfileImage);

// Debug
console.log("Update first_name:", updatedFirstName);
console.log("Update last_name:", updatedLastName);
console.log("Update profile_image:", updatedProfileImage);
