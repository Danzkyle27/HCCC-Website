import "./About.css";
import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import aboutBackground from "../assets/aboutus.png";
import logo from "../assets/logo.png"; 
import secondBackground from "../assets/pastor.png"; 

function AboutUs() {
  const secondSectionRef = useRef(null);

  const scrollToNextSection = () => {
    secondSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-section");
    elements.forEach(el => observer.observe(el));
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us - Hope in Christ City Church</title>
        <meta name="description" content="Learn about Hope in Christ City Church, our community, and Pastor John Joseph Valenzuela. We are a Bible-believing church in Malabon City, Philippines." />
      </Helmet>
      {/* First Section */}
      <div
        className="about-page about-section-first"
        style={{ backgroundImage: `url(${aboutBackground})` }}
      >
        <div className="about-overlay">
          <img src={logo} alt="Church Logo" className="about-logo" />
          <p className="about-text">
            Welcome to Hope in Christ City Church, a Bible-believing church.
            Ours is a community rooted in faith and committed to spreading the
            message of the Gospel. We are located in Tinajeros, Malabon City,
            Philippines, and we welcome everyone to join us in our journey of
            faith. Our church offers a range of services including Sunday
            worship, Bible study, training, and discipleship. Whether you are
            seeking spiritual guidance, a place to worship, or a community to
            connect with, we are here to welcome you with open arms. Come and be
            part of our vibrant and diverse congregation as we come together to
            explore and celebrate the teachings of Christ by correctly dividing
            and interpreting the Word of truth.
          </p>
        </div>
        
        {/* Scroll Indicator */}
        <div className="scroll-indicator" onClick={scrollToNextSection} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && scrollToNextSection()}>
          <div className="scroll-arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p className="scroll-text">Scroll to meet our pastor</p>
        </div>
      </div>

      {/* Second Section */}
      <div
        ref={secondSectionRef}
        className="second-page fade-section"
        style={{ backgroundImage: `url(${secondBackground})` }}
      >
        <div className="second-overlay">
          <h2 className="second-title">CHURCH PASTOR</h2>
          <hr className="second-divider" />
          <p className="second-text">
            Pastor John Joseph Valenzuela
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
