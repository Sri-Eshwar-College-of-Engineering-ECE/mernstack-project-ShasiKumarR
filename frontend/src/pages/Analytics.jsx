import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import sensorService from "../services/sensorService";

const Analytics = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    fetchData();
  }, [user, navigate]);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError("");
      const sensorData = await sensorService.getAllData();
      setData(sensorData);
    } catch (err) {
      console.error("Error fetching sensor data:", err);
      setError("Failed to load sensor data. Please try again.");
      if (err.response?.status === 401 || err.status === 401) {
        logout();
        navigate("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="mt-5 text-center" style={{ width: '100%' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3 text-muted">Loading analytics...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-5" style={{ width: '100%' }}>
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="mt-5" style={{ width: '100%' }}>
        <div className="card border-0 shadow-sm text-center p-5">
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📊</div>
          <h3>No Data Available</h3>
          <p className="text-muted">Add some health data to see analytics and trends.</p>
          <button className="btn btn-primary mt-3" onClick={() => navigate('/sensor-data')}>
            <i className="fas fa-plus me-2"></i>Add Data
          </button>
        </div>
      </div>
    );
  }

  // Calculate statistics
  const avgPulse = (data.reduce((sum, d) => sum + d.pulseRate, 0) / data.length).toFixed(0);
  const avgSpo2 = (data.reduce((sum, d) => sum + d.spo2Level, 0) / data.length).toFixed(1);
  const avgTemp = (data.reduce((sum, d) => sum + d.bodyTemperature, 0) / data.length).toFixed(1);
  
  const maxPulse = Math.max(...data.map(d => d.pulseRate));
  const minPulse = Math.min(...data.map(d => d.pulseRate));
  const maxSpo2 = Math.max(...data.map(d => d.spo2Level));
  const minSpo2 = Math.min(...data.map(d => d.spo2Level));
  const maxTemp = Math.max(...data.map(d => d.bodyTemperature));
  const minTemp = Math.min(...data.map(d => d.bodyTemperature));

  return (
    <div className="mt-4 mb-5" style={{ width: '100%', maxWidth: '100%' }}>
      {/* Header */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card border-0 shadow-sm" style={{
            background: '#667eea',
            color: 'white'
          }}>
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h2 className="mb-2" style={{color : "white"}}><i className="fas fa-chart-line me-3"></i>Health Analytics Dashboard</h2>
                  <p className="mb-0" style={{ opacity: 0.9 , color : "black"}}>
                    Comprehensive analysis of {data.length} health readings for {user?.name}
                  </p>
                </div>
                <button className="btn btn-light" onClick={fetchData}>
                  <i className="fas fa-sync-alt me-2"></i>Refresh
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Overview */}
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '0.75rem',
                  background: '#667eea',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  marginRight: '1rem'
                }}>
                  💓
                </div>
                <div>
                  <h6 className="mb-0 text-muted">Pulse Rate</h6>
                  <h3 className="mb-0" style={{ fontWeight: 800 }}>{avgPulse} <small className="text-muted">BPM</small></h3>
                </div>
              </div>
              <div className="d-flex justify-content-between text-muted small">
                <span><i className="fas fa-arrow-down text-info me-1"></i>Min: {minPulse}</span>
                <span><i className="fas fa-arrow-up text-danger me-1"></i>Max: {maxPulse}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '0.75rem',
                  background: '#10b981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  marginRight: '1rem'
                }}>
                  🫁
                </div>
                <div>
                  <h6 className="mb-0 text-muted">SpO₂ Level</h6>
                  <h3 className="mb-0" style={{ fontWeight: 800 }}>{avgSpo2} <small className="text-muted">%</small></h3>
                </div>
              </div>
              <div className="d-flex justify-content-between text-muted small">
                <span><i className="fas fa-arrow-down text-info me-1"></i>Min: {minSpo2}</span>
                <span><i className="fas fa-arrow-up text-success me-1"></i>Max: {maxSpo2}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '0.75rem',
                  background: '#f59e0b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  marginRight: '1rem'
                }}>
                  🌡️
                </div>
                <div>
                  <h6 className="mb-0 text-muted">Temperature</h6>
                  <h3 className="mb-0" style={{ fontWeight: 800 }}>{avgTemp} <small className="text-muted">°C</small></h3>
                </div>
              </div>
              <div className="d-flex justify-content-between text-muted small">
                <span><i className="fas fa-arrow-down text-info me-1"></i>Min: {minTemp}</span>
                <span><i className="fas fa-arrow-up text-warning me-1"></i>Max: {maxTemp}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Charts */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-0 p-4">
              <h5 className="mb-1"><i className="fas fa-chart-bar me-2"></i>Health Trends Visualization</h5>
              <small className="text-muted">Showing last {Math.min(data.length, 15)} readings</small>
            </div>
            <div className="card-body p-4">
              {/* Pulse Rate Chart */}
              <div className="mb-5">
                <h6 className="mb-3" style={{ fontWeight: 600, color: '#667eea' }}>
                  <i className="fas fa-heartbeat me-2"></i>Pulse Rate Trend (BPM)
                </h6>
                <div style={{ position: 'relative', height: '350px', padding: '20px 40px 40px 60px' }}>
                  <svg width="100%" height="100%" style={{ overflow: 'visible' }}>
                    {/* Grid lines */}
                    {[0, 50, 100, 150, 200].map((val, i) => {
                      const y = 300 - ((val / 200) * 300);
                      return (
                        <g key={i}>
                          <line
                            x1="0"
                            y1={y}
                            x2="100%"
                            y2={y}
                            stroke="#e5e7eb"
                            strokeWidth="1"
                            strokeDasharray="5,5"
                          />
                          <text
                            x="-10"
                            y={y + 5}
                            textAnchor="end"
                            fill="#9ca3af"
                            fontSize="12"
                          >
                            {val}
                          </text>
                        </g>
                      );
                    })}
                    
                    {/* Line path */}
                    <path
                      d={data.slice(-15).map((d, i) => {
                        const x = (i / (data.slice(-15).length - 1)) * 100;
                        const y = 300 - (((d.pulseRate - 0) / 200) * 300);
                        return `${i === 0 ? 'M' : 'L'} ${x}% ${y}`;
                      }).join(' ')}
                      fill="none"
                      stroke="#667eea"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    
                    {/* Data points */}
                    {data.slice(-15).map((d, i) => {
                      const x = (i / (data.slice(-15).length - 1)) * 100;
                      const y = 300 - (((d.pulseRate - 0) / 200) * 300);
                      const isAbnormal = d.pulseRate > 100 || d.pulseRate < 60;
                      const color = isAbnormal ? '#ef4444' : '#667eea';
                      
                      return (
                        <g key={i}>
                          <circle
                            cx={`${x}%`}
                            cy={y}
                            r="6"
                            fill={color}
                            stroke="white"
                            strokeWidth="2"
                            style={{ cursor: 'pointer' }}
                          />
                          <text
                            x={`${x}%`}
                            y={y - 15}
                            textAnchor="middle"
                            fill={color}
                            fontSize="13"
                            fontWeight="700"
                          >
                            {d.pulseRate}
                          </text>
                          <text
                            x={`${x}%`}
                            y="320"
                            textAnchor="middle"
                            fill="#6b7280"
                            fontSize="11"
                            fontWeight="600"
                          >
                            #{i + 1}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>
                <div className="mt-3 d-flex justify-content-center gap-4">
                  <small className="text-muted">
                    <span style={{ 
                      display: 'inline-block', 
                      width: '12px', 
                      height: '12px', 
                      background: '#667eea', 
                      borderRadius: '2px',
                      marginRight: '6px'
                    }}></span>
                    Normal (60-100)
                  </small>
                  <small className="text-muted">
                    <span style={{ 
                      display: 'inline-block', 
                      width: '12px', 
                      height: '12px', 
                      background: '#ef4444', 
                      borderRadius: '2px',
                      marginRight: '6px'
                    }}></span>
                    Abnormal
                  </small>
                </div>
              </div>

              {/* SpO2 Chart */}
              <div className="mb-5">
                <h6 className="mb-3" style={{ fontWeight: 600, color: '#10b981' }}>
                  <i className="fas fa-lungs me-2"></i>SpO₂ Level Trend (%)
                </h6>
                <div style={{ position: 'relative', height: '350px', padding: '20px 40px 40px 60px' }}>
                  <svg width="100%" height="100%" style={{ overflow: 'visible' }}>
                    {/* Grid lines */}
                    {[80, 85, 90, 95, 100].map((val, i) => {
                      const y = 300 - (((val - 80) / 20) * 300);
                      return (
                        <g key={i}>
                          <line
                            x1="0"
                            y1={y}
                            x2="100%"
                            y2={y}
                            stroke="#e5e7eb"
                            strokeWidth="1"
                            strokeDasharray="5,5"
                          />
                          <text
                            x="-10"
                            y={y + 5}
                            textAnchor="end"
                            fill="#9ca3af"
                            fontSize="12"
                          >
                            {val}
                          </text>
                        </g>
                      );
                    })}
                    
                    {/* Line path */}
                    <path
                      d={data.slice(-15).map((d, i) => {
                        const x = (i / (data.slice(-15).length - 1)) * 100;
                        const y = 300 - (((d.spo2Level - 80) / 20) * 300);
                        return `${i === 0 ? 'M' : 'L'} ${x}% ${y}`;
                      }).join(' ')}
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    
                    {/* Data points */}
                    {data.slice(-15).map((d, i) => {
                      const x = (i / (data.slice(-15).length - 1)) * 100;
                      const y = 300 - (((d.spo2Level - 80) / 20) * 300);
                      const isAbnormal = d.spo2Level < 95;
                      const color = isAbnormal ? '#ef4444' : '#10b981';
                      
                      return (
                        <g key={i}>
                          <circle
                            cx={`${x}%`}
                            cy={y}
                            r="6"
                            fill={color}
                            stroke="white"
                            strokeWidth="2"
                            style={{ cursor: 'pointer' }}
                          />
                          <text
                            x={`${x}%`}
                            y={y - 15}
                            textAnchor="middle"
                            fill={color}
                            fontSize="13"
                            fontWeight="700"
                          >
                            {d.spo2Level}%
                          </text>
                          <text
                            x={`${x}%`}
                            y="320"
                            textAnchor="middle"
                            fill="#6b7280"
                            fontSize="11"
                            fontWeight="600"
                          >
                            #{i + 1}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>
                <div className="mt-3 d-flex justify-content-center gap-4">
                  <small className="text-muted">
                    <span style={{ 
                      display: 'inline-block', 
                      width: '12px', 
                      height: '12px', 
                      background: '#10b981', 
                      borderRadius: '2px',
                      marginRight: '6px'
                    }}></span>
                    Normal (≥95%)
                  </small>
                  <small className="text-muted">
                    <span style={{ 
                      display: 'inline-block', 
                      width: '12px', 
                      height: '12px', 
                      background: '#ef4444', 
                      borderRadius: '2px',
                      marginRight: '6px'
                    }}></span>
                    Low (&lt;95%)
                  </small>
                </div>
              </div>

              {/* Temperature Chart */}
              <div>
                <h6 className="mb-3" style={{ fontWeight: 600, color: '#f59e0b' }}>
                  <i className="fas fa-thermometer-half me-2"></i>Body Temperature Trend (°C)
                </h6>
                <div style={{ position: 'relative', height: '350px', padding: '20px 40px 40px 60px' }}>
                  <svg width="100%" height="100%" style={{ overflow: 'visible' }}>
                    {/* Grid lines */}
                    {[34, 35, 36, 37, 38, 39, 40].map((val, i) => {
                      const y = 300 - (((val - 34) / 6) * 300);
                      return (
                        <g key={i}>
                          <line
                            x1="0"
                            y1={y}
                            x2="100%"
                            y2={y}
                            stroke="#e5e7eb"
                            strokeWidth="1"
                            strokeDasharray="5,5"
                          />
                          <text
                            x="-10"
                            y={y + 5}
                            textAnchor="end"
                            fill="#9ca3af"
                            fontSize="12"
                          >
                            {val}
                          </text>
                        </g>
                      );
                    })}
                    
                    {/* Line path */}
                    <path
                      d={data.slice(-15).map((d, i) => {
                        const x = (i / (data.slice(-15).length - 1)) * 100;
                        const y = 300 - (((d.bodyTemperature - 34) / 6) * 300);
                        return `${i === 0 ? 'M' : 'L'} ${x}% ${y}`;
                      }).join(' ')}
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    
                    {/* Data points */}
                    {data.slice(-15).map((d, i) => {
                      const x = (i / (data.slice(-15).length - 1)) * 100;
                      const y = 300 - (((d.bodyTemperature - 34) / 6) * 300);
                      const isAbnormal = d.bodyTemperature > 37.5 || d.bodyTemperature < 36;
                      const color = isAbnormal ? '#ef4444' : '#f59e0b';
                      
                      return (
                        <g key={i}>
                          <circle
                            cx={`${x}%`}
                            cy={y}
                            r="6"
                            fill={color}
                            stroke="white"
                            strokeWidth="2"
                            style={{ cursor: 'pointer' }}
                          />
                          <text
                            x={`${x}%`}
                            y={y - 15}
                            textAnchor="middle"
                            fill={color}
                            fontSize="13"
                            fontWeight="700"
                          >
                            {d.bodyTemperature}°
                          </text>
                          <text
                            x={`${x}%`}
                            y="320"
                            textAnchor="middle"
                            fill="#6b7280"
                            fontSize="11"
                            fontWeight="600"
                          >
                            #{i + 1}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                </div>
                <div className="mt-3 d-flex justify-content-center gap-4">
                  <small className="text-muted">
                    <span style={{ 
                      display: 'inline-block', 
                      width: '12px', 
                      height: '12px', 
                      background: '#f59e0b', 
                      borderRadius: '2px',
                      marginRight: '6px'
                    }}></span>
                    Normal (36-37.5°C)
                  </small>
                  <small className="text-muted">
                    <span style={{ 
                      display: 'inline-block', 
                      width: '12px', 
                      height: '12px', 
                      background: '#ef4444', 
                      borderRadius: '2px',
                      marginRight: '6px'
                    }}></span>
                    Abnormal
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Health Status Summary */}
      <div className="row">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-0 p-4">
              <h5 className="mb-0"><i className="fas fa-clipboard-check me-2"></i>Health Status Summary</h5>
            </div>
            <div className="card-body p-4">
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="p-3" style={{ 
                    background: avgPulse >= 60 && avgPulse <= 100 ? '#d1fae5' : '#fee2e2',
                    borderRadius: '0.75rem',
                    borderLeft: `4px solid ${avgPulse >= 60 && avgPulse <= 100 ? '#10b981' : '#ef4444'}`
                  }}>
                    <h6 className="mb-2">Pulse Rate Status</h6>
                    <p className="mb-0" style={{ fontSize: '0.9rem', color: '#374151' }}>
                      {avgPulse >= 60 && avgPulse <= 100 
                        ? '✅ Your average pulse rate is within normal range' 
                        : '⚠️ Your average pulse rate needs attention'}
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="p-3" style={{ 
                    background: avgSpo2 >= 95 ? '#d1fae5' : '#fee2e2',
                    borderRadius: '0.75rem',
                    borderLeft: `4px solid ${avgSpo2 >= 95 ? '#10b981' : '#ef4444'}`
                  }}>
                    <h6 className="mb-2">SpO₂ Status</h6>
                    <p className="mb-0" style={{ fontSize: '0.9rem', color: '#374151' }}>
                      {avgSpo2 >= 95 
                        ? '✅ Your oxygen saturation is excellent' 
                        : '⚠️ Low oxygen saturation detected'}
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="p-3" style={{ 
                    background: avgTemp >= 36 && avgTemp <= 37.5 ? '#d1fae5' : '#fee2e2',
                    borderRadius: '0.75rem',
                    borderLeft: `4px solid ${avgTemp >= 36 && avgTemp <= 37.5 ? '#10b981' : '#ef4444'}`
                  }}>
                    <h6 className="mb-2">Temperature Status</h6>
                    <p className="mb-0" style={{ fontSize: '0.9rem', color: '#374151' }}>
                      {avgTemp >= 36 && avgTemp <= 37.5 
                        ? '✅ Your body temperature is normal' 
                        : '⚠️ Temperature outside normal range'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
