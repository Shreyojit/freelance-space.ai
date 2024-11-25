import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../utils/newRequest";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log("Current user--->",currentUser)

  const navigate = useNavigate();

  const handleLogout = async() => {
    try{
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser",null);
      navigate("/");


    }catch(err){
      console.log(err)
    }
  }

  return (
    <div
      className={`sticky top-0 z-50 transition-all ${
        active || pathname !== "/" ? "bg-white text-black" : "bg-green-900 text-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-5 max-w-screen-xl">
        <div className="text-2xl font-bold flex items-center">
          <Link to="/" className="text-black hover:text-green-600">
            <span>liverr</span>
            <span className="text-green-600">.</span>
          </Link>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium">
          <span className="cursor-pointer">Liverr Business</span>
          <span className="cursor-pointer">Explore</span>
          <span className="cursor-pointer">English</span>
          {!currentUser?.isSeller && <span className="cursor-pointer">Become a Seller</span>}
          {currentUser ? (
            <div
              className="relative flex items-center gap-2 cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <img
                className="w-8 h-8 rounded-full object-cover"
                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg border border-gray-200 flex flex-col gap-2 p-4 text-gray-700 w-48">
                  {currentUser.isSeller && (
                    <>
                      <Link className="hover:text-green-600" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="hover:text-green-600" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="hover:text-green-600" to="/orders">
                    Orders
                  </Link>
                  <Link className="hover:text-green-600" to="/messages">
                    Messages
                  </Link>
                  <Link className="hover:text-green-600" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
             <Link to="/login" className="link">Sign in</Link>
              <Link to="/register">
                <button className="border border-white py-2 px-4 rounded-md text-white hover:bg-green-600 hover:border-green-600">
                  Join
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr className="border-t border-b border-gray-200" />
          <div className="container mx-auto flex justify-between py-3 max-w-screen-xl text-gray-600 text-sm">
            <Link className="hover:text-green-600" to="/">
              Graphics & Design
            </Link>
            <Link className="hover:text-green-600" to="/">
              Video & Animation
            </Link>
            <Link className="hover:text-green-600" to="/">
              Writing & Translation
            </Link>
            <Link className="hover:text-green-600" to="/">
              AI Services
            </Link>
            <Link className="hover:text-green-600" to="/">
              Digital Marketing
            </Link>
            <Link className="hover:text-green-600" to="/">
              Music & Audio
            </Link>
            <Link className="hover:text-green-600" to="/">
              Programming & Tech
            </Link>
            <Link className="hover:text-green-600" to="/">
              Business
            </Link>
            <Link className="hover:text-green-600" to="/">
              Lifestyle
            </Link>
          </div>
          <hr className="border-t border-b border-gray-200" />
        </>
      )}
    </div>
  );
}

export default Navbar;
