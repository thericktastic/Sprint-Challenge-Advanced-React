import { useState } from "react";

// This code allows for client-side storage of information by passing it a key and initialValue parameters.
export const useLocalStorage = (key, initialValue) => {
    // This code sets state as storedValue and takes a function as its initial value. The function will check to see if there is anything in local storage assigned to the key, and return the initial value if nothing is found in local storage.
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    // This code creates a key in localStorage and assigns it the value being passed in.
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];
}