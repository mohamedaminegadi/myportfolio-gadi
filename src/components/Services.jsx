import React from "react";
import { FaArrowRight } from "react-icons/fa";
import uxImg from "../../public/ux.png"; // add 3 images to /public/
import frontendImg from "../../public/frontend.png";
import mobileImg from "../../public/mobile.png";

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-left">
        <h2>What Can I Do For Your Needs</h2>
        <p>
          It is easier to entrust the work to the experts because they are able to provide the best results with reliable quality.
        </p>
        <div className="stats-grid">
          <div><span className="big-yellow">250+</span><div>Project Completed</div></div>
          <div><span className="big-yellow">100+</span><div>Community Network</div></div>
          <div><span className="big-yellow">30+</span><div>Contract Remote</div></div>
          <div><span className="big-yellow">10+</span><div>Years Experience</div></div>
        </div>
      </div>
      <div className="services-right">
        <div className="service-row">
          <img src={uxImg} alt="UI/UX Design" />
          <div>
            <h4>UI/UX Design</h4>
            <span>117 Project</span>
          </div>
          <FaArrowRight className="arrow-icon" />
        </div>
        <div className="service-row">
          <img src={frontendImg} alt="Front End Develop" />
          <div>
            <h4>Front End Develop</h4>
            <span>84 Project</span>
          </div>
          <FaArrowRight className="arrow-icon" />
        </div>
        <div className="service-row">
          <img src={mobileImg} alt="Mobile App Develop" />
          <div>
            <h4>Mobile App Develop</h4>
            <span>32 Project</span>
          </div>
          <FaArrowRight className="arrow-icon" />
        </div>
      </div>
    </section>
  );
}
