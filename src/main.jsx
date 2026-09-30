import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./contexts/AuthContext";
import router from "./routes/router";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#15201D",
              color: "#F7F5F0",
              borderRadius: "12px",
              fontFamily: "'Inter', sans-serif",
            },
            success: {
              iconTheme: {
                primary: "#2E7D5B",
                secondary: "#F7F5F0",
              },
            },
            error: {
              iconTheme: {
                primary: "#C94C4C",
                secondary: "#F7F5F0",
              },
            },
          }}
        />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
