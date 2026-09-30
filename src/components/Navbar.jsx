import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import toast from "react-hot-toast";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleLogout = async () => {
    try {
      await logoutUser();
      toast.success("Logged out successfully.");
    } catch {
      toast.error("Logout failed. Please try again.");
    }
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/#estates", label: "Explore Homes" },
    ...(user ? [{ to: "/update-profile", label: "Update Profile" }] : []),
    ...(user ? [{ to: "/home-planning", label: "Home Planning" }] : []),
  ];

  const handleNavClick = (to) => {
    setMobileOpen(false);
    if (to === "/#estates") {
      const el = document.getElementById("estates");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <span className="brand-icon">⌂</span>
          <span className="brand-text">Nestora Living</span>
        </Link>

        {/* Desktop Nav */}
        <div className="navbar-links">
          {navLinks.map((link) =>
            link.to === "/#estates" ? (
              <a
                key={link.to}
                href="/#estates"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.to);
                  window.location.href = "/#estates";
                }}
              >
                {link.label}
              </a>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `nav-link ${isActive && link.to !== "/#estates" ? "active" : ""}`
                }
                end={link.to === "/"}
                onClick={() => handleNavClick(link.to)}
              >
                {link.label}
              </NavLink>
            )
          )}
        </div>

        {/* Auth Section */}
        <div className="navbar-auth">
          {user ? (
            <div className="user-section">
              <div
                className="avatar-wrapper"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <img
                  src={user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || "U")}&background=173B36&color=fff`}
                  alt={`${user.displayName || "User"} profile`}
                  className="user-avatar"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || "U")}&background=173B36&color=fff`;
                  }}
                />
                {showTooltip && (
                  <div className="avatar-tooltip">
                    {user.displayName || "User"}
                  </div>
                )}
              </div>
              <button
                onClick={handleLogout}
                className="btn btn-outline btn-sm logout-btn"
                aria-label="Logout"
              >
                <FiLogOut /> <span>Logout</span>
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary btn-sm">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        {navLinks.map((link) =>
          link.to === "/#estates" ? (
            <a
              key={link.to}
              href="/#estates"
              className="mobile-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.to);
                window.location.href = "/#estates";
              }}
            >
              {link.label}
            </a>
          ) : (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `mobile-link ${isActive && link.to !== "/#estates" ? "active" : ""}`
              }
              end={link.to === "/"}
              onClick={() => handleNavClick(link.to)}
            >
              {link.label}
            </NavLink>
          )
        )}
        {user ? (
          <button onClick={handleLogout} className="mobile-link logout">
            <FiLogOut /> Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className="mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
