import React from "react";

export default function LanguageSwitcher({ lang, toggleLang }) {
  return (
    <button onClick={toggleLang}>
      {lang === "en" ? "FR" : "ANG"}
    </button>
  );
}
