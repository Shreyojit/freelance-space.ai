import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import newRequest from "../utils/newRequest";

const Message = () => {
  const { id } = useParams(); // Get conversation ID from URL params
  
  console.log("Coversation Id-->",id)
  
  const currentUser = JSON.parse(localStorage.getItem("currentUser")); // Get current user from local storage

  const queryClient = useQueryClient(); // To manage cache invalidation

  // Fetch messages using React Query
  const { isLoading, error, data } = useQuery({
    queryKey: ["messages", id], // Use the conversation ID in the query key to fetch messages for this conversation
    queryFn: () =>
      newRequest.get(`/messages/${id}`).then((res) => res.data),
  });

  // Print messages to the console (if data is available)
  useEffect(() => {
    if (data) {
      console.log("Fetched Messages:", data);
    }
  }, [data]); // This effect will run whenever data is updated

  // Mutation to send a new message
  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages`, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages", id]); // Invalidate messages query to fetch new data
    },
  });

  // Handle form submission to send a new message
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value,
    });
    e.target[0].value = ""; // Clear the textarea after sending
  };

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
          {isLoading ? (
            "Loading..." // Display loading message while fetching
          ) : error ? (
            "Error loading messages" // Display error message in case of failure
          ) : (
            data.map((message) => (
              <div
                key={message._id}
                className={`flex gap-4 max-w-[600px] items-center ${
                  message.userId === currentUser._id
                    ? "flex-row-reverse self-end"
                    : ""
                }`}
              >
                <img
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <p
                  className={`p-4 rounded-lg ${
                    message.userId === currentUser._id
                      ? "rounded-tl-lg bg-blue-500 text-white"
                      : "rounded-tr-lg bg-gray-200 text-gray-700"
                  }`}
                >
                  {message.desc}
                </p>
              </div>
            ))
          )}
        </div>
        <hr className="my-6 border-t border-gray-300" />
        <div className="flex items-center gap-4">
          <form className="w-full flex gap-4" onSubmit={handleSubmit}>
            <textarea
              placeholder="Write a message"
              className="w-full p-4 h-24 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-green-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-600 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Message;
