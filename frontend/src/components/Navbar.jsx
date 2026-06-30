import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm" style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--gray-100)',
      padding: '1rem 0',
      margin: 0,
      width: '100%'
    }}>
      <div style={{ width: '100%', maxWidth: '100%', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link className="navbar-brand" to="/" style={{
          fontSize: '1.5rem',
          fontWeight: 800,
          color: '#667eea'
        }}>
          <i className="fas fa-heartbeat me-2"></i>
          Health Monitor
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {user ? (
              <>
                {/* Navigation Links - visible on desktop */}
                <li className="nav-item d-none d-lg-block">
                  <Link className="nav-link" to="/" onClick={closeMenu}>
                    <i className="fas fa-home me-1"></i>
                    Home
                  </Link>
                </li>
                <li className="nav-item d-none d-lg-block">
                  <Link className="nav-link" to="/sensor-data" onClick={closeMenu}>
                    <i className="fas fa-database me-1"></i>
                    Sensor Data
                  </Link>
                </li>
                <li className="nav-item d-none d-lg-block">
                  <Link className="nav-link" to="/analytics" onClick={closeMenu}>
                    <i className="fas fa-chart-line me-1"></i>
                    Analytics
                  </Link>
                </li>
                <li className="nav-item d-none d-lg-block">
                  <Link className="nav-link" to="/profile" onClick={closeMenu}>
                    <i className="fas fa-user me-1"></i>
                    Profile
                  </Link>
                </li>
                
                {/* Navigation Links - visible in hamburger menu (mobile) */}
                <li className="nav-item d-lg-none">
                  <Link className="nav-link" to="/" onClick={closeMenu}>
                    <i className="fas fa-home me-2"></i>
                    Home
                  </Link>
                </li>
                <li className="nav-item d-lg-none">
                  <Link className="nav-link" to="/sensor-data" onClick={closeMenu}>
                    <i className="fas fa-database me-2"></i>
                    Sensor Data
                  </Link>
                </li>
                <li className="nav-item d-lg-none">
                  <Link className="nav-link" to="/analytics" onClick={closeMenu}>
                    <i className="fas fa-chart-line me-2"></i>
                    Analytics
                  </Link>
                </li>
                <li className="nav-item d-lg-none">
                  <Link className="nav-link" to="/profile" onClick={closeMenu}>
                    <i className="fas fa-user me-2"></i>
                    Profile
                  </Link>
                </li>
                
                {/* Theme Toggle - icon only on desktop */}
                <li className="nav-item ms-2 d-none d-lg-block">
                  <button 
                    className="btn btn-sm" 
                    onClick={toggleTheme}
                    style={{ 
                      borderRadius: '50%',
                      background: theme === 'dark' ? '#fbbf24' : '#1e293b',
                      color: 'white',
                      border: 'none',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 0
                    }}
                    title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                  >
                    <i className={`fas fa-${theme === 'dark' ? 'sun' : 'moon'}`}></i>
                  </button>
                </li>
                
                {/* Theme Toggle - in hamburger menu (mobile) */}
                <li className="nav-item d-lg-none">
                  <button 
                    className="btn btn-sm w-100" 
                    onClick={toggleTheme}
                    style={{ 
                      borderRadius: '0.75rem',
                      background: theme === 'dark' ? '#fbbf24' : '#1e293b',
                      color: 'white',
                      border: 'none',
                      padding: '0.75rem 1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <i className={`fas fa-${theme === 'dark' ? 'sun' : 'moon'}`}></i>
                    {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                  </button>
                </li>
                
                {/* Logout Button - visible ONLY in hamburger menu (mobile) */}
                <li className="nav-item d-lg-none">
                  <button 
                    className="btn btn-danger btn-sm w-100" 
                    onClick={() => { logout(); closeMenu(); }}
                    style={{ 
                      borderRadius: '0.75rem',
                      padding: '0.75rem 1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <i className="fas fa-sign-out-alt"></i>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                {/* Non-logged in users */}
                <li className="nav-item d-none d-lg-block">
                  <Link className="nav-link" to="/">
                    <i className="fas fa-home me-1"></i>
                    Home
                  </Link>
                </li>
                
                {/* Mobile hamburger menu for non-logged users */}
                <li className="nav-item d-lg-none">
                  <Link className="nav-link" to="/" onClick={closeMenu}>
                    <i className="fas fa-home me-2"></i>
                    Home
                  </Link>
                </li>
                
                {/* Theme Toggle - desktop */}
                <li className="nav-item ms-2 d-none d-lg-block">
                  <button 
                    className="btn btn-sm" 
                    onClick={toggleTheme}
                    style={{ 
                      borderRadius: '50%',
                      background: theme === 'dark' ? '#fbbf24' : '#1e293b',
                      color: 'white',
                      border: 'none',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 0
                    }}
                    title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                  >
                    <i className={`fas fa-${theme === 'dark' ? 'sun' : 'moon'}`}></i>
                  </button>
                </li>
                
                {/* Theme Toggle - mobile */}
                <li className="nav-item d-lg-none">
                  <button 
                    className="btn btn-sm w-100" 
                    onClick={toggleTheme}
                    style={{ 
                      borderRadius: '0.75rem',
                      background: theme === 'dark' ? '#fbbf24' : '#1e293b',
                      color: 'white',
                      border: 'none',
                      padding: '0.75rem 1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <i className={`fas fa-${theme === 'dark' ? 'sun' : 'moon'}`}></i>
                    {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                  </button>
                </li>
                
                <li className="nav-item ms-2 d-none d-lg-block">
                  <Link to="/login" style={{
                    padding: '0.625rem 1.5rem',
                    borderRadius: '0.75rem',
                    fontWeight: 600,
                    fontSize: '0.9375rem',
                    border: '2px solid var(--primary)',
                    color: 'var(--primary)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: 'transparent'
                  }}>
                    <i className="fas fa-sign-in-alt"></i>
                    Sign In
                  </Link>
                </li>
                <li className="nav-item ms-2 d-none d-lg-block">
                  <Link to="/signup" style={{
                    padding: '0.625rem 1.5rem',
                    borderRadius: '0.75rem',
                    fontWeight: 600,
                    fontSize: '0.9375rem',
                    border: 'none',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: '#667eea',
                    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
                  }}>
                    <i className="fas fa-user-plus"></i>
                    Create Account
                  </Link>
                </li>
                
                {/* Mobile login/signup */}
                <li className="nav-item d-lg-none">
                  <Link to="/login" onClick={closeMenu} className="btn btn-outline-primary w-100 mb-2" style={{
                    borderRadius: '0.75rem',
                    padding: '0.75rem 1rem'
                  }}>
                    <i className="fas fa-sign-in-alt me-2"></i>
                    Sign In
                  </Link>
                </li>
                <li className="nav-item d-lg-none">
                  <Link to="/signup" onClick={closeMenu} className="btn btn-primary w-100" style={{
                    borderRadius: '0.75rem',
                    padding: '0.75rem 1rem'
                  }}>
                    <i className="fas fa-user-plus me-2"></i>
                    Create Account
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
