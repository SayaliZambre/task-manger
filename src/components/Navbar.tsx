"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Navbar = () => {
  const searchParams = useSearchParams();
  const todosFilter = searchParams.get("todos");

  return (
    <nav className="w-full sm:w-[550px] flex items-center justify-between border-b border-gray-700 pb-4 mb-6">
      <Link
        href="/"
        className={`${
          todosFilter === null ? "text-white font-semibold border-b-2 border-violet-600" : "text-gray-400"
        } text-lg hover:text-white`}
      >
        To Do
      </Link>
      <Link
        href="/?todos=active"
        className={`${
          todosFilter === "active" ? "text-white font-semibold border-b-2 border-violet-600" : "text-gray-400"
        } text-lg hover:text-white`}
      >
        In Progress
      </Link>
      <Link
        href="/?todos=completed"
        className={`${
          todosFilter === "completed" ? "text-white font-semibold border-b-2 border-violet-600" : "text-gray-400"
        } text-lg hover:text-white`}
      >
        Completed
      </Link>
    </nav>
  );
};

export default Navbar;
