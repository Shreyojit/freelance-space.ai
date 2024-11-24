import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import React Icons

function Slide({ children, slidesToShow = 4, slidesToScroll = 1 }) {
  const childrenArray = React.Children.toArray(children); // Convert children to an array
  const totalSlides = childrenArray.length;

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle left and right click to move through slides
  const changeSlide = (direction) => {
    setCurrentIndex((prevIndex) => {
      // Calculate the new index
      const newIndex =
        (prevIndex + direction * slidesToScroll + totalSlides) % totalSlides;
      return newIndex;
    });
  };

  const visibleSlides = childrenArray.slice(currentIndex, currentIndex + slidesToShow);

  // Handle wrap-around logic for the end of the array
  if (visibleSlides.length < slidesToShow) {
    visibleSlides.push(
      ...childrenArray.slice(0, slidesToShow - visibleSlides.length)
    );
  }

  return (
    <div className="flex items-center justify-center space-x-4 pl-2 pr-2">
      {/* Left Arrow */}
      <button
        className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 text-xl md:text-2xl ml-1 rounded-full bg-gray-200 hover:bg-gray-300 shadow-md"
        onClick={() => changeSlide(-1)}
      >
        <FaArrowLeft className="w-6 h-6 text-gray-600" /> {/* Using React Icon for Left Arrow */}
      </button>

      {/* Visible Slides */}
      <div className="flex overflow-hidden gap-6 rounded"> {/* Use gap-6 for spacing */}
        {visibleSlides.map((slide, index) => (
          <div key={index} className="flex-shrink-0">
            {slide}
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 text-xl md:text-2xl rounded-full bg-gray-200 hover:bg-gray-300 shadow-md mr-1"
        onClick={() => changeSlide(1)}
      >
        <FaArrowRight className="w-6 h-6 text-gray-600" /> {/* Using React Icon for Right Arrow */}
      </button>
    </div>
  );
}

export default Slide;
