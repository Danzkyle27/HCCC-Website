import "./Contact.css";
import fbIcon from "../assets/fbicon.jpg";
import emailIcon from "../assets/emailicon.png";
import phoneIcon from "../assets/phoneicon.png";
import ytIcon from "../assets/yticon.jpg";
import fbQr from "../assets/fbqr.png";
import emailQr from "../assets/emailqr.png";
import viberQr from "../assets/viberqr.png";
import ytQr from "../assets/ytqr.png";
import bgImage from "../assets/contact.png";
import maps from "../assets/maps.png"; 
import mapQr from "../assets/mapqr.png";   

function Contact() {
  return (
    <>
      {/* First Section */}
      <div
        className="contact-page"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="contact-overlay">
          {/* Left Column */}
          <div className="contact-left">
            <h1 className="contact-main">CONNECT</h1>
            <h3 className="contact-sub">WITH US</h3>
            <hr className="contact-line" />
            <p className="contact-desc">
              If you are interested, you may follow and contact us through the following:
            </p>
          </div>

          {/* Right Column */}
          <div className="contact-right">
            <div className="contact-links">
              <div className="contact-link">
                <img src={fbIcon} alt="FB Messenger" className="contact-icon" />
                <span>m.me/61553567229644</span>
              </div>
              <div className="contact-link">
                <img src={emailIcon} alt="Email" className="contact-icon" />
                <span>inquiries@hopeinchristcitychurch.org</span>
              </div>
              <div className="contact-link">
                <img src={phoneIcon} alt="Phone" className="contact-icon" />
                <span>09185468892</span>
              </div>
              <div className="contact-link">
                <img src={ytIcon} alt="YouTube" className="contact-icon" />
                <span>youtube.com/@HopeInChristCityChurch</span>
              </div>
            </div>

            <div className="contact-qrcodes">
              <img src={fbQr} alt="QR Code 1" />
              <img src={emailQr} alt="QR Code 2" />
              <img src={viberQr} alt="QR Code 3" />
              <img src={ytQr} alt="QR Code 4" />
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div
        className="contact-page"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="contact-overlay">
          {/* Left Column */}
          <div className="contact-left">
            <h1 className="contact-main">COME AND</h1>
            <h3 className="contact-sub">VISIT US</h3>
            <hr className="contact-line" />
            <p className="contact-desc">
              Join us at: <br />
              Rooms 10 to 12, 2/F Nazirites Christian Academy Bldg.,​ 25 B. Rivera St.,
              Tinajeros, Malabon City, 1474 Metro Manila
            </p>
          </div>

          {/* Right Column */}
          <div className="contact-right">
            <img src={maps} alt="Map" className="contact-map" />
            <img src={mapQr} alt="QR Code" className="contact-small-qr" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
