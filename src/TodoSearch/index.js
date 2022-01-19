import React, { useContext } from "react";

import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const value = useContext(TodoContext);

  const onSearchValueChange = (event) => {
    value.setTextToSearch(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={value.text}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
