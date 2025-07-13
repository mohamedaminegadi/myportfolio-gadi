import React from "react";

export default function Skills({ lang }) {
  return (
    <section id="skills">
      <h2>{lang === "en" ? "Technical Skills" : "Compétences Techniques"}</h2>
      <ul>
        <li>{lang === "en" ? "Cloud Platforms" : "Plateformes Cloud"}: AWS, Azure, GCP</li>
        <li>{lang === "en" ? "IaC & Automation" : "IaC & Automatisation"}: Terraform, Ansible, GitHub Actions</li>
        <li>{lang === "en" ? "Containers" : "Conteneurs"}: Docker, Kubernetes</li>
        <li>{lang === "en" ? "Programming" : "Programmation"}: Python, JS/TS, Java</li>
        <li>{lang === "en" ? "Monitoring" : "Supervision"}: Grafana, Prometheus</li>
        <li>{lang === "en" ? "Databases" : "Bases de Données"}: PostgreSQL, MongoDB, DynamoDB</li>
      </ul>
    </section>
  );
}