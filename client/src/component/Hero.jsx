import React from 'react';

const Hero = () => {
  return (
    <div className="bg-[#0d084d] py-24">
      <div className="max-w-screen-xl mx-auto flex items-center gap-32">
        {/* Left Content */}
        <div className="text-white flex flex-col gap-4 flex-2">
          <h1 className="font-medium text-3xl mb-2">
            Liverr <i className="font-light">business</i>
          </h1>
          <h2 className="font-medium text-3xl mb-2">
            A business solution designed for <i className="font-light">teams</i>
          </h2>
          <p className="text-lg font-light mb-5">
            Upgrade to a curated experience packed with tools and benefits, dedicated to businesses
          </p>

          <div className="flex items-center gap-2 text-white font-light text-sm mb-2">
            <img src="./img/check.png" alt="Check Icon" className="w-6 h-6" />
            Connect to freelancers with proven business experience
          </div>
          <div className="flex items-center gap-2 text-white font-light text-sm mb-2">
            <img src="./img/check.png" alt="Check Icon" className="w-6 h-6" />
            Get matched with the perfect talent by a customer success manager
          </div>
          <div className="flex items-center gap-2 text-white font-light text-sm mb-4">
            <img src="./img/check.png" alt="Check Icon" className="w-6 h-6" />
            Manage teamwork and boost productivity with one powerful workspace
          </div>

          <button className="bg-[#1dbf73] text-white py-2 px-5 rounded-lg mt-5 text-lg">
            Explore Liverr Business
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-3 ">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
            alt="Liverr Business"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
