import React from "react";

function ProjectCard({ card }) {
  return (
    <div className="w-[300px] h-[300px] rounded-lg overflow-hidden cursor-pointer border border-gray-200">
      <img src={card.img} alt="" className="w-full h-[70%] object-cover" />
      <div className="flex items-center gap-5 p-4">
        <img
          src={card.pp}
          alt=""
          className="w-[40px] h-[40px] rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h2 className="text-sm font-medium">{card.cat}</h2>
          <span className="text-sm font-light">{card.username}</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
