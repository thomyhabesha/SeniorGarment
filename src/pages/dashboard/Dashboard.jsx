import React from "react";
import "./Dashboard.css";
import Sidebar from '../../components/sidebar/Sidebar'
import UsersList from '../../components/userList/UsersList'
import DashHead from '../../components/dashHead/DashHead'

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar/>
      <main className="main-content">
      <DashHead
        heading='Dashboard'
        />
        <UsersList/>
      </main>
    </div>
  );
}

export default Dashboard;
