import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function sub(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <div className={styles.inputContainer}>
      <form onSubmit={sub} className={styles.todoform}>
        <input
          className={styles.modernInput}
          placeholder="Enter todo item"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className={styles.modernButton}>Add</button>
      </form>
    </div>
  );
}
