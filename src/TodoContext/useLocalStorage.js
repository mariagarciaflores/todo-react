import { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [items, setItems] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        const parsedItems = localStorageItem
          ? JSON.parse(localStorageItem)
          : initialValue;

        setItems(parsedItems);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }, 1000);
  }, []);

  const saveItems = (newItems) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItems));

      setItems(newItems);
    } catch (error) {
      setError(error);
    }
  };

  return { items, saveItems, loading, error };
}

export { useLocalStorage };
