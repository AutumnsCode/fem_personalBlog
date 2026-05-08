import { useState } from "react";
import SunIcon from "../assets/images/icon-sun.svg";
import MoonIcon from "../assets/images/icon-moon.svg";

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
      onClick={toggleTheme}
      className="size-10 rounded-xl bg-toggle-btn border border-border overflow-hidden relative"
    >
      {/* Sonne */}
      <img
        src={MoonIcon.src}
        alt="Light mode"
        className={`
          theme-icon absolute inset-0 m-auto size-6 transition-all duration-300 ease-out
          ${isDark ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}
        `}
      />

      {/* Mond */}
      <img
        src={SunIcon.src}
        alt="Dark mode"
        className={`
          theme-icon absolute inset-0 m-auto size-6 transition-all duration-300 ease-out
          ${isDark ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
        `}
      />
    </button>
  );
}

