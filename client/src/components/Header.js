import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

// This code returns <Header /> and contains a button for dark mode functionality
const Header = () => {
  // Rather than using useState, we import the custom hook "useDarkMode" which attaches/removes the "dark-mode" class from the body element
  const [darkMode, setDarkMode] = useDarkMode('darkmode-key');
  console.log(darkMode);

  // This is an event handler for onClick that allows for the toggling of dark mode between true and false
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  // This code returns the Header component to App.js so it can be rendered
  return (
    <nav className="App-header">
      <h1>Athlete List</h1>
      <div className="dark-mode__toggle">
        <input
        type="submit"
          onClick={toggleMode}
          value="Dark Mode"
        />
      </div>
    </nav>
  );
};

export default Header;
