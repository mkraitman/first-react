import "./App.css";
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";

const todos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Cortar cebolla", completed: false },
  { text: "Cortar cebolla", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      {/* <TodoSearch /> */}
      <input placeholder="Cebolla" />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
