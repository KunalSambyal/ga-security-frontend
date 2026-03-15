// components/Header.jsx
import React from "react";

function Header({ onOpenLogin }) {
  const headerStyle = {
    position: "fixed",
    top: 0,
    width: "100%",
    backgroundColor: "rgba(10, 10, 10, 0.95)",
    borderBottom: "2px solid var(--accent-green)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    zIndex: 1000,
  };

  const logoStyle = {
    color: "var(--accent-green)",
    fontWeight: "bold",
    fontSize: "1.5rem",
    textDecoration: "none",
  };

  const buttonStyle = {
    backgroundColor: "transparent",
    color: "var(--text-main)",
    border: "1px solid var(--accent-green)",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s",
  };

  return (
    <header style={headerStyle}>
      <div>
        <a href="#home" style={logoStyle}>
          GA Security
        </a>
      </div>
      <nav style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <a href="#about" style={{ color: "white", textDecoration: "none" }}>
          About
        </a>
        <a href="#contact" style={{ color: "white", textDecoration: "none" }}>
          Contact
        </a>

        <button style={buttonStyle} onClick={onOpenLogin}>
          Admin Login
        </button>
      </nav>
    </header>
  );
}

export default Header;
