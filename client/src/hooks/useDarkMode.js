import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

// This code controls the adding/removing of the "dark-mode" class to/from the body element, thus switching on/off dark mode
export const useDarkMode = (key, initialValue) => {
    // This code utilizes useLocalStorage to determine if dark mode is on or off between sessions
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue)
    console.log("This is darkMode: ", darkMode)

    // This useEffect checks to see if darkMode is true or false. If darkMode is true (switched on), the hook adds the "dark-mode" class to the body element, thus activating the dark mode theme. If darkMode is false (switched off), the hook removes the "dark-mode" class from the body element, thus deactivating the dark mode theme.
    useEffect(() => {
        if (darkMode) {
            document.querySelector("body").classList.add("dark-mode")
        } else {
            document.querySelector("body").classList.remove("dark-mode");
          }
    }, [darkMode]);

    return [darkMode, setDarkMode];
};