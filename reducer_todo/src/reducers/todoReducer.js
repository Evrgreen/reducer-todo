const newTodoInitial = {
  title: "",
  completed: false,
  desc: "",
  editing: false
};

export const todoInitialState = {
  newTodo: { ...newTodoInitial },
  editing: false,
  todos: [
    {
      title: "make jill sandwich",
      completed: false,
      completeBy: "",
      desc: "",
      tags: [],
      id: 15,
      editing: false
    }
  ]
};

export const todoReducer = (state, action) => {
  const { newTodo, todos } = state;
  const { field, payload } = action;
  console.log(newTodo);
  console.log({ state, action });
  switch (action.type) {
    case "UPDATING": {
      return {
        ...state,
        newTodo: { ...newTodo, [field]: payload.letter, id: payload.id }
      };
    }
    case "ADD_TODO": {
      return {
        ...state,
        todos: [...todos, newTodo],
        newTodo: { ...newTodoInitial }
      };
    }
    case "TOGGLE_COMPLETED": {
      return {
        ...state,
        todos: todos.map((item) => {
          if (item.id === payload.id) {
            return { ...item, completed: !item.completed };
          } else {
            return item;
          }
        })
      };
    }
    case "DELETE": {
      return {
        ...state,
        todos: todos.filter((item) => {
          console.log(item);
          if (!(item.id === payload.id)) {
            console.log("Gottem");
            return item;
          }
        })
      };
    }
    case "UPDATING": {
      return;
    }
  }
};
