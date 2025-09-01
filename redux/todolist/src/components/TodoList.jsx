import { useSelector } from "react-redux";
import store, { removeTodoAction } from "../features/store";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      {todos.map((todo, index) => (
        <p key={index}>
          [{index}] - {todo}
          <button
            onClick={() => {
              store.dispatch(removeTodoAction(index));
            }}
          >
            Delete
          </button>
        </p>
      ))}
    </div>
  );
};

export default TodoList;
