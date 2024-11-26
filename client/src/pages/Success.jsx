import React, { useEffect } from "react";

export default function Success() {
  useEffect(() => {
    // Start the animation once the page is loaded
    const gifts = document.querySelectorAll(".gift");
    gifts.forEach((gift, index) => {
      gift.style.animationDelay = `${index * 1}s`; // Stagger animations
    });
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-b from-blue-500 to-blue-700 flex items-center justify-center">
      {/* Falling gifts animation */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10 flex justify-center items-center">
        <div className="text-white text-4xl font-bold">Success!</div>
      </div>

      {/* Gifts Falling */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center z-0">
        {/* Each gift can be an emoji or an image */}
        <div className="gift absolute animate-fall text-4xl">🎁</div>
        <div className="gift absolute animate-fall text-4xl">🎉</div>
        <div className="gift absolute animate-fall text-4xl">🎁</div>
        <div className="gift absolute animate-fall text-4xl">🎊</div>
        <div className="gift absolute animate-fall text-4xl">🎁</div>
      </div>

      {/* Custom styles for the animation */}
      <style jsx>{`
        .gift {
          animation: fall 4s infinite;
        }

        @keyframes fall {
          0% {
            transform: translateY(-100px);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
