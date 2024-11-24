import React from "react";
import { Link } from "react-router-dom";
import { messages } from "../data";


const Message = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1200px] mt-12 px-6">
        <span className="text-sm text-gray-500">
          <Link to="/messages" className="text-blue-500 hover:underline">
            Messages
          </Link>{" "}
          &gt; John Doe &gt;
        </span>
        <div className="mt-6 p-6 flex flex-col gap-6 h-[500px] overflow-y-scroll bg-gray-50 rounded-lg shadow-md">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-4 max-w-[600px] items-center ${
                message.sender === "owner" ? "flex-row-reverse self-end" : ""
              }`}
            >
              <img
                src={message.img}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <p
                className={`p-4 rounded-lg ${
                  message.sender === "owner"
                    ? "rounded-tl-lg bg-blue-500 text-white"
                    : "rounded-tr-lg bg-gray-200 text-gray-700"
                }`}
              >
                {message.text}
              </p>
            </div>
          ))}
        </div>
        <hr className="my-6 border-t border-gray-300" />
        <div className="flex items-center gap-4">
          <textarea
            placeholder="Write a message"
            className="w-full p-4 h-24 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
