import React, { useContext } from "react";

import { CreateTodoButton } from "../CreateTodoButton";
import { EmptyTodos } from "../EmptyTodos";
import { Modal } from "../Modal";
import { TodoCounter } from "../TodoCounter";
import { TodoContext } from "../TodoContext";
import { TodosError } from "../TodosError";
import { TodoForm } from "../TodoForm";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodosLoading } from "../TodosLoading";
import { TodoSearch } from "../TodoSearch";

function AppUI() {
  const value = useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {value.error && <TodosError error={value.error} />}

        {value.loading && <TodosLoading />}

        {!value.loading && !value.filteredTodos.length && <EmptyTodos />}

        {value.filteredTodos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            completed={todo.completed}
            onToggleCompleted={() => value.toggleCompletedTodo(todo.text)}
            onDeleteTodo={() => value.deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

      {value.openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </React.Fragment>
  );
}

export { AppUI };
