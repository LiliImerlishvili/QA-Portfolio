@ui
Feature: AI Platform Homepage

    # =========================================
    # Homepage
    # =========================================
    @homepage
    Scenario: Homepage loads successfully
        Given the user navigates to "https://app.example.com/"
        Then the homepage should load successfully
    @homepage
    Scenario: Homepage has correct page title
        Given the user is on the application homepage
        Then the page title should be "GetBot - ChatGPT AI Assistant | GPT-4o, Claude 4.5, Gemini 2.5 & AI Tools"
    @homepage
    Scenario: Company logo is visible on the homepage
        Given the user is on the application homepage
        Then the company logo should be visible in the header


    # =========================================
    # Header Navigation
    # =========================================
    @homepage
    Scenario: Header navigation items are visible
        Given the user is on the application homepage
        Then the following navigation items should be visible in the header
            | item            |
            | Home            |
            | About           |
            | AI Tools        |
            | How it works?   |
            | Plans & Pricing |
            | Tutorial        |
            | Login           |


    @homepage
    Scenario: Header navigation items have correct UI types
        Given the user is on the application homepage
        Then the following header navigation items should have correct types
            | item            | type     |
            | Home            | link     |
            | About           | link     |
            | AI Tools        | dropdown |
            | How it works?   | link     |
            | Plans & Pricing | link     |
            | Tutorial        | link     |
            | Login           | link     |

    @homepage
    Scenario: Header navigation links redirect correctly
        Given the user is on the application homepage
        Then the following header links should redirect correctly
            | item            | expected url                |
            | Home            | https://app.example.com/#home     |
            | About           | https://app.example.com/#about    |
            | How it works?   | https://app.example.com/#features |
            | Plans & Pricing | https://app.example.com/pricing   |
            | Tutorial        | https://app.example.com/tutorial  |
            | Login           | https://app.example.com/login     |

    @homepage
    Scenario: AI Tools dropdown shows correct sub-items
        Given the user is on the application homepage
        When the user clicks on "AI Tools" in the header
        Then the following dropdown items should be visible
            | item           |
            | Image Tools    |
            | Video & Voice  |
            | Text & Content |

    @homepage
    Scenario: Image Tools sub-menu shows correct items
        Given the user is on the application homepage
        When the user hovers over "AI Tools" in the header
        And the user hovers over "Image Tools"
        Then the following items should be visible
            | item                      |
            | AI Image Generator        |
            | Image Background Remove   |
            | Image Background Change   |
            | AI Image Upscaler         |
            | AI Image Search & Recolor |
            | AI Image Search & Replace |
            | Image to Text             |

    @homepage
    Scenario: Video & Voice sub-menu shows correct items
        Given the user is on the application homepage
        When the user hovers over "AI Tools" in the header
        And the user hovers over "Video & Voice"
        Then the following items should be visible
            | item              |
            | AI Video Generate |
            | AI Text to Voice  |
            | AI Voice to Text  |
            | Audio to Text     |
            | Video to Text     |

    @homepage
    Scenario: Text & Content sub-menu shows correct items
        Given the user is on the application homepage
        When the user hovers over "AI Tools" in the header
        And the user hovers over "Text & Content"
        Then the following items should be visible
            | item                  |
            | AI Plagiarism Checker |
            | AI Prediction         |
            | Group AI Chat         |
            | GetBot Code           |
            | AI Content Detector   |
            | YouTube Summarizer    |

    @homepage
    Scenario: AI Tools submenu links redirect correctly
        Given the user is on the application homepage
        Then the following AI Tools submenu links should redirect correctly
            | category       | link                      | expected url                                   |
            | Image Tools    | AI Image Generator        | https://app.example.com/ai-image-generator-from-text |
            | Image Tools    | Image Background Remove   | https://app.example.com/image-background-remove      |
            | Image Tools    | Image Background Change   | https://app.example.com/image-background-change      |
            | Image Tools    | AI Image Upscaler         | https://app.example.com/ai-image-upscaler            |
            | Image Tools    | AI Image Search & Recolor | https://app.example.com/ai-image-search-recolor      |
            | Image Tools    | AI Image Search & Replace | https://app.example.com/ai-image-search-replace      |
            | Image Tools    | Image to Text             | https://app.example.com/image-to-text                |
            | Video & Voice  | AI Video Generate         | https://app.example.com/ai-video-generate            |
            | Video & Voice  | AI Text to Voice          | https://app.example.com/text-to-voice                |
            | Video & Voice  | AI Voice to Text          | https://app.example.com/ai-voice-to-text             |
            | Video & Voice  | Audio to Text             | https://app.example.com/audio-to-text                |
            | Video & Voice  | Video to Text             | https://app.example.com/video-to-text                |
            | Text & Content | AI Plagiarism Checker     | https://app.example.com/ai-plagiarism                |
            | Text & Content | AI Prediction             | https://app.example.com/ai-prediction                |
            | Text & Content | Group AI Chat             | https://app.example.com/chatgpt-group-ai-chat        |
            | Text & Content | GetBot Code               | https://app.example.com/code                         |
            | Text & Content | AI Content Detector       | https://app.example.com/ai-content-detector          |
            | Text & Content | YouTube Summarizer        | https://app.example.com/youtube-summary-with-ai      |

    # =========================================
    # Hero Section
    # =========================================

    @homepage
    Scenario: Main heading is visible on the homepage
        Given the user is on the application homepage
        Then the main heading should be "Your AI Companion"

    @homepage
    Scenario: Sub-heading is visible on the homepage
        Given the user is on the application homepage
        Then the sub-heading should be "Chat, Create, Detect - All in One Place"

    @homepage
    Scenario: Description text is visible on the homepage
        Given the user is on the application homepage
        Then the description text should be "Experience the power of AI in one intuitive platform. From engaging conversations to stunning image generation and AI content detection."

    @homepage
    Scenario: All feature cards are visible on the homepage
        Given the user is on the application homepage
        Then the following feature cards should be visible
            | card                                                               |
            | Smart AI Chat Assistant powered by GPT-5, Claude, Gemini, and more |
            | AI-Powered extensions for Chrome, Edge, and Visual Studio Code     |
            | Create Amazing Images with the Best AI Models                      |
            | Advanced AI-Generated Content Detection & Plagiarism Verification  |

    @homepage
    Scenario: Get Started button is visible on the homepage
        Given the user is on the application homepage
        Then the "Get Started" button should be visible

    @homepage
    Scenario: User clicks Get Started button and is redirected to Login page
        Given the user is on the application homepage
        When the user clicks the "Get Started" button
        Then the user should be redirected to the Login page

    @homepage
    Scenario: Extension buttons are visible on the homepage
        Given the user is on the application homepage
        Then the following extension buttons should be visible
            | button         |
            | Add to Chrome  |
            | Add To Edge    |
            | Add to VS Code |

    @homepage
    Scenario: Extension buttons redirect to correct stores
        Given the user is on the application homepage
        When the user clicks the following extension buttons
            | button         | expected url                               |
            | Add to Chrome  | https://chromewebstore.google.com          |
            | Add To Edge    | https://microsoftedge.microsoft.com/addons |
            | Add to VS Code | https://marketplace.visualstudio.com       |
        Then the user should be redirected to the correct store

    # =========================================
    # Tab Section
    # =========================================

    @homepage
    Scenario: All tabs are visible on the homepage
        Given the user is on the application homepage
        Then the following tabs should be visible
            | tab                            |
            | All-in-one Chatbot             |
            | AI Web Assistant               |
            | AI Chat Document               |
            | AI Email Assistant             |
            | AI Image Generation            |
            | AI Detector / Plagiarism Check |

    @homepage
    Scenario: Each tab shows correct heading when clicked
        Given the user is on the application homepage
        Then the correct heading should be visible after clicking each tab
            | tab                            | heading                           |
            | All-in-one Chatbot             | Group Chat                        |
            | AI Web Assistant               | AI Web Assistant                  |
            | AI Chat Document               | AI-powered Document Chat          |
            | AI Email Assistant             | AI-powered Email Response Feature |
            | AI Image Generation            | AI-powered Image Generation       |
            | AI Detector / Plagiarism Check | AI Detector / Plagiarism Check    |

    @homepage
    Scenario: Each tab content shows Install now button
        Given the user is on the application homepage
        Then the "Install now" button should be visible for each tab
            | tab                            |
            | All-in-one Chatbot             |
            | AI Web Assistant               |
            | AI Chat Document               |
            | AI Email Assistant             |
            | AI Image Generation            |
            | AI Detector / Plagiarism Check |


    # =========================================
    # Value Cards Section
    # =========================================

    @homepage
    Scenario: All value cards are visible on the homepage
        Given the user is on the application homepage
        Then the following value cards should be visible
            | title        | description                                                                                    |
            | Efficient    | We prioritize efficiency by optimizing response times.                                         |
            | Myriad       | Enjoy unlimited tab access and switch between tabs effortlessly.                               |
            | Cutting-edge | We are committed to providing our users with the utmost power of OpenAI's cutting-edge engine. |

    # =========================================
    # Image Gallery Section
    # =========================================

    @homepage
    Scenario: Image gallery is visible on the homepage
        Given the user is on the application homepage
        Then the AI image gallery should be visible on the page

    @homepage
    Scenario: Image gallery displays correct number of images
        Given the user is on the application homepage
        Then the image gallery should display 6 images

    # =========================================
    # Footer Section
    # =========================================

    @homepage
    Scenario: Footer logo is visible
        Given the user is on the application homepage
        Then the GetBotAI logo should be visible in the footer

    @homepage
    Scenario: Footer navigation columns are visible
        Given the user is on the application homepage
        Then the following footer columns should be visible
            | column     |
            | Features   |
            | About      |
            | Contact    |
            | Learn More |

    @homepage
    Scenario: Features column shows correct links
        Given the user is on the application homepage
        Then the following links should be visible in the Features column
            | link                |
            | Group AI Chat       |
            | AI Image generator  |
            | Audio to text       |
            | Image to text       |
            | Video to text       |
            | Text to Voice       |
            | Youtube Summarizer  |
            | GetBot Code         |
            | AI Content Detector |

    @homepage
    Scenario: About column shows correct links
        Given the user is on the application homepage
        Then the following links should be visible in the About column
            | link             |
            | Privacy & Policy |
            | Terms & Services |

    @homepage
    Scenario: Contact email is visible in the footer
        Given the user is on the application homepage
        Then the contact email "contact@example.com" should be visible in the footer

    @homepage
    Scenario: Learn More column shows correct links
        Given the user is on the application homepage
        Then the following links should be visible in the Learn More column
            | link     |
            | Tutorial |
            | Pricing  |

    @homepage
    Scenario: Copyright text is visible in the footer
        Given the user is on the application homepage
        Then the copyright text should be visible in the footer

    @homepage
    Scenario: Contact email has correct mailto link
        Given the user is on the application homepage
        Then the contact email "contact@example.com" should have correct mailto link

    @homepage
    Scenario: Footer About links redirect correctly
        Given the user is on the application homepage
        Then the following footer links should redirect correctly
            | link             | expected url |
            | Privacy & Policy | privacy      |
            | Terms & Services | terms        |
