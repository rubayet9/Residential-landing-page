import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="brand-icon">⌂</span>
              <span>Nestora Living</span>
            </Link>
            <p className="footer-tagline">
              Find a Home That Feels Like Yours.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook" className="social-link">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn" className="social-link">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="footer-col">
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><a href="/#estates">Residences</a></li>
              <li><Link to="/update-profile">Update Profile</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-col">
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-links">
              <li><a href="#">Contact</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="footer-col">
            <h4 className="footer-heading">Connect</h4>
            <ul className="footer-links">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Nestora Living. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
