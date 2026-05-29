import { Helmet } from "react-helmet-async";
import "./Foundation.css";

function Mission() {
  return (
    <>
      <Helmet>
        <title>Mission - Hope in Christ City Church</title>
        <meta name="description" content="Our mission at Hope in Christ City Church is to preach the Word and teach how to study and rightly divide the Word of truth." />
      </Helmet>
      <div className="foundation-page">
        <h1 className="foundation-title">MISSION</h1>
        <hr className="foundation-divider" />
        <div className="foundation-content">
          <ul className="foundation-list">
          <li>
            To preach the Word season and out of season.{" "}
            <span className="foundation-ref">(2 Timothy 4:1-5)</span>
          </li>
          <li>
            To teach how to study the Word of God and rightly dividing the Word
            of truth.{" "}
            <span className="foundation-ref">(2 Timothy 2:15)</span>
          </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Mission;
