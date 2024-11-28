import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import cloudinary from "cloudinary";

// Import Routes
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import gigRoutes from "./routes/gigRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import conversationRoutes from "./routes/conversationRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";

// Initialize dotenv to read .env variables
dotenv.config();

// Initialize Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Initialize Prisma Client
const prisma = new PrismaClient();

// Initialize Express
const app = express();



const allowedOrigins = [
  "http://localhost:3000", // Frontend local domain
  "https://freelance-space-1m7r4fbnu-shreyos-projects.vercel.app/", // Vercel production domain
  "https://yourdomain.com", // Custom production domain (if applicable)
];

// Configure CORS
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true); // Allow the origin
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // Allow cookies or authentication headers
    
    optionsSuccessStatus: 200,
  })
);

// Handle preflight OPTIONS requests for CORS
app.options("*", cors()); // Enable preflight for all routes






// Middleware
// app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(cookieParser());

// Basic Route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});


// Route to handle image upload from URL
app.post("/api/upload-by-link", async (req, res) => {
  const { link } = req.body;

  if (!link) {
    return res.status(400).json({ error: "No link provided" });
  }

  try {
    // Fetch the image from the provided URL using axios
    const response = await axios.get(link, { responseType: "arraybuffer" });

    // Upload the image to Cloudinary
    const uploadedImage = await cloudinary.uploader.upload_stream(
      { resource_type: "auto" }, // Automatically determine the resource type (image/video)
      (error, result) => {
        if (error) {
          return res.status(500).json({ error: "Failed to upload image to Cloudinary" });
        }
        return res.status(200).json({ url: result.secure_url }); // Send the secure URL of the uploaded image
      }
    );

    // Write the image buffer to Cloudinary's upload stream
    uploadedImage.end(response.data);

  } catch (error) {
    console.error("Error fetching or uploading image:", error);
    return res.status(500).json({ error: "Failed to process the image" });
  }
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/gigs", gigRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/conversations", conversationRoutes);
app.use("/api/messages", messageRoutes);

// Global error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  return res.status(status).json({ error: message });
});


const PORT = process.env.PORT || 8800;

// Start server and connect to the database
app.listen(PORT, async () => {
  try {
    await prisma.$connect();
    console.log("Connected to PostgreSQL with Prisma!");
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
});
