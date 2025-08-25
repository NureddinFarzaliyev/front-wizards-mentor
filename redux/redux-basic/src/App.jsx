import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const [text, setText] = useState("");

  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const addTodo = () => {
    if (text.trim() === "") return;
    dispatch({ type: "ADD_TODO", payload: { text } });
    setText("");
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "ALL") return true;
    if (filter === "COMPLETED") return todo.completed;
    if (filter === "INCOMPLETE") return !todo.completed;
    return true;
  });

  console.log("Filtered Todos:", filteredTodos);

  return (
    <div
      style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}
    >
      <h1>Redux Todo List</h1>

      <div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a todo"
        />
        <button onClick={addTodo}>Add</button>
      </div>

      {/* Filters */}
      <div style={{ margin: "15px 0" }}>
        <button
          onClick={() => dispatch({ type: "SET_FILTER", payload: "ALL" })}
        >
          All
        </button>
        <button
          onClick={() => dispatch({ type: "SET_FILTER", payload: "COMPLETED" })}
        >
          Done
        </button>
        <button
          onClick={() =>
            dispatch({ type: "SET_FILTER", payload: "INCOMPLETE" })
          }
        >
          Not Done
        </button>
        <p style={{ marginLeft: "10px" }}>Current Filter: {filter}</p>
      </div>

      {/* Todo List */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredTodos.map((todo) => (
          <li key={todo.id} style={{ margin: "8px 0" }}>
            <span
              onClick={() =>
                dispatch({ type: "TOGGLE_TODO", payload: todo.id })
              }
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>
            <button
              style={{ marginLeft: "10px" }}
              onClick={() =>
                dispatch({ type: "REMOVE_TODO", payload: todo.id })
              }
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
