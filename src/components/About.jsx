import React, { useState, useEffect } from "react";

function About() {
  const images = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png",
    "/images/6.png",
    "/images/7.png",
    "/images/8.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // --- Functions to move left and right ---
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  // --- Auto-Play Magic ---
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  // --- Calculate which 3 images to show ---
  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < 3; i++) {
      const imageIndex = (currentIndex + i) % images.length;
      visibleImages.push(images[imageIndex]);
    }
    return visibleImages;
  };

  // --- Styles ---
  const sectionContainerStyle = {
    padding: "120px 20px 60px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
    backgroundColor: "var(--bg-dark-gray)",
    minHeight: "80vh",
  };

  const carouselWrapper = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    marginTop: "40px",
    width: "100%",
    maxWidth: "1200px",
    position: "relative",
  };

  const imagesContainer = {
    display: "flex",
    gap: "20px",
    width: "100%",
    justifyContent: "center",
    overflow: "hidden",
  };

  const imageBoxStyle = {
    width: "30%",
    minWidth: "250px",
    height: "250px",
    borderRadius: "8px",
    border: "1px solid #333",
    backgroundColor: "var(--bg-black)",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0,0,0,0.5)",
    transition: "transform 0.5s ease-in-out",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const arrowStyle = {
    backgroundColor: "transparent",
    color: "var(--accent-green)",
    border: "2px solid var(--accent-green)",
    fontSize: "1.5rem",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    borderRadius: "50%",
    zIndex: 10,
    transition: "0.3s",
    flexShrink: 0,
  };

  return (
    <section id="about" style={sectionContainerStyle}>
      <h2
        style={{
          color: "var(--accent-green)",
          marginBottom: "10px",
          fontSize: "2.5rem",
        }}
      >
        About GA Security
      </h2>

      <pre
        style={{
          fontWeight: "bold",
          fontSize: "1.2rem",
          color: "var(--text-main)",
          marginBottom: "20px",
        }}
      >
        Director: Amandeep Singh &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; MD:
        Gurjeet Kaur
      </pre>

      <p
        style={{
          maxWidth: "800px",
          lineHeight: "1.6",
          color: "var(--text-main)",
        }}
      >
        GA Security Services was founded on the principles of integrity,
        vigilance, and helpfulness. Our founder started this company to bridge
        the gap between standard guarding and elite protection.
      </p>

      <div style={carouselWrapper}>
        <button style={arrowStyle} onClick={prevSlide}>
          &#10094;
        </button>

        <div style={imagesContainer}>
          {getVisibleImages().map((imgSrc, index) => (
            <div key={index} style={imageBoxStyle}>
              <img
                src={imgSrc}
                alt={`GA Security ${index + 1}`}
                style={imageStyle}
              />
            </div>
          ))}
        </div>

        <button style={arrowStyle} onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </section>
  );
}

export default About;
