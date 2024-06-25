import React from "react";
import { useState } from "react";
import { AlignJustify, X } from "lucide-react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header>
      <div className="flex relative flex-row items-center justify-between sm:px-32 h-10 sm:h-20 p-2">
        <a
          href="/"
          className="fixed z-10 inset-x-0 top-0 flex justify-center sm:justify-start items-center w-screen sm:static"
        >
          <div className=" flex mt-5 sm:mt-20">
            <img
              src="/images/Logo.png"
              alt="Logo"
              className=" w-10 h-10 sm:w-20 sm:h-20"
            />
            <div className="hidden sm:flex text-4xl">
              <div className="h-full text-start oswald-font">
                <span className="text-blue-500">DEEP</span>
                &nbsp;
                <span>NET</span>
                <br />
                <span className="text-gray-500">SOFT</span>
              </div>
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex justify-end h-full gap-4 py-12 w-[80rem] uppercase oswald-font">
          <a href="#" className="hover:text-blue-400">
            Home
          </a>
          <a href="#" className="hover:text-blue-400">
            Menu
          </a>
          <a href="#" className="hover:text-blue-400">
            Make a Reservation
          </a>
          <a href="#" className="hover:text-blue-400">
            Contact Us
          </a>
        </nav>
        <nav className="sm:hidden z-20 absolute right-3 top-3 flex flex-col items-end gap-1 font-semibold">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="sm:hidden z-20 oswald-font text-xl hover:text-gray-500"
          >
            {showMenu ? <X /> : <AlignJustify />}
          </button>
          {showMenu && (
            <>
              <a href="#" className="hover:text-blue-400">
                Home
              </a>
              <a href="#" className="hover:text-blue-400">
                Menu
              </a>
              <a href="#" className="hover:text-blue-400">
                Make a Reservation
              </a>
              <a href="#" className="hover:text-blue-400">
                Contact Us
              </a>
            </>
          )}
        </nav>
      </div>
      <div className="relative bg-cover bg-center h-60 bg-header-image">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <p
            className="text-4xl sm:text-6xl text-gray-900 dark:text-white font-semibold uppercase"
            style={{ textShadow: "3px 3px 6px rgba(255, 0, 0, 0.5)" }}
          >
            menu
          </p>

          <p className="font-serif kelly-slab-font sm:kelly-slab-font sm:w-[50%] m-2 text-gray-300">
            Please take a look at our menu featuring food, drinks, and brunch.
            If you'd like to place an order, use the "Order Online" button
            located below the menu.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
