import { Helmet } from "react-helmet-async";
import discipleshipImage from "../../assets/discipleship.png";

function Discipleship() {
  return (
    <>
      <Helmet>
        <title>Discipleship - Hope in Christ City Church</title>
        <meta name="description" content="Participate in discipleship training at Hope in Christ City Church. Equip and empower yourself to live a Christ-like life in various aspects of life and ministry." />
      </Helmet>
      <section className="program-detail">
      <h1 className="programs-title">PROGRAMS</h1>

      <div className="program-detail-content">
        <img src={discipleshipImage} alt="Discipleship" />

        <div className="program-detail-text">
          <h2>DISCIPLESHIP</h2>
          <p>
            Participate in discipleship training
            sessions designed to equip and
            ​empower individuals how to live a
            ​Christ-like in various aspects of life and ministry. Our discipleship 
            ​programs cover a wide range of 
            ​topics to help you develop 
            ​personally and spiritually.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}

export default Discipleship;
