import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../utils/newRequest"; // assuming you have a newRequest instance for API calls

const GigCard = ({ item }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [item.userId],
    queryFn: () =>
      newRequest.get(`/users/${item.userId}`).then((res) => res.data),
  });

  return (
    <Link to={`/gig/${item.id}`} className="block">
      <div className="w-[324px] h-[450px] border border-[#e4e4e4] mb-10">
        <img
          src={item.cover}
          alt=""
          className="w-full h-[50%] object-cover"
        />
        <div className="px-5 py-2.5 flex flex-col gap-5">
          <div className="flex items-center gap-2.5">
            {isLoading ? (
              <div className="w-6 h-6 bg-gray-300 rounded-full animate-pulse" />
            ) : error ? (
              <span className="text-red-500">Error</span>
            ) : (
              <img
                src={data.img || "/img/noavatar.jpg"}
                alt=""
                className="w-6 h-6 rounded-full object-cover"
              />
            )}
            <span>{isLoading ? "Loading..." : data?.username}</span>
          </div>
          <p className="text-[#111]">{item.desc}</p>
          <div className="flex items-center gap-1.5">
            <img
              src="./img/star.png"
              alt=""
              className="w-[14px] h-[14px]"
            />
            <span className="text-[#ffc108] font-bold text-[14px]">5</span>
          </div>
        </div>
        <hr className="border-t border-[#e4e4e4]" />
        <div className="px-5 py-2 flex items-center justify-between">
          <img
            src="./img/heart.png"
            alt=""
            className="w-[16px] h-[16px] cursor-pointer object-cover"
          />
          <div className="text-end">
            <span className="text-[#999] text-[12px]">STARTING AT</span>
            <h2 className="text-[#555] text-[18px] font-normal">
              $ {item.price}
              <sup className="text-[12px] font-light">99</sup>
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
