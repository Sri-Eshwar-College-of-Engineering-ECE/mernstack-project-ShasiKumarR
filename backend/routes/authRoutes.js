import express from "express";
import { registerUser, loginUser, getProfile } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// ❌ Do not protect signup/login
router.post("/signup", registerUser);
router.post("/login", loginUser);

// ✅ Protect only profile
router.get("/profile", protect, getProfile);

export default router;
