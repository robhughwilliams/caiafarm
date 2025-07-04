# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/f68ff1a8-2684-4056-be9d-8b180eba0214

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/f68ff1a8-2684-4056-be9d-8b180eba0214) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/f68ff1a8-2684-4056-be9d-8b180eba0214) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Netlify Enquiry Form: Local & Production Testing

This project uses a production-grade Netlify form for the /enquiry page, with AJAX, spam protection, and static fallback.

### Local Development

1. Install the Netlify CLI if you haven't already:
   ```sh
   npm install -g netlify-cli
   ```
2. Start the local Netlify dev server:
   ```sh
   npm run dev:netlify
   ```
   This will emulate Netlify's form handling and environment variables locally.

3. Ensure you have the following in your `.env` file:
   ```env
   VITE_RECAPTCHA_SITE_KEY=your_site_key
   VITE_RECAPTCHA_SECRET_KEY=your_secret_key
   ```
   (Get these from your Google reCAPTCHA v2 admin panel.)

### Testing the Form
- All fields are required. The form will block submission if any are empty or invalid.
- The form uses AJAX to submit to Netlify. On success, you'll see a thank you message. On error, your draft is saved and restored.
- The honeypot field and reCAPTCHA v2 protect against spam.
- If JavaScript is disabled, the form will POST to `/thank-you.html` (static fallback).

### Netlify Dashboard Setup
- In your Netlify site dashboard, go to Site > Forms > Settings and enable reCAPTCHA v2.
- You can view form submissions and spam in the Netlify dashboard.

### Static Fallback
- `public/thank-you.html` and `public/error.html` provide fallback for non-JS browsers.
- The `_redirects` file ensures `/error` redirects to `/enquiry` and all other routes fallback to the SPA.

### Acceptance Tests
- The form blocks submission if required fields are empty.
- Submits successfully and hits Netlify (mock 200) when all fields + reCAPTCHA are valid.
- Caches form data on network failure and repopulates on refresh.
- Honeypot filled ⇒ JavaScript still fires but Netlify marks as spam.

---
