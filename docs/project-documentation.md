# Luca Newsletter Project Documentation

## Project Overview
Luca Newsletter is a Vue.js-based web application designed to manage subscriptions for a daily newsletter. The application provides functionality for users to subscribe, unsubscribe, edit preferences, submit errors, and make requests.

## Technology Stack
- Vue.js 3
- Vue Router
- Vue I18n (for internationalization)
- Vite (as build tool)

## Project Structure
```
LUCA-NEWSLETTER-SIGNUP-VUE/
│
├── src/
│   ├── assets/
│   │   └── styles.css
│   ├── components/
│   │   ├── LanguageToggle.vue
│   │   ├── NewsletterSections.vue
│   │   └── SubscribeForm.vue
│   ├── views/
│   │   ├── EditPreferences.vue
│   │   ├── Home.vue
│   │   ├── SubmitError.vue
│   │   ├── SubmitRequest.vue
│   │   ├── Subscribe.vue
│   │   ├── SubscribeSuccess.vue
│   │   ├── Unsubscribe.vue
│   │   └── UnsubscribeSuccess.vue
│   ├── App.vue
│   ├── main.js
│   └── router.js
│
├── public/
│   └── _redirects
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Key Components

### App.vue
The main application component that includes the language toggle and router view.

### LanguageToggle.vue
Allows users to switch between English and Portuguese languages.

### NewsletterSections.vue
Displays the different sections available in the newsletter.

### Views
- Home.vue: The landing page with newsletter information and navigation options.
- Subscribe.vue: Handles user subscription to the newsletter.
- Unsubscribe.vue: Manages user unsubscription from the newsletter.
- SubscribeSuccess.vue & UnsubscribeSuccess.vue: Confirmation pages for subscription actions.
- EditPreferences.vue: Allows users to customize their newsletter preferences.
- SubmitError.vue & SubmitRequest.vue: Forms for users to report issues or make requests.

## Internationalization
The project uses Vue I18n for internationalization, supporting English and Portuguese languages.

## Routing
Vue Router is used for navigation between different views. The routes are defined in `router.js`.

## Styling
Global styles are defined in `assets/styles.css`. The project uses a custom design with a dark theme and vibrant accent colors:
- Cyan (#00f7ff) for Subscribe Now button
- Magenta (#ff00e6) for Unsubscribe button
- Yellow (#ffdd00) for Edit Preferences button
- Green (#00ff95) for Submit Error button
- Purple (#9500ff) for Submit Request button

All buttons feature hover effects and consistent styling for a cohesive user interface.

## Form Submission
Forms are submitted to FormSubmit.co for processing. Each form (subscribe, unsubscribe, submit error, submit request) has its own endpoint.

## Build and Deployment
The project uses Vite for building. The built files are deployed to a static hosting service, with Netlify-style redirects configured in the `_redirects` file.