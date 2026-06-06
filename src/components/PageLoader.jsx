import { useState, useEffect } from "react";
import "./PageLoader.css";

function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="page-loader">
      <div className="loader-content">
        <div className="loader-cross">✝</div>
        <div className="loader-text">Hope in Christ City Church</div>
        <div className="loader-spinner"></div>
      </div>
    </div>
  );
}

export default PageLoader;
