import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({
    name: user?.name || '',
    email: user?.email || ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  if (!user) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">Please log in to view your profile.</div>
      </div>
    );
  }

  const handleInputChange = (e) => {
    setEditedUser({
      ...editedUser,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      setError("");
      setSuccess("");
      
    
      setTimeout(() => {
        setSuccess("Profile updated successfully!");
        setIsEditing(false);
        setLoading(false);
      }, 1000);
      
    } catch (err) {
      setError("Failed to update profile");
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setEditedUser({
      name: user.name,
      email: user.email
    });
    setIsEditing(false);
    setError("");
    setSuccess("");
  };

  return (
    <div className="mt-5" style={{ width: '100%' }}>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="mb-0">User Profile</h3>
                {!isEditing && (
                  <button 
                    className="btn btn-primary"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit Profile
                  </button>
                )}
              </div>
            </div>
            <div className="card-body">
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              
              {success && (
                <div className="alert alert-success" role="alert">
                  {success}
                </div>
              )}

              <div className="row mb-3">
                <div className="col-sm-4">
                  <strong>Name:</strong>
                </div>
                <div className="col-sm-8">
                  {isEditing ? (
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={editedUser.name}
                      onChange={handleInputChange}
                    />
                  ) : (
                    user.name
                  )}
                </div>
              </div>
              
              <div className="row mb-3">
                <div className="col-sm-4">
                  <strong>Email:</strong>
                </div>
                <div className="col-sm-8">
                  {isEditing ? (
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={editedUser.email}
                      onChange={handleInputChange}
                    />
                  ) : (
                    user.email
                  )}
                </div>
              </div>
              
              <div className="row mb-3">
                <div className="col-sm-4">
                  <strong>User ID:</strong>
                </div>
                <div className="col-sm-8">
                  <small className="text-muted">{user._id}</small>
                </div>
              </div>
              
              <div className="row mb-3">
                <div className="col-sm-4">
                  <strong>Member Since:</strong>
                </div>
                <div className="col-sm-8">
                  <small className="text-muted">
                    {new Date(user.token || Date.now()).toLocaleDateString()}
                  </small>
                </div>
              </div>
              
              <hr />
              
              <div className="text-center">
                {isEditing ? (
                  <div>
                    <button 
                      className="btn btn-success me-2"
                      onClick={handleSave}
                      disabled={loading}
                    >
                      {loading ? "Saving..." : "Save Changes"}
                    </button>
                    <button 
                      className="btn btn-secondary"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button 
                    className="btn btn-danger"
                    onClick={logout}
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;