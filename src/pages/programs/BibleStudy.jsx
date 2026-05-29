import { Helmet } from "react-helmet-async";
import bibleStudyImage from "../../assets/bible-study.jpg";

function BibleStudy() {
  return (
    <>
      <Helmet>
        <title>Bible Study - Hope in Christ City Church</title>
        <meta name="description" content="Engage in Bible study sessions at Hope in Christ City Church to deepen your understanding of the Word of God and grow in your faith." />
      </Helmet>
      <section className="program-detail">
      <h1 className="programs-title">PROGRAMS</h1>

      <div className="program-detail-content">
        <img src={bibleStudyImage} alt="Bible Study" />

        <div className="program-detail-text">
          <h2>BIBLE STUDY</h2>
          <p>
            Engage in our Bible study sessions
            ​to deepen your understanding of
            ​the Word of God and grow in your
            ​faith. Our interactive and insightful
            ​studies provide a nurturing 
            environment for spiritual growth.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}

export default BibleStudy;