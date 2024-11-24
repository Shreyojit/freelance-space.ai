import React from "react";

function Featured() {
  return (
    <div className="h-[600px] flex justify-center bg-[#013914] text-white">
      <div className="w-[1400px] flex items-center">
        {/* Left Section (2 parts) */}
        <div className="flex-[2] flex flex-col gap-8">
          <h1 className="text-5xl">
            Find the perfect <span className="italic font-light">freelance</span> services for your business
          </h1>
        
          <div className="bg-white rounded-md flex items-center overflow-hidden">
  {/* Left Section: Input field */}
  <div className="flex items-center gap-2 px-3 w-5/6">
    <img src="./img/search.png" alt="Search Icon" className="w-5 h-5 m-2" />
    <input 
      type="text" 
      placeholder='Try "building mobile app"' 
      className="border-none outline-none placeholder-gray-400 w-full" 
    />
  </div>

  {/* Right Section: Button */}
  <button className="w-1/6 h-12 bg-[#1dbf73] text-white cursor-pointer">
    Search
  </button>
</div>


<div className="flex items-center gap-3">
  <span className="whitespace-nowrap">Popular:</span>

  {/* Web Design Button */}
  <button className="px-3 py-1 text-white border border-white rounded-full bg-transparent text-sm hover:bg-white hover:text-[#1dbf73] transition duration-200">
    Web Design
  </button>

  {/* WordPress Button */}
  <button className="px-3 py-1 text-white border border-white rounded-full bg-transparent text-sm hover:bg-white hover:text-[#1dbf73] transition duration-200">
    WordPress
  </button>

  {/* Logo Design Button */}
  <button className="px-3 py-1 text-white border border-white rounded-full bg-transparent text-sm hover:bg-white hover:text-[#1dbf73] transition duration-200">
    Logo Design
  </button>

  {/* AI Services Button */}
  <button className="px-3 py-1 text-white border border-white rounded-full bg-transparent text-sm hover:bg-white hover:text-[#1dbf73] transition duration-200">
    AI Services
  </button>
</div>


        
        </div>
        {/* Right Section (3 parts) */}
        <div className="flex-[1] h-full">
        <img 
  src="./img/man.png" 
  alt="Man Illustration" 
  className="h-full object-contain hidden md:block" 
/>

        </div>
      </div>
    </div>
  );
}

export default Featured;
