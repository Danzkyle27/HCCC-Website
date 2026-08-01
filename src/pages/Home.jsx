import { Helmet } from "react-helmet-async";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import bg from "../assets/bg.jpg";
import ScrollDownIndicator from "../components/ScrollDownIndicator";
import AnimatedCard from "../components/AnimatedCard";
import SplitText from "../components/SplitText";
import RevealOnScroll from "../components/RevealOnScroll";
import FloatingBlob from "../components/FloatingBlob";
import StatisticsSection from "../components/enhancements/StatisticsSection";
import SectionDivider from "../components/enhancements/SectionDivider";
import { GradientText, PremiumButton } from "../components/premium";
import { BoldText, LuxuryCard } from "../components/luxury";
import "./Home.css";

function Home() {
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const welcomeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      
      // Parallax effect for logo only — do NOT move the hero element itself
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
          overflow: "hidden",
        }}
      >
        <FloatingBlob color="#5d7b8f" size={500} top="10%" left="5%" delay={0} />
        <FloatingBlob color="#7fa6b5" size={400} top="40%" right="10%" delay={2} />
        <FloatingBlob color="#c0d9dd" size={350} bottom="15%" left="50%" delay={4} />
        
        <motion.img 
          ref={logoRef}
          src={logo} 
          alt="Church Logo" 
          className="hero-logo scale-in" 
          loading="eager"
          style={{ willChange: 'transform' }}
          initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.4, 0, 0.2, 1],
            delay: 0.2
          }}
        />
        <div ref={textRef} className="hero-text fade-in-section">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <SplitText type="words" delay={0.8} staggerDelay={0.08}>
              HOPE IN CHRIST CITY CHURCH
            </SplitText>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            A BIBLE-BELIEVING CHURCH
          </motion.h2>
        </div>
        <ScrollDownIndicator />
      </section>

      {/* Welcome Section */}
      <section className="welcome-section fade-in-section" ref={welcomeRef}>
        <div className="welcome-container">
          <RevealOnScroll variant="fade-up">
            <h2 className="welcome-title">
              <GradientText animate={true}>
                Welcome to Our HCCC Family
              </GradientText>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-up" delay={0.2}>
            <p className="welcome-text">
              We are a community of believers dedicated to spreading the Gospel of Jesus Christ 
              and serving our community with love and compassion. Whether you're seeking spiritual 
              growth, fellowship, or answers to life's questions, you'll find a warm welcome here.
            </p>
          </RevealOnScroll>
          <RevealOnScroll variant="scale" delay={0.4}>
            <div className="welcome-cta">
              <Link to="/contact">
                <PremiumButton variant="primary" size="large">
                  Visit Us
                </PremiumButton>
              </Link>
              <Link to="/soul-winning">
                <PremiumButton variant="secondary" size="large">
                  Learn About Salvation
                </PremiumButton>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider variant="wave" animated={true} />

      {/* Statistics Section */}
      <StatisticsSection />

      {/* Section Divider */}
      <SectionDivider variant="curve" position="bottom" />

      {/* Bold Ministries Introduction */}
      <section className="home-ministries-section" style={{ padding: '120px 20px', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <RevealOnScroll variant="fade-up">
            <BoldText size="large" align="center">
              {`Our Ministries
Serve and Grow Together`}
            </BoldText>
          </RevealOnScroll>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '40px', 
            marginTop: '80px' 
          }}>
            <LuxuryCard
              title="Sunday Service"
              description="Join us every Sunday at 10:00 AM for worship, prayer, and biblical teaching."
              link="/programs/sunday-service"
              linkText="Explore Service"
              delay={0}
            />
            <LuxuryCard
              title="Bible Study Groups"
              description="Grow deeper in your faith through our 4 weekly Bible study groups across Malabon City."
              link="/programs/bible-study"
              linkText="Find a Group"
              delay={0.1}
            />
            <LuxuryCard
              title="Community Outreach"
              description="Making a difference in our community through compassion, service, and the love of Christ."
              link="/ministries"
              linkText="Get Involved"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider variant="wave" animated={true} />

      {/* Service Times Section */}
      <section className="service-times-section">
        <div className="service-times-container">
          <RevealOnScroll variant="fade-down">
            <h2 className="service-times-title">Join Us for Worship</h2>
          </RevealOnScroll>
          <div className="service-times-grid">
            <RevealOnScroll variant="fade-right" delay={0.1}>
              <AnimatedCard>
                <motion.div 
                  className="service-icon"
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  📖
                </motion.div>
                <h3>Sunday Service</h3>
                <p className="service-time">Every Sunday</p>
                <p className="service-detail">10:00 AM - 12:00 PM</p>
                <Link to="/programs/sunday-service" className="service-link">Learn More →</Link>
              </AnimatedCard>
            </RevealOnScroll>
            <RevealOnScroll variant="fade-left" delay={0.2}>
              <AnimatedCard>
                <motion.div 
                  className="service-icon"
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  🙏
                </motion.div>
                <h3>Bible Study</h3>
                <p className="service-time">Every Wednesday</p>
                <p className="service-detail">7:00 PM - 9:00 PM</p>
                <Link to="/programs/bible-study" className="service-link">Learn More →</Link>
              </AnimatedCard>
            </RevealOnScroll>
          </div>
          <RevealOnScroll variant="fade-up" delay={0.3}>
            <div className="service-location">
              <p>📍 Rooms 10-12, 2/F Nazirites Christian Academy Bldg., 25 B. Rivera St., Tinajeros, Malabon City</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}

export default Home;
