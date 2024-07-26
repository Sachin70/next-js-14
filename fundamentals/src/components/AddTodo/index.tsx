"use client";

import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTodo } from "@/slices/todoSlice";
import { RootState } from "@/store";

export const AddTodo = () => {
  const [todoText, setTodoText] = useState<string>("");
  const dispatch = useDispatch();
  const update = useSelector((state: RootState) => state.todos);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(addTodo(todoText));

    setTodoText("");
  };

  return (
    <div className="mx-auto bg-white shadow-md rounded-lg overflow-hidden w-full p-4">
      <h2 className="text-gray-800 text-xl font-semibold text-center">
        Add Todo
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="flex gap-x-5 justify-between w-full mt-4 items-center">
          <input
            type="text"
            id="todo"
            name="todo"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
            placeholder="Enter your todo"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 whitespace-nowrap"
          >
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};
