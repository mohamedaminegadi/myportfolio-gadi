import React from "react";

export default function Certifications({ lang }) {
  return (
    <section id="certifications">
      <h2>{lang === "en" ? "Certifications" : "Certifications"}</h2>
      <ul>
        <li>AWS Certified Cloud Practitioner</li>
        <li>Microsoft Azure Fundamentals (AZ-900)</li>
        <li>Microsoft Azure Developer Associate (AZ-204)</li>
      </ul>
    </section>
  );
}