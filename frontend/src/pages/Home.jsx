import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Home() {
  const { user } = useContext(AuthContext);

  // If user is logged in, show dashboard-style home
  if (user) {
    return (
      <div className="home-page" style={{ width: '100%', margin: 0, padding: 0 }}>
        {/* Welcome Section for Logged-in Users */}
        <section style={{
          background: '#667eea',
          padding: '4rem 2rem',
          color: 'white',
          width: '100%'
        }}>
          <div style={{ maxWidth: '100%', margin: '0 auto' }}>
            <div className="text-center">
              <h1 className="display-4 mb-3" style={{ fontWeight: 900, color : 'white' }}>
                <i className="fas fa-home me-3"></i>
                Welcome Back, {user.name}!
              </h1>
              <p className="lead" style={{ fontSize: '1.5rem', opacity: 0.95, color : 'black' }}>
                Your Health Dashboard
              </p>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section style={{ padding: '4rem 2rem', background: 'var(--gray-50)', width: '100%' }}>
          <div style={{ maxWidth: '100%', margin: '0 auto' }}>
            <h2 className="text-center mb-5" style={{ fontWeight: 800 }}>
              <i className="fas fa-bolt me-2" style={{ color: '#667eea' }}></i>
              Quick Actions
            </h2>
            <div className="row g-4">
              <div className="col-md-4">
                <Link to="/sensor-data" className="text-decoration-none">
                  <div className="card h-100 border-0 shadow-lg" style={{
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div className="card-body text-center p-5">
                      <div style={{
                        width: '100px',
                        height: '100px',
                        background: '#667eea',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem',
                        fontSize: '3rem',
                        color: 'white'
                      }}>
                        <i className="fas fa-chart-line"></i>
                      </div>
                      <h4 className="mb-3" style={{ fontWeight: 700, color: '#667eea' }}>View Sensor Data</h4>
                      <p className="text-muted">Monitor your real-time health metrics</p>
                    </div>
                  </div>
                </Link>
              </div>
              
              <div className="col-md-4">
                <Link to="/analytics" className="text-decoration-none">
                  <div className="card h-100 border-0 shadow-lg" style={{
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div className="card-body text-center p-5">
                      <div style={{
                        width: '100px',
                        height: '100px',
                        background: '#667eea',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem',
                        fontSize: '3rem',
                        color: 'white'
                      }}>
                        <i className="fas fa-chart-bar"></i>
                      </div>
                      <h4 className="mb-3" style={{ fontWeight: 700, color: '#667eea' }}>View Analytics</h4>
                      <p className="text-muted">Analyze your health trends and insights</p>
                    </div>
                  </div>
                </Link>
              </div>
              
              <div className="col-md-4">
                <Link to="/profile" className="text-decoration-none">
                  <div className="card h-100 border-0 shadow-lg" style={{
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div className="card-body text-center p-5">
                      <div style={{
                        width: '100px',
                        height: '100px',
                        background: '#667eea',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem',
                        fontSize: '3rem',
                        color: 'white'
                      }}>
                        <i className="fas fa-user-circle"></i>
                      </div>
                      <h4 className="mb-3" style={{ fontWeight: 700, color: '#667eea' }}>Manage Profile</h4>
                      <p className="text-muted">Update your account settings</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Health Tips */}
        <section style={{ padding: '4rem 2rem', background: 'white', width: '100%' }}>
          <div style={{ maxWidth: '100%', margin: '0 auto' }}>
            <h2 className="text-center mb-5" style={{ fontWeight: 800 }}>
              <i className="fas fa-lightbulb me-2" style={{ color: '#667eea' }}></i>
              Health Tips
            </h2>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h5 className="mb-3" style={{ fontWeight: 700, color: '#667eea' }}>
                      <i className="fas fa-heartbeat me-2"></i>Monitor Regularly
                    </h5>
                    <p className="text-muted mb-0">
                      Check your vital signs daily to track patterns and detect any unusual changes early.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h5 className="mb-3" style={{ fontWeight: 700, color: '#667eea' }}>
                      <i className="fas fa-notes-medical me-2"></i>Stay Informed
                    </h5>
                    <p className="text-muted mb-0">
                      Review your analytics regularly to understand your health trends and make informed decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Landing page for non-logged-in users
  return (
    <div className="home-page" style={{ width: '100%', margin: 0, padding: 0 }}>
      {/* Hero Section */}
      <section className="hero-section" style={{
        background: '#667eea',
        padding: '6rem 2rem',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        width: '100%'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.3
        }}></div>
        
        <div style={{ maxWidth: '100%', margin: '0 auto', position: 'relative', zIndex: 1, padding: '0 2rem' }}>
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="fade-in">
                <h1 className="display-4 mb-4" style={{ 
                  fontWeight: 900, 
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                  textShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  color : 'white'
                }}>
                  <i className="fas fa-heartbeat me-3"></i>
                  Patient Health Monitor
                </h1>
                <p className="lead mb-4" style={{ 
                  fontSize: '1.5rem',
                  opacity: 0.95,
                  textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  color : 'black'
                }}>
                  Advanced IoT-powered health monitoring system for real-time vital signs tracking
                </p>
                
                <div className="d-flex gap-3 flex-wrap">
                  <Link to="/login" className="btn btn-light btn-lg">
                    <i className="fas fa-sign-in-alt me-2"></i>
                    Sign In
                  </Link>
                  <Link to="/signup" className="btn btn-outline-light btn-lg">
                    <i className="fas fa-user-plus me-2"></i>
                    Create Account
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '5rem 2rem', background: 'var(--gray-50)', width: '100%' }}>
        <div style={{ maxWidth: '100%', margin: '0 auto' }}>
          <div className="text-center mb-5">
            <h2 className="display-5 mb-3" style={{ fontWeight: 800 }}>
              <i className="fas fa-star me-3" style={{ color: 'var(--primary)' }}></i>
              Powerful Features
            </h2>
            <p className="lead text-muted">Everything you need for comprehensive health monitoring</p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-lg" style={{ 
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}>
                <div className="card-body text-center p-4">
                  <div className="mb-4" style={{
                    width: '80px',
                    height: '80px',
                    background: '#667eea',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    fontSize: '2rem',
                    color: 'white',
                    boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)'
                  }}>
                    📊
                  </div>
                  <h5 className="card-title mb-3" style={{ fontWeight: 700 }}>Real-Time Monitoring</h5>
                  <p className="card-text text-muted">
                    Track your vital signs in real-time with instant updates and live data visualization
                  </p>
                  <Link to="/login" className="btn btn-outline-primary mt-3">
                    <i className="fas fa-lock me-2"></i>
                    Login to Access
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-lg" style={{ 
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}>
                <div className="card-body text-center p-4">
                  <div className="mb-4" style={{
                    width: '80px',
                    height: '80px',
                    background: '#667eea',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    fontSize: '2rem',
                    color: 'white',
                    boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)'
                  }}>
                    👤
                  </div>
                  <h5 className="card-title mb-3" style={{ fontWeight: 700 }}>Personal Profile</h5>
                  <p className="card-text text-muted">
                    Manage your account settings, preferences, and personal health information
                  </p>
                  <Link to="/signup" className="btn btn-outline-primary mt-3">
                    <i className="fas fa-user-plus me-2"></i>
                    Create Account
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-lg" style={{ 
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}>
                <div className="card-body text-center p-4">
                  <div className="mb-4" style={{
                    width: '80px',
                    height: '80px',
                    background: '#667eea',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    fontSize: '2rem',
                    color: 'white',
                    boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)'
                  }}>
                    🚀
                  </div>
                  <h5 className="card-title mb-3" style={{ fontWeight: 700 }}>Advanced Analytics</h5>
                  <p className="card-text text-muted">
                    Get insights with comprehensive health tracking and data visualization tools
                  </p>
                  <div className="mt-3">
                    <span className="badge bg-success me-2">Real-time</span>
                    <span className="badge bg-info me-2">Secure</span>
                    <span className="badge bg-warning">IoT Powered</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ 
        padding: '4rem 2rem',
        background: '#667eea',
        color: 'white',
        width: '100%'
      }}>
        <div style={{ maxWidth: '100%', margin: '0 auto' }}>
          <div className="row text-center g-4">
            <div className="col-md-3 col-6">
              <div className="fade-in">
                <h2 style={{ fontSize: '3rem', fontWeight: 800, color : "white" }}>24/7</h2>
                <p style={{ opacity: 0.9, color: "black" }}>Monitoring</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="fade-in" style={{ animationDelay: '0.1s' }}>
                <h2 style={{ fontSize: '3rem', fontWeight: 800, color : "white" }}>100%</h2>
                <p style={{ opacity: 0.9, color: "black" }}>Secure</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="fade-in" style={{ animationDelay: '0.2s' }}>
                <h2 style={{ fontSize: '3rem', fontWeight: 800, color : "white" }}>Real-time</h2>
                <p style={{ opacity: 0.9, color: "black" }}>Updates</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="fade-in" style={{ animationDelay: '0.3s' }}>
                <h2 style={{ fontSize: '3rem', fontWeight: 800, color : "white" }}>IoT</h2>
                <p style={{ opacity: 0.9, color: "black" }}>Powered</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
