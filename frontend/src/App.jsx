import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";     
import Signup from "./pages/Signup";   
import Home from "./pages/Home";
import SensorData from "./pages/SensorData";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import { AuthContext } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";

function AppContent() {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  
  // Hide navbar and footer on login/signup pages
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      {!isAuthPage && <Navbar />}
      <div style={{ width: '100%', margin: 0, padding: 0 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected routes */}
          <Route
            path="/sensor-data"
            element={
              <PrivateRoute>
                <SensorData />
              </PrivateRoute>
            }
          />
          <Route
            path="/analytics"
            element={
              <PrivateRoute>
                <Analytics />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
      {!isAuthPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
