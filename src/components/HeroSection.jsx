import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";
import profile from "../../public/ROY_6300.png"; 
import "../css/herosection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h3 className="hero-im">I'm</h3>
          <h1 className="hero-name">
            <span className="bold">Mohamed Amine</span> Gadi
          </h1>
          <div className="hero-underline" />
          <p className="hero-desc">
            A freelancer who provides services for digital programming and design content needs, for all businesses with more than 10 years of experience
          </p>
        </div>
        <div className="hero-services">
          <div className="hero-services-title">Services</div>
          <div className="hero-services-desc">
            Let&apos;s build quality products in programming and design with my services
          </div>
          <a href="#services" className="hero-showmore">
            show more <span style={{ color: "#fbbf24" }}>→</span>
          </a>
          <div className="hero-socials">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaPinterest />
          </div>
        </div>
      </div>
      <div className="hero-photo-container">
        <div className="hero-photo-circle">
          <img src={profile} alt="Mohamed Amine Gadi" className="hero-photo" />
        </div>
      </div>
    </section>
  );
}
