import React, { useState } from "react";
import logo from "./logo.svg";
import "../src/assets/css/Navbar.css";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("#Home");

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img src={logo} alt="react-logo" className="logo" />
        <span className="logo-text">React Facts</span>
      </div>
      <ul className="nav-link-container">
        {["Home", "News", "Contact", "About"].map((link) => (
          <li key={link}>
            <a
              href={`#${link}`}
              className={`nav-links ${activeLink === `#${link}` ? "active" : ""}`}
              onClick={() => handleClick(`#${link}`)}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
      <div className="hidden-box"></div>
    </div>
  );
}
