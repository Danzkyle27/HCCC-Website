import { Helmet } from "react-helmet-async";
import "./Foundation.css";

function CoreValues() {
  return (
    <>
      <Helmet>
        <title>Core Values - Hope in Christ City Church</title>
        <meta name="description" content="Our core values include the centrality of God's Word, discipleship, worship, excellence, soul-winning, leadership development, and love for God and others." />
      </Helmet>
      <div className="foundation-page">
        <h1 className="foundation-title">CORE VALUES</h1>
        <hr className="foundation-divider" />
        <div className="foundation-content">
          <ul className="foundation-list">
          <li>
            Centrality of God's Word (2 Timothy 3:16-17)
          </li>
          <li>
            Discipleship and shepherding through small groups (Acts 2:42-47)
          </li>
          <li>
            Worship and sincere prayer (Acts 2:42-47)
          </li>
          <li>
            Building up and Excellence in life and ministry (2 Corinthians 14:12, 2 Corinthians 8:7)
          </li>
          <li>
            Soul-winning and church planting (Romans 10:9, Acts 1:8)
          </li>
          <li>
            Leadership Development (Mark 3:14, 2 Timothy 2:2)
          </li>
          <li>
            Love for God, Love for Others (Matthew 22:36-40, Mark 12:28-31)
          </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default CoreValues;
