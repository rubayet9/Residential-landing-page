import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import PageTitle from "../components/PageTitle";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

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
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await createUser(data.email, data.password);
      await updateUserProfile(data.name, "");
      toast.success("Account created successfully.");
      navigate("/");
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
      navigate("/");
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
      navigate("/");
    } catch (error) {
      console.error("GitHub login error:", error);
      toast.error(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="auth-section">
      <PageTitle title="Register" />
      <div className="auth-container">
        <div className="auth-image">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
            alt="Beautiful residential home"
          />
          <div className="auth-image-overlay">
            <h2>Start fresh.</h2>
            <p>Find your perfect home.</p>
          </div>
        </div>
        <div className="auth-form-container">
          <div className="auth-form-wrapper">
            <h2 className="auth-heading">Create Your Account</h2>
            <p className="auth-subheading">
              Join Nestora Living and start exploring homes.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
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
                          "Password must contain at least one uppercase letter",
                        hasLowercase: (value) =>
                          /[a-z]/.test(value) ||
                          "Password must contain at least one lowercase letter",
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
                  <span className="field-error">
                    {errors.password.message}
                  </span>
                )}
                <div className="password-rules">
                  <small>✓ At least one uppercase letter</small>
                  <small>✓ At least one lowercase letter</small>
                  <small>✓ Minimum 6 characters</small>
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

            <p className="auth-switch">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
