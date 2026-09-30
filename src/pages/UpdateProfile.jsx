import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import PageTitle from "../components/PageTitle";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    if (user) {
      reset({
        displayName: user.displayName || "",
        photoURL: user.photoURL || "",
      });
    }
  }, [user, reset]);

  const onSubmit = async (data) => {
    try {
      await updateUserProfile(data.displayName, data.photoURL);
      toast.success("Profile updated successfully.");
      // Force re-render of user info
      window.location.reload();
    } catch {
      toast.error("Failed to update profile. Please try again.");
    }
  };

  return (
    <section className="profile-section">
      <PageTitle title="Update Profile" />
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-avatar-section">
            <img
              src={
                user?.photoURL ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  user?.displayName || "U"
                )}&background=173B36&color=fff&size=120`
              }
              alt={`${user?.displayName || "User"} profile`}
              className="profile-avatar"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  user?.displayName || "U"
                )}&background=173B36&color=fff&size=120`;
              }}
            />
            <h2 className="profile-name">{user?.displayName || "User"}</h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
            <div className="form-group">
              <label htmlFor="displayName">Full Name</label>
              <input
                id="displayName"
                type="text"
                placeholder="Your full name"
                {...register("displayName", { required: "Name is required" })}
              />
              {errors.displayName && (
                <span className="field-error">
                  {errors.displayName.message}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={user?.email || ""}
                disabled
                readOnly
                className="input-disabled"
              />
              <small className="field-hint">Email cannot be changed.</small>
            </div>

            <div className="form-group">
              <label htmlFor="photoURL">Photo URL</label>
              <input
                id="photoURL"
                type="url"
                placeholder="https://example.com/photo.jpg"
                {...register("photoURL")}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save Changes"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdateProfile;
