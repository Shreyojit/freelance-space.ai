import React from "react";
import { Link } from "react-router-dom";

function MyGigs() {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  const gigs = [
    {
      id: 1,
      title: "Stunning concept art",
      price: 59.99,
      sales: 13,
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      title: "Ai generated concept art",
      price: 120.99,
      sales: 41,
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 3,
      title: "High quality digital character",
      price: 79.99,
      sales: 55,
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 4,
      title: "Illustration hyper realistic painting",
      price: 119.99,
      sales: 29,
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 5,
      title: "Original ai generated digital art",
      price: 59.99,
      sales: 34,
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 6,
      title: "Text based ai generated art",
      price: 110.99,
      sales: 16,
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  return (
    <div className="flex justify-center bg-gray-100 py-8">
      <div className="container w-[1400px] bg-white p-6 rounded-lg shadow-lg">
        <div className="title flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">
            {currentUser.isSeller ? "Gigs" : "Orders"}
          </h1>
          {currentUser.isSeller && (
            <Link to="/add">
              <button className="bg-[#1a7e44] text-white font-medium py-2 px-4 rounded-lg cursor-pointer hover:bg-[#145d33] transition-all duration-300">
                Add New Gig
              </button>
            </Link>
          )}
        </div>
        <table className="w-full table-auto text-left">
         
          <thead>
            <tr className="bg-[#f3f4f6] border-b">
              <th className="px-4 py-3 text-sm font-medium text-gray-700">Image</th>
              <th className="px-4 py-3 text-sm font-medium text-gray-700">Title</th>
              <th className="px-4 py-3 text-sm font-medium text-gray-700">Price</th>
              <th className="px-4 py-3 text-sm font-medium text-gray-700">Sales</th>
              <th className="px-4 py-3 text-sm font-medium text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {gigs.map((gig, index) => {
              const [integer, decimal] = gig.price.toFixed(2).split(".");
              return (
                <tr
                  key={gig.id}
                  className={index % 2 === 0 ? "odd:bg-[#bef1be]" : ""}
                >
                  <td className="px-4 py-3">
                    <img
                      className="w-12 h-6 object-cover rounded"
                      src={gig.image}
                      alt="Gig"
                    />
                  </td>
                  <td className="px-4 py-3 text-gray-800">{gig.title}</td>
                  <td className="px-4 py-3 text-gray-700">
                    {integer}.<sup>{decimal}</sup>
                  </td>
                  <td className="px-4 py-3 text-gray-700">{gig.sales}</td>
                  <td className="px-4 py-3">
                    <img className="w-6 cursor-pointer" src="./img/delete.png" alt="Delete" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyGigs;
