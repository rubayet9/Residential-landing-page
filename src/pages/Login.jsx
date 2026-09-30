import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import PageTitle from "../components/PageTitle";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

const authErrorMessages = {
  "auth/invalid-credential": "Invalid email or password.",
  "auth/email-already-in-use": "This email is already registered.",
  "auth/weak-password": "Password must be at least 6 characters.",
  "auth/invalid-email": "Please enter a valid email address.",
  "auth/user-not-found": "No account found with this email.",
  "auth/wrong-password": "Incorrect password. Please try again.",
  "auth/too-many-requests": "Too many attempts. Please try again later.",
  "auth/popup-closed-by-user": "Sign-in popup was closed before completing.",
  "auth/operation-not-allowed": "This sign-in provider is not enabled in Firebase Console.",
  "auth/network-request-failed": "Network error or Firebase Auth is not enabled in Firebase Console.",
  "auth/account-exists-with-different-credential":
    "An account already exists with this email using a different sign-in method.",
};

const getErrorMessage = (error) => {
  const code = error?.code || "";
  return authErrorMessages[code] || error?.message || "Something went wrong. Please try again.";
};

const Login = () => {
  const { loginUser, googleLogin, githubLogin } = useAuth();
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

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await loginUser(data.email, data.password);
      toast.success("Logged in successfully.");
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Login error:", error);
      toast.error(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      await googleLogin();
      toast.success("Logged in successfully.");
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
      toast.success("Logged in successfully.");
      navigate(from, { replace: true });
    } catch (error) {
      console.error("GitHub login error:", error);
      toast.error(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="auth-section">
      <PageTitle title="Login" />
      <div className="auth-container">
        <div className="auth-image">
          <img
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
            alt="Residential living space"
          />
          <div className="auth-image-overlay">
            <h2>Find a home.</h2>
            <p>Live your way.</p>
          </div>
        </div>
        <div className="auth-form-container">
          <div className="auth-form-wrapper">
            <h2 className="auth-heading">Welcome Back</h2>
            <p className="auth-subheading">
              Sign in to continue exploring residential homes.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
              <div className="form-group">
                <label htmlFor="login-email">Email Address</label>
                <input
                  id="login-email"
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
                <label htmlFor="login-password">Password</label>
                <div className="password-wrapper">
                  <input
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    {...register("password", {
                      required: "Password is required",
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
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-full"
                disabled={isLoading}
              >
                {isLoading ? "Signing In..." : "Login"}
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
              Don't have an account?{" "}
              <Link to="/register">Create an account</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
