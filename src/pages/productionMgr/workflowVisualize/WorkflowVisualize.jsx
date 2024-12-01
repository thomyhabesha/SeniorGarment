import React, { useState } from "react";
import "./WorkflowVisualize.css";
import Sidebar from '../../../components/sidebar/Sidebar'
import DashHead from '../../../components/dashHead/DashHead'

function WorkflowVisualize() {

  const [popup, setpopup]=useState(false)


  return (
    <div className="dashboard-container bg-slate-300">
      <Sidebar user="productionmgr" />
      <main className="main-content">
        <DashHead heading="Dashboard" />
         <section className="container-section prodcntainer-section">
         <div className="table-wrapper">
             <table className="prodDash">
         <tr>
          <th>Planned</th>
          <th>Resource</th>
          <th>Time</th>
         </tr>

         <tr>
          <td>Prepare raw material</td>
          <td><button onClick={()=>setpopup(true)}>Detail</button></td>
          <td>08-09-24 - 09-00-24</td>
         </tr>

         <tr>
          <td>Scedule maintenance</td>
          <td><button onClick={()=>setpopup(true)}>Detail</button></td>
          <td>09-12-24 - 09-20-24</td>
         </tr>

         <tr>
          <td>Scedule maintenance for machinery</td>
          <td><button onClick={()=>setpopup(true)}>Detail</button></td>
          <td>10-12-24 - 10-10-24</td>
         </tr>
         
          </table>
          </div>


         <div className="table-wrapper">
             <table className="prodDash prodDash2">
         <tr>
          <th>In Progress</th>
          <th>Resource</th>
          <th>Time</th>
         </tr>

         <tr>
          <td>Prepare raw material</td>
          <td><button onClick={()=>setpopup(true)}>Detail</button></td>
          <td>08-09-24 - 09-00-24</td>
         </tr>

         <tr>
          <td>Scedule maintenance</td>
          <td><button onClick={()=>setpopup(true)}>Detail</button></td>
          <td>09-12-24 - 09-20-24</td>
         </tr>

         <tr>
          <td>Scedule maintenance for machinery</td>
           <td><button onClick={()=>setpopup(true)}>Detail</button></td>
          <td>10-12-24 - 10-10-24</td>
         </tr>
         
          </table>
          </div>
         <div className="table-wrapper">
             <table className="prodDash prodDash3">
         <tr>
          <th>Finished</th>
          <th>Resource</th>
          <th>Time</th>
         </tr>

         <tr>
          <td>Prepare raw material</td>
           <td><button onClick={()=>setpopup(true)}>Detail</button></td>
          <td>08-09-24 - 09-00-24</td>
         </tr>

         <tr>
          <td>Scedule maintenance</td>
           <td><button onClick={()=>setpopup(true)}>Detail</button></td>
          <td>09-12-24 - 09-20-24</td>
         </tr>

         <tr>
          <td>Scedule maintenance for machinery</td>
           <td><button onClick={()=>setpopup(true)}>Detail</button></td>
          <td>10-12-24 - 10-10-24</td>
         </tr>
         
          </table>
          </div>

        
        </section>

        {
          popup && 
<div className="popup">
          <div className="table-wrapper poptable-wrapper">
             <table className="prodDash prodDash4">
         <tr>
          <th>Workers</th>
          <th>Material usage</th>
          <th>Progress</th>
          <th>Time</th>
         </tr>

         <tr>
          <td>Danial worku</td>
           <td>limestones, fibers</td>
           <td>100%</td>
          <td>08-09-24 - 09-00-24</td>
         </tr>

         <tr>
           <td>Tefera solomon</td>
           <td>limestones, fibers</td>
           <td>100%</td>
          <td>10-09-24 - 09-00-24</td>
         
         </tr>
         <tr>
           <td>eyob Tamene</td>
           <td>limestones, fibers</td>
           <td>100%</td>
          <td>10-09-24 - 09-00-24</td>
         
         </tr>

         
          </table>
          </div>
          <button onClick={()=>{setpopup(false)}}>Close</button>
          </div>
        }
      </main>
    </div>
  );
}

export default WorkflowVisualize;
