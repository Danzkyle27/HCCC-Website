import { Helmet } from "react-helmet-async";
import "./Foundation.css";
import { GradientText } from "../../components/premium";
import RevealOnScroll from "../../components/RevealOnScroll";

const items = [
  {
    text: "To preach the Word season and out of season.",
    ref: "(2 Timothy 4:1-5)",
  },
  {
    text: "To teach how to study the Word of God and rightly dividing the Word of truth.",
    ref: "(2 Timothy 2:15)",
  },
];

function Mission() {
  return (
    <>
      <Helmet>
        <title>Mission - Hope in Christ City Church</title>
        <meta name="description" content="Our mission at Hope in Christ City Church is to preach the Word and teach how to study and rightly divide the Word of truth." />
      </Helmet>

      <div className="foundation-page">
        <div className="foundation-page-overlay" />

        <div className="foundation-page-inner">
          {/* Title */}
          <RevealOnScroll variant="fade-down">
            <div className="foundation-eyebrow">CHURCH FOUNDATION</div>
            <h1 className="foundation-title">
              <GradientText animate={true}>MISSION</GradientText>
            </h1>
            <hr className="foundation-divider" />
          </RevealOnScroll>

          {/* Content */}
          <ul className="foundation-list">
            {items.map((item, i) => (
              <RevealOnScroll key={i} variant="fade-up" delay={i * 0.15}>
                <li>
                  <span className="foundation-list-text">{item.text}</span>{" "}
                  <span className="foundation-ref">{item.ref}</span>
                </li>
              </RevealOnScroll>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Mission;
