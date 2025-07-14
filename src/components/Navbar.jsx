import React from "react";
import "../css/navbar.css";
import { FaLinkedinIn, FaDribbble, FaBars } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="custom-navbar">
      <div className="navbar-left">
        <span className="navbar-logo">
          <span className="emoji-logo">🟡</span>
          <span className="brand">GADI Mohamed Amine</span>
        </span>
        <ul className="navbar-menu">
          <li className="active">Home</li>
          <li>Portfolio</li>
          <li>Testimonial</li>
          <li>About</li>
        </ul>
      </div>
      <div className="navbar-right">
        <FaDribbble className="navbar-icon" />
        <FaLinkedinIn className="navbar-icon" />
        <FaBars className="navbar-icon menu-icon" />
      </div>
    </nav>
  );
}
