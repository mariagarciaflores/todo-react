import React, { useContext } from "react";

import { TodoContext } from "../TodoContext";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  const { togleModal } = useContext(TodoContext);

  return (
    <button className="CreateTodoButton" onClick={togleModal}>
      +
    </button>
  );
}

export { CreateTodoButton };
