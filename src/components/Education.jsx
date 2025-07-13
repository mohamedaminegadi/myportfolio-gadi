import React from "react";

export default function Education({ lang }) {
  return (
    <section id="education">
      <h2>{lang === "en" ? "Education" : "Éducation"}</h2>
      <ul>
        <li>
          <strong>EMI, Rabat</strong> (2022–Present): <em>{lang === "en" ? "PhD, Cloud, AI & ML" : "Doctorat, Cloud, IA & ML"}</em>
        </li>
        <li>
          <strong>Côte d’Azur University, Nice</strong> (Jul 2022): <em>{lang === "en" ? "M.S. MIAGE INTENSE (1st class honours)" : "M.S. MIAGE INTENSE (mention très bien)"}</em>
        </li>
        <li>
          <strong>EMSI, Rabat</strong> (Jun 2022): <em>{lang === "en" ? "B.Eng. CS & Networks (1st class honours)" : "Ingénieur Informatique & Réseaux (mention très bien)"}</em>
        </li>
      </ul>
    </section>
  );
}
