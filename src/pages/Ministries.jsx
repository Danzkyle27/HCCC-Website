import { Helmet } from "react-helmet-async";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Ministries.css";

function Ministries() {
  const ministriesRef = useRef([]);

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

    ministriesRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      ministriesRef.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

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

      <div className="ministries-page">
        {/* Hero Section */}
        <section className="ministries-hero">
          <div className="ministries-hero-content">
            <h1 className="ministries-hero-title">Our Ministries</h1>
            <p className="ministries-hero-subtitle">
              Serving God and our community through diverse ministries
            </p>
          </div>
        </section>

        {/* Ministries Grid */}
        <section className="ministries-section">
          <div className="ministries-container">
            <div className="ministries-grid">
              {ministries.map((ministry, index) => (
                <Link
                  to={`/ministries/${ministry.slug}`}
                  key={ministry.id}
                  ref={(el) => (ministriesRef.current[index] = el)}
                  className="ministry-card fade-in-section"
                  style={{ "--ministry-color": ministry.color }}
                >
                  <div className="ministry-icon">{ministry.icon}</div>
                  <h3 className="ministry-name">{ministry.name}</h3>
                  <p className="ministry-description">{ministry.description}</p>
                  <span className="ministry-learn-more">Learn More →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="ministries-cta">
          <div className="ministries-cta-content">
            <h2>Get Involved</h2>
            <p>Discover your calling and serve with us. Contact us to learn more about joining a ministry.</p>
            <Link to="/contact" className="ministries-cta-button">Contact Us</Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Ministries;
