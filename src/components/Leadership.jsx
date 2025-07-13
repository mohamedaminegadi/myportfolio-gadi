import React from "react";

export default function Leadership({ lang }) {
  return (
    <section id="leadership">
      <h2>{lang === "en" ? "Volunteering & Leadership" : "Bénévolat & Leadership"}</h2>
      <p>{lang === "en"
        ? "Mentor in Distributed Systems Lab; Innovation Ambassador; Cloud & AI meetup speaker."
        : "Mentor en Systèmes Distribués ; Ambassadeur Innovation ; Conférencier Cloud & IA."}</p>
      <h2>{lang === "en" ? "Leadership & Honours" : "Distinctions"}</h2>
      <ul>
        <li>Grand Prize, World Genius Convention Expo (2023)</li>
        <li>Gold Medals: ISIF’23, ITE EXPO (2023)</li>
      </ul>
    </section>
  );
}
