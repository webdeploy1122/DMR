import { MapPin } from "lucide-react";

function Contact() {
  const handleWhatsApp = () => {
    const whatsappNumber = "919440980707";

    const whatsappMessage =
      "Hello DMR Real Properties, I am interested in your property services.";

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="contact" className="contact section">
      <div className="section-container">

        {/* Section Heading */}
        <div className="section-heading">
          <span className="section-label">
            CONTACT US
          </span>

          <h3>
            Let's discuss your
            <span> property goals.</span>
          </h3>

          <p>
            <strong>
              Looking for a property or investment
              opportunity? Get in touch with DMR Real
              Properties.
            </strong>
          </p>
        </div>

        <div className="contact-grid">

          {/* =====================================
              LEFT SIDE - CONTACT INFORMATION
          ====================================== */}
          <div className="contact-info">

            <h3>
              DMR Real Properties
            </h3>

            <p>
              Our team is ready to help you find
              the right property opportunity.
            </p>

            {/* Phone */}
            <div className="contact-item">
              <div className="contact-icon">
                ☎
              </div>

              <div>
                <span>Phone</span>

                <strong>
                  +91 94409 80707
                  <br />
                  +91 98664 44334
                </strong>
              </div>
            </div>

            {/* Email */}
            <div className="contact-item">
              <div className="contact-icon">
                ✉
              </div>

              <div>
                <span>Email</span>

                <strong>
                  dmrrealeproperties@gmail.com
                </strong>
              </div>
            </div>

            {/* Instagram */}
            <div className="contact-item">
              <div className="contact-icon">
                ◎
              </div>

              <div>
                <span>Instagram</span>

                <a
                  href="https://www.instagram.com/dmrrealproperties/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram-link"
                >
                  @dmrrealproperties
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="contact-item">
              <div className="contact-icon">
                <MapPin
                  size={20}
                  strokeWidth={2}
                />
              </div>

              <div>
                <span>Location</span>

                <strong>
                  # 3-37, Bypass Road,
                  Narayankhed,Sangareddy Dist,
                  <br />
                  Telangana State - 502286
                </strong>
              </div>
            </div>

          </div>


          {/* =====================================
              RIGHT SIDE - WHATSAPP CONTACT
          ====================================== */}
          <div className="whatsapp-contact">

            <h3>
              Contact us through WhatsApp
            </h3>
            {/* WhatsApp Logo */}
  <div className="whatsapp-logo">
    <img
      src="/images/whatsapp.png"
      alt="WhatsApp"
    />
  </div>

            <p>
              Connect with DMR Real Properties
              directly through WhatsApp.
            </p>

            <button
              type="button"
              className="whatsapp-submit"
              onClick={handleWhatsApp}
            >
              <span className="whatsapp-icon-small">
                ☏
              </span>

              WhatsApp

              <span className="button-arrow">
                →
              </span>
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;