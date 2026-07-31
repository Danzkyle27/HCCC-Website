import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
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

  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Dropdown toggled:', !dropdownOpen); // Debug log
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="navbar-container">
        {/* Logo - Only show when not on home page */}
        {!isHomePage && (
          <motion.div variants={itemVariants}>
            <Link to="/" className="navbar-logo">
              <motion.img 
                src={logo} 
                alt="HCCC Logo"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </Link>
          </motion.div>
        )}

        {/* Hamburger Button */}
        <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links */}
        <motion.ul 
          className={`nav-list ${menuOpen ? "active" : ""}`}
          variants={navVariants}
        >
          <motion.li variants={itemVariants}><Link to="/" onClick={toggleMenu} className={isActive("/") ? "active" : ""}>HOME</Link></motion.li>
          <motion.li variants={itemVariants}><Link to="/programs" onClick={toggleMenu} className={isActive("/programs") ? "active" : ""}>PROGRAMS</Link></motion.li>
          <motion.li variants={itemVariants}><Link to="/ministries" onClick={toggleMenu} className={isActive("/ministries") ? "active" : ""}>MINISTRIES</Link></motion.li>
          <motion.li variants={itemVariants}><Link to="/sermons" onClick={toggleMenu} className={isActive("/sermons") ? "active" : ""}>SERMONS</Link></motion.li>
          <motion.li variants={itemVariants}><Link to="/soul-winning" onClick={toggleMenu} className={isActive("/soul-winning") ? "active" : ""}>HOW TO EVANGELIZE</Link></motion.li>

          {/* Dropdown - Desktop only, Mobile shows expanded */}
          <motion.li 
            className={`dropdown ${dropdownOpen ? "open" : ""}`}
            variants={itemVariants}
          >
            <button 
              type="button"
              className="dropbtn" 
              onClick={toggleDropdown}
              onTouchEnd={(e) => {
                e.preventDefault();
                toggleDropdown(e);
              }}
            >
              <span>CHURCH FOUNDATION</span>
              <span className={`dropdown-arrow ${dropdownOpen ? "open" : ""}`}>▾</span>
            </button>
            <ul className="dropdown-content">
              <li><Link to="/mission" onClick={() => { toggleMenu(); closeDropdown(); }}>Mission</Link></li>
              <li><Link to="/vision" onClick={() => { toggleMenu(); closeDropdown(); }}>Vision</Link></li>
              <li><Link to="/core-values" onClick={() => { toggleMenu(); closeDropdown(); }}>Core Values</Link></li>
              <li><Link to="/statement-of-faith" onClick={() => { toggleMenu(); closeDropdown(); }}>Statement of Faith</Link></li>
            </ul>
          </motion.li>

          {/* Mobile-only expanded Church Foundation items */}
          <li className="mobile-church-foundation-header">CHURCH FOUNDATION</li>
          <motion.li className="mobile-church-foundation-item" variants={itemVariants}>
            <Link to="/mission" onClick={toggleMenu}>Mission</Link>
          </motion.li>
          <motion.li className="mobile-church-foundation-item" variants={itemVariants}>
            <Link to="/vision" onClick={toggleMenu}>Vision</Link>
          </motion.li>
          <motion.li className="mobile-church-foundation-item" variants={itemVariants}>
            <Link to="/core-values" onClick={toggleMenu}>Core Values</Link>
          </motion.li>
          <motion.li className="mobile-church-foundation-item" variants={itemVariants}>
            <Link to="/statement-of-faith" onClick={toggleMenu}>Statement of Faith</Link>
          </motion.li>

          <motion.li variants={itemVariants}><Link to="/about" onClick={toggleMenu} className={isActive("/about") ? "active" : ""}>ABOUT US</Link></motion.li>
          <motion.li variants={itemVariants}><Link to="/contact" onClick={toggleMenu} className={isActive("/contact") ? "active" : ""}>CONTACT US</Link></motion.li>
        </motion.ul>

        {/* Dark Mode Toggle */}
        <motion.div variants={itemVariants}>
          <DarkModeToggle />
        </motion.div>

        {/* Search Component */}
        <motion.div variants={itemVariants}>
          <Search />
        </motion.div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
