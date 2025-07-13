import React from "react";

export default function ThemeToggle({ darkMode, toggleTheme }) {
  return (
    <button onClick={toggleTheme}>
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}