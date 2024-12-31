import React, { useState } from "react";
import "./ProdSettings.css";
import Sidebar from "../../../components/sidebar/Sidebar";
import DashHead from "../../../components/dashHead/DashHead";
import Settings from '../../../components/settings/Settings';

function ProdSettings() {
 

  return (
    <div className="dashboard-container">
      <Sidebar user="productionmgr" />
      
      <main className="main-content">
        <DashHead heading="Settings" />
        <Settings role='productionmgr'/>
      </main>
    </div>
  );
}

export default ProdSettings;
