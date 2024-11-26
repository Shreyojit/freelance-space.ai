import React, { useEffect, useRef, useState } from "react";
import GigCard from "../component/GigCard";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../utils/newRequest";
import { useLocation } from "react-router-dom";

function Gigs() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
      newRequest
        .get(
          `/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
        )
        .then((res) => {
          return res.data;
        }),
  });

  console.log("Data is -->",data)

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  useEffect(() => {
    refetch();
  }, [sort, refetch]);  // Add refetch to the dependency array
  
  const apply = () => {
    refetch();
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-[1400px] py-[30px] flex flex-col gap-4">
        <span className="font-light text-xs uppercase text-[#555]">
          Liverr &gt; Graphics & Design &gt;
        </span>
        <h1>AI Artists</h1>

        <p className="text-[#999] font-light">
          Explore the boundaries of art and technology with Liverr's AI artists
        </p>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5 text-[#555] font-light">
            <span>Budget</span>
            <input
              ref={minRef}
              type="number"
              placeholder="min"
              className="p-1.5 border border-lightgray rounded-lg outline-none placeholder:text-[#999]"
            />
            <input
              ref={maxRef}
              type="number"
              placeholder="max"
              className="p-1.5 border border-lightgray rounded-lg outline-none placeholder:text-[#999]"
            />
            <button
              onClick={apply}
              className="p-1.5 px-2.5 bg-[#1dbf73] text-white font-medium rounded-lg cursor-pointer"
            >
              Apply
            </button>
          </div>
          <div className="relative flex items-center gap-2.5">
            <span className="text-[#555] font-light">Sort by</span>
            <span className="font-medium">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img
              src="./img/down.png"
              alt=""
              className="w-[15px] cursor-pointer"
              onClick={() => setOpen(!open)}
            />
            {open && (
              <div className="absolute top-[30px] right-0 z-10 p-5 bg-white border border-lightgray rounded-lg flex flex-col gap-5 text-[#555]">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
                <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  {isLoading
    ? "Loading..."
    : error
    ? "Something went wrong!"
    : data.map((gig) => <GigCard key={gig.id} item={gig} />)}
</div>

      </div>
    </div>
  );
}

export default Gigs;
