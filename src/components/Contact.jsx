import React from "react";

function Contact() {
  const wrapperStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "stretch",
    gap: "30px",
    width: "100%",
    maxWidth: "1100px",
    marginTop: "20px",
  };

  const cardStyle = {
    backgroundColor: "var(--bg-dark-gray)",
    borderLeft: "4px solid var(--accent-green)",
    padding: "40px",
    borderRadius: "8px",
    textAlign: "left",
    flex: "1",
    minWidth: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const mapStyle = {
    flex: "1",
    minWidth: "300px",
    borderRadius: "8px",
    overflow: "hidden",
    display: "flex",
    border: "1px solid var(--accent-green)",
  };

  const labelStyle = {
    color: "var(--text-main)",
    marginBottom: "5px",
    fontSize: "1.1rem",
  };

  const textStyle = {
    color: "var(--text-muted)",
    marginBottom: "25px",
    fontSize: "0.95rem",
  };

  const linkStyle = {
    color: "var(--text-muted)",
    marginBottom: "25px",
    fontSize: "0.95rem",
    textDecoration: "none",
    display: "inline-block",
  };

  return (
    <section
      id="contact"
      className="section-container"
      style={{ backgroundColor: "var(--bg-black)" }}
    >
      <div style={wrapperStyle}>
        {/* Left Side: Contact Details Card */}
        <div style={cardStyle}>
          <h2
            style={{
              textAlign: "left",
              marginBottom: "30px",
              color: "var(--accent-green)",
            }}
          >
            Contact Us
          </h2>

          <h4 style={labelStyle}>Email</h4>
          <a
            href="mailto:asgsp@gmail.com"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = "var(--accent-green)")}
            onMouseOut={(e) => (e.target.style.color = "var(--text-muted)")}
          >
            asgsp@gmail.com@gmail.com
          </a>

          <h4 style={labelStyle}>Mobile</h4>
          <a
            href="tel:+918164773504"
            style={{ linkStyle, marginBottom: "3px", textDecoration: "none" }}
            onMouseOver={(e) => (e.target.style.color = "var(--accent-green)")}
            onMouseOut={(e) => (e.target.style.color = "var(--text-muted)")}
          >
            +91 8164773504
          </a>
          <a
            href="tel:+919478709140"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = "var(--accent-green)")}
            onMouseOut={(e) => (e.target.style.color = "var(--text-muted)")}
          >
            +91 9478709140
          </a>

          <h4 style={labelStyle}>Office Location</h4>
          <p style={{ ...textStyle, lineHeight: "1.6", marginBottom: "0" }}>
            GA SECURITY SERVICES GURDASPUR
            <br />
            near beant university, bariar, Baryar, Punjab
            <br />
            143530
          </p>
        </div>

        {/* Right Side: Google Map */}
        <div style={mapStyle}>
          <iframe
            src="https://maps.google.com/maps?q=GA+SECURITY+SERVICES+GURDASPUR&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "350px" }}
            allowFullScreen=""
            loading="lazy"
            title="GAS Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
