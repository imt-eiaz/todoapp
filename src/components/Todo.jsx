import { useState } from "react";
import "./../App.css";
import TodoItem from "./TodoItem";
export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function sub(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <div className="todo">
      <form onSubmit={sub}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button>Add</button>
      </form>
      {todos.map((item) => (
        <TodoItem item={item} key={item} />
      ))}
    </div>
  );
}
