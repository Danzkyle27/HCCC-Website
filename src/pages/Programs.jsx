import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import sundayService from "../assets/sunday-service.jpg";
import discipleship from "../assets/discipleship.png";
import bibleStudy from "../assets/bible-study.jpg";

function Programs() {
  return (
    <>
      <Helmet>
        <title>Programs - Hope in Christ City Church</title>
        <meta name="description" content="Explore our church programs including Sunday Service, Discipleship, and Bible Study at Hope in Christ City Church." />
      </Helmet>
      <section className="programs">
      <h1 className="programs-title">PROGRAMS</h1>

      <div className="programs-grid">
        <Link to="/sunday-service" className="program-card">
          <img src={sundayService} alt="Sunday Service" />
          <h2>SUNDAY SERVICE</h2>
        </Link>

        <Link to="/discipleship" className="program-card">
          <img src={discipleship} alt="Discipleship" />
          <h2>DISCIPLESHIP</h2>
        </Link>

        <Link to="/bible-study" className="program-card">
          <img src={bibleStudy} alt="Bible Study" />
          <h2>BIBLE STUDY</h2>
        </Link>
      </div>
    </section>
    </>
  );
}

export default Programs;
