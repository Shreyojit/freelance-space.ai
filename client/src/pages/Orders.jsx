import React from "react";
import { Link } from "react-router-dom";

function Orders() {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  const orders = [
    {
      id: 1,
      title: "Stunning concept art",
      price: 59.99,
      buyer: "Maria Anders",
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      title: "Ai generated concept art",
      price: 79.99,
      buyer: "Francisco Chang",
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 3,
      title: "High quality digital character",
      price: 110.99,
      buyer: "Roland Mendel",
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 4,
      title: "Illustration hyper realistic painting",
      price: 39.99,
      buyer: "Helen Bennett",
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 5,
      title: "Original ai generated digital art",
      price: 119.99,
      buyer: "Yoshi Tannamuri",
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 6,
      title: "Text based ai generated art",
      price: 49.99,
      buyer: "Giovanni Rovelli",
      image:
        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  return (
    <div className="flex justify-center bg-gray-100 py-8">
      <div className="container w-[1400px] bg-white p-6 rounded-lg shadow-lg">
        <div className="title flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">
            {currentUser.isSeller ? "Orders" : "Gigs"}
          </h1>
        </div>
        <table className="w-full table-auto text-left">
          <thead>
            <tr className="bg-[#f3f4f6] border-b">
              <th className="px-4 py-3 text-sm font-medium text-gray-700">Image</th>
              <th className="px-4 py-3 text-sm font-medium text-gray-700">Title</th>
              <th className="px-4 py-3 text-sm font-medium text-gray-700">Price</th>
              <th className="px-4 py-3 text-sm font-medium text-gray-700">
                {currentUser.isSeller ? "Buyer" : "Seller"}
              </th>
              <th className="px-4 py-3 text-sm font-medium text-gray-700">Contact</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => {
              const [integer, decimal] = order.price.toFixed(2).split(".");
              return (
                <tr key={order.id} className={index % 2 === 0 ? "odd:bg-[#bef1be]" : ""}>
                  <td className="px-4 py-3">
                    <img
                      className="w-12 h-6 object-cover rounded"
                      src={order.image}
                      alt={order.title}
                    />
                  </td>
                  <td className="px-4 py-3 text-gray-800">{order.title}</td>
                  <td className="px-4 py-3 text-gray-700">
                    {integer}.<sup>{decimal}</sup>
                  </td>
                  <td className="px-4 py-3 text-gray-700">{order.buyer}</td>
                  <td className="px-4 py-3">
                    <img className="w-6 cursor-pointer" src="./img/message.png" alt="Message" />
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

export default Orders;
