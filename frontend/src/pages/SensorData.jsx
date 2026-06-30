import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import sensorService from "../services/sensorService";

const SensorData = () => {
  const [data, setData] = useState([]);
  const [live, setLive] = useState(null);
  const [liveLoading, setLiveLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    fetchData();
  }, [user, navigate, logout]);

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

  const fetchLive = async () => {
    try {
      setLiveLoading(true);
      setError("");
      const liveData = await sensorService.getLiveData();
      setLive(liveData);
      setSuccess("Fetched latest live data from ThingSpeak");
    } catch (err) {
      console.error("Error fetching live data:", err);
      setError(err.message || "Failed to fetch live data");
    } finally {
      setLiveLoading(false);
      setTimeout(() => setSuccess(""), 2500);
    }
  };

  const saveLive = async () => {
    try {
      setLiveLoading(true);
      setError("");
      const res = await sensorService.saveLiveData();
      setSuccess(res.message || "Saved latest live data");
      await fetchData();
    } catch (err) {
      console.error("Error saving live data:", err);
      setError(err.message || "Failed to save live data");
    } finally {
      setLiveLoading(false);
      setTimeout(() => setSuccess(""), 2500);
    }
  };


  const handleClearData = async () => {
    if (window.confirm(`Are you sure you want to delete all ${data.length} sensor data records? This action cannot be undone.`)) {
      try {
        setLoading(true);
        setError("");
        const result = await sensorService.clearAllData();
        setSuccess(result.message);
        setData([]);
      } catch (err) {
        console.error("Error clearing data:", err);
        setError(err.message || "Failed to clear data");
      } finally {
        setLoading(false);
      }
    }
  };

  const getHealthStatus = (pulseRate, spo2Level, bodyTemperature) => {
    let status = "healthy";
    const issues = [];
    
    if (pulseRate > 100 || pulseRate < 60) issues.push("Pulse");
    if (spo2Level < 95) issues.push("SpO₂");
    if (bodyTemperature > 37.5 || bodyTemperature < 36) issues.push("Temperature");
    
    if (issues.length > 0) {
      status = issues.length > 1 ? "critical" : "warning";
    }
    
    return status;
  };

  if (loading) {
    return (
      <div className="mt-5" style={{ width: '100%' }}>
        <div className="d-flex justify-content-center align-items-center" style={{minHeight: '400px'}}>
          <div className="text-center">
            <div className="spinner-border text-primary mb-3" role="status" style={{width: '3rem', height: '3rem'}}>
              <span className="visually-hidden">Loading...</span>
            </div>
            <h4>Loading your health data...</h4>
            <p className="text-muted">Please wait while we fetch your records</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4" style={{ width: '100%' }}>
      {/* Header Section */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body bg-gradient text-white" style={{background: '#667eea'}}>
              <div className="row align-items-center">
                <div className="col-md-8">
                  <h2 className="mb-2" style={{color : "white"}}><i className="fas fa-heartbeat me-2"></i>Health Monitoring Dashboard</h2>
                  <p className="mb-0 opacity-75" style={{color : "black"}}>Real-time health data from IoT device for <strong>{user?.name}</strong></p>
                </div>
                <div className="col-md-4 text-end">
                  <div className="d-flex gap-2 flex-wrap justify-content-md-end">
                    <button 
                      className="btn btn-outline-light btn-lg"
                      onClick={fetchLive}
                      disabled={liveLoading}
                      style={{ minWidth: '150px' }}
                    >
                      <i className="fas fa-broadcast-tower me-2"></i>
                      {liveLoading ? 'Fetching...' : 'Get Live'}
                    </button>
                    <button 
                      className="btn btn-outline-light btn-lg"
                      onClick={saveLive}
                      disabled={liveLoading}
                      style={{ minWidth: '150px' }}
                    >
                      <i className="fas fa-save me-2"></i>
                      {liveLoading ? 'Saving...' : 'Save Latest'}
                    </button>
                    <button 
                      className="btn btn-outline-light btn-lg"
                      onClick={fetchData}
                      style={{ minWidth: '120px' }}
                    >
                      <i className="fas fa-sync-alt me-2"></i>
                      Refresh
                    </button>
                    {data.length > 0 && (
                      <button 
                        className="btn btn-outline-danger btn-lg"
                        onClick={handleClearData}
                        style={{ minWidth: '140px' }}
                      >
                        <i className="fas fa-trash-alt me-2"></i>
                        Clear All
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Data Panel */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white d-flex align-items-center">
              <h5 className="mb-0">📡 Live ThingSpeak Data</h5>
              <small className="text-muted ms-2">Channel 3141021</small>
            </div>
            <div className="card-body">
              {!live ? (
                <div className="text-muted">Click "Get Live" to fetch the latest data from ThingSpeak.</div>
              ) : (
                <div className="row text-center">
                  <div className="col-md-3 col-6 mb-3">
                    <div className="p-3 rounded bg-light">
                      <div className="fw-bold">🌡️ Temperature</div>
                      <div className="display-6">{live.temperature ?? '-'}°C</div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6 mb-3">
                    <div className="p-3 rounded bg-light">
                      <div className="fw-bold">🫁 SpO₂</div>
                      <div className="display-6">{live.spo2 ?? '-'}%</div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6 mb-3">
                    <div className="p-3 rounded bg-light">
                      <div className="fw-bold">💓 BPM</div>
                      <div className="display-6">{live.bpm ?? '-'}
                        <small className="text-muted ms-1">BPM</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6 mb-3">
                    <div className="p-3 rounded bg-light">
                      <div className="fw-bold">⏱️ Timestamp</div>
                      <div>{live.created_at ? new Date(live.created_at).toLocaleString() : '-'}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      {error && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>Error!</strong> {error}
          <button type="button" className="btn-close" onClick={() => setError("")}></button>
        </div>
      )}

      {success && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          <strong>Success!</strong> {success}
          <button type="button" className="btn-close" onClick={() => setSuccess("")}></button>
        </div>
      )}

      {/* Data Display */}
      {data.length === 0 && !loading && !error ? (
        <div className="row">
          <div className="col-12">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center py-5">
                <div className="mb-4">
                  <i className="fas fa-heartbeat text-muted" style={{fontSize: '4rem'}}></i>
                </div>
                <h3 className="text-muted"><i className="fas fa-chart-line me-2"></i>No Health Data Yet</h3>
                <p className="lead text-muted">Waiting for data from your IoT device...</p>
                <p className="text-muted">Make sure your IoT device is connected and sending data to the system.</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-12">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-white">
                <h5 className="mb-0">🔍 Health Monitoring Records</h5>
                <small className="text-muted">Your complete health data history</small>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-hover mb-0">
                    <thead className="table-dark">
                      <tr>
                        <th>#</th>
                        <th>💓 Pulse Rate</th>
                        <th>🫁 SpO₂ Level</th>
                        <th>🌡️ Body Temperature</th>
                        <th>📊 Overall Status</th>
                        <th>📅 Recorded</th>
                        <th>⏰ Time Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((d, i) => {
                        const healthStatus = getHealthStatus(d.pulseRate, d.spo2Level, d.bodyTemperature);
                        return (
                          <tr key={d._id || i} className="align-middle">
                            <td><strong>{i + 1}</strong></td>
                            <td>
                              <span className={`badge fs-6 ${
                                d.pulseRate > 100 ? 'bg-danger' : 
                                d.pulseRate < 60 ? 'bg-warning' : 'bg-success'
                              }`}>
                                {d.pulseRate} BPM
                              </span>
                            </td>
                            <td>
                              <span className={`badge fs-6 ${
                                d.spo2Level < 95 ? 'bg-danger' : 'bg-success'
                              }`}>
                                {d.spo2Level}%
                              </span>
                            </td>
                            <td>
                              <span className={`badge fs-6 ${
                                d.bodyTemperature > 37.5 ? 'bg-danger' : 
                                d.bodyTemperature < 36 ? 'bg-warning' : 'bg-success'
                              }`}>
                                {d.bodyTemperature}°C
                              </span>
                            </td>
                            <td>
                              <span className={`badge fs-6 ${
                                healthStatus === 'healthy' ? 'bg-success' :
                                healthStatus === 'warning' ? 'bg-warning' : 'bg-danger'
                              }`}>
                                {healthStatus === 'healthy' ? ' Healthy' : 
                                 healthStatus === 'warning' ? ' Warning' : ' Critical'}
                              </span>
                            </td>
                            <td>
                              <small className="text-muted">
                                {new Date(d.createdAt).toLocaleDateString()}
                              </small>
                              <br />
                              <small className="text-muted">
                                {new Date(d.createdAt).toLocaleTimeString()}
                              </small>
                            </td>
                            <td>
                              <span className={`badge ${
                                new Date(d.createdAt) > new Date(Date.now() - 60000) ? 'bg-info' : 'bg-secondary'
                              }`}>
                                {new Date(d.createdAt) > new Date(Date.now() - 60000) ? ' Live' : ' Historical'}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                
                {data.length > 0 && (
                  <div className="card-footer bg-light">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <small className="text-muted">
                          📊 Showing {data.length} record{data.length !== 1 ? 's' : ''} • 
                          🟢 Green = Normal • 🟡 Yellow = Warning • 🔴 Red = Critical
                        </small>
                      </div>
                      <div className="col-md-6 text-end">
                        <small className="text-muted">
                          Last updated: {new Date().toLocaleString()}
                        </small>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SensorData;