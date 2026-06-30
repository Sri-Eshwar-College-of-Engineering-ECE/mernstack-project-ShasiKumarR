import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getAllData, addSensorData, clearAllData, getLiveFromThingSpeak, saveLiveFromThingSpeak } from "../controllers/sensorController.js";

const router = express.Router();

// Get all sensor data for authenticated user
router.get("/", protect, getAllData);

// Get latest reading from ThingSpeak (no DB write)
router.get("/live", protect, getLiveFromThingSpeak);

// Add new sensor data (manual entry or IoT devices)
router.post("/", protect, addSensorData);

// Fetch latest from ThingSpeak and store to DB
router.post("/live/save", protect, saveLiveFromThingSpeak);

// Clear all sensor data for user
router.delete("/", protect, clearAllData);

export default router;
