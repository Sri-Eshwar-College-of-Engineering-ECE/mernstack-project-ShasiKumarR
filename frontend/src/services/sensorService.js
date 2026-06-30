import api from "../utils/api";

const getAllData = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await api.get("/sensors", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch sensor data" };
  }
};

const addSensorData = async (sensorData) => {
  try {
    const token = localStorage.getItem("token");
    
    console.log("=== SENSOR SERVICE DEBUG ===");
    console.log("Sending data:", sensorData);
    console.log("Token present:", !!token);
    
    if (!token) {
      throw new Error("No authentication token found");
    }
    
    const res = await api.post("/sensors", sensorData, {
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
      },
    });
    
    console.log("Success response:", res.data);
    return res.data;
  } catch (error) {
    console.error("=== SENSOR SERVICE ERROR ===");
    console.error("Error:", error.response?.data || error.message);
    console.error("Status:", error.response?.status);
    throw error.response?.data || { message: "Failed to add sensor data" };
  }
};

const clearAllData = async () => {
  try {
    const token = localStorage.getItem("token");
    
    console.log("Clearing data with token:", token ? "Present" : "Missing");
    
    const res = await api.delete("/sensors", {
      headers: { 
        'Authorization': `Bearer ${token}` 
      },
    });
    
    console.log("Clear data response:", res.data);
    return res.data;
  } catch (error) {
    console.error("Clear data error:", error.response?.data || error.message);
    throw error.response?.data || { message: "Failed to clear sensor data" };
  }
};

const getLiveData = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await api.get("/sensors/live", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch live data" };
  }
};

const saveLiveData = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await api.post(
      "/sensors/live/save",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to save live data" };
  }
};

export default { getAllData, addSensorData, clearAllData, getLiveData, saveLiveData };
