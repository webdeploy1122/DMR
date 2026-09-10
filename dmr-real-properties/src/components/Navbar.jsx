import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <header className="navbar">
      <div className="navbar-container">
<div className="brand">
  <img
    src="/images/dmr-logo.png"
    alt="DMR Real Properties"
    className="brand-logo"
  />
  <div className="brand-text">
    <h1>
    <strong>DMR REAL PROPERTIES</strong>
    </h1>
  </div>
</div>
        {/* Desktop Navigation */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#works" onClick={closeMenu}>
            Our Projects
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact Us
          </a>
        </nav>
        {/* Mobile menu button */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;