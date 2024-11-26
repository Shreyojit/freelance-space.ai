import express from "express";
import { getUser, deleteUser } from "../controllers/userController.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

// Protected Routes
router.get("/:id",verifyToken,getUser);
router.delete("/:id", verifyToken, deleteUser);

export default router;
