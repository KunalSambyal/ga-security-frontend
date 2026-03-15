// components/Hero.jsx
import React from "react";

function Hero() {
  return (
    <section
      id="home"
      className="section-container"
      style={{ minHeight: "50vh", backgroundColor: "var(--bg-black)" }}
    >
      <h1 style={{ fontSize: "4rem", marginBottom: "20px" }}>
        GA <span style={{ color: "var(--accent-green)" }}>Security</span>
      </h1>
      <p
        style={{
          color: "var(--text-muted)",
          fontSize: "1.2rem",
          maxWidth: "600px",
        }}
      >
        Providing top-tier private security solutions to protect what matters
        most to you. 24/7 monitoring, elite personnel, and advanced technology.
      </p>
    </section>
  );
}

export default Hero;
