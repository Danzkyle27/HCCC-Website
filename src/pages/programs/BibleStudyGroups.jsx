import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./BibleStudyGroups.css";

// Import images
import panghuloImg from "../../assets/bible-studies/panghulo.jpg";
import serranoImg from "../../assets/bible-studies/serrano.jpg";
import tinajerosImg from "../../assets/bible-studies/tinajeros.jpg";
import karuhatanImg from "../../assets/bible-studies/karuhatan.jpg";

function BibleStudyGroups() {
  const bibleStudyGroups = [
    {
      id: 1,
      title: "PANGHULO, Malabon",
      day: "Monday",
      time: "07:00 PM",
      leader: "Bro. Jess Rocero",
      image: panghuloImg
    },
    {
      id: 2,
      title: "SERRANO, Caloocan",
      day: "Thursday",
      time: "07:30 PM",
      leader: "Bro. Roger Monterola",
      image: serranoImg
    },
    {
      id: 3,
      title: "TINAJEROS, Malabon",
      day: "Wednesday",
      time: "07:00 PM",
      leader: "Ptr. Jay Valenzuela",
      image: tinajerosImg
    },
    {
      id: 4,
      title: "KARUHATAN, Valenzuela",
      day: "Friday",
      time: "07:30 PM",
      leader: "Bro. Jess Rocero",
      image: karuhatanImg
    }
  ];

  return (
    <>
      <Helmet>
        <title>Bible Study Groups - Hope in Christ City Church</title>
        <meta name="description" content="Join one of our Bible study groups in Malabon, Caloocan, and Valenzuela. Deepen your understanding of God's Word in a community setting." />
        <meta name="keywords" content="bible study groups, Malabon, Caloocan, Valenzuela, small groups, HCCC" />
        <meta property="og:title" content="Bible Study Groups - Hope in Christ City Church" />
        <meta property="og:description" content="Join one of our Bible study groups in Malabon, Caloocan, and Valenzuela." />
        <link rel="canonical" href="https://hopeinchristcitychurch.org/programs/bible-study/groups" />
      </Helmet>

      <div className="bible-study-groups-page">
        {/* Header */}
        <section className="bible-study-groups-header">
          <h1>Bible Study Groups</h1>
          <p>Join a Bible study group near you and grow in faith together</p>
        </section>

        {/* Groups Grid */}
        <section className="bible-study-groups-section">
          <div className="bible-study-groups-grid">
            {bibleStudyGroups.map((group) => (
              <div key={group.id} className="bible-study-group-card">
                <div className="bible-study-group-image-wrapper">
                  <img src={group.image} alt={group.title} className="bible-study-group-image" />
                </div>
                <div className="bible-study-group-content">
                  <h3 className="bible-study-group-title">{group.title}</h3>
                  <div className="bible-study-group-details">
                    <div className="bible-study-group-schedule">
                      <span className="schedule-icon">📅</span>
                      <span>{group.day} | {group.time}</span>
                    </div>
                    <div className="bible-study-group-leader">
                      <span className="leader-icon">👤</span>
                      <span>{group.leader}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bible-study-groups-cta">
          <h2>Want to Join a Group?</h2>
          <p>Contact us to learn more about joining a Bible study group near you</p>
          <Link to="/contact" className="bible-study-groups-cta-button">Contact Us</Link>
        </section>
      </div>
    </>
  );
}

export default BibleStudyGroups;
