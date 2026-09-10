import { useEffect, useState } from "react";

const projects = [
  {
    image: "/images/p1.jpeg",
  },
  {
    image: "/images/p2.jpeg",
  },
];
function OurWorks() {
  const [currentProject, setCurrentProject] = useState(0);

  // Next project
  const nextProject = () => {
    setCurrentProject((previous) =>
      (previous + 1) % projects.length
    );
  };
  // Automatic change every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextProject();
    }, 15000);

    return () => clearInterval(interval);
  }, []);
  const project = projects[currentProject];
  return (
    <section id="works" className="works section">

      <div className="section-container">

        {/* Section Heading */}
        <div className="section-heading">

          <h2>
            OUR PROJECTS
          </h2>
          <p>
            Explore some of our featured property
            opportunities and developments.
          </p>
        </div>
        {/* =====================================
            TWO COLUMN LAYOUT
        ====================================== */}
        <div className="works-layout">
          {/* =====================================
              LEFT SIDE - PROPERTY CAROUSEL
          ====================================== */}
          <div className="works-carousel">
            <div className="property-slide">
              <img
                src={project.image}
                alt={project.title}
              />
            </div>
            {/* Carousel Indicators */}
            <div className="carousel-indicators">

              {projects.map((_, index) => (
                <button
                  key={index}
                  className={
                    currentProject === index
                      ? "active"
                      : ""
                  }
                  onClick={() => setCurrentProject(index)}
                  aria-label={`Go to property ${index + 1}`}
                />
              ))}

            </div>

          </div>


          {/* =====================================
              RIGHT SIDE - FIXED CONTENT
        ====================================== */}

          <div className="works-fixed-content">

            <span className="section-label">
              DMR REAL PROPERTIES
            </span>

            <h3>
              Building Opportunities.
              <span> Creating Value.</span>
            </h3>

            <div>
              <p>
              We assure you that the investment you make with us will become
              a <strong>golden asset for your future generations.</strong>
            </p>
              <p>
              These lands are eligible for government schemes like
              <strong> Rythu Bharosa and Rythu Bima</strong>, as well as
              agricultural bank loans. We offer these opportunities at very
              affordable prices.
            </p>
            <p>
              Currently, we are offering land at a very low rate of just
              <strong> ₹833 per square yard</strong>, or
              <strong> ₹99,999 per gunta</strong>. As part of our pre-booking
              phase, we are providing numerous special offers to our customers.
            </p>
            </div>

            <div className="about-features">

              <div>
                <div>
                  <h4>We make it possible for you to become landowners at a very affordable price.</h4>
                </div>
              </div>

              <div>
                <div>
                  <h4>Our goal is to provide land that appreciates manifold in value to hundreds of thousands of customers in the future.</h4>
                </div>
              </div>

              <div>
                <div>
                  <h4>With the support and engagement of valued customers like you...  We have set a goal to revitalize the real estate sector.</h4>
                </div>
              </div>


            </div>


            <a
              href="#contact"
              className="works-contact-button"
            >
              Enquire Now
              <span>→</span>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default OurWorks;