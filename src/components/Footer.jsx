import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="content-footer">
        <p
          className="rights-footer"
          style={{
            fontFamily: "Hey-comic",
            fontSize: "1.1rem", // Adjust font size
            color: "black",
            margin: "0", // Align with icons
          }}
        >
          © All rights reserved | 2024 | Find me on
        </p>
        <div className="icons-footer">
          <a
            href="https://github.com/PurrfectNene"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "black",
              fontSize: "1.5rem", // Font size for icons
              margin: "0 10px", // Space between icons
              textDecoration: "none", // Remove underline
            }}
          >
            <i className="bi bi-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/irene-patania/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "DodgerBlue",
              fontSize: "1.5rem",
              margin: "0 10px",
              textDecoration: "none",
            }}
          >
            <i className="bi bi-linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
