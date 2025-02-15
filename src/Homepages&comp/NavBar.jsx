import React, { useState } from 'react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-[100px] max-md:h-[90px] bg-white shadow-lg flex items-center justify-between px-4 sm:px-8 z-50">
        {/* Logo */}
        <h1 className="text-3xl max-md:text-md m-2 text-black font-extrabold">
          Jobbie
        </h1>

        {/* Navigation Links */}
        <nav className="flex space-x-4 sm:flex sm:space-x-8 max-md:hidden">
          <p className="text-brown-400 hover:text-green-700 hover:underline cursor-pointer">Home</p>
          <p className="text-brown-400 hover:text-green-700 hover:underline cursor-pointer">About</p>
          <p className="text-brown-400 hover:text-green-700 hover:underline cursor-pointer">Contact</p>
          <p className="text-brown-400 hover:text-green-700 hover:underline cursor-pointer">Login</p>
        </nav>

        {/* Toggle Button for Mobile */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-2xl text-brown-600">
            <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`}></i>
          </button>
        </div>

        {/* Sign-up Button */}
        <button className="rounded-lg p-3 max-md:hidden bg-black pl-6 pr-6 hover:bg-green-700 text-white transition-all">
          Sign-up
        </button>
      </header>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <div className="sm:hidden fixed top-[130px] max-md:top-[90px] left-0 right-0 bg-white shadow-lg rounded-b-lg py-4 px-6 z-40">
          <nav className="flex flex-col space-y-4">
            <p className="text-brown-400 hover:text-green-700 hover:underline cursor-pointer">Home</p>
            <p className="text-brown-400 hover:text-green-700 hover:underline cursor-pointer">About</p>
            <p className="text-brown-400 hover:text-green-700 hover:underline cursor-pointer">Contact</p>
            <p className="text-brown-400 hover:text-green-700 hover:underline cursor-pointer">Login</p>
            <button className="rounded-lg p-3 bg-black pl-6 pr-6 hover:bg-green-700 text-white transition-all">
              Sign-up
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
