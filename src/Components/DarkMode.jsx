import React, { useEffect, useState } from "react";
import lightbtn from "../assets/website/light-mode-button.png";
import darkbtn from "../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement; //acceess to the html element

  // set theme to local storage and html element
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.add("dark");
    } else {
      element.classList.remove("light");
      element.classList.remove("dark");
    }
  });
  return (
    <div className=" relative">
      {/**light theme and the conditions */}
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={`w-14 cursor-pointer absolute z-20 right-0 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } transition-all duration-300 `}
        src={lightbtn}
      />
      {/**dark theme and the conditions */}
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={`w-14 cursor-pointer`}
        src={darkbtn}
      />
    </div>
  );
};

export default DarkMode;
