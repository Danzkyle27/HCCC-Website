import { Helmet } from "react-helmet-async";
import { useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import bg from "../assets/bg.jpg";

function Home() {
  const logoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelector('.hero');
      if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
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

  return (
    <>
      <Helmet>
        <title>Hope in Christ City Church - A Bible-Believing Church</title>
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
        />
        <div ref={textRef} className="hero-text fade-in-section">
          <h1>HOPE IN CHRIST CITY CHURCH</h1>
          <h2>A BIBLE-BELIEVING CHURCH</h2>
        </div>
      </section>
    </>
  );
}

export default Home;
