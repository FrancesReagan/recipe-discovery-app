// custom hookfor saving data to browser storage//
import { useState} from "react";

// custom hook for storing data in browser's localStorage//
export const uselocalstorage = (key, initialValue) => {
  // state that syncs with localStorage//
  const [storedValue, setStoredValue] = useState() => {
    try {
      // try to get the value from browser storage//
      const item = localStorage.getItem(key);

    // if data exists, use it (coverting from string back to original format)//
    // otherwise== use the initial value //
     return item ? JSON.parse(item) : initialValue;
    } catch {
    // if something goes wrong, use the initial value//
    return initialValue;
    }
  });

  // function to update both state and localStorage//
  const setStoredValue = (newValue) => {
   try{
    // update the state//
    setValue(newValue);

    // save to browser storage/localStorage(convert to string format)//
    localStorage.setItem(key, JSON.stringify(newValue));
  } catch (error) {
     console.error(`Error setting localStorage:`, error);
  }
  };

  // return the current value and the function to update it//
  return[svalue, setStoredValue];
}




