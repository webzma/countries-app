import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";

export default function Header() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  function handleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <header className="w-full dark:bg-dark-blue-elements-dark dark:shadow-md dark:shadow-slate-800 py-4 md:px-20 absolute left-0 top-0 px-4 shadow-gray-100 shadow-lg">
      <nav className="w-full flex  justify-between items-center">
        <h2 className="text-2xl font-bold dark:text-white-color text-very-dark-blue-text-light">
          Where in the World?
        </h2>
        <div className="flex items-center gap-2 dark:text-white-color">
          <FaRegMoon />
          <button
            onClick={handleTheme}
            className="dark:text-white-color text-very-dark-blue-text-light font-semibold"
          >
            Dark mode
          </button>
        </div>
      </nav>
    </header>
  );
}
