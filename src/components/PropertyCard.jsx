import { Link } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiArea } from "react-icons/bi";

const PropertyCard = ({ property }) => {
  const { id, estate_title, segment_name, description, price, status, area, location, image, facilities } = property;

  return (
    <div className="property-card" data-aos="fade-up">
      <div className="card-image-wrapper">
        <img
          src={image}
          alt={estate_title}
          className="card-image"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80";
          }}
        />
        <span className={`status-badge ${status}`}>
          {status === "sale" ? "For Sale" : "For Rent"}
        </span>
      </div>
      <div className="card-content">
        <span className="segment-label">{segment_name}</span>
        <h3 className="card-title">{estate_title}</h3>

        <div className="card-meta">
          <span className="meta-item">
            <BiArea className="meta-icon" /> {area}
          </span>
          <span className="meta-item">
            <HiOutlineLocationMarker className="meta-icon" /> {location}
          </span>
        </div>

        <div className="card-facilities">
          {facilities.slice(0, 3).map((facility, index) => (
            <span key={index} className="facility-chip">
              {facility}
            </span>
          ))}
          {facilities.length > 3 && (
            <span className="facility-chip more">+{facilities.length - 3}</span>
          )}
        </div>

        <p className="card-description">{description}</p>

        <div className="card-footer">
          <span className="card-price">{price}</span>
          <Link to={`/property/${id}`} className="btn btn-primary btn-sm">
            View Property →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
