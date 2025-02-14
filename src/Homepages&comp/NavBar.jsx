import React from 'react'

export default function NavBar() {
  return (
    <>
     <header className="h-[100px] bg-transparent backdrop-blur-2xl shadow-lg rounded-xl flex items-center justify-evenly ">
      <h1 className="text-3xl text-green-600 font-extrabold">
        Jobie
      </h1> 

      <div className="flex">
        <p className='m-2 text-green-400 hover:text-white hover:underline '>
          Home
        </p>
        <p className='m-2 text-green-400 hover:text-white hover:underline '>
          About
        </p>
        <p className='m-2 text-green-400 hover:text-white hover:underline '>
          Contact
        </p>
        <p className='m-2 text-green-400 hover:text-white hover:underline '>
          Login
        </p>
      </div>

      <button className="rounded-lg p-3 bg-green-600 pl-6 pr-6 hover:bg-orange-500 transition-all hover:text-white">
        Sign-up
      </button>
     </header>
    </>
  )
}
