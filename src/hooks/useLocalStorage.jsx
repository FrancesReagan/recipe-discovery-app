// uselocalstorage: syncs state with browser localstorage//
// browser storage management//
import { useState, useEffect } from "react";

// custom hook for storing data in browser's localStorage//
export const uselocalstorage = (key, initialValue) => {
  // state to store the value//
  const [storedValue, setStoredValue] = useState() => {
    try {
      // try to get the value from localStorage//
      const item = window.localStorage.getItem(key);

    // if it exists, parse it (coverting from string back to original format)//
    // if  not, use the initial value given//
     return item ? JSON.parse(item) : initialValue;
    } catch (error) {
    // if something goes wrong, use the initial value//
    console.error(`Error reading localStorage key "${key}":`, error);
    return initialValue;
    }

  });

  // function to update the stored value//
  const setValue = (value) => {
   try{
    setStoredValue(value);

    // save to localStorage(convert to string format)//
     window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
     console.error(`Error setting localStorage key"${key}":`, error);
  }

  };

  // return the current value and the function to update it//
  return[storedValue, setValue];

};




