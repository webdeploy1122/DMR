import { useState } from "react";
import { MapPin } from "lucide-react";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };
  const handleWhatsApp = (event) => {
    event.preventDefault();

    const whatsappNumber = "919440980707";

    const whatsappMessage = `
Hello DMR Real Properties,
I am interested in your property services.
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message:
${formData.message}

Thank you.
`;
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
              RIGHT SIDE - CONTACT FORM
          ====================================== */}

          <form
            className="contact-form"
            onSubmit={handleWhatsApp}
          >

            <h3 className="contact-form-title">
              Send us a message
            </h3>

            {/* Name + Email */}
            <div className="form-row">

              <div className="form-group">
                <label>
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

            </div>


            {/* Phone */}
            <div className="form-group">
              <label>
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                required
              />
            </div>


            {/* Message */}
            <div className="form-group">
              <label>
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help you..."
                required
              ></textarea>
            </div>


            {/* WhatsApp Button */}
            <button
              type="submit"
              className="whatsapp-submit"
            >
              <span className="whatsapp-icon-small">
                ☏
              </span>

              WhatsApp Us

              <span className="button-arrow">
                →
              </span>
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;