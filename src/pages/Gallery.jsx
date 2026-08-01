import { Helmet } from "react-helmet-async";
import "./Gallery.css";
import PinnedHorizontalScroll from "../components/PinnedHorizontalScroll";

import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.jpg";
import img4 from "../assets/gallery/4.jpg";
import img5 from "../assets/gallery/5.jpg";
import img6 from "../assets/gallery/6.jpg";
import img7 from "../assets/gallery/7.jpg";
import img8 from "../assets/gallery/8.jpg";
import img9 from "../assets/gallery/9.jpg";
import img10 from "../assets/gallery/10.jpg";
import img11 from "../assets/gallery/11.jpg";
import img12 from "../assets/gallery/12.jpg";
import img13 from "../assets/gallery/13.jpg";
import img14 from "../assets/gallery/14.jpg";
import img15 from "../assets/gallery/15.jpg";
import anniv1 from "../assets/gallery/anniv_1.png";
import anniv2 from "../assets/gallery/anniv_2.jpg";
import anniv3 from "../assets/gallery/anniv_3.jpg";

const photos = [
  { src: img3,  caption: "Serving the Community",       sub: "Outreach" },
  { src: img6,  caption: "United in Prayer",             sub: "Prayer Meeting" },
  { src: img4,  caption: "Discipleship in Action",       sub: "Training" },
  { src: img5,  caption: "Fellowship & Joy",             sub: "Church Life" },
  { src: img1,  caption: "Water Baptism",                sub: "Commitment" },
  { src: img2,  caption: "Growing in the Word",          sub: "Fellowship" },
  { src: img7,  caption: "A Family of Believers",        sub: "Hope in Christ City Church" },
  { src: img8,  caption: "Studying Together",            sub: "Bible Study" },
  { src: img9,  caption: "Digging into Scripture",       sub: "Bible Study" },
  { src: img10, caption: "Rooted in the Word",           sub: "Bible Study" },
  { src: img11, caption: "Sunday Morning Worship",       sub: "Sunday Service" },
  { src: img12, caption: "Learning About Jesus",         sub: "Sunday School" },
  { src: img13, caption: "Iron Sharpens Iron",           sub: "Bible Study" },
  { src: img14, caption: "Growing in Grace",             sub: "Bible Study" },
  { src: img15, caption: "Public Declaration of Faith",  sub: "Water Baptism" },
];

const anniversaries = [
  {
    src: anniv1,
    year: "1st Anniversary",
    caption: "A Year of Hope",
    sub: "August 11, 2024 — Celebrating one year of faith, growth, and community.",
    featured: false,
  },
  {
    src: anniv2,
    year: "2nd Anniversary",
    caption: "Two Years of Grace",
    sub: "August 3, 2025 — Two years of God's faithfulness and abundant blessings.",
    featured: false,
  },
  {
    src: anniv3,
    year: "3rd Anniversary",
    caption: "Three Years Strong",
    sub: "August 9, 2026 — Join us as we celebrate three years of Hope in Christ City Church. Our biggest milestone yet.",
    featured: true,
  },
];

function Gallery() {
  return (
    <>
      <Helmet>
        <title>Gallery - Hope in Christ City Church</title>
        <meta name="description" content="Explore moments from Hope in Christ City Church — worship, fellowship, outreach, and our anniversary celebrations." />
      </Helmet>

      {/* ── HERO ── */}
      <section className="gallery-hero">
        <div className="gallery-hero-inner">
          <div className="gallery-hero-eyebrow">HOPE IN CHRIST CITY CHURCH</div>
          <h1 className="gallery-hero-title">Our Story<br />in Photos</h1>
          <p className="gallery-hero-sub">
            Moments of worship, fellowship, and faith — captured for eternity.
          </p>
        </div>
        <div className="gallery-hero-scroll-hint">
          <span className="gallery-hero-scroll-arrow" />
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* ── SECTION 1 · PHOTO GALLERY (pinned horizontal scroll) ── */}
      <div className="gallery-section-wrap gallery-section-dark">
        <PinnedHorizontalScroll
          label="CHURCH LIFE"
          title={`Moments\nof Faith`}
          speed={1}
        >
          {photos.map((photo, i) => (
            <div className="gallery-photo-panel" key={i}>
              <div className="gallery-photo-img-wrap">
                <img src={photo.src} alt={photo.caption} loading="lazy" />
              </div>
              <div className="gallery-photo-caption">
                <div className="gallery-photo-index">
                  {String(i + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
                </div>
                <div className="gallery-photo-title">{photo.caption}</div>
                <div className="gallery-photo-sub">{photo.sub}</div>
              </div>
            </div>
          ))}
        </PinnedHorizontalScroll>
      </div>

      {/* ── DIVIDER ── */}
      <div className="gallery-divider">
        <div className="gallery-divider-line" />
        <div className="gallery-divider-label">ANNIVERSARIES</div>
        <div className="gallery-divider-line" />
      </div>

      {/* ── SECTION 2 · ANNIVERSARIES (pinned horizontal scroll) ── */}
      <div className="gallery-section-wrap gallery-section-light">
        <PinnedHorizontalScroll
          label="MILESTONES"
          title={`Anniversary\nCelebrations`}
          speed={0.85}
        >
          {anniversaries.map((anniv, i) => (
            <div
              className={`gallery-anniv-panel ${anniv.featured ? "gallery-anniv-panel--featured" : ""}`}
              key={i}
            >
              {anniv.featured && (
                <div className="gallery-anniv-badge">⭐ UPCOMING EVENT</div>
              )}
              <div className="gallery-anniv-img-wrap">
                <img src={anniv.src} alt={anniv.year} loading="lazy" />
              </div>
              <div className="gallery-anniv-caption">
                <div className="gallery-anniv-year">{anniv.year}</div>
                <div className="gallery-anniv-title">{anniv.caption}</div>
                <p className="gallery-anniv-sub">{anniv.sub}</p>
                {anniv.featured && (
                  <div className="gallery-anniv-cta">
                    Mark your calendar — August 9, 2026
                  </div>
                )}
              </div>
            </div>
          ))}
        </PinnedHorizontalScroll>
      </div>
    </>
  );
}

export default Gallery;
