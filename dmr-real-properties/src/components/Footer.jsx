function Footer() {
/*
  const currentYear = new Date().getFullYear();
        <p>
          © {currentYear} DMR Real Properties.
          All rights reserved.
        </p>
*/
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="logo-circle">
            DMR
          </div>
          <div>
            <h3>
              DMR Real Properties
            </h3>
            <p>
              Trust • Value • Property
            </p>
          </div>
        </div>
        <div className="footer-links">
          <a href="#about">
            About Us
          </a>
          <a href="#works">
            Our Projects
          </a>
          <a href="#contact">
            Contact Us
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          DMR Real Properties.
        </p>
      </div>
    </footer>
  );
}

export default Footer;