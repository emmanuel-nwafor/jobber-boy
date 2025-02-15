import React from 'react'

export default function Home() {
  return (
    <>
      <div className="h-[100vh] max-md:h-screen bg-[url(/src/assets/image_bg7.jpg)] items-center justify-center bg-cover bg-center">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center h-full px-4">
          {/* Landing Content */}
          <h1 className="text-[65px] max-md:text-4xl max-md:mt-10 max-md:text-center text-zinc-700 font-extrabold p-8 sm:col-span-3 ">
            Land Your Dream Jobs With <br />JOBBIE
          </h1>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:col-span-3">

            <div className="bg-transparent backdrop-blur-md p-10 max-md:p-4 shadow-sm rounded-xl">
              <p className="text-3xl text-center max-md:text-xl text-zinc-200">
                <span className="text-4xl max-md:text-2xl font-bold text-green-700">200+</span> <br /> Job Recruiters
              </p>
            </div>

            <div className="bg-transparent backdrop-blur-md p-10 max-md:p-4 shadow-sm rounded-xl">
              <p className="text-3xl text-center max-md:text-xl text-zinc-200">
                <span className="text-4xl max-md:text-2xl font-bold text-green-700">200+</span> <br /> Job Employees
              </p>
            </div>

            <div className="bg-transparent backdrop-blur-md p-10 max-md:p-4 shadow-sm rounded-xl">
              <p className="text-3xl text-center max-md:text-xl text-zinc-200">
                <span className="text-4xl max-md:text-2xl font-bold text-green-700">200+</span> <br /> Job Recruiters
              </p>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}
