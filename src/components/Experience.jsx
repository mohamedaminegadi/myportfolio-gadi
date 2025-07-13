import React from "react";

export default function Experience({ lang }) {
  return (
    <section id="experience">
      <h2>{lang === "en" ? "Professional Experience" : "Expérience Professionnelle"}</h2>
      <ul>
        <li>
          <strong>CGI — DevOps & FinOps</strong> (Jan 2023–Present)
          <p>{lang === "en"
            ? "Automated infra with Terraform; cut spend 25%; migrated monoliths to microservices."
            : "Automatisation d'infra avec Terraform : –25 % coûts ; migration microservices."}</p>
        </li>
        <li>
          <strong>DIGIMIND & 1000KELVIN — DevOps & Full-Stack</strong> (Mar–Dec 2022)
          <p>{lang === "en"
            ? "Launched AI-powered SaaS on AWS/K8s; built real-time 3D simulation engine."
            : "Lancement SaaS IA sur AWS/K8s ; moteur de simulation 3D temps réel."}</p>
        </li>
      </ul>
    </section>
  );
}


