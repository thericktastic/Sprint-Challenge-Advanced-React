import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

// This code renders the switch for dark mode functionality.
const Switch = () => {
  // Rather than using useState, we import the custom hook "useDarkMode"
  const [darkMode, setDarkMode] = useDarkMode('darkmode-key');
  console.log(darkMode);

  // This event handler 
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  // This code returns the Header component to index.js so it can be rendered
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

export default Switch;
