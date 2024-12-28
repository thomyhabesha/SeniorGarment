import React, { useState } from "react";
import "./AdminSettings.css";
import Sidebar from "../../../components/sidebar/Sidebar";
import DashHead from "../../../components/dashHead/DashHead";
import axios from "axios";

function AdminSettings() {
  const [username, setUsername] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');  // State for displaying success/error messages
  const [messageType, setMessageType] = useState('');  // State for determining message type ('success' or 'error')

  const handleUpdate = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put('http://localhost:5000/api/updateSettings', {
        username,
        newUsername,
        oldPassword,
        newPassword,
      });

      if (response.status === 200) {
        // On success, display a success message
        setMessage('Admin settings updated successfully');
        setMessageType('success');
      }
    } catch (error) {
      // On error, display an error message
      setMessage('Error updating admin settings: ' + error.response.data.message);
      setMessageType('error');
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar user="admin" />
      
      <main className="main-content">
        <DashHead heading="Settings" />
        <section className="container-section">
          <h3>Modify Account</h3>
          <div className="registerForm">
            <form onSubmit={handleUpdate}>
              <input
                type="text"
                placeholder="User name"
                className="input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="text"
                placeholder="New user name"
                className="input"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
              
              <input
                type="password"
                placeholder="Old Password"
                className="input"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="New Password"
                className="input"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />

              
              
            </form>
            <button type="submit" className="button">Update</button>
            {/* Display the message */}
            {message && (
              <div className={`message ${messageType}`}>
                {message}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminSettings;
