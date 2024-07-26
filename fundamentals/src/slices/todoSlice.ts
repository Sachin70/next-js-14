import { createSlice, nanoid } from "@reduxjs/toolkit";

interface Todo {
  id: string;
  text: string;
}

interface TodoState {
  todos: Todo[];
}

const initialState = {
  todos: [{ id: "1", text: "Hello Sachin" }],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      const update = state.todos.find((todo) => todo.id === action.payload);
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
