import { Helmet } from "react-helmet-async";
import "./Foundation.css";
import { GradientText } from "../../components/premium";
import RevealOnScroll from "../../components/RevealOnScroll";

function Vision() {
  return (
    <>
      <Helmet>
        <title>Vision - Hope in Christ City Church</title>
        <meta name="description" content="Our vision is to see every believer be a committed follower of Christ Jesus through discipleship, evangelism, and transforming lives for the glory of God." />
      </Helmet>

      <div className="foundation-page">
        <div className="foundation-page-overlay" />

        <div className="foundation-page-inner">
          {/* Title */}
          <RevealOnScroll variant="fade-down">
            <div className="foundation-eyebrow">CHURCH FOUNDATION</div>
            <h1 className="foundation-title">
              <GradientText animate={true}>VISION</GradientText>
            </h1>
            <hr className="foundation-divider" />
          </RevealOnScroll>

          {/* Content */}
          <ul className="foundation-list">
            <RevealOnScroll variant="fade-up" delay={0.1}>
              <li>
                <span className="foundation-list-text">
                  To see every believer be a committed follower of Christ Jesus
                  through discipleship, evangelism, meetings in small groups,
                  and transforming lives, families, communities, and nations for
                  the glory of God.
                </span>{" "}
                <span className="foundation-ref">(Acts 2:42-47)</span>
              </li>
            </RevealOnScroll>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Vision;
