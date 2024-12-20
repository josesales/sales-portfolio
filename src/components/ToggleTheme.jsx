import React, { useEffect, useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import { ReactComponent as DarkThemeIcon } from "../assets/dark-theme.svg";
import { ReactComponent as LightThemeIcon } from "../assets/light-theme.svg";
import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="toggle-theme">
      <LightThemeIcon className="toggle-theme__img" />
      <ToggleSwitch
        name="theme"
        isActive={theme === "dark"}
        onClickHandler={toggleTheme}
      />
      <DarkThemeIcon className="toggle-theme__img" />
    </div>
  );
};

export default ThemeToggle;
