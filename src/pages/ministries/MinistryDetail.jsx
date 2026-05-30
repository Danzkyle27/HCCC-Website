import { Helmet } from "react-helmet-async";
import { useParams, Link, Navigate } from "react-router-dom";
import "./MinistryDetail.css";

// Import all ministry head images
import pastoralImg from "../../assets/ministry-heads/pastoral.jpg";
import worshipImg from "../../assets/ministry-heads/worship.jpg";
import logisticsImg from "../../assets/ministry-heads/logistics.jpg";
import finance1Img from "../../assets/ministry-heads/finance1.jpg";
import finance2Img from "../../assets/ministry-heads/finance2.jpg";
import maintenanceImg from "../../assets/ministry-heads/maintenance.jpg";
import menImg from "../../assets/ministry-heads/men.jpg";
import womenImg from "../../assets/ministry-heads/women.jpg";
import youngproImg from "../../assets/ministry-heads/youngpro.jpg";
import youthImg from "../../assets/ministry-heads/youth.jpg";
import youth2Img from "../../assets/ministry-heads/youth2.jpg";
import childrenImg from "../../assets/ministry-heads/children.jpg";
import mediatechImg from "../../assets/ministry-heads/mediatech.jpg";

const imageMap = {
  "pastoral.jpg": pastoralImg,
  "worship.jpg": worshipImg,
  "logistics.jpg": logisticsImg,
  "finance1.jpg": finance1Img,
  "finance2.jpg": finance2Img,
  "maintenance.jpg": maintenanceImg,
  "men.jpg": menImg,
  "women.jpg": womenImg,
  "youngpro.jpg": youngproImg,
  "youth.jpg": youthImg,
  "youth2.jpg": youth2Img,
  "children.jpg": childrenImg,
  "mediatech.jpg": mediatechImg
};

const ministriesData = [
  {
    id: 1,
    name: "Pastoral Ministry",
    icon: "✝️",
    description: "Providing spiritual leadership, guidance, and pastoral care to our congregation through preaching, teaching, and counseling.",
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
    description: "Leading the congregation in true worship through music and song to glorify God.",
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
    description: "Managing media production, live streaming, sound, lighting, and technology infrastructure to enhance worship experiences and extend our reach through digital platforms.",
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
    description: "Coordinating and organizing church events, services, and activities to ensure smooth operations.",
    color: "#5d7b8f",
    slug: "logistics",
    heads: [
      { name: "Bro. Jomar Baybayon", image: "logistics.jpg" }
    ]
  },
  {
    id: 4,
    name: "Logistics Ministry",
    icon: "📋",
    description: "Coordinating and organizing church events, services, and activities to ensure smooth operations.",
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
    description: "Managing church finances with integrity, transparency, and stewardship to support God's work.",
    color: "#7fa6b5",
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
    description: "Maintaining and caring for church facilities to provide a welcoming and safe environment for worship.",
    color: "#c0d9dd",
    slug: "maintenance",
    heads: [
      { name: "Sis. Tina Domingo", image: "maintenance.jpg" }
    ]
  },
  {
    id: 7,
    name: "Men's Ministry",
    icon: "👨",
    description: "Equipping and encouraging men to be godly leaders in their families, church, and community.",
    color: "#5d7b8f",
    slug: "mens",
    heads: [
      { name: "Bro. Jess Rocero", image: "men.jpg" }
    ]
  },
  {
    id: 8,
    name: "Women's Ministry",
    icon: "👩",
    description: "Encouraging women to grow in faith, build relationships, and serve God with their unique gifts.",
    color: "#7fa6b5",
    slug: "womens",
    heads: [
      { name: "Sis. Sinia Valenzuela", image: "women.jpg" }
    ]
  },
  {
    id: 9,
    name: "Young Professionals Ministry",
    icon: "💼",
    description: "Supporting young professionals in balancing career, faith, and life through fellowship and mentorship.",
    color: "#c0d9dd",
    slug: "young-professionals",
    heads: [
      { name: "Bro. Kyle Valenzuela", image: "youngpro.jpg" }
    ]
  },
  {
    id: 10,
    name: "Youth Ministry",
    icon: "🎓",
    description: "Guiding teenagers to develop a strong foundation in Christ through discipleship and community.",
    color: "#5d7b8f",
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
    description: "Teaching children about God's love through age-appropriate lessons, activities, and fun experiences.",
    color: "#7fa6b5",
    slug: "childrens",
    heads: [
      { name: "Sis. Sinia Valenzuela", image: "children.jpg" }
    ]
  }
];

function MinistryDetail() {
  const { slug } = useParams();
  const ministry = ministriesData.find(m => m.slug === slug);

  if (!ministry) {
    return <Navigate to="/ministries" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{ministry.name} - Hope in Christ City Church</title>
        <meta name="description" content={ministry.description} />
        <meta name="keywords" content={`${ministry.name}, church ministry, Malabon church, HCCC`} />
        <meta property="og:title" content={`${ministry.name} - Hope in Christ City Church`} />
        <meta property="og:description" content={ministry.description} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://hopeinchristcitychurch.org/ministries/${slug}`} />
      </Helmet>

      <div className="ministry-detail-page">
        {/* Upper Section - Everything Together */}
        <section 
          className="ministry-detail-upper"
          style={{ background: `linear-gradient(135deg, ${ministry.color} 0%, ${ministry.color}dd 100%)` }}
        >
          <div className="ministry-detail-upper-content">
            {/* Header with Icon and Title */}
            <div className="ministry-header">
              <div className="ministry-detail-icon">{ministry.icon}</div>
              <h1 className="ministry-detail-title">{ministry.name}</h1>
              <Link to="/ministries" className="back-to-ministries">
                ← Back to All Ministries
              </Link>
            </div>

            {/* Content Grid - Description and Leaders Side by Side */}
            <div className="ministry-content-grid">
              {/* Description */}
              <div className="ministry-detail-description">
                <h2>About This Ministry</h2>
                <p>{ministry.description}</p>
              </div>

              {/* Ministry Heads */}
              <div className="ministry-heads-section">
                <h2>Ministry {ministry.heads.length > 1 ? "Leaders" : "Leader"}</h2>
                <div className="ministry-heads-grid">
                  {ministry.heads.map((head, index) => (
                    <div key={index} className="ministry-head-card">
                      <div className="ministry-head-image-wrapper">
                        <img 
                          src={imageMap[head.image]} 
                          alt={head.name}
                          className="ministry-head-image"
                        />
                      </div>
                      <h3 className="ministry-head-name">{head.name}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Section - Get Involved CTA */}
        <section className="ministry-detail-cta-section">
          <div className="ministry-detail-cta">
            <h2>Get Involved</h2>
            <p>Interested in serving with {ministry.name}? We'd love to have you join us!</p>
            <Link to="/contact" className="ministry-cta-button">Contact Us</Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default MinistryDetail;
