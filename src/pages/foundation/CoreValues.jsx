import { Helmet } from "react-helmet-async";
import "./Foundation.css";
import { GradientText } from "../../components/premium";
import RevealOnScroll from "../../components/RevealOnScroll";

const values = [
  { icon: "📖", text: "Centrality of God's Word", ref: "(2 Timothy 3:16-17)" },
  { icon: "🤝", text: "Discipleship and shepherding through small groups", ref: "(Acts 2:42-47)" },
  { icon: "🙏", text: "Worship and sincere prayer", ref: "(Acts 2:42-47)" },
  { icon: "⭐", text: "Building up and Excellence in life and ministry", ref: "(2 Corinthians 14:12, 2 Corinthians 8:7)" },
  { icon: "🌏", text: "Soul-winning and church planting", ref: "(Romans 10:9, Acts 1:8)" },
  { icon: "👑", text: "Leadership Development", ref: "(Mark 3:14, 2 Timothy 2:2)" },
  { icon: "❤️", text: "Love for God, Love for Others", ref: "(Matthew 22:36-40, Mark 12:28-31)" },
];

function CoreValues() {
  return (
    <>
      <Helmet>
        <title>Core Values - Hope in Christ City Church</title>
        <meta name="description" content="Our core values include the centrality of God's Word, discipleship, worship, excellence, soul-winning, leadership development, and love for God and others." />
      </Helmet>

      <div className="foundation-page">
        <div className="foundation-page-overlay" />

        <div className="foundation-page-inner foundation-page-inner--wide">
          {/* Title */}
          <RevealOnScroll variant="fade-down">
            <div className="foundation-eyebrow">CHURCH FOUNDATION</div>
            <h1 className="foundation-title">
              <GradientText animate={true}>CORE VALUES</GradientText>
            </h1>
            <hr className="foundation-divider" />
          </RevealOnScroll>

          {/* Values grid */}
          <div className="foundation-values-grid">
            {values.map((value, i) => (
              <RevealOnScroll key={i} variant="fade-up" delay={(i % 3) * 0.1}>
                <div className="foundation-value-card">
                  <div className="foundation-value-icon">{value.icon}</div>
                  <p className="foundation-value-text">{value.text}</p>
                  <span className="foundation-ref">{value.ref}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CoreValues;
