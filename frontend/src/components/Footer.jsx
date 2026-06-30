import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{
      background: '#1e293b',
      color: 'white',
      padding: '4rem 2rem 0',
      marginTop: 'auto',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      width: '100%',
      margin: 0
    }}>
      <div style={{ maxWidth: '100%', margin: '0 auto' }}>
        {/* Main Footer Content */}
        <div className="row mb-5">
          {/* Brand Section */}
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="mb-4">
              <h4 style={{
                fontWeight: 900,
                color: '#667eea',
                fontSize: '1.75rem',
                marginBottom: '1rem'
              }}>
                <i className="fas fa-heartbeat me-2"></i>
                Health Monitor
              </h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Advanced IoT-powered health monitoring platform providing real-time vital signs tracking with cutting-edge technology and secure data management.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="d-flex gap-3">
              <a href="#" style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}>
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}>
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 style={{ fontWeight: 700, marginBottom: '1.5rem', fontSize: '1.1rem', color: 'white' }}>
              Quick Links
            </h6>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link to="/" style={{ 
                  color: 'rgba(255, 255, 255, 0.7)', 
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  display: 'inline-block'
                }}>
                  <i className="fas fa-chevron-right me-2" style={{ fontSize: '0.75rem' }}></i>
                  Home
                </Link>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link to="/sensor-data" style={{ 
                  color: 'rgba(255, 255, 255, 0.7)', 
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  display: 'inline-block'
                }}>
                  <i className="fas fa-chevron-right me-2" style={{ fontSize: '0.75rem' }}></i>
                  Dashboard
                </Link>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link to="/profile" style={{ 
                  color: 'rgba(255, 255, 255, 0.7)', 
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  display: 'inline-block'
                }}>
                  <i className="fas fa-chevron-right me-2" style={{ fontSize: '0.75rem' }}></i>
                  Profile
                </Link>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#" style={{ 
                  color: 'rgba(255, 255, 255, 0.7)', 
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  display: 'inline-block'
                }}>
                  <i className="fas fa-chevron-right me-2" style={{ fontSize: '0.75rem' }}></i>
                  About Us
                </a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h6 style={{ fontWeight: 700, marginBottom: '1.5rem', fontSize: '1.1rem', color: 'white' }}>
              Resources
            </h6>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#" style={{ 
                  color: 'rgba(255, 255, 255, 0.7)', 
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  display: 'inline-block'
                }}>
                  <i className="fas fa-chevron-right me-2" style={{ fontSize: '0.75rem' }}></i>
                  Documentation
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#" style={{ 
                  color: 'rgba(255, 255, 255, 0.7)', 
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  display: 'inline-block'
                }}>
                  <i className="fas fa-chevron-right me-2" style={{ fontSize: '0.75rem' }}></i>
                  API Reference
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#" style={{ 
                  color: 'rgba(255, 255, 255, 0.7)', 
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  display: 'inline-block'
                }}>
                  <i className="fas fa-chevron-right me-2" style={{ fontSize: '0.75rem' }}></i>
                  Support Center
                </a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#" style={{ 
                  color: 'rgba(255, 255, 255, 0.7)', 
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  display: 'inline-block'
                }}>
                  <i className="fas fa-chevron-right me-2" style={{ fontSize: '0.75rem' }}></i>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h6 style={{ fontWeight: 700, marginBottom: '1.5rem', fontSize: '1.1rem', color: 'white' }}>
              Contact Us
            </h6>
            <div style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              <p style={{ marginBottom: '1rem', display: 'flex', alignItems: 'start' }}>
                <i className="fas fa-map-marker-alt me-3 mt-1" style={{ color: '#667eea' }}></i>
                <span>Coimbatore, Tamil Nadu, 641202</span>
              </p>
              <p style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                <i className="fas fa-envelope me-3" style={{ color: '#667eea' }}></i>
                <span>support@healthmonitor.com</span>
              </p>
              <p style={{ marginBottom: 0, display: 'flex', alignItems: 'center' }}>
                <i className="fas fa-phone me-3" style={{ color: '#667eea' }}></i>
                <span>+91 8870633850</span>
              </p>
            </div>
          </div>
        </div>
        
        
        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '2rem 0',
          marginTop: '2rem'
        }}>
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p style={{ color: 'rgba(255, 255, 255, 0.6)', margin: 0, fontSize: '0.9rem' }}>
                © 2025 Patient Health Monitor. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p style={{ color: 'rgba(255, 255, 255, 0.6)', margin: 0, fontSize: '0.9rem' }}>
                Made {/*<i className="fas fa-heart mx-1" style={{ color: '#ef4444' }}></i>*/} to maintain better health
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
