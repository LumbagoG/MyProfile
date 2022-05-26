import React, { useState } from "react";

// Styles
import "./navbar.css";

// Components
import Anchor from "../anchor/anchor";
import ThemeSwitcherBtn from "../buttons/themeSwitcherBtn/themeSwitcherBtn";

/**
 * Navigation bar
 * @constructor
 */
const Navbar = (): JSX.Element => {
  const [openBurgerMenu, setOpenBurgerMenu] = useState("none");

  return (
    <>
      {/* Navbar */}
      <nav className="dark:bg-gray-800 dark:text-white bg-blue-50 text-gray-800">
        {/* Header desktop */}
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Anchors navbar */}
            <div className="flex items-center w-full">
              <div className="flex-shrink-0">
                <h1 className="text-xl">My Profile</h1>
              </div>

              <div className="hidden md:flex flex justify-between w-full">
                <div className="hidden md:flex flex w-full">
                  <div className="ml-10 flex w-full items-center space-x-4">
                    <Anchor
                      children="About me"
                      className="w-24 bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium"
                    />

                    <Anchor
                      children="My skills"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    />

                    <Anchor
                      children="Contact me"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    />
                  </div>
                </div>
              </div>
            </div>

            <ThemeSwitcherBtn />

            {/* Burger menu */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() =>
                  openBurgerMenu !== "none"
                    ? setOpenBurgerMenu("none")
                    : setOpenBurgerMenu("flex")
                }
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Burger menu mobile */}
        <div
          style={{ display: `${openBurgerMenu}` }}
          className="md:hidden"
          id="mobile-menu"
        >
          {/* Anchors burger menu */}
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 sm:w-full">
            <Anchor
              children="About me"
              className="sm:max-w-full bg-gray-800 text-white block px-3 py-2 rounded-md text-base font-medium"
            />

            <Anchor
              children="My skills"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            />

            <Anchor
              children="Contact me"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
