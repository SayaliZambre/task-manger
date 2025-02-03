"use client";

import AddTodo from "@/components/AddTodo";
import Navbar from "@/components/Navbar";
import Todo from "@/components/Todo";

export default function Page() {
  return (
    <main className="flex flex-col items-center min-h-screen px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-8">
        Task Management App
      </h1>
      <Navbar />
      <AddTodo />
      <Todo />
    </main>
  );
}
