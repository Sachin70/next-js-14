"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { removeTodo, updateTodo } from "@/slices/todoSlice";
import { RootState } from "@/store";

interface Todo {
  id: string;
  text: string;
}

export const TodoItem = () => {
  const todos = useSelector((state: RootState) => state?.todos);
  const dispatch = useDispatch();

  return (
    <>
      <ul className="w-full bg-white shadow-lg rounded-lg overflow-hidden mt-10">
        <h2 className="text-gray-800 text-xl font-bold text-center">
          Todo List
        </h2>

        {todos.map((todo: Todo) => {
          return (
            <li
              key={todo.id}
              className="flex justify-between items-center p-4 border-b w-full"
            >
              <span className="text-gray-800 font-bold">{todo.text}</span>

              <div className="flex gap-x-4 items-center">
                <button
                  onClick={() => dispatch(updateTodo(todo.id))}
                  className="text-green-500 hover:text-green-700 focus:outline-none focus:text-green-700"
                >
                  Update
                </button>
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-red-500 hover:text-red-700 focus:outline-none focus:text-red-700"
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
