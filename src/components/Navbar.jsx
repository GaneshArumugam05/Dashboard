import React from "react";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { darkMode, setDarkMode } = useTheme();
  return (
    <header className="w-full h-16 flex items-center justify-between px-4 border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 bg-white dark:text-white">
      <form className="flex items-center bg-gray-100 dark:bg-gray-800 rounded px-2 py-1 flex-1 ml-16 max-w-xs sm:max-w-sm md:max-w-md ml-16 sm:ml-4">
  <FaSearch className="mr-2" />
  <input
    className="bg-transparent outline-none w-full"
    placeholder="Search..."
    type="text"
  />
</form>

      <div className="flex items-center gap-4 ml-4">
        <button onClick={() => setDarkMode(!darkMode)} type="button" className="focus:outline-none">
          {darkMode ? <MdLightMode className="text-yellow-400" /> : <MdDarkMode className="text-gray-800" />}
        </button>
        <FaBell />
        <FaUserCircle />
      </div>
    </header>
  );
}

export default Navbar;
