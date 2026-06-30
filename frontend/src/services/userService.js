// src/services/userService.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

// Fetch user profile
const getProfile = async (token) => {
  const res = await axios.get(`${API_URL}/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Update user profile
const updateProfile = async (token, userData) => {
  const res = await axios.put(`${API_URL}/profile`, userData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Make sure you export default
export default {
  getProfile,
  updateProfile,
};
