import "./SocialFeed.css";

function SocialFeed() {
  return (
    <section className="social-feed-section">
      <div className="social-feed-container">
        <h2 className="social-feed-title">Stay Connected</h2>
        <p className="social-feed-subtitle">
          Follow our latest updates, sermons, and community activities
        </p>

        <div className="social-feed-grid">
          {/* Facebook Feed */}
          <div className="social-feed-card">
            <div className="social-feed-header">
              <svg
                className="social-feed-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#1877f2"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <h3>Facebook</h3>
            </div>
            <div className="social-feed-embed">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61553567229644&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="340"
                height="500"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Facebook Page Feed"
              ></iframe>
            </div>
            <a
              href="https://www.facebook.com/profile.php?id=61553567229644"
              target="_blank"
              rel="noopener noreferrer"
              className="social-feed-link"
            >
              Visit our Facebook Page →
            </a>
          </div>

          {/* YouTube Feed */}
          <div className="social-feed-card">
            <div className="social-feed-header">
              <svg
                className="social-feed-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#ff0000"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <h3>YouTube</h3>
            </div>
            <div className="social-feed-embed youtube-cta">
              <a
                href="https://www.youtube.com/@HopeInChristCityChurch"
                target="_blank"
                rel="noopener noreferrer"
                className="youtube-cta-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  fill="#ff0000"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <h4>Watch Our Latest Sermons</h4>
                <p>Click here to view our latest messages, worship services, and Bible teachings</p>
                <span className="youtube-cta-button">
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                  </svg>
                  Watch Now
                </span>
              </a>
            </div>
            <a
              href="https://www.youtube.com/@HopeInChristCityChurch"
              target="_blank"
              rel="noopener noreferrer"
              className="social-feed-link"
            >
              Visit our YouTube Channel →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialFeed;
