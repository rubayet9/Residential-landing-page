import { useEffect } from "react";
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
} from "react-icons/hi";

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

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <PageTitle title="Find Your Next Home" />

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
                  <Link to="/#estates" className="btn btn-primary btn-lg">
                    {slide.cta}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Featured Residences */}
      <section className="estates-section" id="estates">
        <div className="section-container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Featured Residences</h2>
            <p className="section-subtitle">
              A curated collection of residential spaces selected for comfort,
              accessibility and everyday living.
            </p>
          </div>
          <div className="properties-grid">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
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
              <Link to="/#estates" className="btn btn-primary">
                Explore Residences
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
