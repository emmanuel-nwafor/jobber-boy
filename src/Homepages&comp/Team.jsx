import React from 'react'

export default function Team() {
  return (
  <>
    <div className="relative bg-zinc-900 items-center justify-center p-[200px] sm:p-[60px] md:p-[100px] lg:p-[210px] max-md:p-[30px]">
        
    {/* Main Content */}
    <div className="flex max-md:flex-col max-md:items-center items-center justify-between relative z-10">
      <div>
        <div>
          <h1 className="text-xl text-green-600 font-bold">TEAM</h1>
          <h1 className="text-3xl max-md:text-2xl text-white font-bold">
            Find Your <span className="text-pink-600">Team</span>
          </h1>
        </div>
        <br />
        <p className="text-white">
            Together, we create access to information and build products that improve people's lives.
            Want to be a <span className="text-green-700">Jobbie</span>? Find your role. 
        </p>
        <br />
        <button className="hover:bg-slate-700 hover:text-white transition-all p-3 pl-6 pr-6 bg-zinc-500 text-black">
          Learn More
        </button>
      </div>

      <div className="max-md:mt-6 max-md:m-0 m-7">
        <img
          className=" transition-all"
          src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="image_1"
        />
      </div>
    </div>

    {/* SVG Wave Transition to Next Section */}
      <div className="absolute -bottom-px left-0 w-full overflow-hidden">
        <svg 
         className="w-full h-auto"
         xmlns="http://www.w3.org/2000/svg"  
         viewBox="0 0 1440 320">
          <path 
            fill="#27272a" 
            fill-opacity="1" 
            d="M0,192L34.3,192C68.6,192,137,192,206,165.3C274.3,139,343,85,411,85.3C480,85,549,139,617,181.3C685.7,224,754,256,823,266.7C891.4,277,960,267,1029,245.3C1097.1,224,1166,192,1234,149.3C1302.9,107,1371,53,1406,26.7L1440,0L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
          </path>
        </svg>
      </div>

  </div>
</>
  )
}
