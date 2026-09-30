import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import properties from "../data/properties.json";
import PageTitle from "../components/PageTitle";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiArea } from "react-icons/bi";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find((item) => item.id === id);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, [id]);

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

  return (
    <section className="property-details-section">
      <PageTitle title={estate_title} />
      
      {/* Hero Image */}
      <div className="details-hero" data-aos="fade-in">
        <img
          src={image}
          alt={estate_title}
          className="details-hero-image"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80";
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
          </div>
        </div>

        <div className="details-body">
          <div className="details-main">
            <h3>About This Property</h3>
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
                  <span className="stat-value capitalize">{status}</span>
                </div>
              </div>
              <div className="stat-item">
                <span className="stat-icon-text">🆔</span>
                <div>
                  <span className="stat-label">ID</span>
                  <span className="stat-value">{id}</span>
                </div>
              </div>
            </div>

            <h3>Facilities</h3>
            <div className="details-facilities">
              {facilities.map((facility, index) => (
                <span key={index} className="facility-chip">
                  {facility}
                </span>
              ))}
            </div>
          </div>

          <div className="details-sidebar">
            <div className="contact-card">
              <h4>Interested in this property?</h4>
              <p>Get in touch with us for more details, scheduling a visit or making an offer.</p>
              <button className="btn btn-primary btn-full">
                Request Information
              </button>
              <Link to="/" className="btn btn-outline btn-full">
                ← Back to Residences
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
