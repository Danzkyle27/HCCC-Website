import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./Ministries.css";
import { GradientText, PremiumButton } from "../components/premium";
import { BoldText } from "../components/luxury";
import SectionDivider from "../components/enhancements/SectionDivider";
import RevealOnScroll from "../components/RevealOnScroll";

function Ministries() {
  const ministries = [
    {
      id: 1,
      name: "Pastoral Ministry",
      icon: "✝️",
      description: "Providing spiritual leadership and guidance to our congregation.",
      fullDescription: "Providing spiritual leadership, guidance, and pastoral care to our congregation through preaching, teaching, and counseling.",
      color: "#5d7b8f",
      slug: "pastoral",
      heads: [
        { name: "Ptr. Jay Valenzuela", image: "pastoral.jpg" }
      ]
    },
    {
      id: 2,
      name: "Worship Ministry",
      icon: "🎵",
      description: "Leading the congregation in true worship through music.",
      fullDescription: "Leading the congregation in true worship through music and song to glorify God.",
      color: "#7fa6b5",
      slug: "worship",
      heads: [
        { name: "Bro. Jess Rocero", image: "worship.jpg" }
      ]
    },
    {
      id: 3,
      name: "Media and Technology Ministry",
      icon: "🎬",
      description: "Managing media production and technology for church services.",
      fullDescription: "Managing media production, live streaming, sound, lighting, and technology infrastructure to enhance worship experiences and extend our reach through digital platforms.",
      color: "#c0d9dd",
      slug: "media-technology",
      heads: [
        { name: "Bro. Jherome Dela Cueva", image: "mediatech.jpg" }
      ]
    },
    {
      id: 4,
      name: "Logistics Ministry",
      icon: "📋",
      description: "Coordinating church events and activities for smooth operations.",
      fullDescription: "Coordinating and organizing church events, services, and activities to ensure smooth operations.",
      color: "#5d7b8f",
      slug: "logistics",
      heads: [
        { name: "Bro. Jomar Baybayon", image: "logistics.jpg" }
      ]
    },
    {
      id: 5,
      name: "Finance Ministry",
      icon: "💰",
      description: "Managing church finances with integrity and transparency.",
      fullDescription: "Managing church finances with integrity, transparency, and stewardship to support God's work.",
      color: "#5d7b8f",
      slug: "finance",
      heads: [
        { name: "Sis. Malou Monterola", image: "finance1.jpg" },
        { name: "Sis. Dianne Rocero", image: "finance2.jpg" }
      ]
    },
    {
      id: 6,
      name: "Maintenance Ministry",
      icon: "🔧",
      description: "Maintaining church facilities for a welcoming environment.",
      fullDescription: "Maintaining and caring for church facilities to provide a welcoming and safe environment for worship.",
      color: "#7fa6b5",
      slug: "maintenance",
      heads: [
        { name: "Sis. Tina Domingo", image: "maintenance.jpg" }
      ]
    },
    {
      id: 7,
      name: "Men's Ministry",
      icon: "👨",
      description: "Equipping men to be godly leaders in their families and community.",
      fullDescription: "Equipping and encouraging men to be godly leaders in their families, church, and community.",
      color: "#c0d9dd",
      slug: "mens",
      heads: [
        { name: "Bro. Jess Rocero", image: "men.jpg" }
      ]
    },
    {
      id: 8,
      name: "Women's Ministry",
      icon: "👩",
      description: "Encouraging women to grow in faith and serve with their gifts.",
      fullDescription: "Encouraging women to grow in faith, build relationships, and serve God with their unique gifts.",
      color: "#5d7b8f",
      slug: "womens",
      heads: [
        { name: "Sis. Sinia Valenzuela", image: "women.jpg" }
      ]
    },
    {
      id: 9,
      name: "Young Professionals Ministry",
      icon: "💼",
      description: "Supporting young professionals in balancing career and faith.",
      fullDescription: "Supporting young professionals in balancing career, faith, and life through fellowship and mentorship.",
      color: "#7fa6b5",
      slug: "young-professionals",
      heads: [
        { name: "Bro. Kyle Valenzuela", image: "youngpro.jpg" }
      ]
    },
    {
      id: 10,
      name: "Youth Ministry",
      icon: "🎓",
      description: "Guiding teenagers to develop a strong foundation in Christ.",
      fullDescription: "Guiding teenagers to develop a strong foundation in Christ through discipleship and community.",
      color: "#c0d9dd",
      slug: "youth",
      heads: [
        { name: "Bro. Kyle Valenzuela", image: "youth.jpg" },
        { name: "Bro. Evan Valenzuela", image: "youth2.jpg" }
      ]
    },
    {
      id: 11,
      name: "Children's Ministry",
      icon: "👶",
      description: "Teaching children about God's love through fun experiences.",
      fullDescription: "Teaching children about God's love through age-appropriate lessons, activities, and fun experiences.",
      color: "#5d7b8f",
      slug: "childrens",
      heads: [
        { name: "Sis. Sinia Valenzuela", image: "children.jpg" }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Ministries - Hope in Christ City Church</title>
        <meta name="description" content="Discover the various ministries at Hope in Christ City Church. From pastoral care to children's ministry, find ways to serve and grow in faith." />
        <meta name="keywords" content="church ministries, pastoral ministry, worship ministry, youth ministry, children's ministry, Malabon church" />
        <meta property="og:title" content="Ministries - Hope in Christ City Church" />
        <meta property="og:description" content="Discover the various ministries at Hope in Christ City Church." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://hopeinchristcitychurch.org/ministries" />
      </Helmet>

      {/* Hero Section */}
      <section className="ministries-hero-section" style={{ 
        padding: '120px 20px 80px',
        background: `
          radial-gradient(ellipse at 15% 40%, rgba(254, 250, 224, 0.2) 0%, transparent 55%),
          radial-gradient(ellipse at 85% 70%, rgba(192, 217, 221, 0.15) 0%, transparent 50%),
          linear-gradient(145deg, #4a6b7c 0%, #5d7b8f 25%, #7fa6b5 55%, #5d7b8f 80%, #3d5a6b 100%)
        `,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <RevealOnScroll variant="fade-down">
          <BoldText size="xlarge" align="center" className="luxury-hero-text">
            {`Our Ministries
Serve and Grow
Together`}
          </BoldText>
        </RevealOnScroll>
        <RevealOnScroll variant="fade-up" delay={0.2}>
          <p style={{ 
            fontSize: '22px', 
            color: 'rgba(255,255,255,0.95)', 
            maxWidth: '900px', 
            margin: '40px auto 0',
            lineHeight: '1.8',
            textShadow: '0 2px 8px rgba(0,0,0,0.3)'
          }}>
            Discover your calling and make a difference in our community through 
            diverse ministries that serve God and His people.
          </p>
        </RevealOnScroll>
      </section>

      <SectionDivider variant="wave" animated={true} />

      {/* Ministries Grid */}
      <section className="ministries-section ministries-grid-section" style={{ 
        padding: '120px 20px',
        background: `
          radial-gradient(ellipse at 95% 5%, rgba(93, 123, 143, 0.1) 0%, transparent 45%),
          radial-gradient(ellipse at 5% 95%, rgba(192, 217, 221, 0.15) 0%, transparent 45%),
          radial-gradient(ellipse at 50% 50%, rgba(127, 166, 181, 0.07) 0%, transparent 60%),
          linear-gradient(160deg, #eaf6fc 0%, #f5faf7 30%, #fefae0 60%, #eaf6fc 100%)
        `
      }}>
        <div className="ministries-container">
          <RevealOnScroll variant="fade-down">
            <h2 style={{ 
              fontSize: 'clamp(32px, 5vw, 48px)', 
              color: '#5d7b8f',
              marginBottom: '60px',
              fontWeight: '900',
              textAlign: 'center'
            }}>
              <GradientText animate={true}>All Ministries</GradientText>
            </h2>
          </RevealOnScroll>

          <div className="ministries-grid">
            {ministries.map((ministry, index) => (
              <RevealOnScroll key={ministry.id} variant="fade-up" delay={index * 0.05}>
                <Link
                  to={`/ministries/${ministry.slug}`}
                  className="ministry-card"
                  style={{ "--ministry-color": ministry.color }}
                >
                  <div className="ministry-icon">{ministry.icon}</div>
                  <h3 className="ministry-name">{ministry.name}</h3>
                  <p className="ministry-description">{ministry.description}</p>
                  <div style={{ marginTop: '20px' }}>
                    <PremiumButton variant="outline" size="small">
                      Learn More →
                    </PremiumButton>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" animated={true} />

      {/* Call to Action */}
      <section className="ministries-cta-section" style={{ 
        padding: '120px 20px',
        background: `
          radial-gradient(ellipse at 20% 30%, rgba(254, 250, 224, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 70%, rgba(192, 217, 221, 0.2) 0%, transparent 50%),
          linear-gradient(145deg, #3d5a6b 0%, #5d7b8f 30%, #7fa6b5 60%, #a8ccda 85%, #c0d9dd 100%)
        `,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <RevealOnScroll variant="fade-down">
          <BoldText size="medium" align="center">
            {`Get Involved
Make an Impact`}
          </BoldText>
        </RevealOnScroll>
        <RevealOnScroll variant="fade-up" delay={0.2}>
          <p style={{ 
            fontSize: 'clamp(18px, 2.5vw, 22px)', 
            color: 'rgba(255,255,255,0.95)',
            maxWidth: '800px',
            margin: '40px auto',
            lineHeight: '1.8'
          }}>
            Discover your calling and serve with us. Contact us today to learn more 
            about joining a ministry and making a difference.
          </p>
        </RevealOnScroll>
        <RevealOnScroll variant="scale" delay={0.4}>
          <Link to="/contact">
            <PremiumButton variant="primary" size="large">
              Contact Us Today
            </PremiumButton>
          </Link>
        </RevealOnScroll>
      </section>
    </>
  );
}

export default Ministries;
