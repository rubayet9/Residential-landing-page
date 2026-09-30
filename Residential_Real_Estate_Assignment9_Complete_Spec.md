# Residential Real Estate Website — Assignment 9 Complete Build Specification

> **Project Type:** Residential Real Estate Website  
> **Assignment:** Assignment 9 — Real Estate Website  
> **Selected Category:** Residential only  
> **Purpose:** This document converts the provided Assignment 9 requirements into a complete, practical, build-ready specification for a developer/designer.

---

## 1. Project Overview

Build a modern, unique, responsive real-estate website focused **only on Residential properties**.

The website must not include Commercial, Industrial, Land, Luxury, Hospitality, Government & Public, or Speciality property categories as property-estate data. The selected Residential category may include examples such as single-family homes, townhouses, apartments, student housing, senior living communities, and vacation rentals.

### Suggested Website Name

**Nestora Living**

### Suggested Tagline

**Find a Home That Feels Like Yours.**

### Core Product Idea

Nestora Living is a residential property discovery platform where users can:

- Browse residential properties.
- Explore property cards and detailed information.
- Open a protected property-details page.
- Register and log in using Firebase Authentication.
- Sign in with Google.
- Sign in with one additional social provider such as GitHub.
- View and update their profile.
- Access an additional protected route containing meaningful residential-home-related content.
- Enjoy a mobile, tablet, and desktop-friendly experience.

---

# 2. Assignment Requirements Covered

This implementation should satisfy the requirements from the supplied Assignment 9 PDF.

## Mandatory Technical/Project Requirements

- Minimum **10 notable GitHub commits**.
- A meaningful `README.md`.
- README must contain:
  - Website name.
  - Live site URL.
  - At least 5 feature/characteristic bullet points.
  - npm package name(s) used for the challenge.
- Responsive for:
  - Mobile.
  - Tablet.
  - Desktop.
- Firebase configuration keys must be stored using environment variables.
- Design must be unique.
- Website title must use the selected website name.
- Home page must include:
  - Navbar.
  - Slider/banner.
  - Estates section.
  - Footer.
  - Two optional extra sections.
- Navbar must support active routes.
- Navbar must show conditional user state.
- Login page must support email/password authentication, Google login, and one additional social login provider.
- Register page must support:
  - Name.
  - Email.
  - Photo URL.
  - Password.
- Registration password validation:
  - At least one uppercase letter.
  - At least one lowercase letter.
  - Minimum 6 characters.
- Successful login/register must show toast or SweetAlert.
- Do not implement email verification or forgot-password in the assignment version.
- Banner/slider must contain at least 3 slides.
- Footer must appear on all pages.
- Estates section must contain **minimum 4 and maximum 9** JSON records for Residential.
- Estate cards must contain the required property fields.
- View Property button must navigate to a property-details page.
- Estate details route must be protected.
- Unauthenticated users visiting the protected estate-details route must be sent to Login.
- Reloading a protected route must not unnecessarily send an authenticated user back to Login.
- Create a 404 page.
- Add one additional meaningful protected route.
- Implement dynamic page titles.
- Persist authenticated-user information in the navbar after reload, using Firebase auth-state handling.
- Registration page must have show/hide password functionality.
- Implement **any 3** challenge packages from the given list.
- Profile update route must use Firebase `updateProfile()`.
- JSON property data should be created by the developer.
- Property images should be hosted on ImgBB.
- Deploy the website on Firebase.
- Final submission should include GitHub repository and live-site URL.

---

# 3. Recommended Technology Stack

## Core

- React
- React Router
- Firebase Authentication
- Firebase Hosting
- JavaScript
- CSS / Tailwind CSS
- Vite

## Recommended UI/UX Packages

Use exactly these 3 challenge packages to make the required challenge implementation clear:

1. **Swiper** — homepage property/banner slider.
2. **AOS** — scroll-based section/card animation.
3. **React Hook Form** — Register, Login, and Profile forms.

### Other useful packages

These are implementation suggestions, not substitutes for the required 3 challenge packages:

- `react-helmet-async` — dynamic page titles.
- `react-hot-toast` — login/register/update success and error messages.
- `react-icons` — interface icons.
- `lucide-react` — optional alternative icon package.

---

# 4. Brand & Visual Direction

## Brand Personality

The visual identity should feel:

- Modern.
- Premium but approachable.
- Calm.
- Residential.
- Trustworthy.
- Clean.
- Spacious.
- Image-focused.

## Color Direction

Recommended palette:

```text
Primary:      #173B36
Secondary:    #D9B77A
Background:   #F7F5F0
Surface:      #FFFFFF
Text:         #15201D
Muted Text:   #68736F
Border:       #E4E0D7
Success:      #2E7D5B
Danger:       #C94C4C
```

> These colors are a proposed design direction, not values specified by the assignment.

## Typography

Recommended:

- Heading font: `Playfair Display`
- Body font: `Inter`

Use strong visual hierarchy:

- Large display heading on hero.
- Medium bold section headings.
- Comfortable paragraph line-height.
- Small uppercase labels for property metadata.

---

# 5. Global Layout

Every page should use:

```text
<App>
 ├── Navbar
 ├── Main Page Content
 └── Footer
```

`Navbar` and `Footer` should be visible across all normal routes.

Recommended structure:

```text
src/
├── assets/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── LoadingSpinner.jsx
│   ├── PropertyCard.jsx
│   ├── ProtectedRoute.jsx
│   ├── PageTitle.jsx
│   ├── SectionHeading.jsx
│   └── EmptyState.jsx
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── UpdateProfile.jsx
│   ├── PropertyDetails.jsx
│   ├── HomePlanning.jsx
│   └── NotFound.jsx
├── contexts/
│   └── AuthContext.jsx
├── firebase/
│   └── firebase.config.js
├── data/
│   └── properties.json
├── routes/
│   └── router.jsx
├── hooks/
├── utils/
├── App.jsx
├── main.jsx
└── index.css
```

---

# 6. Required Routes

Recommended routing table:

| Route | Page | Access |
|---|---|---|
| `/` | Home | Public |
| `/login` | Login | Public |
| `/register` | Register | Public |
| `/property/:id` | Property Details | Protected |
| `/update-profile` | Update Profile | Protected |
| `/home-planning` | Residential Home Planning | Protected |
| `*` | 404 Not Found | Public |

## Route Design

### `/`

Main Residential landing page.

### `/login`

Email/password + Google + GitHub login.

### `/register`

Create a Firebase user account.

### `/property/:id`

Private property details route.

### `/update-profile`

Protected profile form.

### `/home-planning`

Additional protected route. This route should be meaningful and connected to Residential living.

Recommended content:

- Room-planning checklist.
- Move-in checklist.
- Home setup progress.
- Suggested residential facility considerations.
- Saveable planning cards.

### `*`

Custom 404 Not Found page.

---

# 7. Navbar Specification

## Desktop

Navbar should contain:

```text
[Nestora Living logo/name]

Home
Explore Homes
Update Profile

                [User Avatar / Login]
```

The assignment specifically requires the navbar to contain:

- Website name.
- Home.
- Update Profile.
- User profile / Login state.

`Explore Homes` is an additional navigation item and may route to the home estates section or a dedicated public section.

## Logged-Out State

Show:

```text
Login
```

Do not show a user avatar.

## Logged-In State

Show:

- User photo/avatar.
- User name on hover or tooltip.
- Logout button.

Suggested avatar behavior:

```text
Hover avatar
     ↓
Tooltip / small popup
     ↓
User name
```

## Logout

Clicking Logout must:

1. Call Firebase sign-out.
2. Clear user state through the auth listener/context.
3. Show a success toast.
4. Update navbar immediately.
5. Redirect to `/` where appropriate.

---

# 8. Home Page Specification

Home page order:

```text
Navbar
↓
Hero / Slider
↓
Featured Residential Estates
↓
Why Choose Nestora
↓
Living Experience Section
↓
Footer
```

The assignment explicitly requires Navbar, Slider, Estates, Footer and two optional extra sections.

---

# 9. Hero Slider

Use **Swiper**.

## Minimum Slides

At least 3 slides.

Recommended: 4 slides.

### Slide 1 — Find Your Space

Headline:

> Find a Home That Feels Like Yours.

Description:

> Explore thoughtfully selected residential homes, apartments and townhouses designed around everyday living.

CTA:

`Explore Residences`

### Slide 2 — Move Into Better Living

Headline:

> More Than Four Walls.

Description:

> Discover homes with practical spaces, welcoming communities and facilities made for comfortable living.

CTA:

`View Properties`

### Slide 3 — A Place for Every Chapter

Headline:

> Homes for Every Kind of Life.

Description:

> From family houses to city apartments, discover residential spaces that fit the way you live.

CTA:

`Discover Homes`

### Slide 4 — Optional

Headline:

> Start Your Next Chapter.

Description:

> Find a residential property that feels right for your routine, lifestyle and future.

CTA:

`Explore Now`

## Slider Requirements

- Large property image.
- Dark/soft overlay for text readability.
- Slide heading.
- Short description.
- CTA button.
- Pagination indicator.
- Navigation controls.
- Autoplay.
- Mobile-friendly text sizes.

---

# 10. Estates Section

Section name:

**Featured Residences**

Supporting text:

> A curated collection of residential spaces selected for comfort, accessibility and everyday living.

## Number of Records

Use **6 JSON records**.

This stays within the assignment requirement of minimum 4 and maximum 9.

## Property Card

Each card should contain:

- Relevant image.
- `estate_title`
- `id`
- `segment_name`
- `description`
- `price`
- `status`
- `area`
- `location`
- `facilities`
- View Property button.

### Recommended Card Layout

```text
┌─────────────────────────────┐
│         PROPERTY IMAGE      │
│                       RENT  │
├─────────────────────────────┤
│ Apartment                   │
│ Riverside Family Apartment  │
│                             │
│ 1,650 sq ft                 │
│ Dhaka, Bangladesh           │
│                             │
│ Living • Kitchen • Balcony  │
│                             │
│ ৳45,000 / month             │
│                             │
│ [View Property →]           │
└─────────────────────────────┘
```

---

# 11. Residential Property JSON

Create:

```text
src/data/properties.json
```

Suggested structure:

```json
[
  {
    "id": "res-001",
    "estate_title": "Meadow Court Family Home",
    "segment_name": "Single-Family Home",
    "description": "A bright family residence with generous living spaces, a private garden and practical everyday facilities.",
    "price": "৳1,85,00,000",
    "status": "sale",
    "area": "2,450 sq ft",
    "location": "Bashundhara, Dhaka",
    "image": "IMGBB_IMAGE_URL",
    "facilities": [
      "living room",
      "modern kitchen",
      "private garden",
      "3 bedrooms",
      "2 bathrooms",
      "parking"
    ]
  },
  {
    "id": "res-002",
    "estate_title": "Lakeview Comfort Apartment",
    "segment_name": "Apartment",
    "description": "A contemporary apartment with open views, efficient room planning and a calm residential atmosphere.",
    "price": "৳58,000 / month",
    "status": "rent",
    "area": "1,720 sq ft",
    "location": "Uttara, Dhaka",
    "image": "IMGBB_IMAGE_URL",
    "facilities": [
      "living room",
      "kitchen",
      "balcony",
      "3 bedrooms",
      "2 bathrooms",
      "lift"
    ]
  },
  {
    "id": "res-003",
    "estate_title": "Green Lane Townhouse",
    "segment_name": "Townhouse",
    "description": "A stylish townhouse designed for residents who want a balance between privacy, community and convenient city access.",
    "price": "৳92,000 / month",
    "status": "rent",
    "area": "2,100 sq ft",
    "location": "Dhanmondi, Dhaka",
    "image": "IMGBB_IMAGE_URL",
    "facilities": [
      "living room",
      "dining area",
      "kitchen",
      "roof access",
      "parking",
      "3 bedrooms"
    ]
  },
  {
    "id": "res-004",
    "estate_title": "Campus Nest Student Residence",
    "segment_name": "Student Housing",
    "description": "A purpose-oriented residential space with study-friendly rooms and shared facilities for student living.",
    "price": "৳18,000 / month",
    "status": "rent",
    "area": "850 sq ft",
    "location": "Dhanmondi, Dhaka",
    "image": "IMGBB_IMAGE_URL",
    "facilities": [
      "study room",
      "shared kitchen",
      "Wi-Fi",
      "security",
      "laundry",
      "common lounge"
    ]
  },
  {
    "id": "res-005",
    "estate_title": "Willow Senior Living Residence",
    "segment_name": "Senior Living Community",
    "description": "A comfortable residential environment planned around accessibility, safety and peaceful day-to-day living.",
    "price": "৳65,000 / month",
    "status": "rent",
    "area": "1,300 sq ft",
    "location": "Gulshan, Dhaka",
    "image": "IMGBB_IMAGE_URL",
    "facilities": [
      "accessible entry",
      "bedroom",
      "common lounge",
      "security",
      "elevator",
      "medical assistance area"
    ]
  },
  {
    "id": "res-006",
    "estate_title": "Sunrise Holiday Residence",
    "segment_name": "Vacation Rental",
    "description": "A relaxed residential vacation stay with spacious rooms, open surroundings and family-friendly amenities.",
    "price": "৳12,000 / night",
    "status": "rent",
    "area": "1,950 sq ft",
    "location": "Cox's Bazar, Bangladesh",
    "image": "IMGBB_IMAGE_URL",
    "facilities": [
      "living room",
      "kitchen",
      "2 bedrooms",
      "sea-view balcony",
      "parking",
      "Wi-Fi"
    ]
  }
]
```

## Important Data Rule

All estate objects must remain within the **Residential** category.

Do not create non-residential property objects such as:

- Office.
- Warehouse.
- Factory.
- Agricultural land.
- Hotel as a separate Hospitality category.
- Hospital.
- School.
- Industrial park.

---

# 12. Additional Home Section 1 — Why Choose Us

Section title:

**Why Residents Choose Nestora**

Use 3–4 cards.

### Suggested cards

**Thoughtful Selection**

Every listed home is presented with clear information about size, location and facilities.

**Comfort First**

The interface highlights practical residential features users care about when choosing a home.

**Simple Discovery**

Users can quickly move from the home page to individual property details.

**Resident Focused**

The platform is built around everyday residential living rather than commercial property search.

Use AOS animation when the section enters the viewport.

---

# 13. Additional Home Section 2 — Living Experience

Section title:

**Designed Around Real Life**

Use a split layout:

```text
[Large lifestyle image]     [Text content]
                            Comfortable spaces
                            Practical facilities
                            Connected locations
                            Thoughtful layouts

                            [Explore Residences]
```

This section is intentionally brand-focused and should make the website feel different from a generic real-estate template.

---

# 14. Property Details Page

Route:

```text
/property/:id
```

## Protection

This route must be a protected/private route.

If user is not authenticated:

```text
Property Details
       ↓
ProtectedRoute checks user
       ↓
No user
       ↓
Navigate to /login
       ↓
After login, return to requested property route
```

Recommended login redirect pattern:

```text
location.state = {
  from: currentLocation
}
```

After successful login:

```text
navigate(state?.from?.pathname || "/")
```

This preserves user experience.

## Reload Handling

The assignment specifically requires that authenticated users should not be sent back to Login merely because a protected page reloads.

Use Firebase:

```text
onAuthStateChanged()
```

with an authentication loading state.

Pseudo-flow:

```text
App starts
   ↓
auth loading = true
   ↓
Wait for Firebase session
   ↓
User found → set user → loading false
No user → set user null → loading false
```

Protected route should show a loader while auth state is resolving.

---

# 15. Property Details UI

Recommended layout:

```text
┌────────────────────────────────────────────┐
│               HERO IMAGE                   │
│                                            │
│  RENT / SALE                               │
└────────────────────────────────────────────┘

Property title
Location
Price

Description

Area | Bedrooms | Bathrooms | Status

Facilities
• Living room
• Kitchen
• Balcony
• Parking

Property highlights
Map / location block (optional)

[Contact / Request Info]
```

## Required Information

Show the selected property's:

- Image.
- Estate title.
- ID.
- Segment name.
- Description.
- Price.
- Status.
- Area.
- Location.
- Facilities.

Additional fields may be added.

---

# 16. Login Page

Route:

```text
/login
```

## Required Inputs

- Email.
- Password.

## Required Social Login

- Google.
- One of:
  - GitHub,
  - Facebook,
  - Twitter.

### Recommended implementation

Use:

- Google.
- GitHub.

## Suggested UI

```text
Welcome Back

Sign in to continue exploring residential homes.

[ Email ]

[ Password                  👁 ]

[ Login ]

----------- OR -----------

[ Continue with Google ]

[ Continue with GitHub ]

Don't have an account?
Create an account
```

## Error Cases

Show clear feedback for:

- Invalid email.
- Wrong password.
- User not found.
- Social login failure.
- Empty required field.

Use toast notifications.

## Success

After successful login:

- Show success toast.
- Redirect to the originally requested protected route when applicable.
- Otherwise redirect to Home.

---

# 17. Register Page

Route:

```text
/register
```

## Required Inputs

- Name.
- Email.
- Photo URL.
- Password.

## Recommended Form

```text
Create Your Account

[ Full Name ]

[ Email Address ]

[ Photo URL ]

[ Password                         👁 ]

[ Create Account ]

Already have an account?
Login
```

## Password Validation

Password must satisfy all of:

```text
✓ At least one uppercase letter
✓ At least one lowercase letter
✓ Minimum 6 characters
```

### Example validation logic

```js
const hasUppercase = /[A-Z]/.test(password);
const hasLowercase = /[a-z]/.test(password);
const hasMinimumLength = password.length >= 6;
```

Show the user which rule is failing.

Do not reveal a password value inside an error message.

## Password Visibility

Default:

```text
type="password"
```

When eye button is clicked:

```text
type="text"
```

Click again:

```text
type="password"
```

This is a required challenge.

## Registration Success

After successful Firebase registration:

1. Create user.
2. Apply display name/photo URL using Firebase profile update flow.
3. Show success toast.
4. Redirect to Home or requested protected destination.

## Do Not Add for Assignment Version

Do not add:

- Email verification.
- Forgot password.

These are intentionally excluded by the supplied assignment instructions.

---

# 18. Firebase Authentication

Use Firebase Authentication.

## Providers

Enable:

- Email/Password.
- Google.
- GitHub.

## Environment Variables

Do not hard-code Firebase credentials directly in source.

Recommended `.env.local`:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

Example config:

```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

## Environment File Safety

Add:

```text
.env
.env.local
```

to `.gitignore`.

Do not commit private secrets to GitHub.

---

# 19. Auth Context

Create:

```text
src/contexts/AuthContext.jsx
```

Responsibilities:

- Store current user.
- Store auth-loading state.
- Subscribe using `onAuthStateChanged`.
- Expose login function.
- Expose registration function.
- Expose Google login.
- Expose GitHub login.
- Expose logout.
- Clean up auth listener.

Suggested shape:

```js
{
  user,
  loading,
  createUser,
  loginUser,
  googleLogin,
  githubLogin,
  logoutUser
}
```

---

# 20. Protected Route Component

Create:

```text
src/components/ProtectedRoute.jsx
```

Expected behavior:

```text
if (loading)
    show full-page loader

if (!user)
    return <Navigate to="/login" state={{ from: location }} replace />

return children
```

This component should protect:

- `/property/:id`
- `/update-profile`
- `/home-planning`

---

# 21. Update Profile Page

Route:

```text
/update-profile
```

Protected.

## Required User Information

Display:

- Name.
- Email.
- Photo URL.

## Editable Fields

The assignment requires:

- Name editable.
- Photo URL editable.

Email may be displayed as read-only.

## Suggested Form

```text
Your Profile

[ Avatar ]

Full Name
[ __________________ ]

Email
[ user@email.com ]   ← read only

Photo URL
[ __________________ ]

[ Save Changes ]
```

## Firebase Method

The save operation must use:

```js
updateProfile()
```

Example:

```js
await updateProfile(auth.currentUser, {
  displayName: name,
  photoURL: photoURL
});
```

After success:

- Update local user state or refresh auth context.
- Show success toast.
- Navbar should immediately reflect new name/photo.

---

# 22. Additional Protected Route

Recommended route:

```text
/home-planning
```

Title:

**Home Planning**

Purpose:

Give authenticated users useful residential-living content rather than adding an unrelated route.

## Suggested Content

### Move-In Checklist

- Verify utilities.
- Check door/window locks.
- Confirm kitchen appliances.
- Check bathrooms and water supply.
- Inspect parking access.
- Confirm internet availability.

### Room Planning

Create interactive cards:

```text
Living Room
Kitchen
Bedroom
Workspace
Outdoor Area
```

Each card can include a short planning note.

### Progress Indicator

Example:

```text
Home Setup Progress
████████░░ 80%
```

This may be static or interactive.

The route must remain protected.

---

# 23. 404 Page

Route:

```text
*
```

Design:

```text
404

We Couldn't Find That Home

The page you're looking for doesn't exist or has moved.

[ Back Home ]
[ Explore Residences ]
```

Make the 404 page visually polished.

---

# 24. Dynamic Page Titles

Every page should have a dynamic browser title.

Recommended titles:

| Route | Title |
|---|---|
| Home | `Nestora Living | Find Your Next Home` |
| Login | `Login | Nestora Living` |
| Register | `Register | Nestora Living` |
| Property Details | `Property Name | Nestora Living` |
| Update Profile | `Update Profile | Nestora Living` |
| Home Planning | `Home Planning | Nestora Living` |
| 404 | `404 | Nestora Living` |

For property details, use the actual estate title dynamically.

Recommended package:

```text
react-helmet-async
```

---

# 25. Footer Specification

Footer must be shown on all pages.

Suggested structure:

```text
Nestora Living
Find a Home That Feels Like Yours.

Explore
- Home
- Residences
- Update Profile

Support
- Contact
- Help Center
- Privacy

Connect
- Facebook
- Instagram
- LinkedIn

© 2026 Nestora Living. All rights reserved.
```

Do not add unrelated real-estate categories.

---

# 26. Responsive Design

The website must be responsive across:

- Mobile.
- Tablet.
- Desktop.

## Mobile

Target approximately:

```text
320px+
```

Behavior:

- Collapsed mobile navigation.
- Single-column cards.
- Full-width hero.
- Smaller heading sizes.
- Stacked forms.
- Touch-friendly buttons.
- No horizontal overflow.

## Tablet

Approximately:

```text
768px+
```

Behavior:

- Two-column property grid.
- Balanced hero content.
- Wider forms.
- Compact navigation.

## Desktop

Approximately:

```text
1024px+
```

Behavior:

- Three-column property grid.
- Full navigation.
- Large typography.
- Spacious sections.
- Two-column details layouts.

---

# 27. Responsive Breakpoint Recommendation

Example Tailwind-style breakpoints:

```text
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

Recommended property grid:

```text
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
```

---

# 28. Component Design System

## Buttons

Primary:

```text
Background: Primary brand color
Text: White
Radius: medium/rounded
```

Secondary:

```text
Outline
Transparent background
```

Buttons should have:

- Hover.
- Focus.
- Disabled.
- Loading state where relevant.

## Cards

Use:

- Rounded corners.
- Soft border/shadow.
- Image aspect ratio.
- Clear information hierarchy.

## Inputs

All forms should have:

- Label.
- Placeholder.
- Focus style.
- Error message.
- Accessible field association.

---

# 29. Property Card UX

Each card should have a consistent visual hierarchy:

1. Image.
2. Status badge.
3. Segment label.
4. Estate title.
5. Location.
6. Area.
7. Facilities.
8. Price.
9. View Property button.

Use line clamping for long descriptions so cards remain aligned.

Example:

```jsx
<p className="line-clamp-2">
  {property.description}
</p>
```

---

# 30. Facilities Rendering

Data:

```json
"facilities": [
  "living room",
  "swimming pool",
  "Kitchen"
]
```

UI:

```text
Living Room
Swimming Pool
Kitchen
```

Recommended to display facilities as compact chips/tags.

---

# 31. Loading States

Use a proper loading state for:

- Firebase session initialization.
- Login request.
- Registration request.
- Profile update.
- Property page loading.
- Social login.

Example:

```text
[ spinner ] Loading...
```

Avoid blank screens.

---

# 32. Toast / Alert System

Recommended package:

```text
react-hot-toast
```

Use toast messages for:

### Success

```text
Account created successfully.
```

```text
Logged in successfully.
```

```text
Profile updated successfully.
```

```text
Logged out successfully.
```

### Error

```text
Invalid email or password.
```

```text
Registration failed. Please try again.
```

```text
Password must contain an uppercase letter.
```

---

# 33. Authentication Error Mapping

Do not show raw Firebase codes as the primary UI message.

Map common Firebase errors to friendly messages.

Example:

```js
const authErrorMessages = {
  "auth/invalid-credential": "Invalid email or password.",
  "auth/email-already-in-use": "This email is already registered.",
  "auth/weak-password": "Please choose a stronger password.",
  "auth/invalid-email": "Please enter a valid email address."
};
```

---

# 34. AOS Animation Plan

Since AOS is one of the selected challenge packages:

Use it on:

- Featured Estates section.
- Property cards.
- Why Choose Us cards.
- Living Experience section.
- Property Details content.

Examples:

```text
fade-up
fade-right
fade-left
zoom-in
```

Do not over-animate every element.

The website should remain professional.

---

# 35. Swiper Implementation Plan

Swiper should be used for the homepage slider.

Recommended options:

```js
autoplay
navigation
pagination
loop
effect
```

Keep the slider functional on mobile.

---

# 36. React Hook Form Implementation Plan

Use React Hook Form for:

### Register

Fields:

```text
name
email
photoURL
password
```

### Login

Fields:

```text
email
password
```

### Update Profile

Fields:

```text
displayName
photoURL
```

Benefits:

- Controlled validation.
- Cleaner form state.
- Easy error handling.
- Clear field-level validation.

---

# 37. Image Hosting

The assignment requires property images to be hosted on **ImgBB**.

Process:

```text
Select property image
      ↓
Upload to ImgBB
      ↓
Copy direct/public image URL
      ↓
Place URL inside properties.json
```

Example:

```json
{
  "image": "https://i.ibb.co/xxxxxx/example.jpg"
}
```

Use stable image URLs.

Do not use local image-only paths if the final deployed property data is supposed to rely on ImgBB-hosted images.

---

# 38. Data Access Pattern

Recommended:

```js
import properties from "../data/properties.json";
```

Home:

```js
properties.map(...)
```

Property Details:

```js
const { id } = useParams();

const property = properties.find(
  item => item.id === id
);
```

Handle invalid IDs:

```text
Property not found
```

and provide a navigation link back to Home.

---

# 39. Accessibility Requirements

Implement:

- Semantic HTML.
- `alt` on all important images.
- Visible focus states.
- Proper form labels.
- Buttons should be actual `<button>` elements.
- Navigation links should be actual `<Link>` elements.
- Keyboard-accessible password visibility toggle.
- Sufficient text/background contrast.
- Error messages associated with fields.

Avatar should use meaningful alt text:

```text
alt="User profile"
```

or dynamically:

```text
alt={`${user.displayName} profile`}
```

---

# 40. SEO / Metadata

Recommended:

- One H1 per primary page.
- Descriptive meta title.
- Descriptive description.
- Useful image alt text.

Example home description:

```text
Explore thoughtfully selected residential homes, apartments and townhouses with Nestora Living.
```

---

# 41. GitHub Commit Strategy

The assignment requires a minimum of **10 notable GitHub commits**.

Do not make meaningless commits such as:

```text
update
fix
test
final
```

Use meaningful commits such as:

```text
1. chore: initialize Vite React project
2. feat: create base routing and shared layout
3. feat: build responsive navbar and footer
4. feat: add residential property JSON data
5. feat: build homepage hero with Swiper
6. feat: build featured residential estate cards
7. feat: integrate Firebase authentication
8. feat: create login and registration flows
9. feat: add protected property details route
10. feat: add profile update with Firebase updateProfile
11. feat: add protected home planning route
12. feat: add dynamic page titles and 404 page
13. feat: polish responsive UI and accessibility
14. chore: configure Firebase hosting and deployment
```

Minimum requirement is 10; 12–14 meaningful commits is a good implementation target.

---

# 42. README.md Requirement

The final GitHub `README.md` must include:

## Project Name

```text
Nestora Living
```

## Live Site

```text
YOUR_FIREBASE_LIVE_URL
```

## Repository

```text
YOUR_GITHUB_REPOSITORY_URL
```

## Features

At least five bullet points.

Suggested:

- Residential-only property discovery website.
- Firebase email/password authentication.
- Google and GitHub social authentication.
- Protected property details route.
- Protected profile update route using `updateProfile()`.
- Responsive mobile/tablet/desktop design.
- Swiper-powered responsive hero slider.
- AOS scroll animations.
- React Hook Form validation.
- Dynamic browser titles.
- Custom 404 page.
- ImgBB-hosted property images.

## Packages

Include the actual npm packages used.

Example:

```text
swiper
aos
react-hook-form
react-helmet-async
react-hot-toast
react-icons
firebase
react-router-dom
```

---

# 43. Firebase Hosting Deployment

Recommended final process:

```text
npm run build
↓
Firebase CLI
↓
firebase login
↓
firebase init
↓
Select Hosting
↓
Choose build directory
↓
Configure SPA rewrite
↓
firebase deploy
```

For React Router, ensure Firebase Hosting uses an SPA rewrite to `index.html`.

Example `firebase.json` concept:

```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

---

# 44. Production Environment Checklist

Before deployment:

```text
[ ] Firebase project created
[ ] Email/password enabled
[ ] Google provider enabled
[ ] GitHub provider enabled
[ ] Authorized domains configured
[ ] Environment variables configured
[ ] ImgBB URLs working
[ ] No broken images
[ ] No console errors
[ ] No hard-coded Firebase config
[ ] Protected routes tested
[ ] Reload of protected routes tested
[ ] 404 route tested
[ ] Dynamic titles tested
[ ] Navbar state tested after refresh
[ ] Mobile layout tested
[ ] Tablet layout tested
[ ] Desktop layout tested
[ ] Firebase Hosting deployment tested
```

---

# 45. Full User Flow

## New User

```text
Home
 ↓
Register
 ↓
Enter name/email/photoURL/password
 ↓
Password validation
 ↓
Create Firebase account
 ↓
Update display name/photo
 ↓
Success toast
 ↓
Home
```

## Existing User

```text
Home
 ↓
Login
 ↓
Email/password OR Google OR GitHub
 ↓
Success toast
 ↓
Home / requested protected route
```

## Property Flow

```text
Home
 ↓
View Property
 ↓
ProtectedRoute
 ↓
Authenticated?
 ├── Yes → Property Details
 └── No  → Login
             ↓
          Successful login
             ↓
        Requested property
```

## Profile Flow

```text
Navbar
 ↓
Update Profile
 ↓
Protected Route
 ↓
Edit name/photoURL
 ↓
Save
 ↓
Firebase updateProfile()
 ↓
Success toast
 ↓
Updated navbar
```

---

# 46. Edge Cases

## Property ID Does Not Exist

Show:

```text
Property Not Found
```

and provide:

```text
Back to Residences
```

## User Reloads Protected Page

Do not redirect immediately.

Show loading state until Firebase resolves authentication.

## User Logs Out While on Protected Page

After logout:

```text
Current protected page
        ↓
User becomes null
        ↓
Navigate to /login
```

## Empty Form

Block submission and show field-level errors.

## Invalid Photo URL

The profile form may accept a URL string, but the UI should handle broken image fallback gracefully.

## Image Failure

Show a fallback placeholder rather than broken browser image UI.

---

# 47. Suggested Home Page Wireframe

```text
┌──────────────────────────────────────────────────────────┐
│ LOGO      Home   Explore Homes   Update Profile   Avatar │
├──────────────────────────────────────────────────────────┤
│                                                          │
│                 HERO / SWIPER                            │
│                                                          │
│       Find a Home That Feels Like Yours.                 │
│       Residential homes built around real life.          │
│                                                          │
│               [ Explore Residences ]                     │
│                                                          │
├──────────────────────────────────────────────────────────┤
│                                                          │
│                FEATURED RESIDENCES                       │
│                                                          │
│       [Card]        [Card]        [Card]                 │
│       [Card]        [Card]        [Card]                 │
│                                                          │
├──────────────────────────────────────────────────────────┤
│                                                          │
│                WHY RESIDENTS CHOOSE US                   │
│                                                          │
│        [1]           [2]           [3]           [4]     │
│                                                          │
├──────────────────────────────────────────────────────────┤
│                                                          │
│              DESIGNED AROUND REAL LIFE                    │
│             [Image]            [Content]                 │
│                                                          │
├──────────────────────────────────────────────────────────┤
│                       FOOTER                             │
└──────────────────────────────────────────────────────────┘
```

---

# 48. Suggested Property Details Wireframe

```text
┌──────────────────────────────────────────────────────────┐
│ NAVBAR                                                   │
├──────────────────────────────────────────────────────────┤
│                                                          │
│                 LARGE PROPERTY IMAGE                     │
│                                                          │
├──────────────────────────────────────────────────────────┤
│ Apartment / Townhouse / etc.                             │
│                                                          │
│ Property Title                           Price           │
│ Location                               Sale/Rent         │
│                                                          │
│ Description                                              │
│                                                          │
│ Area       Bedrooms       Bathrooms       Status         │
│                                                          │
│ Facilities                                               │
│ [chip] [chip] [chip] [chip]                             │
│                                                          │
│                 [Contact / Request Info]                 │
│                                                          │
├──────────────────────────────────────────────────────────┤
│ FOOTER                                                   │
└──────────────────────────────────────────────────────────┘
```

---

# 49. Suggested Login/Register Visual Style

Use a two-column desktop design:

```text
┌──────────────────────────────────────────────────────────┐
│ [Residential lifestyle image] │ [Authentication Form]   │
│                               │                          │
│ Find a home.                  │ Welcome Back             │
│ Live your way.                │                          │
│                               │ Email                    │
│                               │ Password                 │
│                               │                          │
│                               │ [ Login ]                │
│                               │                          │
│                               │ Google / GitHub           │
└──────────────────────────────────────────────────────────┘
```

On mobile:

```text
Image
↓
Form
```

---

# 50. Recommended Project UX Rules

1. Never hide important information behind unnecessary interactions.
2. Keep property cards visually consistent.
3. Use readable spacing and large touch targets.
4. Keep the Residential identity consistent throughout.
5. Keep authentication error messages easy to understand.
6. Use loading indicators for asynchronous operations.
7. Protect only the routes that actually need authentication.
8. Keep the user in context after login from a protected route.
9. Avoid unnecessary popups.
10. Do not clutter the home page with too many sections.

---

# 51. Final Requirement-to-Feature Mapping

| Assignment Requirement | Implementation |
|---|---|
| One property category | Residential only |
| Unique design | Nestora Living custom visual direction |
| Responsive | Mobile + Tablet + Desktop |
| Website name | Nestora Living |
| Navbar | Shared responsive navbar |
| Active routes | React Router NavLink |
| User state | Firebase auth state |
| User image on navbar | Firebase `photoURL` |
| Username hover | Tooltip/popover |
| Login button when logged out | Yes |
| Logout when logged in | Yes |
| Email/password login | Yes |
| Google login | Yes |
| Additional social login | GitHub |
| Register | Yes |
| Password uppercase | Yes |
| Password lowercase | Yes |
| Password 6+ chars | Yes |
| Toast/success feedback | Yes |
| No email verification | Yes |
| No forgot password | Yes |
| Slider | Swiper |
| Minimum 3 slides | 4 recommended |
| Footer | Shared footer |
| Estate JSON | 6 Residential records |
| Minimum 4 | Yes |
| Maximum 9 | Yes |
| Required card fields | Yes |
| View Property | Yes |
| Protected details | Yes |
| Reload-safe auth | `onAuthStateChanged` + loader |
| 404 | Yes |
| Extra protected route | `/home-planning` |
| Dynamic title | `react-helmet-async` |
| Password toggle | Yes |
| Challenge package #1 | Swiper |
| Challenge package #2 | AOS |
| Challenge package #3 | React Hook Form |
| Profile information | Name + Email + Photo URL |
| Edit name | Yes |
| Edit photoURL | Yes |
| `updateProfile()` | Yes |
| JSON data | `properties.json` |
| Image hosting | ImgBB |
| Deployment | Firebase Hosting |
| GitHub submission | Yes |
| Live site submission | Yes |
| 10 notable commits | Yes; recommended 12–14 |

---

# 52. Development Order

Follow this order to reduce bugs:

### Phase 1 — Setup

- Create Vite React app.
- Install dependencies.
- Configure Tailwind or CSS system.
- Create Git repository.
- Configure Firebase.
- Configure environment variables.

### Phase 2 — Routing/Layout

- Build App.
- Build Navbar.
- Build Footer.
- Configure routes.
- Create 404 page.

### Phase 3 — Data/UI

- Create `properties.json`.
- Build PropertyCard.
- Build home page.
- Build Swiper hero.
- Build Estates section.

### Phase 4 — Authentication

- Build AuthContext.
- Implement Firebase auth listener.
- Build Register.
- Build Login.
- Add Google.
- Add GitHub.
- Add logout.
- Add toast feedback.

### Phase 5 — Protected Features

- Build ProtectedRoute.
- Build PropertyDetails.
- Build UpdateProfile.
- Build HomePlanning.

### Phase 6 — Challenge Packages

- Integrate Swiper.
- Integrate AOS.
- Integrate React Hook Form.

### Phase 7 — Polish

- Dynamic titles.
- Responsive adjustments.
- Accessibility.
- Loading states.
- Error states.
- Broken-image fallback.
- Empty states.

### Phase 8 — QA & Deployment

- Test every route.
- Test protected routes.
- Test refresh behavior.
- Test social auth.
- Test mobile/tablet/desktop.
- Test Firebase deployment.
- Test all ImgBB images.
- Make meaningful Git commits.
- Finalize README.
- Submit repository + live URL.

---

# 53. QA Test Matrix

## Navigation

```text
[ ] Home link works
[ ] Explore Homes works
[ ] Update Profile works
[ ] Login works
[ ] Logout works
[ ] Mobile menu works
[ ] Active route indicator works
```

## Registration

```text
[ ] Name required
[ ] Email required
[ ] Photo URL field works
[ ] Password required
[ ] Uppercase validation works
[ ] Lowercase validation works
[ ] 6-character minimum works
[ ] Eye icon toggles visibility
[ ] Firebase registration succeeds
[ ] Success toast appears
```

## Login

```text
[ ] Email/password works
[ ] Wrong credentials show error
[ ] Google login works
[ ] GitHub login works
[ ] Success toast appears
[ ] Register link works
```

## Protected Routes

```text
[ ] Logged-out user is redirected to Login
[ ] Protected route remembers requested route
[ ] Authenticated user can access page
[ ] Refresh keeps authenticated access
[ ] Logout removes protected access
```

## Property Details

```text
[ ] Correct property loads by ID
[ ] Image loads
[ ] Title loads
[ ] Description loads
[ ] Price loads
[ ] Status loads
[ ] Area loads
[ ] Location loads
[ ] Facilities load
```

## Profile

```text
[ ] Name appears
[ ] Email appears
[ ] Photo URL appears
[ ] Name edit works
[ ] Photo URL edit works
[ ] updateProfile() succeeds
[ ] Navbar updates immediately
```

## Responsive

```text
[ ] 320px mobile
[ ] 375px mobile
[ ] 768px tablet
[ ] 1024px desktop
[ ] 1440px desktop
[ ] No horizontal overflow
```

---

# 54. Final Submission Checklist

Before submitting, verify every item:

```text
[ ] Residential is the only estate category
[ ] At least 4 JSON records
[ ] No more than 9 JSON records
[ ] Required estate fields exist
[ ] At least 3 slider slides
[ ] Navbar on all pages
[ ] Footer on all pages
[ ] Login page completed
[ ] Register page completed
[ ] Google login completed
[ ] Additional social login completed
[ ] Password validation completed
[ ] Password show/hide completed
[ ] Success/error toast implemented
[ ] Protected property-details route completed
[ ] Protected profile route completed
[ ] Protected extra route completed
[ ] onAuthStateChanged implemented
[ ] Reload-safe authentication implemented
[ ] updateProfile() implemented
[ ] Dynamic titles implemented
[ ] 404 page implemented
[ ] AOS integrated
[ ] Swiper integrated
[ ] React Hook Form integrated
[ ] ImgBB images used
[ ] Firebase environment variables configured
[ ] Firebase Hosting deployment completed
[ ] 10+ notable GitHub commits completed
[ ] README.md completed
[ ] Live URL added to README
[ ] GitHub repository added for submission
[ ] Live site tested in production
```

---

# 55. Final Quality Standard

The final website should feel like a real residential-property brand, not a generic assignment template.

The final result should communicate:

```text
Residential
+ Modern
+ Trustworthy
+ Responsive
+ Visual
+ Easy to Navigate
+ Firebase Authenticated
+ Assignment Compliant
```

The implementation should prioritize correctness first, then visual polish.

## Most Important Rules to Avoid Losing Assignment Marks

- Do not add other property categories.
- Do not hard-code Firebase configuration values into the source.
- Do not make property details public; keep the route protected.
- Do not break protected routes after browser refresh.
- Do not omit the password visibility toggle.
- Do not omit one of the three required challenge packages.
- Do not omit `updateProfile()`.
- Do not use fewer than 4 or more than 9 estate JSON objects.
- Do not use fewer than 3 banner slides.
- Do not forget the 404 page.
- Do not forget the additional protected route.
- Do not forget dynamic page titles.
- Do not forget the minimum 10 notable GitHub commits.
- Do not forget Firebase deployment.
- Do not forget the GitHub repository and live-site URL for submission.

---

# 56. Recommended Final Project Identity

**Website:** Nestora Living  
**Category:** Residential  
**Tagline:** Find a Home That Feels Like Yours.  
**Primary CTA:** Explore Residences  
**Secondary CTA:** View Properties  
**Protected Extra Route:** Home Planning  
**Auth Providers:** Email/Password + Google + GitHub  
**Challenge Packages:** Swiper + AOS + React Hook Form  
**Property Records:** 6  
**Deployment:** Firebase Hosting  
**Image Hosting:** ImgBB
