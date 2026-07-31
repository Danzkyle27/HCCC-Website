import { Helmet } from "react-helmet-async";
import { 
  FullScreenSection, 
  BoldText, 
  PinnedSection,
  LuxuryCard,
  HorizontalScroll 
} from "../components/luxury";
import { GradientText, PremiumButton, TypewriterText } from "../components/premium";
import SectionDivider from "../components/enhancements/SectionDivider";
import bg from "../assets/bg.jpg";
import "./LuxuryShowcase.css";

function LuxuryShowcase() {
  return (
    <>
      <Helmet>
        <title>Our Story - Hope in Christ City Church</title>
        <meta name="description" content="Discover the journey and mission of Hope in Christ City Church" />
      </Helmet>

      {/* Full-Screen Hero */}
      <FullScreenSection background={bg} overlay={true}>
        <BoldText size="xlarge" align="center" className="luxury-hero-text">
          {`Our Story
Begins Here`}
        </BoldText>
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <TypewriterText 
            sequences={[
              'Founded in Faith',
              2000,
              'Built on Love',
              2000,
              'Growing in Grace',
              2000
            ]}
            speed={50}
            className="typewriter-subtitle"
          />
        </div>
      </FullScreenSection>

      <SectionDivider variant="wave" />

      {/* Content Section */}
      <section style={{ padding: '120px 20px', background: '#fefae0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <BoldText size="large" align="center">
            {`A Church
Built on Faith`}
          </BoldText>
          <p style={{ 
            textAlign: 'center', 
            fontSize: '20px', 
            lineHeight: '1.8', 
            color: '#5d7b8f',
            maxWidth: '800px',
            margin: '40px auto 0'
          }}>
            Since August 6, 2023, Hope in Christ City Church has been a beacon of light in Malabon City.
            We are more than a building—we are a family united in faith, hope, and love.
          </p>
        </div>
      </section>

      {/* Pinned Storytelling Section */}
      <PinnedSection background={bg}>
        <BoldText size="xlarge">
          {`Our Mission
Transform Lives
Through Christ`}
        </BoldText>
        <p style={{ 
          fontSize: '24px', 
          lineHeight: '1.6', 
          marginTop: '40px',
          color: 'rgba(255,255,255,0.9)'
        }}>
          We believe every person deserves to experience the transforming power of God's love.
        </p>
      </PinnedSection>

      <SectionDivider variant="curve" />

      {/* Ministries Horizontal Scroll */}
      <section style={{ padding: '120px 0', background: '#fefae0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 60px' }}>
          <BoldText size="medium">
            <GradientText>Our Ministries</GradientText>
          </BoldText>
          <p style={{ fontSize: '18px', color: '#5d7b8f', marginTop: '20px', marginBottom: '60px' }}>
            Serving God and community through diverse ministries
          </p>
          
          <HorizontalScroll speed={1}>
            <div style={{ width: '400px' }}>
              <LuxuryCard
                title="Worship Services"
                description="Join us every Sunday at 10:00 AM for powerful worship and biblical teaching."
                link="/programs/sunday-service"
                linkText="Join Us"
              />
            </div>
            <div style={{ width: '400px' }}>
              <LuxuryCard
                title="Bible Study"
                description="Grow deeper in God's Word through our 4 weekly Bible study groups."
                link="/programs/bible-study"
                linkText="Find a Group"
              />
            </div>
            <div style={{ width: '400px' }}>
              <LuxuryCard
                title="Community Outreach"
                description="Making a difference through compassion and service in Jesus' name."
                link="/ministries"
                linkText="Get Involved"
              />
            </div>
            <div style={{ width: '400px' }}>
              <LuxuryCard
                title="Youth Ministry"
                description="Empowering the next generation to live boldly for Christ."
                link="/ministries/youth"
                linkText="Learn More"
              />
            </div>
          </HorizontalScroll>
        </div>
      </section>

      <SectionDivider variant="wave" animated={true} />

      {/* Final CTA */}
      <FullScreenSection background={bg} overlay={true}>
        <BoldText size="xlarge" align="center" className="gradient">
          {`Join Our
Family Today`}
        </BoldText>
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <PremiumButton variant="primary" size="large">
            Visit Us This Sunday
          </PremiumButton>
        </div>
      </FullScreenSection>
    </>
  );
}

export default LuxuryShowcase;
