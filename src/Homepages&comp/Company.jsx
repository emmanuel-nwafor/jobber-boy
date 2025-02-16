import React from 'react';

export default function JobOpportunities() {
  return (
    <div className="bg-[#27272a] flex flex-col items-center justify-center p-16 sm:p-12 md:p-20 lg:p-24 relative">
      
      {/* Section Title */}
      <div className="text-center mb-10">
        <h1 className="text-xl text-green-600 font-bold">GET HIRED</h1>
        <h1 className="text-3xl max-md:text-2xl text-white font-bold">
          Work at Top <span className="text-pink-600">Companies</span>
        </h1>
        <p className="text-gray-400 mt-3 max-w-lg">
          Discover exciting job opportunities at world-class companies. 
          Apply now and take the next step in your career!
        </p>
      </div>
      
      {/* Company Logos with Job Links */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 items-center justify-evenly">
        <a href="https://www.tesla.com/careers" target="_blank" rel="noopener noreferrer">
          <img className=" sm:h-10 hover:scale-110 transition-transform" src="https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG3.png" alt="Tesla Jobs" />
        </a>
        <a href="https://careers.google.com/" target="_blank" rel="noopener noreferrer">
          <img className=" sm:h-10 hover:scale-110 transition-transform" src="https://pngimg.com/uploads/google/google_PNG19631.png" alt="Google Jobs" />
        </a>
        <a href="https://www.amazon.jobs/en/" target="_blank" rel="noopener noreferrer">
          <img className=" sm:h-10 hover:scale-110 transition-transform" src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="Amazon Jobs" />
        </a>
        <a href="https://careers.microsoft.com/" target="_blank" rel="noopener noreferrer">
          <img className=" sm:h-10 hover:scale-110 transition-transform" src="https://pngimg.com/uploads/microsoft/microsoft_PNG16.png" alt="Microsoft Jobs" />
        </a>
        <a href="https://www.metacareers.com/" target="_blank" rel="noopener noreferrer">
          <img className=" sm:h-10 hover:scale-110 transition-transform" src="https://pngimg.com/uploads/meta/meta_PNG9.png" alt="Meta Jobs" />
        </a>
      </div>

      {/* Explore More Jobs Button */}
      <div className="mt-10">
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all">
          Explore More Jobs
        </button>
      </div>
    </div>
  );
}
