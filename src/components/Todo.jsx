import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [myItem, setMyItem] = useState("");
  const [myItems, setMyItems] = useState([]);
  const [todos, setTodos] = useState([]);
  let result = "";

  function final() {
    result("I will " + todo + " " + "and " + myItem);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setMyItems([...myItems, myItem]);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          value={todo}
          placeholder="Enter todo here"
        />
        <input
          onChange={(e) => setMyItem(e.target.value)}
          type="text"
          value={myItem}
          placeholder="Enter myItem in Number here"
        />
        <button type="submit">Add</button>
      </form>
      {console.log(
        "I will " + todo + " pm" + " " + "and sleep " + myItem + "pm"
      )}
      {final}
    </div>
  );
}
