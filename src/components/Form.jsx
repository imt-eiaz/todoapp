import { useState } from "react";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function sub(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <form onSubmit={sub}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
