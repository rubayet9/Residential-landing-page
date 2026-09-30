import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAI0OkmUnViYlBDxlmh7Yq09ynHywgSgI0",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "residential-landing-page.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "residential-landing-page",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "residential-landing-page.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "545104876175",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:545104876175:web:8bd5f77611e218198356fa",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
