import { useState, useEffect, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import PropertyCard from "../components/PropertyCard";
import PageTitle from "../components/PageTitle";
import properties from "../data/properties.json";
import {
  HiOutlineSearchCircle,
  HiOutlineShieldCheck,
  HiOutlineCursorClick,
  HiOutlineUserGroup,
  HiOutlineSearch,
  HiOutlineX,
  HiOutlineFilter,
} from "react-icons/hi";

const categories = [
  { key: "all", label: "All Properties" },
  { key: "Single-Family Home", label: "Single-Family Homes" },
  { key: "Apartment", label: "Apartments" },
  { key: "Townhouse", label: "Townhouses" },
  { key: "Student Housing", label: "Student Housing" },
  { key: "Senior Living Community", label: "Senior Living" },
  { key: "Vacation Rental", label: "Vacation Rentals" },
];

const slides = [
  {
    headline: "Find a Home That Feels Like Yours.",
    description:
      "Explore thoughtfully selected residential homes, apartments and townhouses designed around everyday living.",
    cta: "Explore Residences",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=80",
  },
  {
    headline: "More Than Four Walls.",
    description:
      "Discover homes with practical spaces, welcoming communities and facilities made for comfortable living.",
    cta: "View Properties",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80",
  },
  {
    headline: "Homes for Every Kind of Life.",
    description:
      "From family houses to city apartments, discover residential spaces that fit the way you live.",
    cta: "Discover Homes",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=80",
  },
  {
    headline: "Start Your Next Chapter.",
    description:
      "Find a residential property that feels right for your routine, lifestyle and future.",
    cta: "Explore Now",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1400&q=80",
  },
];

const whyChooseUs = [
  {
    icon: <HiOutlineSearchCircle />,
    title: "Thoughtful Selection",
    desc: "Every listed home is presented with clear information about size, location and facilities.",
  },
  {
    icon: <HiOutlineShieldCheck />,
    title: "Comfort First",
    desc: "The interface highlights practical residential features users care about when choosing a home.",
  },
  {
    icon: <HiOutlineCursorClick />,
    title: "Simple Discovery",
    desc: "Users can quickly move from the home page to individual property details.",
  },
  {
    icon: <HiOutlineUserGroup />,
    title: "Resident Focused",
    desc: "The platform is built around everyday residential living rather than commercial property search.",
  },
];

const INITIAL_DISPLAY_COUNT = 9;

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(INITIAL_DISPLAY_COUNT);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  // Filter properties
  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      // Category Match
      const matchesCategory =
        selectedCategory === "all" ||
        property.segment_name.toLowerCase() === selectedCategory.toLowerCase();

      // Status Match (sale / rent)
      const matchesStatus =
        selectedStatus === "all" || property.status === selectedStatus;

      // Search Query Match (title, location, segment, description)
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        property.estate_title.toLowerCase().includes(query) ||
        property.location.toLowerCase().includes(query) ||
        property.segment_name.toLowerCase().includes(query) ||
        property.description.toLowerCase().includes(query);

      return matchesCategory && matchesStatus && matchesSearch;
    });
  }, [selectedCategory, selectedStatus, searchQuery]);

  // Reset display count when filters change
  useEffect(() => {
    setVisibleCount(INITIAL_DISPLAY_COUNT);
  }, [selectedCategory, selectedStatus, searchQuery]);

  // Calculate category counts
  const categoryCounts = useMemo(() => {
    const counts = { all: properties.length };
    properties.forEach((p) => {
      counts[p.segment_name] = (counts[p.segment_name] || 0) + 1;
    });
    return counts;
  }, []);

  const handleResetFilters = () => {
    setSelectedCategory("all");
    setSelectedStatus("all");
    setSearchQuery("");
  };

  const displayedProperties = filteredProperties.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProperties.length;

  return (
    <>
      <PageTitle title="Find Your Next Home — Nestora Living" />

      {/* Hero Slider */}
      <section className="hero-slider">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          effect="fade"
          className="hero-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="slide"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="slide-overlay"></div>
                <div className="slide-content">
                  <h1 className="slide-headline">{slide.headline}</h1>
                  <p className="slide-description">{slide.description}</p>
                  <a href="#estates" className="btn btn-primary btn-lg">
                    {slide.cta}
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Featured Residences with Dynamic Category Filtering */}
      <section className="estates-section" id="estates">
        <div className="section-container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Explore Residential Properties</h2>
            <p className="section-subtitle">
              Filter by category, search by neighborhood or check for sale vs rental listings.
            </p>
          </div>

          {/* Filter & Search Controls */}
          <div className="filter-controls-wrapper" data-aos="fade-up">
            {/* Search & Status Bar */}
            <div className="filter-search-bar">
              <div className="search-input-wrapper">
                <HiOutlineSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search by title, location (e.g., Gulshan, Cox's Bazar, Villa)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="search-clear-btn"
                    aria-label="Clear search"
                  >
                    <HiOutlineX />
                  </button>
                )}
              </div>

              {/* Status Filter Buttons */}
              <div className="status-filter-pills">
                <button
                  type="button"
                  className={`status-pill ${selectedStatus === "all" ? "active" : ""}`}
                  onClick={() => setSelectedStatus("all")}
                >
                  All Status
                </button>
                <button
                  type="button"
                  className={`status-pill ${selectedStatus === "sale" ? "active" : ""}`}
                  onClick={() => setSelectedStatus("sale")}
                >
                  For Sale
                </button>
                <button
                  type="button"
                  className={`status-pill ${selectedStatus === "rent" ? "active" : ""}`}
                  onClick={() => setSelectedStatus("rent")}
                >
                  For Rent
                </button>
              </div>
            </div>

            {/* Category Pills */}
            <div className="category-pills-container">
              {categories.map((cat) => {
                const count =
                  cat.key === "all"
                    ? categoryCounts.all
                    : categoryCounts[cat.key] || 0;
                const isActive = selectedCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    type="button"
                    className={`category-pill ${isActive ? "active" : ""}`}
                    onClick={() => setSelectedCategory(cat.key)}
                  >
                    <span>{cat.label}</span>
                    <span className="category-pill-count">{count}</span>
                  </button>
                );
              })}
            </div>

            {/* Results Count & Active Filters Indicator */}
            <div className="filter-summary">
              <span>
                Showing <strong>{displayedProperties.length}</strong> of{" "}
                <strong>{filteredProperties.length}</strong> homes
                {selectedCategory !== "all" && ` in ${selectedCategory}`}
                {selectedStatus !== "all" &&
                  ` (${selectedStatus === "sale" ? "For Sale" : "For Rent"})`}
              </span>
              {(selectedCategory !== "all" ||
                selectedStatus !== "all" ||
                searchQuery) && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="btn-reset-filters"
                >
                  Reset Filters ✕
                </button>
              )}
            </div>
          </div>

          {/* Properties Grid or Empty State */}
          {displayedProperties.length > 0 ? (
            <>
              <div className="properties-grid">
                {displayedProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>

              {/* Load More Button */}
              {hasMore && (
                <div className="load-more-container" data-aos="fade-up">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg load-more-btn"
                    onClick={() => setVisibleCount((prev) => prev + 9)}
                  >
                    Load More Properties ({filteredProperties.length - visibleCount} remaining) ↓
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="empty-properties-state" data-aos="fade-up">
              <div className="empty-icon">🏠</div>
              <h3>No properties found</h3>
              <p>No residential properties match your selected filter criteria.</p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleResetFilters}
              >
                View All {properties.length} Properties
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <div className="section-container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Why Residents Choose Nestora</h2>
          </div>
          <div className="why-grid">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="why-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="why-icon">{item.icon}</div>
                <h3 className="why-title">{item.title}</h3>
                <p className="why-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Living Experience */}
      <section className="living-section">
        <div className="section-container">
          <div className="living-grid">
            <div className="living-image" data-aos="fade-right">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Modern residential living space"
              />
            </div>
            <div className="living-content" data-aos="fade-left">
              <h2 className="section-title">Designed Around Real Life</h2>
              <ul className="living-features">
                <li>
                  <span className="feature-dot"></span>
                  <div>
                    <strong>Comfortable Spaces</strong>
                    <p>
                      Every property is selected for livability, not just
                      aesthetics.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="feature-dot"></span>
                  <div>
                    <strong>Practical Facilities</strong>
                    <p>
                      Kitchen, parking, security — the things that matter most.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="feature-dot"></span>
                  <div>
                    <strong>Connected Locations</strong>
                    <p>
                      Properties in neighborhoods with transport, schools and
                      services nearby.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="feature-dot"></span>
                  <div>
                    <strong>Thoughtful Layouts</strong>
                    <p>
                      Open plans, smart storage and natural light in every home.
                    </p>
                  </div>
                </li>
              </ul>
              <a href="#estates" className="btn btn-primary">
                Explore Residences
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
