import { Link, useLocation } from "react-router-dom";
import "./Breadcrumb.css";

function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Format breadcrumb text
  const formatBreadcrumb = (str) => {
    return str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Don't show breadcrumb on home page
  if (location.pathname === "/") {
    return null;
  }

  return (
    <nav className="breadcrumb-container" aria-label="Breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={name} className={`breadcrumb-item ${isLast ? "active" : ""}`}>
              <span className="breadcrumb-separator">›</span>
              {isLast ? (
                <span>{formatBreadcrumb(name)}</span>
              ) : (
                <Link to={routeTo}>{formatBreadcrumb(name)}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
