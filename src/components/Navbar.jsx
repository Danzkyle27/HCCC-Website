import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Search from "./Search";
import DarkModeToggle from "./DarkModeToggle";
import logo from "../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setDropdownOpen(false); 
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo - Only show when not on home page */}
        {!isHomePage && (
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="HCCC Logo" />
          </Link>
        )}

        {/* Hamburger Button */}
        <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links */}
        <ul className={`nav-list ${menuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={toggleMenu} className={isActive("/") ? "active" : ""}>HOME</Link></li>
          <li><Link to="/programs" onClick={toggleMenu} className={isActive("/programs") ? "active" : ""}>PROGRAMS</Link></li>
          <li><Link to="/ministries" onClick={toggleMenu} className={isActive("/ministries") ? "active" : ""}>MINISTRIES</Link></li>
          <li><Link to="/sermons" onClick={toggleMenu} className={isActive("/sermons") ? "active" : ""}>SERMONS</Link></li>
          <li><Link to="/soul-winning" onClick={toggleMenu} className={isActive("/soul-winning") ? "active" : ""}>HOW TO EVANGELIZE</Link></li>

          {/* Dropdown */}
          <li className={`dropdown ${dropdownOpen ? "open" : ""}`}>
            <span className="dropbtn" onClick={toggleDropdown}>
              CHURCH FOUNDATION ▾
            </span>
            <ul className="dropdown-content">
              <li><Link to="/mission" onClick={toggleMenu}>Mission</Link></li>
              <li><Link to="/vision" onClick={toggleMenu}>Vision</Link></li>
              <li><Link to="/core-values" onClick={toggleMenu}>Core Values</Link></li>
              <li><Link to="/statement-of-faith" onClick={toggleMenu}>Statement of Faith</Link></li>
            </ul>
          </li>

          <li><Link to="/about" onClick={toggleMenu} className={isActive("/about") ? "active" : ""}>ABOUT US</Link></li>
          <li><Link to="/contact" onClick={toggleMenu} className={isActive("/contact") ? "active" : ""}>CONTACT US</Link></li>
        </ul>

        {/* Dark Mode Toggle */}
        <DarkModeToggle />

        {/* Search Component */}
        <Search />
      </div>
    </nav>
  );
}

export default Navbar;
