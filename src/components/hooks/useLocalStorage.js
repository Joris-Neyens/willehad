import { useState } from "react";

export default function useLocalStorage(auth, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      if (localStorage) {
        const item = localStorage.getItem(auth);
        return item ? JSON.parse(item) : initialValue;
      }
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);
      if (localStorage) {
        localStorage.setItem(auth, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
