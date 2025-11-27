import React, { useState } from "react";
import {
  FaSearch,
  FaBell,
  FaUserCircle,
  FaUserEdit,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { darkMode, setDarkMode } = useTheme();
  const [showProfileCard, setShowProfileCard] = useState(false);
  const navigate = useNavigate();

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
  };

  // Function to handle navigation and close popup
  const handleNavigate = (path) => {
    navigate(path);
    setShowProfileCard(false);
  };

  return (
    <header className="w-full h-16 flex items-center justify-between px-4 border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 bg-white dark:text-white relative">
      <form className="flex items-center bg-gray-100 dark:bg-gray-800 rounded px-3 py-1 flex-1 ml-16 max-w-xs sm:max-w-sm md:max-w-md sm:ml-4">
        <FaSearch className="mr-2 text-gray-500 dark:text-gray-400" />
        <input
          className="bg-transparent outline-none w-full placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100"
          placeholder="Search..."
          type="text"
        />
      </form>

      <div className="flex items-center gap-4 ml-4 relative">
        <button
          onClick={() => setDarkMode(!darkMode)}
          type="button"
          className="focus:outline-none"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <MdLightMode className="text-yellow-400" size={24} />
          ) : (
            <MdDarkMode className="text-gray-800" size={24} />
          )}
        </button>
        <FaBell size={20} className="text-gray-600 dark:text-gray-300 cursor-pointer" />

        <button
          onClick={() => setShowProfileCard((prev) => !prev)}
          type="button"
          className="relative focus:outline-none"
          aria-label="User menu"
        >
          <FaUserCircle size={28} className="text-gray-700 dark:text-gray-200 cursor-pointer" />
        </button>

        {showProfileCard && (
          <div className="absolute right-0 top-14 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 z-50 p-5 text-gray-900 dark:text-gray-100">
            <div className="mb-4 border-b border-gray-200 dark:border-gray-700 pb-3 flex items-center gap-3">
              <FaUserCircle size={36} className="text-gray-600 dark:text-gray-400" />
              <div className="truncate">
                <div className="font-semibold text-lg">{user.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
              </div>
            </div>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleNavigate("/profile")}
                  className="flex items-center gap-3 px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition w-full text-left"
                  type="button"
                >
                  <FaUserEdit className="text-blue-500" />
                  <span>Edit profile</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate("/profile")}
                  className="flex items-center gap-3 px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition w-full text-left"
                  type="button"
                >
                  <FaCog className="text-green-500" />
                  <span>Account settings</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate("/support")}
                  className="flex items-center gap-3 px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition w-full text-left"
                  type="button"
                >
                  <FaQuestionCircle className="text-yellow-500" />
                  <span>Support</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate("/signin")}
                  className="flex items-center gap-3 px-2 py-2 rounded hover:bg-red-100 dark:hover:bg-red-700 transition w-full text-left text-red-600 dark:text-red-400"
                  type="button"
                >
                  <FaSignOutAlt />
                  <span>Sign out</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
