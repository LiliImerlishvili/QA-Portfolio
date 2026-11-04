# Live Video and Debate Platform — Bug Reports

This folder contains NDA-safe bug reports based on real QA findings from a mobile and web platform focused on user-generated video content, live debates and real-time user interaction.

## Bug Report Index

| ID | Title | Platform | Area | Severity | Priority |
|---|---|---|---|---|---|
| [BR-001](BR-001-Switch-Device-Modal-Appears-After-Rejoining-On-Same-Device.md) | "Switch Device" Modal Appears When Rejoining a Live Session on the Same Device | iOS | Live session rejoin / device detection | Medium | High |
| [BR-002](BR-002-Current-Round-Freezes-After-Switching-Between-Mobile-And-Web.md) | Current Round Freezes After Switching Between Mobile and Web | iOS / Web | Cross-device switch / round state | Critical | High |
| [BR-003](BR-003-Facebook-Login-Fails-With-Incorrect-Password-Error.md) | Facebook Registration/Login Fails With "Incorrect Password" Error Despite Entering the Correct Password | iOS | Authentication / social login | High | High |
| [BR-004](BR-004-Battery-Percentage-Decreases-While-Charging-During-Live-Debate.md) | Battery Percentage Continues to Decrease While the Device Is Charging During an Active Debate | iOS | Performance / battery consumption | High | High |
| [BR-005](BR-005-Web-User-Logged-Out-After-Leaving-Live-And-Refreshing.md) | [Web] User Is Logged Out After Leaving the Live Debate for the First Time and Refreshing the Page | Web | Web session management | High | High |
| [BR-006](BR-006-App-Enters-Reconnecting-State-During-Video-Upload.md) | [iOS] App Enters "Reconnecting..." State During Video Upload | iOS | Video upload / publishing | Critical | High |

## Covered Areas

- Live session rejoin after force close
- Device detection and cross-device switching (mobile ↔ web)
- Live round state and moderator controls
- Social login (Facebook) registration and authentication
- Web session persistence after leaving a live debate
- Video upload and publishing
- Battery consumption during live debates

## Test Environments

| Environment | Platform | Device | OS / Browser | App / Web Version |
|---|---|---|---|---|
| Staging | iOS | iPhone 14 Pro | iOS 26.7 / iOS 27.0 | 1.21.0 – 1.22 |
| Production | iOS | iPhone 14 Pro | iOS 26.6 / iOS 26.6.1 | 1.13 – 1.17 |
| Development | Web | Lenovo laptop (Windows, Build 26200) | Browser 154.0.8037.98 | 1.21.0 |

## Confidentiality Note

The original application name, URLs, user data, internal identifiers, evidence links and proprietary feature names have been excluded to comply with NDA requirements.
