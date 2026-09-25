import { useEffect, useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode " : "light-mode";
  }, [darkMode]);

  return (
    <button className="btn-dark"  onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}

export default ThemeToggle;