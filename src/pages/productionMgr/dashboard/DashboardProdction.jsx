import React, { useState } from "react";
import "./Dashboard.css";
import Sidebar from '../../../components/sidebar/Sidebar'
import DashHead from '../../../components/dashHead/DashHead'

function DashboardProdction() {

  const [popup, setpopup]=useState(false)


  return (
    <div className="dashboard-container bg-slate-300">
      <Sidebar user="productionmgr" />
      <main className="main-content">
        <DashHead heading="Dashboard" />
       

        
      </main>
    </div>
  );
}

export default DashboardProdction;
