import React, { useState } from "react";
import "./AdminSettings.css";
import Sidebar from "../../../components/sidebar/Sidebar";
import DashHead from "../../../components/dashHead/DashHead";
import axios from "axios";
import Settings from '../../../components/settings/Settings';

function AdminSettings() {
  

  return (
    <div className="dashboard-container">
      <Sidebar user="admin" />
      
      <main className="main-content">
        <DashHead heading="Settings" />
        <Settings role='admin'/>
      </main>
    </div>
  );
}

export default AdminSettings;
