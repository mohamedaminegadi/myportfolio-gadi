import React from "react";

export default function ContactLink({ lang }) {
  return (
    <section id="contact">
      <h2>{lang === "en" ? "Contact" : "Contact"}</h2>
      <p>{lang === "en"
        ? "Click below to send me a message."
        : "Cliquez ci-dessous pour m'envoyer un message."}</p>
      <a href="/contact.html" className="btn">
        {lang === "en" ? "Send Message" : "Envoyer un message"}
      </a>
    </section>
  );
}