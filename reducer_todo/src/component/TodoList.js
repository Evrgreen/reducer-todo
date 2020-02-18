import React, { useReducer } from "react";
import { todoInitialState, todoReducer } from "../reducers/todoReducer";

export default function TodoList() {
  const [state, dispatch] = useReducer(todoReducer, todoInitialState);
  const { todos, newTodo } = state;
  console.log(todos);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_TODO" });
  };
  return (
    <>
      <h1>TodoList</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newTodo">Enter New Todo:</label>
        <input
          type="text"
          id="newTodo"
          onChange={(e) =>
            dispatch({
              type: "UPDATING",
              field: "title",
              payload: { letter: e.target.value, id: Date.now() }
            })
          }
          placeholder="New Task"
          value={newTodo.title}
        />
        <button>Add</button>
      </form>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h1
              onClick={() =>
                dispatch({
                  type: "TOGGLE_COMPLETED",
                  payload: { id: todo.id }
                })
              }
            >
              {todo.title}
            </h1>
            <h2>{`${todo.completed}`}</h2>
            <button
              onClick={() =>
                dispatch({
                  type: "DELETE",
                  payload: { id: todo.id }
                })
              }
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
}
