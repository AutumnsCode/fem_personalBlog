import { useState } from "react";
import SunIcon from "../assets/images/icon-sun.svg?url"
import MoonIcon from "../assets/images/icon-moon.svg?url";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="size-10 rounded-xl bg-toggle-btn border border-border overflow-hidden relative"
    >
      {/* Mond-Icon: wird im Light Mode angezeigt */}
      <img
        src={MoonIcon}
        alt="Switch to Dark mode"
        className={`
           theme-icon absolute inset-0 m-auto size-6 transition-all duration-300 ease-out
           ${isDark ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"}
         `}
      />

      {/* Sonnen-Icon: wird im Dark Mode angezeigt */}
      <img
        src={SunIcon}
        alt="Dark mode"
        className={`
          theme-icon absolute inset-0 m-auto size-6 transition-all duration-300 ease-out
          ${isDark ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        `}
      />
    </button>
  );
}

