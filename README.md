# Nestora Living — Residential Real Estate Discovery

> **Find a Home That Feels Like Yours.**  
> A modern, responsive residential property discovery and booking platform built with **React**, **Vite**, and **Firebase Authentication**.

---

## 🌐 Live Site & Repository

- **Live Deployment URL:** [https://residential-landing-page-iota.vercel.app](https://residential-landing-page-iota.vercel.app)
- **GitHub Repository:** [https://github.com/rubayet9/Residential-landing-page.git](https://github.com/rubayet9/Residential-landing-page.git)

---

## ✨ Key Features & Characteristics

1. **Curated Residential-Only Property Discovery:**  
   Focuses exclusively on residential properties covering all 6 core categories: *Single-Family Homes, Apartments, Townhouses, Student Housing, Senior Living Communities,* and *Vacation Rentals* (36 realistic listings).

2. **Interactive Category Filtering & Live Search:**  
   Browse and filter properties by category pills with live count badges, filter by status (*All Status, For Sale, For Rent*), or search in real-time by neighborhood, city, or title.

3. **Firebase Authentication (Multi-Provider):**  
   Complete authentication system supporting Email/Password, Google Sign-In, and GitHub Sign-In with friendly validation and toast notifications.

4. **Interactive Buy / Rent Booking & Inquiry Modal:**  
   Instant online purchase requests and rental applications with customizable financing plans, tour scheduling, and downloadable/printable digital reference receipts.

5. **Strict Protected Routes:**  
   Secure access control for Property Details (`/property/:id`), Update Profile (`/update-profile`), and Home Planning (`/home-planning`) ensuring unauthenticated users are smoothly redirected to the login modal.

6. **Profile Management with Real-Time Sync:**  
   Users can update their display name and profile image URL with instant navbar avatar and tooltip synchronization.

7. **Interactive Home Planning & Move-in Checklist:**  
   Bonus protected residential tool featuring an interactive move-in checklist with live completion percentage tracking and room planning guides.

8. **Password Validation & Visibility Toggle:**  
   Secure registration with real-time validation (at least 1 uppercase letter, 1 lowercase letter, minimum 6 characters) and show/hide password toggle.

9. **Dynamic Page Titles & Custom 404 Page:**  
   Every page has a unique browser title powered by `react-helmet-async`, and invalid URLs route to a custom-designed 404 Not Found page.

10. **Fully Responsive Across All Devices:**  
    Pixel-perfect fluid layouts across Mobile (<480px), Tablet (768px), and Desktop (1200px+) screen sizes.

---

## 📦 Challenge Packages Used

| Package | Purpose / Implementation |
|---|---|
| **`swiper`** (Challenge #1) | Auto-playing 4-slide hero banner with smooth fade transitions, pagination, and navigation controls. |
| **`aos`** (Challenge #2) | Animate On Scroll library providing entrance animations for property cards, feature grids, and sections. |
| **`react-hook-form`** (Challenge #3) | Form state management and validation handling for Login, Registration, and Profile Update forms. |
| **`firebase`** | User authentication (Email/Password, Google, GitHub) and profile management. |
| **`react-router-dom`** | Client-side routing with nested routes and ProtectedRoute navigation guards. |
| **`react-helmet-async`** | Dynamic SEO-friendly document title management per page. |
| **`react-hot-toast`** | Polished alert toast notifications for auth events and bookings. |
| **`react-icons`** | Modern iconography across navigation, cards, and buttons. |

---

## 📁 Project Structure

```
├── public/
│   ├── favicon.svg
│   └── images/               # Local property images
├── src/
│   ├── components/
│   │   ├── Footer.jsx        # Shared footer
│   │   ├── LoadingSpinner.jsx# Loading state spinner
│   │   ├── Navbar.jsx        # Responsive navigation with auth state
│   │   ├── PageTitle.jsx     # Dynamic helmet page titles
│   │   ├── PropertyCard.jsx  # Residential property card
│   │   └── ProtectedRoute.jsx# Route authentication guard
│   ├── contexts/
│   │   └── AuthContext.jsx   # Firebase auth provider & state
│   ├── data/
│   │   └── properties.json   # 36 residential property records
│   ├── firebase/
│   │   └── firebase.config.js# Firebase SDK initialization
│   ├── pages/
│   │   ├── Home.jsx          # Home page with Swiper slider & filter
│   │   ├── HomePlanning.jsx  # Interactive checklist & planning (Protected)
│   │   ├── Login.jsx         # Popup modal login with social providers
│   │   ├── NotFound.jsx      # Custom 404 page
│   │   ├── PropertyDetails.jsx # Protected property view & booking modal
│   │   ├── Register.jsx      # Registration form with validation & photoURL
│   │   └── UpdateProfile.jsx # Profile edit form (Protected)
│   ├── routes/
│   │   └── router.jsx        # React router setup
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css             # Vanilla CSS design system (~2000 lines)
├── .env.example              # Sample environment configuration
├── package.json
├── vercel.json               # SPA client-side routing config
└── README.md
```

---

## 🚀 Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rubayet9/Residential-landing-page.git
   cd Residential-landing-page
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root folder (or use defaults in `src/firebase/firebase.config.js`):
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` (or the terminal URL) in your browser.

5. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🛠 Built With

- **Framework:** React 19 + Vite
- **Styling:** Custom Vanilla CSS Design System
- **Authentication:** Firebase Auth (Email/Pass, Google, GitHub)
- **Deployment:** Vercel

---

© 2026 Nestora Living. All rights reserved. Built for Assignment 9.
