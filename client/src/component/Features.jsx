import React from "react";

const Features = () => {
  return (
    <div className="features bg-[#f1fdf7] py-24 flex justify-center">
      <div className="container flex flex-col lg:flex-row gap-[200px] items-center w-full max-w-screen-xl">
        <div className="item flex flex-col gap-4 flex-1">
        <h1 className="font-medium mb-2 text-4xl">
         A whole world of freelance talent at your fingertips
         </h1>

          <div className="title flex items-center gap-2 text-[#666] font-semibold text-lg">
            <img src="./img/check.png" alt="check" className="w-6 h-6" />
            The best for every budget
          </div>
          <p className="text-lg font-light text-gray-700 mb-5 leading-7 tracking-wide">
            Find high-quality services at every price point. No hourly rates, just project-based pricing.
          </p>
          <div className="title flex items-center gap-2 text-[#666] font-semibold text-lg">
            <img src="./img/check.png" alt="check" className="w-6 h-6" />
            Quality work done quickly
          </div>
          <p className="text-lg font-light text-gray-700 mb-5 leading-7 tracking-wide">
            Find the right freelancer to begin working on your project within minutes.
          </p>
          <div className="title flex items-center gap-2 text-[#666] font-semibold text-lg">
            <img src="./img/check.png" alt="check" className="w-6 h-6" />
            Protected payments, every time
          </div>
          <p className="text-lg font-light text-gray-700 mb-5 leading-7 tracking-wide">
            Always know what you'll pay upfront. Your payment isn't released until you approve the work.
          </p>
          <div className="title flex items-center gap-2 text-[#666] font-semibold text-lg">
            <img src="./img/check.png" alt="check" className="w-6 h-6" />
            24/7 support
          </div>
          <p className="text-lg font-light text-gray-700 mb-5 leading-7 tracking-wide">
            Find high-quality services at every price point. No hourly rates, just project-based pricing.
          </p>
        </div>
        <div className="flex-1 lg:flex-3 lg:block hidden">
          <video src="./img/video.mp4" controls className="w-[720px]" />
        </div>
      </div>
    </div>
  );
};

export default Features;
