import { Link } from "react-router-dom";
import "./Navbar.css"; 

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/programs">PROGRAMS</Link></li>

        {/* Dropdown */}
        <li className="dropdown">
          <span className="dropbtn">CHURCH FOUNDATION ▾</span>
          <ul className="dropdown-content">
            <li><Link to="/mission">Mission</Link></li>
            <li><Link to="/vision">Vision</Link></li>
            <li><Link to="/core-values">Core Values</Link></li>
            <li><Link to="/statement-of-faith">Statement of Faith</Link></li>
          </ul>
        </li>

        <li><Link to="/about">ABOUT US</Link></li>
        <li><Link to="/contact">CONTACT US</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
