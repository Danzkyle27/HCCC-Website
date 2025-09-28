import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setDropdownOpen(false); 
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Hamburger Button */}
        <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links */}
        <ul className={`nav-list ${menuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={toggleMenu}>HOME</Link></li>
          <li><Link to="/programs" onClick={toggleMenu}>PROGRAMS</Link></li>

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

          <li><Link to="/about" onClick={toggleMenu}>ABOUT US</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>CONTACT US</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
