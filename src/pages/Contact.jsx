import "./Contact.css";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { scrollToTop } from "../components/SmoothScroll";
import fbQr from "../assets/fbqr.png";
import emailQr from "../assets/emailqr.png";
import viberQr from "../assets/viberqr.png";
import ytQr from "../assets/ytqr.png";
import bgImage from "../assets/contact.png";
import mapQr from "../assets/mapqr.png";
import { GradientText, PremiumButton } from "../components/premium";
import { BoldText } from "../components/luxury";
import SectionDivider from "../components/enhancements/SectionDivider";
import RevealOnScroll from "../components/RevealOnScroll";
import AnimatedCard from "../components/AnimatedCard";

function Contact() {
  const [enlargedQR, setEnlargedQR] = useState(null);

  const openQR = (qrImage) => {
    // Scroll to top first, then open modal after Lenis finishes snapping
    scrollToTop();
    setTimeout(() => {
      setEnlargedQR(qrImage);
      const scrollProgress = document.querySelector('.scroll-progress-container');
      if (scrollProgress) scrollProgress.style.display = 'none';
    }, 80);
  };

  const closeQR = () => {
    setEnlargedQR(null);
    const scrollProgress = document.querySelector('.scroll-progress-container');
    if (scrollProgress) scrollProgress.style.display = 'block';
  };

  const contactMethods = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="#0099ff" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.17.16.14.26.34.26.55l.05 1.72a.5.5 0 0 0 .7.44l1.92-.85c.17-.07.35-.08.52-.04A11 11 0 0 0 12 21.4c5.64 0 10-4.13 10-9.7S17.64 2 12 2zm5.84 7.63-2.94 4.65c-.47.74-1.46.92-2.14.4l-2.34-1.75a.6.6 0 0 0-.72 0l-3.16 2.4c-.42.32-.97-.17-.69-.62l2.94-4.65c.47-.74 1.46-.92 2.14-.4l2.34 1.75a.6.6 0 0 0 .72 0l3.16-2.4c.42-.32.97.17.69.62z"/>
        </svg>
      ),
      text: 'm.me/HopeInChristCityChurch',
      qr: fbQr,
      label: 'Facebook Messenger'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#ea4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="22,6 12,13 2,6" stroke="#ea4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      text: 'inquiries@hopeinchristcitychurch.org',
      qr: emailQr,
      label: 'Email'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="#34c759" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      ),
      text: '09185468892',
      qr: viberQr,
      label: 'Phone/Viber'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="#ff0000" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      text: 'youtube.com/@HopeInChristCityChurch',
      qr: ytQr,
      label: 'YouTube'
    }
  ];

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

      {/* Hero Section */}
      <section className="contact-hero-section" style={{ 
        padding: '120px 20px 80px',
        background: `
          linear-gradient(rgba(40, 65, 80, 0.75), rgba(30, 55, 70, 0.88)),
          url(${bgImage})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
          <RevealOnScroll variant="fade-down">
            <BoldText size="xlarge" align="center" className="luxury-hero-text">
              {`Let's Connect
Get In Touch`}
            </BoldText>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-up" delay={0.2}>
            <p style={{ 
              fontSize: '22px', 
              color: 'rgba(255,255,255,0.95)', 
              maxWidth: '800px', 
              margin: '40px auto 0',
              lineHeight: '1.8',
              textShadow: '0 2px 8px rgba(0,0,0,0.3)'
            }}>
              We'd love to hear from you! Reach out through any of our channels below.
            </p>
          </RevealOnScroll>
        </section>

        <SectionDivider variant="wave" animated={true} />

        {/* Contact Methods Section */}
        <section className="contact-methods-section" style={{
          padding: '120px 20px',
          background: `
            radial-gradient(ellipse at 10% 20%, rgba(93, 123, 143, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse at 90% 80%, rgba(192, 217, 221, 0.18) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(127, 166, 181, 0.08) 0%, transparent 55%),
            linear-gradient(155deg, #fefae0 0%, #f0f8fa 35%, #fefae0 65%, #e8f5f8 100%)
          `
        }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <RevealOnScroll variant="fade-right">
              <h2 style={{ 
                fontSize: 'clamp(32px, 5vw, 48px)', 
                color: '#5d7b8f',
                marginBottom: '60px',
                fontWeight: '900',
                textAlign: 'center'
              }}>
                <GradientText animate={true}>Contact Methods</GradientText>
              </h2>
            </RevealOnScroll>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '30px',
              marginBottom: '60px'
            }}>
              {contactMethods.map((method, index) => (
                <RevealOnScroll key={index} variant="fade-up" delay={index * 0.1}>
                  <AnimatedCard>
                    <div style={{ textAlign: 'center', padding: '20px' }}>
                      <div style={{ 
                        width: '64px',
                        height: '64px',
                        margin: '0 auto 20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(255,255,255,0.9)',
                        borderRadius: '50%',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                      }}>
                        {method.icon}
                      </div>
                      <h3 style={{ 
                        fontSize: '20px', 
                        color: '#5d7b8f', 
                        marginBottom: '15px',
                        fontWeight: '700'
                      }}>
                        {method.label}
                      </h3>
                      <p style={{ 
                        fontSize: '16px', 
                        color: '#2c3e50', 
                        marginBottom: '20px',
                        wordBreak: 'break-word'
                      }}>
                        {method.text}
                      </p>
                      <img 
                        src={method.qr} 
                        alt={`${method.label} QR Code`}
                        onClick={() => openQR(method.qr)}
                        style={{ 
                          width: '120px', 
                          height: '120px', 
                          cursor: 'pointer',
                          borderRadius: '8px',
                          transition: 'transform 0.3s ease',
                          border: '2px solid #5d7b8f'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      />
                    </div>
                  </AnimatedCard>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider variant="curve" />

        {/* Location Section */}
        <section className="contact-location-section" style={{ 
          padding: '120px 20px',
          background: `
            radial-gradient(ellipse at 15% 25%, rgba(254, 250, 224, 0.18) 0%, transparent 55%),
            radial-gradient(ellipse at 85% 75%, rgba(192, 217, 221, 0.2) 0%, transparent 50%),
            linear-gradient(145deg, #3d5a6b 0%, #5d7b8f 28%, #7fa6b5 55%, #9ec0ce 78%, #c0d9dd 100%)
          `,
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <RevealOnScroll variant="fade-down">
              <BoldText size="large" align="center">
                {`Visit Us
In Person`}
              </BoldText>
            </RevealOnScroll>

            <RevealOnScroll variant="fade-up" delay={0.2}>
              <div className="contact-location-card" style={{ 
                background: 'rgba(254, 250, 224, 0.95)',
                borderRadius: '24px',
                padding: '60px 40px',
                marginTop: '60px',
                textAlign: 'center'
              }}>
                <h3 style={{ 
                  fontSize: 'clamp(24px, 3vw, 32px)', 
                  color: '#5d7b8f',
                  marginBottom: '30px',
                  fontWeight: '900'
                }}>
                  Our Location
                </h3>
                <p style={{ 
                  fontSize: 'clamp(18px, 2.5vw, 22px)', 
                  color: '#2c3e50',
                  lineHeight: '1.8',
                  marginBottom: '40px'
                }}>
                  Rooms 10 to 12, 2/F Nazirites Christian Academy Bldg.,<br />
                  25 B. Rivera St., Tinajeros, Malabon City, 1474 Metro Manila
                </p>

                {/* Map */}
                <div className="map-responsive" style={{ 
                  marginBottom: '30px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.73519635711!2d120.96695757510747!3d14.670963485823751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b50076465b0f%3A0xcfb8273c4d8b9bd8!2sHope%20in%20Christ%20City%20Church!5e0!3m2!1sen!2sph!4v1769955911101!5m2!1sen!2sph"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hope in Christ City Church Map"
                  ></iframe>
                </div>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '30px' }}>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Hope+in+Christ+City+Church,+25+B.+Rivera+St,+Tinajeros,+Malabon,+Metro+Manila"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <PremiumButton variant="primary" size="large">
                      🧭 Get Directions
                    </PremiumButton>
                  </a>
                </div>

                {/* Location QR */}
                <img 
                  src={mapQr} 
                  alt="Location QR Code"
                  onClick={() => openQR(mapQr)}
                  style={{ 
                    width: '150px', 
                    height: '150px', 
                    cursor: 'pointer',
                    borderRadius: '12px',
                    border: '3px solid #5d7b8f',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <p style={{ 
                  marginTop: '15px', 
                  fontSize: '14px', 
                  color: '#5d7b8f',
                  fontWeight: '600'
                }}>
                  Scan for location
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </>
  );
}

export default Contact;
