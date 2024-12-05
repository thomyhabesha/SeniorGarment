import React, { useState } from "react";
import "./Dashboard.css";
import Sidebar from '../../../components/sidebar/Sidebar'
import DashHead from '../../../components/dashHead/DashHead'
import ProdDashhead from '../../../components/ProdDashhead/ProdDashhead'
import imgProgress from '../../../assets/garmentImg/progres-removebg-preview.png'
import imgchart from '../../../assets/garmentImg/progress_removebg-preview.png'
function DashboardProdction() {

  const [popup, setpopup]=useState(false)


  return (
    <div className="dashboard-container bg-slate-300">
      <Sidebar user="productionmgr" />
      <main className="main-content">
        <ProdDashhead heading="Dashboard" user="productionmgr"/>
        <section className="container-section prodcntainer-section">
          <div className="productionChart">
<img src={imgchart}/>
          </div>

          <div className="productionProgressBar">
<img src={imgProgress}/>
<h1>Finished Tasks</h1>
          </div>
          </section>

        
      </main>
    </div>
  );
}

export default DashboardProdction;
