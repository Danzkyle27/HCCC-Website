import { Helmet } from "react-helmet-async";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import bg from "../assets/bg.jpg";
import ScrollDownIndicator from "../components/ScrollDownIndicator";
import "./Home.css";

function Home() {
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const welcomeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelector('.hero');
      if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
      
      // Parallax effect for logo only
      if (logoRef.current) {
        logoRef.current.style.transform = `translateY(${scrolled * 0.3}px) scale(${1 - scrolled * 0.0003})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Immediately show hero elements on mount
    if (logoRef.current) {
      logoRef.current.classList.add("is-visible");
    }
    if (textRef.current) {
      textRef.current.classList.add("is-visible");
    }
  }, []);

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

    if (welcomeRef.current) {
      observer.observe(welcomeRef.current);
    }

    return () => {
      if (welcomeRef.current) {
        observer.unobserve(welcomeRef.current);
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Hope in Christ City Church</title>
        <meta name="description" content="Welcome to Hope in Christ City Church, a Bible-believing church dedicated to spreading the Gospel and serving the community in Malabon City, Philippines." />
      </Helmet>
      <section
        className="hero"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "60px",
          padding: "40px",
          flexWrap: "wrap",
          textAlign: "center",
          position: "relative",
        }}
      >
        <img 
          ref={logoRef}
          src={logo} 
          alt="Church Logo" 
          className="hero-logo scale-in" 
          loading="eager"
          style={{ willChange: 'transform' }}
        />
        <div ref={textRef} className="hero-text fade-in-section">
          <h1>HOPE IN CHRIST CITY CHURCH</h1>
          <h2>A BIBLE-BELIEVING CHURCH</h2>
        </div>
        <ScrollDownIndicator />
      </section>

      {/* Welcome Section */}
      <section className="welcome-section fade-in-section" ref={welcomeRef}>
        <div className="welcome-container">
          <h2 className="welcome-title">Welcome to Our HCCC Family</h2>
          <p className="welcome-text">
            We are a community of believers dedicated to spreading the Gospel of Jesus Christ 
            and serving our community with love and compassion. Whether you're seeking spiritual 
            growth, fellowship, or answers to life's questions, you'll find a warm welcome here.
          </p>
          <div className="welcome-cta">
            <Link to="/contact" className="cta-button primary">
              Visit Us
            </Link>
            <Link to="/soul-winning" className="cta-button secondary">
              Learn About Salvation
            </Link>
          </div>
        </div>
      </section>

      {/* Service Times Section */}
      <section className="service-times-section">
        <div className="service-times-container">
          <h2 className="service-times-title">Join Us for Worship</h2>
          <div className="service-times-grid">
            <div className="service-time-card">
              <div className="service-icon">📖</div>
              <h3>Sunday Service</h3>
              <p className="service-time">Every Sunday</p>
              <p className="service-detail">10:00 AM - 12:00 PM</p>
              <Link to="/programs/sunday-service" className="service-link">Learn More →</Link>
            </div>
            <div className="service-time-card">
              <div className="service-icon">🙏</div>
              <h3>Bible Study</h3>
              <p className="service-time">Every Wednesday</p>
              <p className="service-detail">7:00 PM - 9:00 PM</p>
              <Link to="/programs/bible-study" className="service-link">Learn More →</Link>
            </div>
          </div>
          <div className="service-location">
            <p>📍 Rooms 10-12, 2/F Nazirites Christian Academy Bldg., 25 B. Rivera St., Tinajeros, Malabon City</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
