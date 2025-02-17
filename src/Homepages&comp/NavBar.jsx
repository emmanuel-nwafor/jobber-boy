import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchInput, setShowSearchInput] = useState(false); // for medium screens

  // Toggle functions
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearchInput = () => setShowSearchInput(!showSearchInput);
  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-[100px] max-md:h-[90px] bg-white shadow-lg flex items-center justify-evenly z-50">
        {/* Logo */}
        <h1 className="text-3xl md:text-2xl lg:text-3xl max-md:text-sm flex items-center text-black font-extrabold">
          <img src={logo} className="h-20 max-md:h-10" alt="Jobbie Logo" />
          Jobbie
        </h1>

        {/* Navigation Links (visible on md and up) */}
        <nav className="hidden md:flex space-x-3 sm:space-x-5">
          <p className="text-brown-400 hover:text-green-700 hover:underline cursor-pointer">
            Home
          </p>
          <p className="text-brown-400 hover:text-green-700 hover:underline cursor-pointer">
            Teams
          </p>
          <p className="text-brown-400 hover:text-green-700 hover:underline cursor-pointer">
            Location
          </p>
          <p className="text-brown-400 hover:text-green-700 hover:underline cursor-pointer">
            Jobs
          </p>
        </nav>

        {/* Full search bar on large screens */}
        <form
          onSubmit={handleSearchSubmit}
          className="hidden lg:flex items-center border border-gray-300 rounded-lg overflow-hidden relative"
        >
          <i className="bx bx-search absolute left-3 text-gray-500 text-lg"></i>
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="p-2 pl-10 outline-none w-64"
          />
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 hover:bg-green-700"
          >
            Search
          </button>
        </form>

        {/* Search icon for medium screens (md only) */}
        <button
          className="hidden md:flex lg:hidden items-center justify-center p-2 text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300"
          onClick={toggleSearchInput}
        >
          <i className="bx bx-search text-2xl"></i>
        </button>

        {/* Toggle Button for Mobile (below md) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl text-brown-600">
            <i className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"}`}></i>
          </button>
        </div>

        {/* Sign-up Button (visible on md and up) */}
        <Link to="/signup">
        <button className="hidden md:block rounded-lg p-3 bg-black px-6 hover:bg-green-700 text-white transition-all">
          Sign-up
        </button>
        </Link>
      </header>

      {/* Medium Screen Search Overlay (md only) */}
      {showSearchInput && (
        <form
          onSubmit={handleSearchSubmit}
          className="md:block lg:hidden absolute top-[110px] right-4 bg-white shadow-lg border border-gray-300 rounded-lg p-2 flex items-center w-64 z-40"
        >
          <i className="bx bx-search text-gray-500 mr-2"></i>
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="outline-none flex-1"
          />
          <button
            type="submit"
            className="text-white bg-black px-3 py-1 rounded-lg hover:bg-green-700"
          >
            Go
          </button>
        </form>
      )}

      {/* Dropdown Menu for Mobile (below md) */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[90px] left-0 right-0 bg-white shadow-lg rounded-b-lg py-4 px-6 z-40">
          <nav className="flex flex-col space-y-4">
            <p className="text-brown-400 hover:text-green-700 hover:underline cursor-pointer">
              Home
            </p>
            <p className="text-brown-400 hover:text-green-700 hover:underline cursor-pointer">
              Teams
            </p>
            <p className="text-brown-400 hover:text-green-700 hover:underline cursor-pointer">
              Location
            </p>
            <p className="text-brown-400 hover:text-green-700 hover:underline cursor-pointer">
              Jobs
            </p>

            {/* Search Bar inside Mobile Dropdown */}
            <form
              onSubmit={handleSearchSubmit}
              className="flex items-center border border-gray-300 rounded-lg overflow-hidden"
            >
              <i className="bx bx-search text-gray-500 mx-3"></i>
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="p-2 px-4 outline-none w-full"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 hover:bg-green-700"
              >
                Search
              </button>
            </form>

            <Link to="/signup"  className="text-center rounded-lg p-3 bg-black px-6 hover:bg-green-700 text-white transition-all">
            <button className="text-center">
              Sign-up
            </button>
            </Link>

          </nav>
        </div>
      )}
    </>
  );
}
