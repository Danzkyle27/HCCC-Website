import { Helmet } from "react-helmet-async";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Sermons.css";

function Sermons() {
  const sermonsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    sermonsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sermonsRef.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const sermons = [
    {
      id: 1,
      videoId: "SJSZh1-CRUA"
    },
    {
      id: 2,
      videoId: "k94czTo7MtY"
    },
    {
      id: 3,
      videoId: "b4Tius4iRVU"
    },
    {
      id: 4,
      videoId: "EBcxa47geaU"
    },
    {
      id: 5,
      videoId: "YR_5vu_APCo"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sermons - Hope in Christ City Church</title>
        <meta name="description" content="Watch past sermons and messages from Hope in Christ City Church. Grow in your faith through biblical teaching." />
        <meta name="keywords" content="sermons, messages, bible teaching, sunday service, bible study, Malabon church" />
        <meta property="og:title" content="Sermons - Hope in Christ City Church" />
        <meta property="og:description" content="Watch past sermons and messages from Hope in Christ City Church." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://hopeinchristcitychurch.org/sermons" />
      </Helmet>

      <div className="sermons-page">
        {/* Hero Section */}
        <section className="sermons-hero">
          <div className="sermons-hero-content">
            <h1 className="sermons-hero-title">Sermon Archive</h1>
            <p className="sermons-hero-subtitle">
              Watch past messages and grow in your faith
            </p>
          </div>
        </section>

        {/* Sermons Grid */}
        <section className="sermons-section">
          <div className="sermons-container">
            <div className="sermons-grid">
              {sermons.map((sermon, index) => (
                  <div
                    key={sermon.id}
                    ref={(el) => (sermonsRef.current[index] = el)}
                    className="sermon-card fade-in-section"
                  >
                    <div className="sermon-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${sermon.videoId}`}
                        title={sermon.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="sermon-content">
                      <span className="sermon-date">{sermon.date}</span>
                      <h3 className="sermon-title">{sermon.title}</h3>
                      <p className="sermon-description">{sermon.description}</p>
                      <a
                        href={`https://www.youtube.com/watch?v=${sermon.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sermon-link"
                      >
                        Watch on YouTube →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="sermons-cta">
          <div className="sermons-cta-content">
            <h2>Join Us Live</h2>
            <p>Experience our services in person every Sunday at 10:00 AM</p>
            <Link to="/contact" className="sermons-cta-button">Visit Us</Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Sermons;
