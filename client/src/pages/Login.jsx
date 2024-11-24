import React, { useState } from "react";
import newRequest from "../utils/newRequest";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-80 p-12 flex flex-col gap-6 bg-white rounded-lg shadow-lg"
      >
        <h1 className="text-gray-500 mb-6 text-2xl">Sign in</h1>

        <label htmlFor="username" className="text-gray-700 text-lg">
          Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="johndoe"
          onChange={(e) => setUsername(e.target.value)}
          className="p-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <label htmlFor="password" className="text-gray-700 text-lg">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="p-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <button
          type="submit"
          className="p-5 bg-green-500 text-white font-semibold text-lg rounded-md hover:bg-green-600 transition duration-200"
        >
          Login
        </button>

        {error && <span className="text-red-500 text-sm">{error}</span>}
      </form>
    </div>
  );
}

export default Login;
