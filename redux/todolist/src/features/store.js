import { createStore } from "redux";

const initialState = {
  todos: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
}

export const addTodoAction = (todo) => ({
  type: "ADD_TODO",
  payload: todo,
});

export const removeTodoAction = (index) => ({
  type: "REMOVE_TODO",
  payload: index,
});

const store = createStore(reducer);
export default store;
