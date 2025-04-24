import { useState } from "react";
import styles from "./css/form.module.css";

export default function Form({ todos, setTodos }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  function sub(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <div className={styles.inputContainer}>
      <form onSubmit={sub} className={styles.todoform}>
        <input
          className={styles.modernInput}
          placeholder="Enter todo item"
          type="text"
          value={todo.name}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
        />
        <button className={styles.modernButton}>Add</button>
      </form>
    </div>
  );
}
