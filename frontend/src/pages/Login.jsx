import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const res = await login(email, password);
      if (res?.token) {
        navigate("/");
      } else {
        setError("Login failed!");
      }
    } catch (error) {
      setError(error.message || "Login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="vh-100 d-flex" style={{ overflow: 'hidden' }}>
      {/* Left Side - Project Information */}
      <div className="col-lg-6 d-none d-lg-flex flex-column justify-content-center align-items-center p-5" style={{
        background: '#667eea',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.3,
          animation: 'float 20s ease-in-out infinite'
        }}></div>

        <div style={{ position: 'relative', zIndex: 1, color: 'white', maxWidth: '500px' }}>
          {/* Logo and Title */}
          <div className="text-center mb-5 fade-in">
            <div style={{
              width: '120px',
              height: '120px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem',
              fontSize: '4rem',
              backdropFilter: 'blur(20px)',
              border: '3px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              animation: 'pulse 3s ease-in-out infinite'
            }}>
              <i className="fas fa-heartbeat"></i>
            </div>
            <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1rem', textShadow: '0 4px 6px rgba(0,0,0,0.2)' }}>
              Patient Health Monitor
            </h1>
            <p style={{ fontSize: '1.25rem', opacity: 0.95, lineHeight: 1.6 }}>
              Advanced IoT-powered health monitoring system for real-time vital signs tracking
            </p>
          </div>

          {/* Features List */}
          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="mb-4 d-flex align-items-start">
              <div style={{
                width: '60px',
                height: '60px',
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.75rem',
                marginRight: '1.5rem',
                backdropFilter: 'blur(10px)',
                flexShrink: 0
              }}>
                📊
              </div>
              <div>
                <h5 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Real-Time Monitoring</h5>
                <p style={{ opacity: 0.9, marginBottom: 0 }}>Track heart rate, SpO₂, and temperature with instant updates</p>
              </div>
            </div>

            <div className="mb-4 d-flex align-items-start">
              <div style={{
                width: '60px',
                height: '60px',
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.75rem',
                marginRight: '1.5rem',
                backdropFilter: 'blur(10px)',
                flexShrink: 0
              }}>
                🔒
              </div>
              <div>
                <h5 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Secure & Private</h5>
                <p style={{ opacity: 0.9, marginBottom: 0 }}>Your health data is encrypted and protected with JWT authentication</p>
              </div>
            </div>

            <div className="mb-4 d-flex align-items-start">
              <div style={{
                width: '60px',
                height: '60px',
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.75rem',
                marginRight: '1.5rem',
                backdropFilter: 'blur(10px)',
                flexShrink: 0
              }}>
                🚀
              </div>
              <div>
                <h5 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>IoT Powered</h5>
                <p style={{ opacity: 0.9, marginBottom: 0 }}>Connected devices for seamless health data collection</p>
              </div>
            </div>

            <div className="d-flex align-items-start">
              <div style={{
                width: '60px',
                height: '60px',
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.75rem',
                marginRight: '1.5rem',
                backdropFilter: 'blur(10px)',
                flexShrink: 0
              }}>
                📈
              </div>
              <div>
                <h5 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Data Analytics</h5>
                <p style={{ opacity: 0.9, marginBottom: 0 }}>Comprehensive insights and health trend visualization</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center p-4" style={{
        background: 'white',
        position: 'relative'
      }}>
        {/* Back to Home - Top Left */}
        <Link to="/" style={{
          position: 'absolute',
          top: '2rem',
          left: '2rem',
          color: 'var(--gray-600)',
          textDecoration: 'none',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          transition: 'all 0.3s ease'
        }}>
          <i className="fas fa-arrow-left"></i>
          Back to Home
        </Link>

        <div style={{ width: '100%', maxWidth: '450px' }}>
          <div className="text-center mb-5 fade-in">
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--gray-900)', marginBottom: '0.5rem' }}>
              Welcome Back
            </h2>
            <p style={{ color: 'var(--gray-600)', fontSize: '1.125rem' }}>
              Sign in to access your health dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit} className="fade-in" style={{ animationDelay: '0.1s' }}>
            {error && (
              <div className="alert alert-danger mb-4" role="alert" style={{
                borderRadius: '1rem',
                border: 'none',
                background: '#fee2e2',
                color: '#991b1b',
                borderLeft: '4px solid var(--danger)'
              }}>
                <i className="fas fa-exclamation-circle me-2"></i>
                {error}
              </div>
            )}

            <div className="mb-4">
              <label className="form-label fw-semibold" style={{ color: 'var(--gray-700)', fontSize: '0.9375rem' }}>
                <i className="fas fa-envelope me-2" style={{ color: 'var(--primary)' }}></i>
                Email Address
              </label>
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  borderRadius: '1rem',
                  border: '2px solid var(--gray-200)',
                  padding: '1rem 1.25rem',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease'
                }}
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold" style={{ color: 'var(--gray-700)', fontSize: '0.9375rem' }}>
                <i className="fas fa-lock me-2" style={{ color: 'var(--primary)' }}></i>
                Password
              </label>
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  borderRadius: '1rem',
                  border: '2px solid var(--gray-200)',
                  padding: '1rem 1.25rem',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease'
                }}
              />
            </div>

            <button 
              type="submit"
              className="btn btn-primary w-100 btn-lg mb-4"
              disabled={loading}
              style={{
                borderRadius: '1rem',
                padding: '1rem',
                fontSize: '1.125rem',
                fontWeight: 700,
                border: 'none',
                background: '#667eea',
                boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
                transition: 'all 0.3s ease'
              }}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                  Signing in...
                </>
              ) : (
                <>
                  <i className="fas fa-sign-in-alt me-2"></i>
                  Sign In to Dashboard
                </>
              )}
            </button>

            <div className="text-center">
              <p style={{ color: 'var(--gray-600)', marginBottom: 0 }}>
                Don't have an account?{' '}
                <Link to="/signup" style={{
                  color: 'var(--primary)',
                  fontWeight: 700,
                  textDecoration: 'none'
                }}>
                  Create Account
                </Link>
              </p>
            </div>
          </form>

          {/* Trust Badges */}
          <div className="mt-5 pt-4 border-top fade-in" style={{ animationDelay: '0.2s', borderColor: 'var(--gray-200)' }}>
            <div className="d-flex justify-content-center gap-4 flex-wrap">
              <div className="text-center">
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔒</div>
                <small style={{ color: 'var(--gray-600)', fontWeight: 600 }}>Secure</small>
              </div>
              <div className="text-center">
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚡</div>
                <small style={{ color: 'var(--gray-600)', fontWeight: 600 }}>Fast</small>
              </div>
              <div className="text-center">
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌐</div>
                <small style={{ color: 'var(--gray-600)', fontWeight: 600 }}>IoT</small>
              </div>
              <div className="text-center">
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📊</div>
                <small style={{ color: 'var(--gray-600)', fontWeight: 600 }}>Analytics</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}

export default Login;
