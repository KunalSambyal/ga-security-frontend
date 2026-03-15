// components/LoginModal.jsx
import React, { useState } from "react";

function LoginModal({ isOpen, onClose }) {
  // State to hold what the admin types
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // If the modal isn't supposed to be open, return nothing
  if (!isOpen) return null;

  // --- Styles ---
  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2000,
  };

  const modalStyle = {
    backgroundColor: "var(--bg-dark-gray)",
    padding: "40px",
    borderRadius: "8px",
    width: "100%",
    maxWidth: "400px",
    borderTop: "4px solid var(--accent-green)",
    position: "relative",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    margin: "10px 0 20px",
    backgroundColor: "#2a2a2a",
    border: "1px solid #444",
    borderRadius: "4px",
    color: "white",
    outline: "none",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "var(--accent-green)",
    color: "var(--bg-black)",
    border: "none",
    borderRadius: "4px",
    fontWeight: "bold",
    fontSize: "1rem",
    cursor: "pointer",
    marginTop: "10px",
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "15px",
    right: "15px",
    background: "transparent",
    border: "none",
    color: "var(--text-muted)",
    fontSize: "1.2rem",
    cursor: "pointer",
  };

  // --- Functions ---
  const handleLogin = (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    console.log("Attempting login with:", username, password);
    // Later, we will send this data to your backend here!
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <button style={closeButtonStyle} onClick={onClose}>
          ✖
        </button>

        <h2
          style={{ textAlign: "center", marginBottom: "10px", color: "white" }}
        >
          Comming Soon!
        </h2>
        {/* <p
          style={{
            textAlign: "center",
            color: "var(--text-muted)",
            marginBottom: "30px",
            fontSize: "0.9rem",
          }}
        >
          Restricted Access. Authorized personnel only.
        </p>

        <form onSubmit={handleLogin}>
          <label style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
            Email ID / Username
          </label>
          <input
            type="text"
            style={inputStyle}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
            Password
          </label>
          <input
            type="password"
            style={inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" style={buttonStyle}>
            Secure Login
          </button>
        </form> */}
      </div>
    </div>
  );
}

export default LoginModal;
