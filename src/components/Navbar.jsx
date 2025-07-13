import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Gadi</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      <div className="navbar-socials">
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
        <a href="#"><i className="fab fa-github"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
      </div>
    </nav>
  );
}
