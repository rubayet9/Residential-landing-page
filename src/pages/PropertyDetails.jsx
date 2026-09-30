import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import properties from "../data/properties.json";
import PageTitle from "../components/PageTitle";
import { useAuth } from "../contexts/AuthContext";
import toast from "react-hot-toast";
import {
  HiOutlineLocationMarker,
  HiOutlineCalendar,
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineX,
  HiOutlineCheckCircle,
  HiOutlineShieldCheck,
  HiOutlinePrinter,
} from "react-icons/hi";
import { BiArea } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

const PropertyDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const property = properties.find((item) => item.id === id);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("buy_rent"); // 'buy_rent' | 'tour' | 'specs'
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
    phone: "",
    preferredDate: "",
    paymentOption: "standard",
    notes: "",
  });

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        name: user.displayName || prev.name,
        email: user.email || prev.email,
      }));
    }
  }, [user]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, [id]);

  // Close modal on escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  if (!property) {
    return (
      <section className="not-found-section">
        <div className="not-found-container">
          <h2>Property Not Found</h2>
          <p>The property you're looking for doesn't exist or has been removed.</p>
          <Link to="/" className="btn btn-primary">
            Back to Residences
          </Link>
        </div>
      </section>
    );
  }

  const {
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    image,
    facilities,
  } = property;

  const handleOpenModal = (mode = "buy_rent") => {
    setModalMode(mode);
    setIsSubmitted(false);
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    if (!formData.phone.trim()) {
      toast.error("Please enter your contact phone number.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const randomRef = `NST-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingRef(randomRef);
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success(
        status === "sale"
          ? "Purchase inquiry submitted successfully!"
          : "Rental booking request received!"
      );
    }, 700);
  };

  return (
    <section className="property-details-section">
      <PageTitle title={`${estate_title} — Nestora Living`} />

      {/* Hero Image */}
      <div className="details-hero" data-aos="fade-in">
        <img
          src={image}
          alt={estate_title}
          className="details-hero-image"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80";
          }}
        />
        <div className="details-hero-overlay">
          <span className={`status-badge large ${status}`}>
            {status === "sale" ? "For Sale" : "For Rent"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="details-content" data-aos="fade-up">
        <div className="details-header">
          <div>
            <span className="segment-label">{segment_name}</span>
            <h1 className="details-title">{estate_title}</h1>
            <p className="details-location">
              <HiOutlineLocationMarker /> {location}
            </p>
          </div>
          <div className="details-price-block">
            <span className="details-price">{price}</span>
            <span className="details-price-tag">
              {status === "sale" ? "Total Property Price" : "Monthly Rental Rate"}
            </span>
          </div>
        </div>

        <div className="details-body">
          {/* Main Info */}
          <div className="details-main">
            <h3>About This Residence</h3>
            <p className="details-description">{description}</p>

            <div className="details-stats">
              <div className="stat-item">
                <BiArea className="stat-icon" />
                <div>
                  <span className="stat-label">Area</span>
                  <span className="stat-value">{area}</span>
                </div>
              </div>
              <div className="stat-item">
                <span className="stat-icon-text">🏷</span>
                <div>
                  <span className="stat-label">Status</span>
                  <span className="stat-value capitalize">
                    {status === "sale" ? "For Sale" : "For Rent"}
                  </span>
                </div>
              </div>
              <div className="stat-item">
                <span className="stat-icon-text">🆔</span>
                <div>
                  <span className="stat-label">Property ID</span>
                  <span className="stat-value">{id}</span>
                </div>
              </div>
            </div>

            <h3>Included Facilities & Amenities</h3>
            <div className="details-facilities">
              {facilities.map((facility, index) => (
                <span key={index} className="facility-chip">
                  ✓ {facility}
                </span>
              ))}
            </div>

            {/* Quality & Security Guarantee Box */}
            <div className="security-guarantee-card">
              <HiOutlineShieldCheck className="guarantee-icon" />
              <div>
                <h4>Nestora Living Verified Residence</h4>
                <p>
                  This property has been inspected and verified for legal compliance,
                  structural safety, and transparent pricing.
                </p>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar Booking & Inquiry Card */}
          <div className="details-sidebar">
            <div className="contact-card">
              <div className="sidebar-price-header">
                <span className="sidebar-price-label">
                  {status === "sale" ? "Listing Price" : "Rental Price"}
                </span>
                <div className="sidebar-price-amount">{price}</div>
              </div>

              <div className="sidebar-action-buttons">
                {/* Primary Buy / Rent Button */}
                <button
                  onClick={() => handleOpenModal("buy_rent")}
                  className="btn btn-primary btn-full sidebar-btn-primary"
                  type="button"
                >
                  {status === "sale" ? "💳 Buy This Property" : "🔑 Rent This Property"}
                </button>

                {/* Request Info / Tour Button */}
                <button
                  onClick={() => handleOpenModal("tour")}
                  className="btn btn-outline btn-full"
                  type="button"
                >
                  <HiOutlineCalendar /> Request Info & Tour
                </button>
              </div>

              {/* Verified Advisor Contact */}
              <div className="advisor-box">
                <div className="advisor-avatar">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80"
                    alt="Sharmin Akter - Property Advisor"
                  />
                </div>
                <div className="advisor-details">
                  <strong>Sharmin Akter</strong>
                  <span>Senior Residential Advisor</span>
                  <div className="advisor-quick-links">
                    <a
                      href="https://wa.me/8801700000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="advisor-pill whatsapp"
                    >
                      <FaWhatsapp /> WhatsApp
                    </a>
                    <a href="tel:+8801700000000" className="advisor-pill phone">
                      <HiOutlinePhone /> Call
                    </a>
                  </div>
                </div>
              </div>

              <Link to="/" className="btn btn-ghost btn-full back-link">
                ← Back to All Residences
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* =======================================================
          INTERACTIVE PROPERTY ACTION / BOOKING MODAL
          ======================================================= */}
      {isModalOpen && (
        <div
          className="booking-modal-overlay"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="booking-modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Close Button */}
            <button
              className="booking-modal-close"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
              type="button"
            >
              <HiOutlineX />
            </button>

            {/* Modal Top Snapshot */}
            <div className="booking-modal-header">
              <div className="modal-property-thumb">
                <img src={image} alt={estate_title} />
              </div>
              <div className="modal-property-info">
                <span className="segment-label">{segment_name}</span>
                <h3 className="modal-property-title">{estate_title}</h3>
                <div className="modal-property-meta">
                  <span>
                    <HiOutlineLocationMarker /> {location}
                  </span>
                  <span>
                    <BiArea /> {area}
                  </span>
                  <span className={`status-badge-mini ${status}`}>
                    {status === "sale" ? "For Sale" : "For Rent"}
                  </span>
                </div>
                <div className="modal-property-price">{price}</div>
              </div>
            </div>

            {/* Modal Tab Switcher */}
            <div className="booking-modal-tabs">
              <button
                type="button"
                className={`booking-tab ${modalMode === "buy_rent" ? "active" : ""}`}
                onClick={() => setModalMode("buy_rent")}
              >
                {status === "sale" ? "💳 Purchase / Buy" : "🔑 Apply to Rent"}
              </button>
              <button
                type="button"
                className={`booking-tab ${modalMode === "tour" ? "active" : ""}`}
                onClick={() => setModalMode("tour")}
              >
                📅 Schedule a Visit
              </button>
              <button
                type="button"
                className={`booking-tab ${modalMode === "specs" ? "active" : ""}`}
                onClick={() => setModalMode("specs")}
              >
                📋 Full Property Breakdown
              </button>
            </div>

            {/* Modal Body Content */}
            <div className="booking-modal-body">
              {isSubmitted ? (
                /* Success Receipt Screen */
                <div className="booking-success-view">
                  <div className="success-icon-badge">
                    <HiOutlineCheckCircle />
                  </div>
                  <h3>
                    {modalMode === "buy_rent"
                      ? status === "sale"
                        ? "Purchase Inquiry Initiated!"
                        : "Rental Application Submitted!"
                      : "Private Tour Scheduled!"}
                  </h3>
                  <p className="success-subtitle">
                    Thank you, <strong>{formData.name || "Valued Resident"}</strong>!
                    Your request has been officially recorded in our residential management system.
                  </p>

                  {/* Summary Receipt Box */}
                  <div className="booking-receipt-box">
                    <div className="receipt-row">
                      <span>Booking Reference ID</span>
                      <strong>{bookingRef}</strong>
                    </div>
                    <div className="receipt-row">
                      <span>Property</span>
                      <strong>{estate_title} ({id})</strong>
                    </div>
                    <div className="receipt-row">
                      <span>Listing Amount</span>
                      <strong>{price}</strong>
                    </div>
                    <div className="receipt-row">
                      <span>Contact Email</span>
                      <span>{formData.email}</span>
                    </div>
                    <div className="receipt-row">
                      <span>Contact Phone</span>
                      <span>{formData.phone}</span>
                    </div>
                    {formData.preferredDate && (
                      <div className="receipt-row">
                        <span>Preferred Date</span>
                        <span>{formData.preferredDate}</span>
                      </div>
                    )}
                  </div>

                  <div className="success-advisor-note">
                    <HiOutlineShieldCheck />
                    <span>
                      Senior Advisor <strong>Sharmin Akter</strong> will call and email
                      you within 24 hours with the next steps and private tour confirmation.
                    </span>
                  </div>

                  <div className="success-action-buttons">
                    <button
                      type="button"
                      className="btn btn-outline"
                      onClick={() => window.print()}
                    >
                      <HiOutlinePrinter /> Print / Save Confirmation
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : modalMode === "specs" ? (
                /* Full Specifications View */
                <div className="property-specs-view">
                  <h4>Complete Residence Specifications</h4>
                  <div className="specs-grid">
                    <div className="spec-box">
                      <span className="spec-name">Property ID</span>
                      <strong className="spec-val">{id}</strong>
                    </div>
                    <div className="spec-box">
                      <span className="spec-name">Category / Segment</span>
                      <strong className="spec-val">{segment_name}</strong>
                    </div>
                    <div className="spec-box">
                      <span className="spec-name">Listing Status</span>
                      <strong className="spec-val capitalize">{status === "sale" ? "For Sale" : "For Rent"}</strong>
                    </div>
                    <div className="spec-box">
                      <span className="spec-name">Total Usable Area</span>
                      <strong className="spec-val">{area}</strong>
                    </div>
                    <div className="spec-box">
                      <span className="spec-name">Location / City</span>
                      <strong className="spec-val">{location}</strong>
                    </div>
                    <div className="spec-box">
                      <span className="spec-name">Estimated Registration/Duty</span>
                      <strong className="spec-val">{status === "sale" ? "4.5% - 6% Govt Fee" : "2 Months Security"}</strong>
                    </div>
                  </div>

                  <h4 style={{ marginTop: "1.25rem" }}>All Facilities Included</h4>
                  <div className="details-facilities">
                    {facilities.map((fac, idx) => (
                      <span key={idx} className="facility-chip">
                        ✓ {fac}
                      </span>
                    ))}
                  </div>

                  <div className="modal-action-footer">
                    <button
                      type="button"
                      className="btn btn-primary btn-full"
                      onClick={() => setModalMode("buy_rent")}
                    >
                      Proceed to {status === "sale" ? "Purchase / Buy" : "Apply for Rent"} →
                    </button>
                  </div>
                </div>
              ) : (
                /* Action Form (Buy / Rent / Tour) */
                <form onSubmit={handleSubmitBooking} className="booking-form">
                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="book-name">Full Name</label>
                      <input
                        id="book-name"
                        type="text"
                        name="name"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="book-email">Email Address</label>
                      <input
                        id="book-email"
                        type="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="book-phone">Contact Phone Number *</label>
                      <input
                        id="book-phone"
                        type="tel"
                        name="phone"
                        required
                        placeholder="+880 17XXXXXXXX"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="book-date">
                        {modalMode === "tour"
                          ? "Preferred Tour Date"
                          : status === "sale"
                          ? "Target Handover Date"
                          : "Desired Move-in Date"}
                      </label>
                      <input
                        id="book-date"
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* Payment / Financial Option */}
                  {modalMode === "buy_rent" && (
                    <div className="form-group">
                      <label htmlFor="book-payment">
                        {status === "sale" ? "Financing / Payment Method" : "Lease Term Preference"}
                      </label>
                      <select
                        id="book-payment"
                        name="paymentOption"
                        value={formData.paymentOption}
                        onChange={handleInputChange}
                        className="form-select"
                      >
                        {status === "sale" ? (
                          <>
                            <option value="cash">Full Cash Direct Payment</option>
                            <option value="mortgage">Bank Home Loan / Mortgage Pre-approved</option>
                            <option value="installment">Installment Schedule (20% Initial Down)</option>
                          </>
                        ) : (
                          <>
                            <option value="1year">1 Year Standard Residential Lease</option>
                            <option value="6months">6 Months Flexible Lease</option>
                            <option value="corporate">Corporate / Company Lease</option>
                          </>
                        )}
                      </select>
                    </div>
                  )}

                  <div className="form-group">
                    <label htmlFor="book-notes">Special Requests / Questions (Optional)</label>
                    <textarea
                      id="book-notes"
                      name="notes"
                      rows={2}
                      placeholder="E.g., request parking slot details, pet policy, floor plan copy, or afternoon visit hours..."
                      value={formData.notes}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <div className="booking-form-submit-row">
                    <button
                      type="submit"
                      className="btn btn-primary btn-full btn-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting
                        ? "Submitting Application..."
                        : modalMode === "tour"
                        ? "📅 Confirm Private Tour Request"
                        : status === "sale"
                        ? `💳 Confirm Purchase Application for ${price}`
                        : `🔑 Submit Rental Application for ${price}`}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PropertyDetails;
