import { Link } from "react-router-dom";
import sundayService from "../assets/sunday-service.jpg";
import discipleship from "../assets/discipleship.png";
import bibleStudy from "../assets/bible-study.jpg";

function Programs() {
  return (
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
  );
}

export default Programs;
