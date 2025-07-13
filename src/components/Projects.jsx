import React from "react";

export default function Projects({ lang }) {
  return (
    <section id="projects">
      <h2>{lang === "en" ? "Projects" : "Projets"}</h2>
      <ul>
        <li>{lang === "en" ? "DevOps CI/CD Lab Simulator" : "Simulateur CI/CD DevOps"}</li>
        <li>{lang === "en" ? "Cloud-Native Innovation Portal" : "Portail Innovation Cloud-Native"}</li>
        <li>{lang === "en" ? "Real-Time Cloud Cost Tracker" : "Suivi Coûts Cloud Temps Réel"}</li>
      </ul>
    </section>
  );
}
