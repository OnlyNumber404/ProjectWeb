import { useState, useEffect } from "react";
import "./LightSwitch.css";

function LightSwitch() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="toggle-container select-none">
      <div
        className={`toggle-switch ${theme === "dark" ? "active" : ""}`}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <div className="toggle-slider">
          <span className="toggle-icon">
            {theme === "light" ? "☀️" : "🌙"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default LightSwitch;