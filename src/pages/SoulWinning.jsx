import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import BibleVerses from "../components/BibleVerses";
import { PremiumButton } from "../components/premium";
import { BoldText } from "../components/luxury";
import SectionDivider from "../components/enhancements/SectionDivider";
import RevealOnScroll from "../components/RevealOnScroll";
import "./SoulWinning.css";

function SoulWinning() {
  return (
    <>
      <Helmet>
        <title>How to Evangelize - Hope in Christ City Church</title>
        <meta name="description" content="Learn the path to salvation through God's Word. Discover the steps to evangelism at Hope in Christ City Church." />
        <meta property="og:title" content="How to Evangelize - Hope in Christ City Church" />
        <meta property="og:description" content="Learn the path to salvation through God's Word." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://hopeinchristcitychurch.org/soul-winning" />
      </Helmet>

      {/* ── HERO + CAROUSEL — everything visible on first load ── */}
      <section className="soulwinning-hero">
        <div className="soulwinning-hero-inner">

          {/* Title block */}
          <RevealOnScroll variant="fade-down">
            <div className="soulwinning-eyebrow">SOUL-WINNING</div>
            <BoldText size="large" align="center">
              {`HOW TO EVANGELIZE?`}
            </BoldText>
            <p className="soulwinning-hero-subtitle">
              Walk through these six biblical steps to understand
              the gospel — and confidently share it with others.
            </p>
          </RevealOnScroll>

          {/* Carousel — inline, no scrolling needed */}
          <RevealOnScroll variant="fade-up" delay={0.2}>
            <div className="soulwinning-carousel-wrapper">
              <BibleVerses />
            </div>
          </RevealOnScroll>

        </div>
      </section>

      <SectionDivider variant="curve" />

      {/* ── CTA ── */}
      <section className="soulwinning-cta">
        <div className="soulwinning-cta-inner">
          <RevealOnScroll variant="fade-down">
            <BoldText size="medium" align="center">
              {`Ready to\nShare the Gospel?`}
            </BoldText>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-up" delay={0.2}>
            <p className="soulwinning-cta-text">
              Join us every Sunday at 10:00 AM and be equipped to bring
              the message of hope to the people around you.
            </p>
          </RevealOnScroll>
          <RevealOnScroll variant="scale" delay={0.35}>
            <div className="soulwinning-cta-buttons">
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
        </div>
      </section>
    </>
  );
}

export default SoulWinning;
