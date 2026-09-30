import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import PageTitle from "../components/PageTitle";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { HiOutlineEye, HiOutlineEyeOff, HiOutlineX } from "react-icons/hi";

const authErrorMessages = {
  "auth/email-already-in-use": "This email is already registered. Please login.",
  "auth/weak-password": "Password must be at least 6 characters.",
  "auth/invalid-email": "Please enter a valid email address.",
  "auth/operation-not-allowed": "Email/Password sign-in is not enabled in Firebase Console.",
  "auth/network-request-failed": "Network error or Firebase Auth is not enabled in Firebase Console.",
  "auth/popup-closed-by-user": "Sign-in popup was closed before completing.",
  "auth/account-exists-with-different-credential":
    "An account already exists with this email using another sign-in provider.",
};

const getErrorMessage = (error) => {
  const code = error?.code || "";
  return authErrorMessages[code] || error?.message || "Registration failed. Please try again.";
};

const Register = () => {
  const { createUser, updateUserProfile, googleLogin, githubLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClose = () => {
    if (window.history.length > 1 && from === "/") {
      navigate(-1);
    } else {
      navigate(from, { replace: true });
    }
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await createUser(data.email, data.password);
      await updateUserProfile(data.name, data.photoURL || "");
      toast.success("Account created successfully.");
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Register error:", error);
      toast.error(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      await googleLogin();
      toast.success("Signed in with Google successfully.");
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Google login error:", error);
      toast.error(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  const handleGithubLogin = async () => {
    setIsLoading(true);
    try {
      await githubLogin();
      toast.success("Signed in with GitHub successfully.");
      navigate(from, { replace: true });
    } catch (error) {
      console.error("GitHub login error:", error);
      toast.error(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-modal-overlay" onClick={handleClose}>
      <PageTitle title="Register — Nestora Living" />
      
      <div 
        className="auth-modal-card" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-reg-title"
      >
        {/* Close Button */}
        <button 
          className="auth-modal-close" 
          onClick={handleClose}
          aria-label="Close register modal"
          type="button"
        >
          <HiOutlineX />
        </button>

        {/* Visual Showcase Side */}
        <div className="auth-modal-image">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
            alt="Beautiful residential home"
          />
          <div className="auth-modal-image-overlay">
            <span className="auth-modal-badge">⌂ Join Nestora</span>
            <h3>Start fresh in your new home.</h3>
            <p>Create your free account to save favorites and unlock residential features.</p>
          </div>
        </div>

        {/* Modal Form Content */}
        <div className="auth-modal-body">
          {/* Top Tabs: Login / Register */}
          <div className="auth-modal-tabs">
            <Link 
              to="/login" 
              state={{ from: location.state?.from }} 
              className="auth-tab-btn"
            >
              Sign In
            </Link>
            <button type="button" className="auth-tab-btn active">
              Create Account
            </button>
          </div>

          <div className="auth-modal-header">
            <h2 id="modal-reg-title" className="auth-modal-title">Create Account</h2>
            <p className="auth-modal-subtitle">
              Join Nestora Living and start exploring homes.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="auth-form compact-form">
            <div className="form-group">
              <label htmlFor="reg-name">Full Name</label>
              <input
                id="reg-name"
                type="text"
                placeholder="Your full name"
                autoComplete="name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="field-error">{errors.name.message}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="reg-photo">Photo URL (Optional)</label>
              <input
                id="reg-photo"
                type="url"
                placeholder="https://example.com/avatar.jpg"
                autoComplete="url"
                {...register("photoURL")}
              />
              {errors.photoURL && (
                <span className="field-error">{errors.photoURL.message}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="reg-email">Email Address</label>
              <input
                id="reg-email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email",
                  },
                })}
              />
              {errors.email && (
                <span className="field-error">{errors.email.message}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="reg-password">Password</label>
              <div className="password-wrapper">
                <input
                  id="reg-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  autoComplete="new-password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    validate: {
                      hasUppercase: (value) =>
                        /[A-Z]/.test(value) ||
                        "Must contain at least one uppercase letter",
                      hasLowercase: (value) =>
                        /[a-z]/.test(value) ||
                        "Must contain at least one lowercase letter",
                    },
                  })}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                </button>
              </div>
              {errors.password && (
                <span className="field-error">{errors.password.message}</span>
              )}
              <div className="password-rules compact-rules">
                <small>✓ 1 Uppercase | 1 Lowercase | Min 6 characters</small>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-full"
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <div className="auth-divider">
            <span>OR</span>
          </div>

          <div className="social-buttons">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-social"
              type="button"
              disabled={isLoading}
            >
              <FcGoogle size={20} /> Continue with Google
            </button>
            <button
              onClick={handleGithubLogin}
              className="btn btn-social"
              type="button"
              disabled={isLoading}
            >
              <FaGithub size={20} /> Continue with GitHub
            </button>
          </div>

          <div className="auth-switch-box">
            <span>Already have an account?</span>{" "}
            <Link 
              to="/login" 
              state={{ from: location.state?.from }}
              className="auth-link-highlight"
            >
              Login Here →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
