import React, { createContext, useState } from "react";

import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

function TodoProvider(props) {
  //CUSTOM USE STATE
  const {
    items: todos,
    saveItems: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  //REACT USE STATE
  const [textToSearch, setTextToSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const filteredTodos =
    textToSearch.length >= 1
      ? todos.filter((todo) =>
          todo.text.toLowerCase().includes(textToSearch.toLowerCase())
        )
      : todos;

  const completedTodos = filteredTodos.filter((todo) => todo.completed).length;
  const totalTodos = filteredTodos.length;

  const toggleCompletedTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;

    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos, { text, completed: false }];

    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => todo.text !== text);

    saveTodos(newTodos);
  };

  const togleModal = () => {
    setOpenModal((prevState) => !prevState);
  };

  return (
    <TodoContext.Provider
      value={{
        totalTodos,
        completedTodos,
        textToSearch,
        setTextToSearch,
        filteredTodos,
        toggleCompletedTodo,
        deleteTodo,
        loading,
        error,
        openModal,
        togleModal,
        addTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoProvider, TodoContext };
