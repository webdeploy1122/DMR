import { useEffect, useState } from "react";

const properties = [
  
  {
    image: "/images/agricultural lands.jpeg",
    smallTitle: "FERTILE LANDS",
    title: "Agricultural Lands",
    description:
      "Own a piece of nature with strategically located agricultural lands, offering fertile surroundings, convenient connectivity, and a valuable opportunity for your future",
  },
  {
    image: "/images/Commerciallands.jpeg",
    smallTitle: "PRIME LOCATIONS",
    title: "Commercial Lands",
    description:
      "Discover strategically positioned commercial lands in high-potential locations, designed to support business growth, connectivity, and long-term investment opportunities.",
  },
  {
    image: "/images/RoadInfra.jpeg",
    smallTitle: "GROWTH THROUGH CONNECTIVITY",
    title: "Road Infrastructure",
    description:
      "Well-planned road infrastructure designed to enhance connectivity, improve accessibility, and unlock greater potential for surrounding developments.",
  },
  {
    image: "/images/Main_fly.jpeg",
    isMain: true,
  },  
];


function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(
      (previous) => (previous + 1) % properties.length
    );
  };

  const previousSlide = () => {
    setCurrentSlide(
      (previous) =>
        (previous - 1 + properties.length) % properties.length
    );
  };

  const selectSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        (previous) => (previous + 1) % properties.length
      );
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-slider">

        {properties.map((property, index) => (
          <div
            className={`hero-slide ${
              index === currentSlide ? "active" : ""
            } ${property.isMain ? "main-hero-slide" : ""}`}
            key={property.image}
          >
            <img
              src={property.image}
              alt={property.title || "DMR Real Properties"}
            />

            {/* Only show overlay and content on other slides */}
            {!property.isMain && (
              <>
                <div className="hero-overlay"></div>

                <div className="hero-content">
                  <span className="hero-small-title">
                    {property.smallTitle}
                  </span>

                  <h1>{property.title}</h1>

                  <p>{property.description}</p>

                  <a
                    href="#works"
                    className="gold-button"
                  >
                    Explore Properties
                  </a>
                </div>
              </>
            )}
          </div>
        ))}

        {/* Previous */}
        <button
          className="slider-arrow previous"
          onClick={previousSlide}
          aria-label="Previous property"
        >
          &#10094;
        </button>

        {/* Next */}
        <button
          className="slider-arrow next"
          onClick={nextSlide}
          aria-label="Next property"
        >
          &#10095;
        </button>

        {/* Dots */}
        <div className="slider-dots">
          {properties.map((_, index) => (
            <button
              key={index}
              className={
                index === currentSlide
                  ? "dot active"
                  : "dot"
              }
              onClick={() => selectSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Hero;