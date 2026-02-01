import "./Contact.css";
import fbIcon from "../assets/fbicon.png";
import emailIcon from "../assets/emailicon.png";
import phoneIcon from "../assets/phoneicon.png";
import ytIcon from "../assets/yticon.png";
import fbQr from "../assets/fbqr.png";
import emailQr from "../assets/emailqr.png";
import viberQr from "../assets/viberqr.png";
import ytQr from "../assets/ytqr.png";
import bgImage from "../assets/contact.png";
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
              {/* Responsive Map Wrapper */}
              <div className="map-responsive">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.73519635711!2d120.96695757510747!3d14.670963485823751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b50076465b0f%3A0xcfb8273c4d8b9bd8!2sHope%20in%20Christ%20City%20Church!5e0!3m2!1sen!2sph!4v1769955911101!5m2!1sen!2sph"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hope in Christ City Church Map"
                ></iframe>
              </div>

              {/* QR Code */}
              <img src={mapQr} alt="QR Code" className="contact-small-qr" />
            </div>
          </div>
        </div>
      </>
  );
}

export default Contact;
