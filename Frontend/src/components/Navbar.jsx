
import React, { useEffect, useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { authUser } = useAuth();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      <li><a href="/">Home</a></li>
      <li><a href="/course">Course</a></li>
      <li><a>Contact</a></li>
      <li><a>About</a></li>
    </>
  );

  return (
    <div
      className={`max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-800 dark:text-white fixed top-0 left-0 right-0 z-50 ${
        sticky
          ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-800 duration-300"
          : ""
      }`}
    >
      <div className="navbar">
        {/* LEFT: Brand */}
        <div className="navbar-start">
          <a className="text-2xl font-bold cursor-pointer">bookStore</a>
        </div>

        {/* CENTER: Nav links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>

        {/* RIGHT: Search + Theme + Login/Logout */}
        <div className="navbar-end space-x-3">
          {/* Search bar */}
          <div className="hidden md:block">
            <label className="px-3 py-2 border rounded-md flex items-center gap-2">
              <input
                type="text"
                className="grow outline-none rounded-md px-1 dark:bg-slate-900 dark:text-white"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>

          {/* Theme toggle */}
         <label className="swap swap-rotate">
  <input type="checkbox" className="theme-controller" value="synthwave" />

  {/* Sun icon */}
  <svg
    className="swap-off fill-current w-7 h-7"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
  >
    <path
      fillRule="evenodd"
      d="M12 4.5a1 1 0 0 1 1 1V7a1 1 0 1 1-2 0V5.5a1 1 0 0 1 1-1zm0 11a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm7.5-5a1 1 0 0 1 1 1h1.5a1 1 0 1 1 0 2H20.5a1 1 0 0 1-1-1 1 1 0 0 1 1-1zm-15 0a1 1 0 0 1 1 1H3a1 1 0 1 1 0-2h1.5a1 1 0 0 1 1-1zm11.657-5.657a1 1 0 0 1 1.414 0l1.061 1.061a1 1 0 0 1-1.414 1.414l-1.061-1.061a1 1 0 0 1 0-1.414zm-11.314 11.314a1 1 0 0 1 1.414 0l1.061 1.061a1 1 0 1 1-1.414 1.414l-1.061-1.061a1 1 0 0 1 0-1.414zm11.314 1.414a1 1 0 0 1 0 1.414l-1.061 1.061a1 1 0 0 1-1.414-1.414l1.061-1.061a1 1 0 0 1 1.414 0zm-11.314-11.314a1 1 0 0 1 0 1.414L4.586 8.121a1 1 0 1 1-1.414-1.414l1.061-1.061a1 1 0 0 1 1.414 0z"
      clipRule="evenodd"
    />
  </svg>

  {/* Moon icon */}
  <svg
    className="swap-on fill-current w-7 h-7"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
  </svg>
</label>


          {/* Auth buttons */}
          {authUser ? (
            <Logout />
          ) : (
            <div>
              <a
                className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                onClick={() => document.getElementById("my_modal_3").showModal()}
              >
                Login
              </a>
              <Login />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
