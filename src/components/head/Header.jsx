import React from "react";
// import './Header.css'
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
              className="mx-2  text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
            Login</button>
            <button
              type="button"
              className="mx-2  text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
            SignUp</button>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>Home</li>
                <li>About</li>
                <li>Matches</li>
                <li>Store</li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
