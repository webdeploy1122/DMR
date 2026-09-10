function About() {
  return (

    <section id="about" className="about section">
      <div className="section-container">
          <div className="about-grid">
  {/* Left Side - Heading + Image */}
  <div className="about-image-column">
    <div className="about-image-heading">
      ABOUT DMR
    </div>
    <div className="about-image">
      <img
        src="/images/DMR1.jpeg"
        alt="DMR Real Properties"
      />
    </div>
  </div>

          {/* Content */}
          <div className="about-content">
            <h3>
             DMR REAL PROPERTIES
             <br />
            <span> A nurturing partner—like a mother—for your trusted investments.</span>
            </h3>
            <br />
             <p>
             <h3><strong> I am Konsani Dattamahireddy</strong></h3>
            </p>

            <p>
              To date, alongside a team of 38 team leaders, I have facilitated
              the sale of over <strong>1,300 acres of land to 518 customers</strong>
              across the Sangareddy, Jogipet, Narayankhed, Rangareddy,
              Kamareddy, Nizamabad, Zaheerabad, Hyderabad, and Bidar regions.
            </p>
            <p>
              The locations where we sell land include the Nizamsagar, Singur,
              Nallavagu, and Kaulas project areas. Additionally, the National
              Investment and Manufacturing Zone (NIMZ) in Zaheerabad and the
              Bidar Airport are in close proximity to our projects.
            </p>
            <p>
              We primarily sell agricultural land; we ensure precise surveying
              and boundary demarcation, and we cultivate crops such as mangoes,
              guavas, and paddy. We stand by our customers, honoring the trust
              they place in their investment.
            </p>

             <div className="about-signature">
              <p>
                <strong>Warm Regards,</strong>
                <br />
                <strong>Datta Mahi Reddy
                <br />
                Founder Director
                <br />
                DMR Real Properties</strong>
              </p>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}

export default About;