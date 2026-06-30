import React, { createContext, useState, useEffect } from "react";
import authService from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    return token && userData ? JSON.parse(userData) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", user.token);
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }
  }, [user]);

  const login = async (email, password) => {
    try {
      const res = await authService.login(email, password);
      if (res?.token) {
        const userData = {
          _id: res._id,
          name: res.name,
          email: res.email,
          token: res.token
        };
        setUser(userData);
      }
      return res;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const signup = async (name, email, password) => {
    try {
      const res = await authService.signup(name, email, password);
      if (res?.token) {
        const userData = {
          _id: res._id,
          name: res.name,
          email: res.email,
          token: res.token
        };
        setUser(userData);
      }
      return res;
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
