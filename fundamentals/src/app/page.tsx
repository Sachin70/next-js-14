"use client";

import { AddTodo } from "@/components/AddTodo";
import { TodoItem } from "@/components/Todo";
import { useThrottle } from "@/hooks/throttle";
import { useTheme } from "@/shared/themeContext";
import { useCallback, useState } from "react";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const handleCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  // const handleCountThrottled = useThrottle(() => {
  //   setDisabled(true);
  //   setCount((prevCount) => prevCount + 1);
  //   // setDisabled(false);
  // }, 2000);

  const handleCountThrottled = useThrottle(() => {
    setDisabled(true);
    setCount((prevCount) => prevCount + 1);
    setTimeout(() => setDisabled(false), 2000);
  }, 2000);

  const fetchData = async () => {
    // try {
    //   const response = await fetch("https://reqres.in/api/users?page=2");
    //   const data = await response.json();
    // } catch (err) {
    //   console.error("Error fetching data", err);
    // }

    fetch("https://reqres.in/api/users?page=2")
      .then((response) =>
        // Check if response is successful
        response.json()
      )
      .then((data) => {
        // Log the parsed data
        console.log(data.data);
      });
  };

  const [editTodo, setEditTodo] = useState();

  return (
    <div
      className={`p-20 flex flex-col items-center h-screen ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      {/* <h1>count: {count}</h1>

      <button
        className={`bg-green-700 px-4 py-2 rounded-lg mt-10 text-white ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handleCountThrottled}
        disabled={disabled}
      >
        Toggle
      </button>

      <button
        className="bg-green-700 px-4 py-2 rounded-lg mt-10 text-white"
        onClick={fetchData}
      >
        Toggle Theme
      </button> */}
      <AddTodo />
      <TodoItem />
    </div>
  );
}
