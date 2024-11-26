import React from "react";
import { Link } from "react-router-dom";

function CatCard({ card }) {
  return (
    <Link to="/gigs?cat=design">

        
      <div className="w-64 h-80 text-white rounded-lg relative cursor-pointer">
        <img
          src={card.img}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
        <span className="font-light absolute top-4 left-4">{card.desc}</span>
        <span className="absolute top-10 left-4 text-2xl font-medium">
          {card.title}
        </span>
      </div>
    </Link>
  );
}

export default CatCard;
