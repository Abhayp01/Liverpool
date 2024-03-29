import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="shadow sticky z-50 top-0">
        <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="p-1 text-white flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <div className="flex items-center">
              <img
                src="https://1000logos.net/wp-content/uploads/2017/04/Logo-Liverpool-500x313.png"
                className="h-8 mr-3 bg-red-200"
                alt="Logo"
              />
              <span className="font-bold">LiverPool Fc</span>
            </div>
            <div className="flex items-center lg:order-2">
              <button
                type="button"
                className="ml-2 transition ease-in-out delay-150 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Login
              </button>
              <button
                type="button"
                className="ml-2 transition ease-in-out delay-150 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                SignUp
              </button>
            </div>
            <div
              className="w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              
                <li><NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-red-600"
                        : "text-white hover:text-red-300"
                    } block transition ease-in-out delay-150 hover:bg-slate-900 rounded-2xl ml-auto mt-4 lg:inline-block lg:mt-0 mr-4`
                  }
                >
                  Home
                </NavLink></li>
                <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-red-600"
                        : "text-white hover:text-red-300"
                    } block transition ease-in-out delay-150 hover:bg-slate-900 rounded-2xl mt-4 lg:inline-block lg:mt-0 mr-4`
                  }
                >
                  About
                </NavLink>
                </li>
                <li>
                <NavLink
                  to="/matches"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-red-600"
                        : "text-white hover:text-red-300"
                    } block transition ease-in-out delay-150 hover:bg-slate-900 rounded-2xl mt-4 lg:inline-block lg:mt-0 mr-4`
                  }
                >
                  Matches
                </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
