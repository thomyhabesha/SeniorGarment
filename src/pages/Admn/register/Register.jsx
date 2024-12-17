import React, { useState } from "react";
import "./Register.css";
import Sidebar from "../../../components/sidebar/Sidebar";
import DashHead from "../../../components/dashHead/DashHead";

// Popup Component
const Popup = ({ message, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <p>{message}</p>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

function Register() {
  const [formData, setFormData] = useState({
    Fname: "",
    Lname: "",
    email: "",
    department: "",
    user_role: "",
    contact_no: "",
  });

  const [loading, setLoading] = useState(false); // Loading state
  const [message, setMessage] = useState(""); // Success message
  const [error, setError] = useState(""); // Error message
  const [showPopup, setShowPopup] = useState(false); // Popup visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setMessage(""); // Clear messages when user types
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setMessage(""); // Reset message
    setError("");
    setShowPopup(false); // Hide popup initially

    try {
      const response = await fetch("http://localhost:5000/api/CreateUserRoute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("User registered successfully!");
        setShowPopup(true); // Show popup
        setFormData({
          Fname: "",
          Lname: "",
          email: "",
          department: "",
          user_role: "",
          contact_no: "",
        }); // Clear form
      } else {
        setError(`Error: ${data.message || "Failed to register user"}`);
      }
    } catch (err) {
      console.error("Error registering user:", err);
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar user="admin" />
      <main className="main-content">
        <DashHead heading="Register" />
        <section className="container-section">
          <h3>Register new user</h3>
          <div className="registerForm">
            {/* Error and Success Messages */}
            {error && <p className="error-message">{error}</p>}

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="Fname"
                placeholder="First Name"
                className="input"
                value={formData.Fname}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="Lname"
                placeholder="Last Name"
                className="input"
                value={formData.Lname}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="department"
                placeholder="Department"
                className="input"
                value={formData.department}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="contact_no"
                placeholder="Contact No"
                className="input"
                value={formData.contact_no}
                onChange={handleChange}
                required
              />
              <div className="role-select">
                <select
                  name="user_role"
                  className="input"
                  value={formData.user_role}
                  onChange={handleChange}
                  required
                >
                  <option value="">Role</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                  <option value="manager">Manager</option>
                  <option value="employee">Employee</option>
                </select>
              </div>

              
            </form>
            {/* Submit Button */}
            <button type="submit" className="button" disabled={loading}>
                {loading ? "Registering..." : "Register"}
              </button>
          </div>
        </section>
      </main>

      {/* Popup for Success Message */}
      {showPopup && (
        <Popup
          message={message}
          onClose={() => {
            setShowPopup(false);
            setMessage("");
          }}
        />
      )}
    </div>
  );
}

export default Register;
