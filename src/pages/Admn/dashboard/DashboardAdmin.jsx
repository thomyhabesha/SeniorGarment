import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";
import Sidebar from '../../../components/sidebar/Sidebar';
import DashHead from '../../../components/dashHead/DashHead';

function DashboardAdmin() {
  const [users, setUsers] = useState([]); // State to hold user data
  const [error, setError] = useState(null); // Error state

  // Fetch users from the backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/getusers");
        setUsers(response.data); // Set fetched user data
      } catch (err) {
        console.error("Error fetching users:", err);
        setError("Failed to fetch users.");
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="dashboard-container bg-slate-300">
      <Sidebar user="admin" />
      <main className="main-content">
        <DashHead heading="Dashboard" user="admin" />
        <section className="container-section">
          <h3>Registered Users</h3>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div className="table-container">
            <table className="user-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Contact</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map((user) => (
                    <tr key={user.UserID}>
                      <td>{user.UserID}</td>
                      <td>{user.Fname} {user.Lname}</td>
                      <td>{user.email}</td>
                      <td>{user.user_role}</td>
                      <td>{user.contact_no}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" style={{ textAlign: "center" }}>
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default DashboardAdmin;
