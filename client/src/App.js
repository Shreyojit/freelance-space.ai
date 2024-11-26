import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React, { useEffect } from "react";
import axios from "axios"; // Import axios
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import Gigs from "./pages/Gigs";
import MyGigs from "./pages/MyGigs";
import Orders from "./pages/Orders";
import Messages from "./pages/Messages";
import Gig from "./pages/Gig";
import Add from "./pages/Add";
import Message from "./pages/Message";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Pay from "./pages/Pay";
import Success from "./pages/Success";

function App() {
  const queryClient = new QueryClient();

  const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8800"; // Default to localhost if env var is not available

  // Configure axios defaults globally
  axios.defaults.baseURL = apiUrl; // Set backend base URL from environment variable
  axios.defaults.withCredentials = true; // Enable sending cookies or authentication tokens with requests

  const Layout = () => {
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/myGigs",
          element: <MyGigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/success",
          element: <Success />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/pay/:id",
      element: <Pay />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
