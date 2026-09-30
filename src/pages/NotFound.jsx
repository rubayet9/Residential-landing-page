import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";

const NotFound = () => {
  return (
    <section className="not-found-section">
      <PageTitle title="404" />
      <div className="not-found-container">
        <h1 className="not-found-code">404</h1>
        <h2 className="not-found-title">We Couldn't Find That Home</h2>
        <p className="not-found-desc">
          The page you're looking for doesn't exist or has moved.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary">
            Back Home
          </Link>
          <a href="/#estates" className="btn btn-outline">
            Explore Residences
          </a>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
