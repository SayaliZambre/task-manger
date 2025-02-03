"use client";

import { useTodos } from "../store/Todos";
import { FormEvent, useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const { handleAddTodo } = useTodos();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.length === 0) {
      alert("Can't add an empty todo");
      return;
    }
    handleAddTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex gap-4 items-center mt-6">
      <input
        type="text"
        placeholder="Enter your task..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="bg-gray-800 text-white placeholder-gray-500 px-4 py-2 w-[300px] md:w-[450px] border border-gray-700 rounded-md focus:ring-2 focus:ring-violet-600"
      />
      <button
        type="submit"
        className="bg-violet-600 hover:bg-violet-700 px-6 py-2 rounded-md text-white font-semibold"
      >
        ADD
      </button>
    </form>
  );
};

export default AddTodo;
