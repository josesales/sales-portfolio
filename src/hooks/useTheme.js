import { useState, useEffect } from "react";

const storageName = "sales-portfolio-storage-theme";

// Light and Dark theme settings
export const useTheme = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem(storageName);

    if (savedTheme) {
      document.body.classList.add(savedTheme);
      setTheme(savedTheme);
      return;
    }

    // if no saved theme, check the browser's preferred theme
    const preferredTheme = window.matchMedia("(prefers-color-scheme: light)")
      .matches
      ? "light"
      : "dark";

    document.body.classList.add(preferredTheme);
    setTheme(preferredTheme);
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle("light");

    const selectedTheme = document.body.classList.contains("light")
      ? "light"
      : "dark";
    localStorage.setItem(storageName, selectedTheme);
    setTheme(selectedTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};
