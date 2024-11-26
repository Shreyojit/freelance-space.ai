import React from "react";

const categories = [
  { imgSrc: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg", label: "Graphics & Design" },
  { imgSrc: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg", label: "Digital Marketing" },
  { imgSrc: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg", label: "Writing & Translation" },
  { imgSrc: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg", label: "Video & Animation" },
  { imgSrc: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg", label: "Music & Audio" },
  { imgSrc: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg", label: "Programming & Tech" },
  { imgSrc: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg", label: "Business" },
  { imgSrc: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg", label: "Lifestyle" },
  { imgSrc: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg", label: "Data" },
  { imgSrc: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg", label: "Photography" },
];

const Explore = () => {
  return (
    <div className="flex justify-center py-24">
      <div className="container w-[1400px]">
      
      <h1 className="font-medium mb-2 text-4xl">A whole world of freelance talent at your fingertips</h1>

        <div className="flex flex-wrap">
          {categories.map((category, index) => (
            <div key={index} className="item w-[250px] h-[150px] flex flex-col gap-2 items-center justify-center text-center cursor-pointer group">
              <img src={category.imgSrc} alt={category.label} className="w-12 h-12" />
              <div className="w-12 h-0.5 bg-gray-300 transition-all duration-300 ease-in-out group-hover:w-20 group-hover:bg-green-500"></div>
              <span className="font-light">{category.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
