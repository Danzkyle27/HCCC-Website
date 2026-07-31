import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import sundayService from "../assets/sunday-service.jpg";
import discipleship from "../assets/discipleship.png";
import bibleStudy from "../assets/bible-study.jpg";
import progBg from "../assets/prog_bg.png";
import { GradientText, PremiumButton } from "../components/premium";
import { BoldText } from "../components/luxury";
import SectionDivider from "../components/enhancements/SectionDivider";
import RevealOnScroll from "../components/RevealOnScroll";

function Programs() {
  return (
    <>
      <Helmet>
        <title>Programs - Hope in Christ City Church</title>
        <meta name="description" content="Explore our church programs including Sunday Service, Discipleship, and Bible Study at Hope in Christ City Church." />
      </Helmet>

      {/* Hero Section */}
      <section className="programs-hero-section" style={{ 
        padding: '120px 20px 80px',
        background: `
          linear-gradient(160deg, rgba(254, 250, 224, 0.88) 0%, rgba(234, 246, 252, 0.82) 50%, rgba(223, 240, 245, 0.88) 100%),
          url(${progBg}) center center / cover no-repeat
        `,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <RevealOnScroll variant="fade-down">
          <BoldText size="xlarge" align="center">
            {`Our Programs
Help Strengthen
Your Faith`}
          </BoldText>
        </RevealOnScroll>
        <RevealOnScroll variant="fade-up" delay={0.2}>
          <p style={{ 
            fontSize: '20px', 
            color: '#5d7b8f', 
            maxWidth: '800px', 
            margin: '30px auto 0',
            lineHeight: '1.8'
          }}>
            Join us in our journey of spiritual growth through dynamic programs designed 
            to strengthen your faith and build lasting community.
          </p>
        </RevealOnScroll>
      </section>

      <SectionDivider variant="wave" animated={true} />

      {/* Programs Grid with Premium Cards */}
      <section className="programs geometric-pattern" style={{ padding: 'clamp(80px, 10vw, 120px) 5%' }}>
        <RevealOnScroll variant="scale">
          <h2 className="programs-title" style={{ marginBottom: '80px' }}>
            <GradientText animate={true}>ALL PROGRAMS</GradientText>
          </h2>
        </RevealOnScroll>

        <div className="programs-grid">
          <RevealOnScroll variant="fade-up" delay={0}>
            <Link to="/programs/sunday-service" className="program-card enhanced-image-hover">
              <img src={sundayService} alt="Sunday Service" loading="lazy" />
              <h2>SUNDAY SERVICE</h2>
              <div style={{ marginTop: '20px' }}>
                <PremiumButton variant="glass" size="medium">
                  Learn More →
                </PremiumButton>
              </div>
            </Link>
          </RevealOnScroll>

          <RevealOnScroll variant="fade-up" delay={0.2}>
            <Link to="/programs/discipleship" className="program-card enhanced-image-hover">
              <img src={discipleship} alt="Discipleship" loading="lazy" />
              <h2>DISCIPLESHIP</h2>
              <div style={{ marginTop: '20px' }}>
                <PremiumButton variant="glass" size="medium">
                  Learn More →
                </PremiumButton>
              </div>
            </Link>
          </RevealOnScroll>

          <RevealOnScroll variant="fade-up" delay={0.4}>
            <Link to="/programs/bible-study" className="program-card enhanced-image-hover">
              <img src={bibleStudy} alt="Bible Study" loading="lazy" />
              <h2>BIBLE STUDY</h2>
              <div style={{ marginTop: '20px' }}>
                <PremiumButton variant="glass" size="medium">
                  Learn More →
                </PremiumButton>
              </div>
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}

export default Programs;
