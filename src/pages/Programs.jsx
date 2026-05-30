import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import sundayService from "../assets/sunday-service.jpg";
import discipleship from "../assets/discipleship.png";
import bibleStudy from "../assets/bible-study.jpg";

function Programs() {
  const cardsRef = useRef([]);

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

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Programs - Hope in Christ City Church</title>
        <meta name="description" content="Explore our church programs including Sunday Service, Discipleship, and Bible Study at Hope in Christ City Church." />
      </Helmet>
      <section className="programs geometric-pattern">
      <h1 className="programs-title">PROGRAMS</h1>

      <div className="programs-grid">
        <Link 
          to="/sunday-service" 
          className="program-card enhanced-image-hover fade-in-section"
          ref={(el) => (cardsRef.current[0] = el)}
        >
          <img src={sundayService} alt="Sunday Service" />
          <h2>SUNDAY SERVICE</h2>
        </Link>

        <Link 
          to="/discipleship" 
          className="program-card enhanced-image-hover fade-in-section"
          ref={(el) => (cardsRef.current[1] = el)}
        >
          <img src={discipleship} alt="Discipleship" />
          <h2>DISCIPLESHIP</h2>
        </Link>

        <Link 
          to="/bible-study" 
          className="program-card enhanced-image-hover fade-in-section"
          ref={(el) => (cardsRef.current[2] = el)}
        >
          <img src={bibleStudy} alt="Bible Study" />
          <h2>BIBLE STUDY</h2>
        </Link>
      </div>
    </section>
    </>
  );
}

export default Programs;
