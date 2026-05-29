import { Helmet } from "react-helmet-async";
import sundayService from "../../assets/sunday-service.jpg";

function SundayService() {
  return (
    <>
      <Helmet>
        <title>Sunday Service - Hope in Christ City Church</title>
        <meta name="description" content="Join us for Sunday worship service at Hope in Christ City Church. We welcome individuals and families to join us in fellowship and celebration." />
      </Helmet>
      <section className="program-detail">
      <h1 className="programs-title">PROGRAMS</h1>

      <div className="program-detail-content">
        <img src={sundayService} alt="Sunday Service" />

        <div className="program-detail-text">
          <h2>SUNDAY SERVICE</h2>
          <p>
            Join us for our Sunday worship service as we come together to praise
            and worship. We welcome individuals and families to join us in
            fellowship and celebration.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}

export default SundayService;
