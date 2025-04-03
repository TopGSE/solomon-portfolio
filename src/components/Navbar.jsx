import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Disable body scroll when menu is open
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""} ${
        menuOpen ? "menu-open" : ""
      }`}
    >
      <div className="container nav-container">
        <Link to="/" className="logo" onClick={handleNavClick}>
          Solomon
        </Link>

        <div
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link
              to="/"
              onClick={handleNavClick}
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={handleNavClick}
              className={location.pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={handleNavClick}
              className={location.pathname === "/projects" ? "active" : ""}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              onClick={handleNavClick}
              className={location.pathname === "/skills" ? "active" : ""}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={handleNavClick}
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
