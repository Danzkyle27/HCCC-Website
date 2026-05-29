import { Helmet } from "react-helmet-async";
import "./Foundation.css";

function Vision() {
  return (
    <>
      <Helmet>
        <title>Vision - Hope in Christ City Church</title>
        <meta name="description" content="Our vision is to see every believer be a committed follower of Christ Jesus through discipleship, evangelism, and transforming lives for the glory of God." />
      </Helmet>
      <div className="foundation-page">
        <h1 className="foundation-title">VISION</h1>
        <hr className="foundation-divider" />
        <div className="foundation-content">
          <ul className="foundation-list">
          <li>
            To see every believer be a committed follower of Christ Jesus <br />
            through discipleship, evangelism, meetings in small groups, <br />
            and transforming lives, families, communities, <br />
            and nations for the glory of God.{" "}
            <span className="foundation-ref">(Acts 2:42-47)</span>
          </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Vision;
