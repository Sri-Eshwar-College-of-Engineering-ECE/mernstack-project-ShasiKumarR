import api from "../utils/api";

const signup = async (name, email, password) => {
  try {
    const res = await api.post("/auth/signup", { name, email, password });
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Signup failed" };
  }
};

const login = async (email, password) => {
  try {
    const res = await api.post("/auth/login", { email, password });
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Login failed" };
  }
};

export default { signup, login };
