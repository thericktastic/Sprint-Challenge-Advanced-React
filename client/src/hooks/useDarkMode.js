import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue)
    console.log("This is darkMode: ", darkMode)

    useEffect(() => {
        if (darkMode) {
            document.querySelector("body").classList.add("dark-mode")
        } else {
            document.querySelector("body").classList.remove("dark-mode");
          }
    }, [darkMode]);

    return [darkMode, setDarkMode];
};