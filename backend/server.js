// backend/server.js
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import sensorRoutes from "./routes/sensorRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

// Check environment variables
console.log("=== ENVIRONMENT CHECK ===");
console.log("MONGO_URI:", process.env.MONGO_URI ? "Set" : "Missing");
console.log("JWT_SECRET:", process.env.JWT_SECRET ? "Set" : "Missing");
console.log("PORT:", process.env.PORT || 5000);

const app = express();
app.use(cors());
app.use(express.json());

// Debug middleware to log requests (after express.json())
app.use('/api/sensors', (req, res, next) => {
  console.log(`\n=== ${req.method} ${req.path} ===`);
  console.log('Headers:', req.headers);
  console.log('Request body:', req.body);
  console.log('Query params:', req.query);
  next();
});

// Health check route
app.get("/api/health", (req, res) => {
  res.json({ message: "Server is running!", timestamp: new Date().toISOString() });
});

app.use("/api/auth", authRoutes);
app.use("/api/sensors", sensorRoutes);
app.use("/api/users", userRoutes);

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/patient-monitor")
  .then(async () => {
    console.log("✅ MongoDB connected successfully!");
    console.log("Database:", mongoose.connection.db.databaseName);
    
    // Test database operations
    try {
      const SensorData = (await import("../models/sensorData.js")).default;
      const count = await SensorData.countDocuments();
      console.log("📊 Current sensor data records:", count);
    } catch (error) {
      console.log("⚠️ Could not test database operations:", error.message);
    }
  })
  .catch(err => {
    console.error("❌ MongoDB connection failed:");
    console.error("Error:", err.message);
    console.error("Make sure MongoDB is running on your system");
    console.error("You can install MongoDB locally or use MongoDB Atlas (free cloud)");
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
