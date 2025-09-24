import "./About.css";
import { useEffect } from "react";
import aboutBackground from "../assets/aboutus.png";
import logo from "../assets/logo.png"; 
import secondBackground from "../assets/pastor.png"; 

function AboutUs() {

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
      {/* First Section */}
      <div
        className="about-page"
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
      </div>

      {/* Second Section */}
      <div
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
