# Nestora Living

**Find a Home That Feels Like Yours.**

A modern residential property discovery platform built with React and Firebase. Browse residential properties, explore property details, and manage your profile — all in a responsive, beautifully designed interface.

## 🌐 Live Site

[YOUR_FIREBASE_LIVE_URL](YOUR_FIREBASE_LIVE_URL)

## 📦 Repository

https://github.com/rubayet9/Residential-landing-page.git

## ✨ Features

- **Residential-only property discovery** — Browse 6 curated residential properties including homes, apartments, townhouses, student housing, senior living, and vacation rentals.
- **Firebase Authentication** — Email/password registration and login with Google and GitHub social authentication.
- **Protected Routes** — Property details, profile update, and home planning pages are accessible only to authenticated users.
- **Profile Management** — Update your display name and profile photo using Firebase `updateProfile()`.
- **Responsive Design** — Fully responsive across mobile, tablet, and desktop breakpoints.
- **Interactive Home Planning** — Move-in checklist with progress tracking and room planning cards.
- **Dynamic Page Titles** — Every page has a unique browser title using `react-helmet-async`.
- **Swiper Hero Slider** — 4-slide auto-playing hero banner with fade effect.
- **AOS Scroll Animations** — Smooth entrance animations on scroll for sections and cards.
- **React Hook Form** — Clean form validation for login, registration, and profile update.
- **Custom 404 Page** — Polished not-found page with navigation.
- **Password Validation** — Uppercase, lowercase, and minimum 6 character requirements with show/hide toggle.

## 📦 Packages Used

| Package | Purpose |
|---|---|
| `react` | UI framework |
| `react-router-dom` | Client-side routing |
| `firebase` | Authentication |
| `swiper` | Hero slider (Challenge #1) |
| `aos` | Scroll animations (Challenge #2) |
| `react-hook-form` | Form management (Challenge #3) |
| `react-helmet-async` | Dynamic page titles |
| `react-hot-toast` | Toast notifications |
| `react-icons` | UI icons |

## 🚀 Getting Started

1. Clone the repository
2. Run `npm install`
3. Create a `.env.local` file with your Firebase configuration
4. Run `npm run dev`

## 🔐 Environment Variables

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## 🏗 Built With

- React + Vite
- Firebase Authentication
- Firebase Hosting
- Vanilla CSS Design System
