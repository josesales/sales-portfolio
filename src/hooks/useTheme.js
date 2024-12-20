import { useState, useEffect } from "react";

const storageName = "sales-portfolio-storage-theme";

// Light and Dark theme settings
export const useTheme = () => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const savedTheme = localStorage.getItem(storageName);
    if (savedTheme === "light") {
      document.body.classList.add("light");
      setTheme(savedTheme);
    }
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
