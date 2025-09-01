import { useState } from "react";
import store, { addTodoAction } from "./../features/store";

const Input = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        placeholder="enter new todo"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      <button
        onClick={() => {
          store.dispatch(addTodoAction(value));
          setValue("");
        }}
      >
        Add todo
      </button>
    </div>
  );
};

export default Input;
