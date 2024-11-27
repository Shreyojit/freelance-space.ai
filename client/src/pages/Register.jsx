import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import newRequest from "../utils/newRequest.js";
import { upload } from "../utils/upload.js";

function Register() {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = await upload(file); // Cloudinary upload
    try {
      await newRequest.post("/auth/register", {
        ...user,
        img: url,
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl p-24 flex gap-32"
      >
        {/* Left Section */}
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-gray-500 mb-5">Create a new account</h1>
          <label className="text-gray-500 text-xl">Username</label>
          <input
            name="username"
            type="text"
            placeholder="johndoe"
            onChange={handleChange}
            className="p-5 border border-gray-300"
          />
          <label className="text-gray-500 text-xl">Email</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChange}
            className="p-5 border border-gray-300"
          />
          <label className="text-gray-500 text-xl">Password</label>
          <input
            name="password"
            type="password"
            onChange={handleChange}
            className="p-5 border border-gray-300"
          />
          <label className="text-gray-500 text-xl">Profile Picture</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="p-2"
          />
          <label className="text-gray-500 text-xl">Country</label>
          <input
            name="country"
            type="text"
            placeholder="USA"
            onChange={handleChange}
            className="p-5 border border-gray-300"
          />
          <button
            type="submit"
            className="border-none p-5 text-white font-semibold text-xl bg-green-500 hover:bg-green-600 cursor-pointer"
          >
            Register
          </button>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-gray-500 mb-5">I want to become a seller</h1>
          <div className="flex items-center gap-5">
            <label className="text-gray-500 text-xl">Activate the seller account</label>
            <label className="relative inline-block w-12 h-6">
              <input
                type="checkbox"
                onChange={handleSeller}
                className="opacity-0 w-0 h-0"
              />
              <div
                className={`absolute inset-0 bg-gray-400 rounded-full cursor-pointer transition-all ${
                  user.isSeller ? "bg-green-500" : "bg-gray-400"
                }`}
              >
                <span
                  className={`absolute w-6 h-6 bg-white rounded-full transition-transform transform ${
                    user.isSeller ? "translate-x-6" : "translate-x-0"
                  }`}
                ></span>
              </div>
            </label>
          </div>
          <label className="text-gray-500 text-xl">Phone Number</label>
          <input
            name="phone"
            type="text"
            placeholder="+1 234 567 89"
            onChange={handleChange}
            className="p-5 border border-gray-300"
          />
          <label className="text-gray-500 text-xl">Description</label>
          <textarea
            name="desc"
            placeholder="A short description of yourself"
            cols="30"
            rows="10"
            onChange={handleChange}
            className="p-5 border border-gray-300"
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default Register;