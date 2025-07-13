import React from "react";

export default function About({ lang }) {
  return (
    <section id="about">
      <h2>{lang === "en" ? "About Me" : "À Propos"}</h2>
      <p>
        {lang === "en"
          ? "PhD Candidate in Cloud, AI & ML with expertise in DevOps and multi-cloud optimization."
          : "Doctorant en Cloud, IA & ML, expert en DevOps et optimisation multi-cloud."}
      </p>
    </section>
  );
}