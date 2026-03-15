// components/Footer.jsx
import React from "react";

function Footer() {
  const footerStyle = {
    backgroundColor: "var(--bg-black)",
    color: "var(--text-muted)",
    textAlign: "center",
    padding: "25px 20px",
    borderTop: "1px solid #222",
    fontSize: "0.9rem",
    width: "100%",
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer style={footerStyle}>
      <p>&copy; {currentYear} GA Security Services. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
