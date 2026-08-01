import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./Sermons.css";
import { GradientText, PremiumButton } from "../components/premium";
import { BoldText } from "../components/luxury";
import SectionDivider from "../components/enhancements/SectionDivider";
import RevealOnScroll from "../components/RevealOnScroll";

const sermons = [
  { id: 1, videoId: "SJSZh1-CRUA" },
  { id: 2, videoId: "k94czTo7MtY" },
  { id: 3, videoId: "b4Tius4iRVU" },
  { id: 4, videoId: "EBcxa47geaU" },
  { id: 5, videoId: "YR_5vu_APCo" },
];

function Sermons() {
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

      {/* ── HERO ── */}
      <section className="sermons-hero">
        <div className="sermons-hero-inner">
          <RevealOnScroll variant="fade-down">
            <div className="sermons-hero-eyebrow">HOPE IN CHRIST CITY CHURCH</div>
            <BoldText size="large" align="center">
              {`Sermon Archive`}
            </BoldText>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-up" delay={0.2}>
            <p className="sermons-hero-subtitle">
              Watch past messages and grow deeper in your faith
              through biblical teaching.
            </p>
          </RevealOnScroll>
          <RevealOnScroll variant="scale" delay={0.35}>
            <a
              href="https://www.youtube.com/@HopeInChristCityChurch"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PremiumButton variant="glass" size="large">
                Subscribe on YouTube →
              </PremiumButton>
            </a>
          </RevealOnScroll>
        </div>
      </section>

      <SectionDivider variant="wave" animated={true} />

      {/* ── SERMONS GRID ── */}
      <section className="sermons-section">
        <div className="sermons-container">
          <RevealOnScroll variant="fade-down">
            <h2 className="sermons-section-title">
              <GradientText animate={true}>Recent Messages</GradientText>
            </h2>
            <p className="sermons-section-sub">
              Click any video to watch. Use fullscreen for the best experience.
            </p>
          </RevealOnScroll>

          <div className="sermons-grid">
            {sermons.map((sermon, index) => (
              <RevealOnScroll
                key={sermon.id}
                variant="fade-up"
                delay={(index % 3) * 0.1}
              >
                <div className="sermon-card">
                  <div className="sermon-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${sermon.videoId}`}
                      title={`Sermon ${sermon.id}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="sermon-footer">
                    <a
                      href={`https://www.youtube.com/watch?v=${sermon.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sermon-yt-link"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      Watch on YouTube
                    </a>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="curve" />

      {/* ── CTA ── */}
      <section className="sermons-cta">
        <div className="sermons-cta-inner">
          <RevealOnScroll variant="fade-down">
            <BoldText size="medium" align="center">
              {`Join Us\nLive`}
            </BoldText>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-up" delay={0.2}>
            <p className="sermons-cta-text">
              Experience our services in person every Sunday at 10:00 AM.
              We'd love to worship with you!
            </p>
          </RevealOnScroll>
          <RevealOnScroll variant="scale" delay={0.35}>
            <Link to="/contact">
              <PremiumButton variant="primary" size="large">
                Visit Us
              </PremiumButton>
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}

export default Sermons;
