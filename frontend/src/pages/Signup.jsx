import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const res = await signup(name, email, password);
      if (res?.token) {
        navigate("/");
      } else if (res?.message) {
        navigate("/login");
      } else {
        setError("Signup failed!");
      }
    } catch (error) {
      setError(error.message || "Signup failed!");
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
              <i className="fas fa-user-plus"></i>
            </div>
            <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1rem', textShadow: '0 4px 6px rgba(0,0,0,0.2)' }}>
              Join Health Monitor
            </h1>
            <p style={{ fontSize: '1.25rem', opacity: 0.95, lineHeight: 1.6 }}>
              Start monitoring your health with our advanced IoT-powered platform
            </p>
          </div>

          {/* Benefits List */}
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
                ✅
              </div>
              <div>
                <h5 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Free to Get Started</h5>
                <p style={{ opacity: 0.9, marginBottom: 0 }}>Create your account and start monitoring immediately</p>
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
                💾
              </div>
              <div>
                <h5 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Data Storage</h5>
                <p style={{ opacity: 0.9, marginBottom: 0 }}>All your health records stored securely in the cloud</p>
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
                📱
              </div>
              <div>
                <h5 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Access Anywhere</h5>
                <p style={{ opacity: 0.9, marginBottom: 0 }}>Monitor your health from any device, anytime</p>
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
                🎯
              </div>
              <div>
                <h5 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Personalized Insights</h5>
                <p style={{ opacity: 0.9, marginBottom: 0 }}>Get tailored health recommendations and alerts</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center p-4" style={{
        background: 'white',
        position: 'relative'
      }}>
        
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
        
        <div style={{ width: '100%', maxWidth: '450px', marginTop: '4rem' }}>
          <div className="text-center mb-5 fade-in">
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--gray-900)', marginBottom: '0.5rem' }}>
              Create Account
            </h2>
            <p style={{ color: 'var(--gray-600)', fontSize: '1.125rem' }}>
              Join thousands monitoring their health
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
                <i className="fas fa-user me-2" style={{ color: 'var(--success)' }}></i>
                Full Name
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                <i className="fas fa-envelope me-2" style={{ color: 'var(--success)' }}></i>
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
                <i className="fas fa-lock me-2" style={{ color: 'var(--success)' }}></i>
                Password
              </label>
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Create a strong password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength="6"
                style={{
                  borderRadius: '1rem',
                  border: '2px solid var(--gray-200)',
                  padding: '1rem 1.25rem',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease'
                }}
              />
              <small style={{ color: 'var(--gray-500)', fontSize: '0.875rem' }}>
                Must be at least 6 characters
              </small>
            </div>

            <button 
              type="submit"
              className="btn btn-success w-100 btn-lg mb-4"
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
                  Creating Account...
                </>
              ) : (
                <>
                  <i className="fas fa-user-plus me-2"></i>
                  Create My Account
                </>
              )}
            </button>

            <div className="text-center">
              <p style={{ color: 'var(--gray-600)', marginBottom: 0 }}>
                Already have an account?{' '}
                <Link to="/login" style={{
                  color: 'var(--success)',
                  fontWeight: 700,
                  textDecoration: 'none'
                }}>
                  Sign In
                </Link>
              </p>
            </div>
          </form>

          {/* Trust Indicators */}
          <div className="mt-5 pt-4 border-top fade-in" style={{ animationDelay: '0.2s', borderColor: 'var(--gray-200)' }}>
            <p className="text-center mb-3" style={{ color: 'var(--gray-600)', fontSize: '0.875rem', fontWeight: 600 }}>
              Trusted by healthcare professionals
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              
              <span className="badge" style={{ 
                background: '#667eea',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                fontSize: '0.875rem'
              }}>
                <i className="fas fa-certificate me-1"></i> ISO Certified
              </span>
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

export default Signup;
