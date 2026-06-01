import "./Contact.css";
import { useRef, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
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
  const secondSectionRef = useRef(null);
  const [enlargedQR, setEnlargedQR] = useState(null);
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (leftSectionRef.current) observer.observe(leftSectionRef.current);
    if (rightSectionRef.current) observer.observe(rightSectionRef.current);

    return () => {
      if (leftSectionRef.current) observer.unobserve(leftSectionRef.current);
      if (rightSectionRef.current) observer.unobserve(rightSectionRef.current);
    };
  }, []);

  const scrollToNextSection = () => {
    secondSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const openQR = (qrImage) => {
    setEnlargedQR(qrImage);
    // Hide scroll progress bar
    const scrollProgress = document.querySelector('.scroll-progress-container');
    if (scrollProgress) scrollProgress.style.display = 'none';
  };

  const closeQR = () => {
    setEnlargedQR(null);
    // Show scroll progress bar again
    const scrollProgress = document.querySelector('.scroll-progress-container');
    if (scrollProgress) scrollProgress.style.display = 'block';
  };

  return (
      <>
        <Helmet>
          <title>Contact Us - Hope in Christ City Church</title>
          <meta name="description" content="Get in touch with Hope in Christ City Church. Find our location, contact information, and visit us in Malabon City, Philippines." />
        </Helmet>

        {/* QR Code Modal */}
        {enlargedQR && (
          <div className="qr-modal" onClick={closeQR}>
            <div className="qr-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="qr-modal-close" onClick={closeQR}>&times;</button>
              <img src={enlargedQR} alt="Enlarged QR Code" />
            </div>
          </div>
        )}
        {/* First Section */}
        <div
            className="contact-page contact-section-first geometric-pattern"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="contact-overlay">
            {/* Left Column */}
            <div className="contact-left slide-in-left" ref={leftSectionRef}>
              <h1 className="contact-main">CONNECT</h1>
              <h3 className="contact-sub">WITH US</h3>
              <hr className="contact-line" />
              <p className="contact-desc">
                If you are interested, you may follow and contact us through the following:
              </p>
            </div>

            {/* Right Column */}
            <div className="contact-right slide-in-right" ref={rightSectionRef}>
              <div className="contact-links">
                <div className="contact-link">
                  <img src={fbIcon} alt="FB Messenger" className="contact-icon" />
                  <span>m.me/HopeInChristCityChurch</span>
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
                <img src={fbQr} alt="Facebook QR Code" onClick={() => openQR(fbQr)} />
                <img src={emailQr} alt="Email QR Code" onClick={() => openQR(emailQr)} />
                <img src={viberQr} alt="Viber QR Code" onClick={() => openQR(viberQr)} />
                <img src={ytQr} alt="YouTube QR Code" onClick={() => openQR(ytQr)} />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="scroll-indicator" onClick={scrollToNextSection} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && scrollToNextSection()}>
            <div className="scroll-arrow">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p className="scroll-text">Scroll to see our location</p>
          </div>
        </div>

        {/* Second Section */}
        <div
            ref={secondSectionRef}
            className="contact-page geometric-pattern"
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

              {/* Map Actions */}
              <div className="map-actions">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Hope+in+Christ+City+Church,+25+B.+Rivera+St,+Tinajeros,+Malabon,+Metro+Manila"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-directions-btn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                  </svg>
                  Get Directions
                </a>
              </div>

              {/* QR Code */}
              <img src={mapQr} alt="Location QR Code" className="contact-small-qr" onClick={() => openQR(mapQr)} />
            </div>
          </div>
        </div>
      </>
  );
}

export default Contact;
