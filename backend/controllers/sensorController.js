import SensorData from "../models/SensorData.js";
import axios from "axios";

// Add new sensor data (ESP32 sends here)
export const addSensorData = async (req, res) => {
  try {
    console.log("=== ADD SENSOR DATA DEBUG ===");
    console.log("Request body:", JSON.stringify(req.body, null, 2));
    console.log("User object:", req.user);
    console.log("User ID:", req.user?._id);
    
    // Check if user exists first
    if (!req.user || !req.user._id) {
      console.error(" No user found in request");
      return res.status(401).json({ message: "User not authenticated" });
    }
    
    // Get values with fallbacks
    const pulseRate = req.body.pulseRate;
    const spo2Level = req.body.spo2Level;
    const bodyTemperature = req.body.bodyTemperature;
    
    console.log("Raw values:", { pulseRate, spo2Level, bodyTemperature });

    // Simple validation - just check if values exist
    if (!pulseRate && pulseRate !== 0) {
      return res.status(400).json({ 
        message: "pulseRate is required",
        received: req.body
      });
    }
    
    if (!spo2Level && spo2Level !== 0) {
      return res.status(400).json({ 
        message: "spo2Level is required",
        received: req.body
      });
    }
    
    if (!bodyTemperature && bodyTemperature !== 0) {
      return res.status(400).json({ 
        message: "bodyTemperature is required",
        received: req.body
      });
    }

    const sensorDataToSave = {
      pulseRate: Number(pulseRate),
      spo2Level: Number(spo2Level),
      bodyTemperature: Number(bodyTemperature),
      user: req.user._id,
    };

    console.log("Creating sensor data with:", sensorDataToSave);

    const data = await SensorData.create(sensorDataToSave);

    console.log(" Sensor data created successfully!");
    console.log("Data ID:", data._id);
    console.log("Full data object:", JSON.stringify(data, null, 2));
    
    res.status(201).json({
      message: "Sensor data saved successfully",
      data: data
    });
  } catch (error) {
    console.error(" Error in addSensorData:");
    console.error("Error message:", error.message);
    console.error("Error stack:", error.stack);
    console.error("Full error:", error);
    
    res.status(500).json({ 
      message: "Error adding sensor data", 
      error: error.message
    });
  }
};

// Get all sensor data for logged in user
export const getAllData = async (req, res) => {
  try {
    const data = await SensorData.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching sensor data", error: error.message });
  }
};

// Clear all sensor data for logged in user
export const clearAllData = async (req, res) => {
  try {
    console.log("Clearing data for user:", req.user._id);
    
    const result = await SensorData.deleteMany({ user: req.user._id });
    
    console.log("Clear result:", result);
    
    res.json({ 
      message: `Cleared ${result.deletedCount} sensor data records`,
      deletedCount: result.deletedCount 
    });
  } catch (error) {
    console.error("Clear data error:", error);
    res.status(500).json({ message: "Error clearing sensor data", error: error.message });
  }
};

// Fetch latest data from ThingSpeak
export const getLiveFromThingSpeak = async (req, res) => {
  try {
    const CHANNEL_ID = process.env.THINGSPEAK_CHANNEL_ID || "3141021";
    const READ_API_KEY = process.env.THINGSPEAK_READ_API_KEY || "S7Z6XYOBYYJ3V1K0";

    const url = `https://api.thingspeak.com/channels/${CHANNEL_ID}/feeds.json?api_key=${READ_API_KEY}&results=1`;
    const response = await axios.get(url);

    const feed = response?.data?.feeds?.[0];
    if (!feed) {
      return res.status(404).json({ message: "No data found from ThingSpeak" });
    }

    // Map ThingSpeak fields: field1=temperature, field2=spo2, field3=bpm
    const bodyTemperature = Number(feed.field1);
    const spo2Level = Number(feed.field2);
    const pulseRate = Number(feed.field3);

    return res.json({
      temperature: bodyTemperature,
      spo2: spo2Level,
      bpm: pulseRate,
      created_at: feed.created_at,
      raw: feed,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching data from ThingSpeak", error: err.message });
  }
};

// Fetch latest from ThingSpeak and save to DB for the authenticated user
export const saveLiveFromThingSpeak = async (req, res) => {
  try {
    const CHANNEL_ID = process.env.THINGSPEAK_CHANNEL_ID || "3141021";
    const READ_API_KEY = process.env.THINGSPEAK_READ_API_KEY || "S7Z6XYOBYYJ3V1K0";

    const url = `https://api.thingspeak.com/channels/${CHANNEL_ID}/feeds.json?api_key=${READ_API_KEY}&results=1`;
    const response = await axios.get(url);
    const feed = response?.data?.feeds?.[0];
    if (!feed) {
      return res.status(404).json({ message: "No data found from ThingSpeak" });
    }

    const dataToSave = {
      pulseRate: Number(feed.field3),
      spo2Level: Number(feed.field2),
      bodyTemperature: Number(feed.field1),
      user: req.user._id,
    };

    const saved = await SensorData.create(dataToSave);
    return res.status(201).json({ message: "Saved latest ThingSpeak reading", data: saved });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to save ThingSpeak data", error: err.message });
  }
};