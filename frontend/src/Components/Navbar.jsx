import React from "react";
import { useState } from "react";
import { AlignJustify, X } from "lucide-react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex relative flex-row items-center justify-between sm:px-32 h-10 sm:h-20 p-2">
      <a
        href="/"
        className="fixed inset-x-0 top-0 flex justify-center sm:justify-start items-center w-screen sm:static"
      >
        <div className=" flex mt-5 sm:mt-20">
          <img
            src="/images/Logo.png"
            alt="Logo"
            className=" w-10 h-10 sm:w-20 sm:h-20"
          />
          <div className="hidden sm:flex text-4xl">
            <div className="h-full text-start">
              <span className="text-blue-500">DEEP</span>
              &nbsp;
              <span>NET</span>
              <br />
              <span className="text-gray-500">SOFT</span>
            </div>
          </div>
        </div>
      </a>

      <nav className="hidden sm:flex justify-end h-full gap-4 py-12 w-[60rem] uppercase font-semibold">
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
      <nav className="sm:hidden absolute right-3 top-3 flex flex-col items-end gap-1 font-semibold">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="sm:hidden font-normal text-xl hover:text-gray-500"
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
    </header>
  );
};

export default Navbar;
