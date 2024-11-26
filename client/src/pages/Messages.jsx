import React from "react";
import { Link } from "react-router-dom";

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  const messages = [
    {
      id: 1,
      sender: "Charley Sharp",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident maxime cum corporis esse aspernatur laborum dolorum? Animi molestias aliquam.`,
      timestamp: "1 hour ago",
      isActive: true,
    },
    {
      id: 2,
      sender: "John Doe",
      content: `Aut, ut quam vitae saepe repellat nobis praesentium placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
      timestamp: "2 hours ago",
      isActive: true,
    },
    {
      id: 3,
      sender: "Elinor Good",
      content: `Molestias aliquam, cum nesciunt, aut, ut quam vitae saepe repellat nobis praesentium.`,
      timestamp: "1 day ago",
      isActive: false,
    },
    {
      id: 4,
      sender: "Garner David",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident maxime cum.`,
      timestamp: "2 days ago",
      isActive: false,
    },
    {
      id: 5,
      sender: "Troy Oliver",
      content: `Dolor sit amet consectetur adipisicing elit. Provident maxime cum corporis.`,
      timestamp: "1 week ago",
      isActive: false,
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="w-[1400px] py-12">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-bold">Messages</h1>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
              <th>Last Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg) => (
              <tr
                key={msg.id}
                className={`h-24 ${msg.isActive ? "bg-[#1dbf730f]" : ""}`}
              >
                <td className="font-medium">{msg.sender}</td>
                <td className="text-gray-500">
                  <Link to={`/message/${msg.id}`} className="text-black">
                    {msg.content.substring(0, 100)}...
                  </Link>
                </td>
                <td className="text-gray-500">{msg.timestamp}</td>
                <td>
                  {msg.isActive && (
                    <button className="bg-[#1dbf73] text-white py-2 px-4 rounded">
                      Mark as Read
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Messages;
