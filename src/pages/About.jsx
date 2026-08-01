import "./About.css";
import { Helmet } from "react-helmet-async";
import aboutBackground from "../assets/aboutus.png";
import logo from "../assets/logo.png";
import secondBackground from "../assets/pastor.png";
import { GradientText, PremiumButton } from "../components/premium";
import { BoldText } from "../components/luxury";
import SectionDivider from "../components/enhancements/SectionDivider";
import RevealOnScroll from "../components/RevealOnScroll";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About Us - Hope in Christ City Church</title>
        <meta
          name="description"
          content="Learn about Hope in Christ City Church, our community, and Pastor John Joseph Valenzuela. We are a Bible-believing church in Malabon City, Philippines."
        />
      </Helmet>

      {/* ── SECTION 1 · HERO ── */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${aboutBackground})` }}
      >
        <div className="about-hero-overlay" />

        <div className="about-hero-content">
          <RevealOnScroll variant="scale">
            <img src={logo} alt="Church Logo" className="about-logo" />
          </RevealOnScroll>

          <RevealOnScroll variant="fade-up" delay={0.15}>
            <h1 className="about-hero-title">
              <GradientText animate={true}>
                Hope in Christ City Church
              </GradientText>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll variant="fade-up" delay={0.3}>
            <p className="about-hero-sub">
              A Bible-believing community in Tinajeros, Malabon City, Philippines.
            </p>
          </RevealOnScroll>

          <RevealOnScroll variant="fade-up" delay={0.45}>
            <div className="about-hero-badges">
              <span className="about-badge">📖 Bible-Believing</span>
              <span className="about-badge">🤝 Community-Driven</span>
              <span className="about-badge">🙏 Gospel-Centered</span>
            </div>
          </RevealOnScroll>
        </div>

        <div className="about-scroll-hint">
          <div className="about-scroll-arrow" />
          <span>Scroll Down</span>
        </div>
      </section>

      <SectionDivider variant="wave" animated={true} />

      {/* ── SECTION 2 · WHO WE ARE ── */}
      <section className="about-who-section">
        <div className="about-who-inner">
          <RevealOnScroll variant="fade-right">
            <div className="about-who-label">WHO WE ARE</div>
            <h2 className="about-who-title">
              <GradientText animate={true}>Our Story &amp; Mission</GradientText>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll variant="fade-up" delay={0.2}>
            <p className="about-who-text">
              Welcome to Hope in Christ City Church, a Bible-believing church.
              Ours is a community rooted in faith and committed to spreading the
              message of the Gospel. We are located in Tinajeros, Malabon City,
              Philippines, and we welcome everyone to join us in our journey of
              faith.
            </p>
            <p className="about-who-text">
              Our church offers a range of services including Sunday worship,
              Bible study, training, and discipleship. Whether you are seeking
              spiritual guidance, a place to worship, or a community to connect
              with, we are here to welcome you with open arms. Come and be part
              of our vibrant and diverse congregation as we come together to
              explore and celebrate the teachings of Christ by correctly dividing
              and interpreting the Word of truth.
            </p>
          </RevealOnScroll>
        </div>

        {/* Pillars grid */}
        <div className="about-pillars">
          {[
            { icon: "📖", title: "God's Word", desc: "We stand firmly on the authority and sufficiency of Scripture." },
            { icon: "🙏", title: "Prayer", desc: "A community that seeks God through consistent, fervent prayer." },
            { icon: "🤝", title: "Fellowship", desc: "Building genuine relationships rooted in love and accountability." },
            { icon: "🌏", title: "Outreach", desc: "Spreading the Gospel beyond our walls into the community." },
          ].map((pillar, i) => (
            <RevealOnScroll key={pillar.title} variant="fade-up" delay={i * 0.1}>
              <div className="about-pillar-card">
                <div className="about-pillar-icon">{pillar.icon}</div>
                <h3 className="about-pillar-title">{pillar.title}</h3>
                <p className="about-pillar-desc">{pillar.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <SectionDivider variant="curve" />

      {/* ── SECTION 3 · MEET THE PASTOR ── */}
      <section
        className="about-pastor-section"
        style={{ backgroundImage: `url(${secondBackground})` }}
      >
        <div className="about-pastor-overlay" />

        <div className="about-pastor-content">
          <RevealOnScroll variant="fade-left">
            <div className="about-pastor-card">
              <div className="about-pastor-tag">CHURCH PASTOR</div>
              <hr className="about-pastor-rule" />
              <RevealOnScroll variant="fade-up" delay={0.15}>
                <h2 className="about-pastor-name">
                  Pastor John Joseph Valenzuela
                </h2>
              </RevealOnScroll>
              <RevealOnScroll variant="fade-up" delay={0.3}>
                <p className="about-pastor-bio">
                  Leading our congregation with wisdom, compassion, and an
                  unwavering dedication to God's Word — equipping every believer
                  to live out their faith boldly.
                </p>
              </RevealOnScroll>
              <RevealOnScroll variant="fade-up" delay={0.45}>
                <Link to="/contact">
                  <PremiumButton variant="glass" size="medium">
                    Get In Touch →
                  </PremiumButton>
                </Link>
              </RevealOnScroll>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <SectionDivider variant="wave" animated={true} />

      {/* ── SECTION 4 · CTA ── */}
      <section className="about-cta-section">
        <RevealOnScroll variant="fade-down">
          <BoldText size="medium" align="center">
            {`Join Our\nCommunity`}
          </BoldText>
        </RevealOnScroll>

        <RevealOnScroll variant="fade-up" delay={0.2}>
          <p className="about-cta-text">
            Experience the warmth of our fellowship and the power of worship.
            We'd love to meet you this Sunday!
          </p>
        </RevealOnScroll>

        <RevealOnScroll variant="scale" delay={0.35}>
          <div className="about-cta-buttons">
            <Link to="/contact">
              <PremiumButton variant="primary" size="large">
                Visit Us
              </PremiumButton>
            </Link>
            <Link to="/programs">
              <PremiumButton variant="glass" size="large">
                Our Programs
              </PremiumButton>
            </Link>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}

export default AboutUs;
