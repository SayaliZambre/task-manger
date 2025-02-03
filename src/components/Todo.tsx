"use client";

import { useTodos } from "../store/Todos";
import { useSearchParams } from "next/navigation";
import { FiTrash2 } from "react-icons/fi";

const Todo = () => {
  const { todos, toggleTodoAsCompleted, handleTodoDeleted } = useTodos();
  const searchParams = useSearchParams();
  const todosFilter = searchParams.get("todos");
  let filteredTodos = todos;

  if (todosFilter === "active") {
    filteredTodos = filteredTodos.filter((todo) => !todo.isCompleted);
  } else if (todosFilter === "completed") {
    filteredTodos = filteredTodos.filter((todo) => todo.isCompleted);
  }

  return (
    <ul className="w-full sm:w-[550px] space-y-3">
      {filteredTodos.map((todo) => {
        return (
          <li
            key={todo.id}
            className={`flex items-center justify-between px-4 py-3 rounded-md shadow-md ${
              todo.isCompleted ? "bg-gray-800 line-through text-gray-400" : "bg-gray-900"
            }`}
          >
            <input
              type="checkbox"
              id={`todo-${todo.id}`}
              checked={todo.isCompleted}
              onChange={() => toggleTodoAsCompleted(todo.id)}
              className="cursor-pointer accent-violet-600"
            />
            <label
              htmlFor={`todo-${todo.id}`}
              className="flex-1 mx-3 text-lg"
            >
              {todo.task}
            </label>
            {todo.isCompleted && (
              <button
                type="button"
                onClick={() => handleTodoDeleted(todo.id)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded flex items-center gap-1"
              >
                Delete <FiTrash2 />
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Todo;
