import React from "react";
import profile from "../../public/profile.jpg"; // Or adjust path as needed

export default function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-left">
        <h3>I'm</h3>
        <h1>Mohamed Amine Gadi</h1>
        <p>
          A DevOps & Cloud Engineer providing services for infrastructure automation,
          cloud cost optimization, and distributed system design. 10+ years of experience.
        </p>
        <div className="hero-socials">
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-google"></i></a>
        </div>
      </div>
      <div className="hero-right">
        <img src={profile} alt="Mohamed Amine Gadi" className="profile-photo" />
      </div>
    </section>
  );
}
