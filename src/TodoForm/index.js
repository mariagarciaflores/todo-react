import React, { useContext, useState } from "react";

import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const [todoText, setTodoText] = useState("");
  const { addTodo, togleModal } = useContext(TodoContext);

  const onCancel = () => {
    togleModal();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(todoText);
    togleModal();
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Cortar la cebolla para el almuerzo"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={onCancel}
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancelar
        </button>
        <button
          type="submit"
          onClick={onSubmit}
          className="TodoForm-button TodoForm-button--add"
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
