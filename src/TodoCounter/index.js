import React, { useContext } from "react";

import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const value = useContext(TodoContext);

  return (
    <h2 className="TodoCounter">{`Has completado ${value.completedTodos} de ${value.totalTodos} TODOs`}</h2>
  );
}

export { TodoCounter };
