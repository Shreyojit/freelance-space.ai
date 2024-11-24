import React, { useState } from "react";

const TrustedBy = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index); // Set the index of the hovered image
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null); // Reset the hovered image index
  };

  const images = [
    {
      src: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png",
      alt: "Facebook",
    },
    {
      src: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png",
      alt: "Google",
    },
    {
      src: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png",
      alt: "Netflix",
    },
    {
      src: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png",
      alt: "P&G",
    },
    {
      src: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png",
      alt: "PayPal",
    },
  ];

  return (
    <div className="bg-[#fafafa] h-[100px] flex justify-center overflow-hidden">
      <div className="flex items-center space-x-10 animate-marquee">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`h-[50px] object-contain transition-all duration-300 ${
              hoveredIndex === index ? "scale-110" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;
