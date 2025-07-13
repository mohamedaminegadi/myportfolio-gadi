import React, { useState } from "react";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Leadership from "./components/Leadership";
import ContactLink from "./components/ContactLink";
import LanguageSwitcher from "./components/LanguageSwitcher";
import ThemeToggle from "./components/ThemeToggle";

import "./style.css";

function App() {
  const [lang, setLang] = useState("en");
  const [darkMode, setDarkMode] = useState(false);

  const toggleLang = () => setLang(lang === "en" ? "fr" : "en");
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <header>
        <div className="top-bar">
          <LanguageSwitcher lang={lang} toggleLang={toggleLang} />
          <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
        </div>
      </header>
      <main>
        <About lang={lang} />
        <Education lang={lang} />
        <Skills lang={lang} />
        <Experience lang={lang} />
        <Projects lang={lang} />
        <Certifications lang={lang} />
        <Leadership lang={lang} />
        <ContactLink lang={lang} />
      </main>
      <footer>
        <p>&copy; 2025 Mohamed Amine Gadi</p>
      </footer>
    </div>
  );
}

export default App;