import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";

function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Search data - pages and keywords
  const searchData = [
    { title: "Home", path: "/", keywords: ["home", "main", "welcome", "church"] },
    { title: "Programs", path: "/programs", keywords: ["programs", "activities", "events"] },
    { title: "Sunday Service", path: "/programs/sunday-service", keywords: ["sunday", "service", "worship", "preaching"] },
    { title: "Bible Study", path: "/programs/bible-study", keywords: ["bible", "study", "wednesday", "learning"] },
    { title: "Bible Study Groups", path: "/programs/bible-study/groups", keywords: ["bible study groups", "small groups", "panghulo", "serrano", "tinajeros", "karuhatan", "malabon", "caloocan", "valenzuela"] },
    { title: "Discipleship", path: "/programs/discipleship", keywords: ["discipleship", "training", "saturday", "growth"] },
    { title: "Sermons", path: "/sermons", keywords: ["sermons", "messages", "preaching", "videos", "teachings"] },
    { title: "How to Evangelize", path: "/soul-winning", keywords: ["soul winning", "evangelism", "salvation", "gospel", "evangelize"] },
    { title: "Ministries", path: "/ministries", keywords: ["ministries", "serve", "volunteer", "pastoral", "worship", "youth", "children"] },
    { title: "Pastoral Ministry", path: "/ministries/pastoral", keywords: ["pastoral", "pastor", "leadership", "guidance"] },
    { title: "Worship Ministry", path: "/ministries/worship", keywords: ["worship", "music", "praise", "song"] },
    { title: "Media & Technology Ministry", path: "/ministries/media-technology", keywords: ["media", "technology", "sound", "lighting", "streaming"] },
    { title: "Logistics Ministry", path: "/ministries/logistics", keywords: ["logistics", "events", "coordination", "organization"] },
    { title: "Finance Ministry", path: "/ministries/finance", keywords: ["finance", "stewardship", "budget", "money"] },
    { title: "Maintenance Ministry", path: "/ministries/maintenance", keywords: ["maintenance", "facilities", "building", "repairs"] },
    { title: "Men's Ministry", path: "/ministries/mens", keywords: ["men", "mens", "brothers", "men's ministry"] },
    { title: "Women's Ministry", path: "/ministries/womens", keywords: ["women", "womens", "sisters", "women's ministry"] },
    { title: "Young Professionals Ministry", path: "/ministries/young-professionals", keywords: ["young professionals", "yp", "career", "young adults"] },
    { title: "Youth Ministry", path: "/ministries/youth", keywords: ["youth", "teenagers", "teens", "young people"] },
    { title: "Children's Ministry", path: "/ministries/childrens", keywords: ["children", "kids", "sunday school", "children's ministry"] },
    { title: "Mission", path: "/mission", keywords: ["mission", "purpose", "goal"] },
    { title: "Vision", path: "/vision", keywords: ["vision", "future", "direction"] },
    { title: "Core Values", path: "/core-values", keywords: ["values", "principles", "beliefs"] },
    { title: "Statement of Faith", path: "/statement-of-faith", keywords: ["faith", "doctrine", "beliefs", "theology"] },
    { title: "About Us", path: "/about", keywords: ["about", "history", "pastor", "church info"] },
    { title: "Contact Us", path: "/contact", keywords: ["contact", "location", "address", "phone", "email", "map"] },
  ];

  // Handle search
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = searchData.filter((item) => {
      return (
        item.title.toLowerCase().includes(query) ||
        item.keywords.some((keyword) => keyword.includes(query))
      );
    });

    setSearchResults(results);
  }, [searchQuery]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle keyboard shortcuts (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();
        setIsOpen(true);
      }
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleResultClick = (path) => {
    navigate(path);
    setIsOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  return (
    <div className="search-component" ref={searchRef}>
      {/* Search Button */}
      <button
        className="search-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle search"
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
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
      </button>

      {/* Search Modal */}
      {isOpen && (
        <div className="search-modal">
          <div className="search-input-wrapper">
            <svg
              className="search-icon"
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
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Search pages... (Ctrl+K)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            {searchQuery && (
              <button
                className="search-clear-btn"
                onClick={() => {
                  setSearchQuery("");
                  setSearchResults([]);
                }}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="search-results">
              {searchResults.map((result) => (
                <div
                  key={result.path}
                  className="search-result-item"
                  onClick={() => handleResultClick(result.path)}
                >
                  <span className="search-result-title">{result.title}</span>
                  <span className="search-result-path">{result.path}</span>
                </div>
              ))}
            </div>
          )}

          {searchQuery && searchResults.length === 0 && (
            <div className="search-no-results">
              <p>No results found for "{searchQuery}"</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
