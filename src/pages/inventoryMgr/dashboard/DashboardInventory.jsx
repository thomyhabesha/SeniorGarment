import React, { useState } from "react";
import "./Dashboard.css";
import Sidebar from '../../../components/sidebar/Sidebar'
import ProdDashhead from '../../../components/ProdDashhead/ProdDashhead'
import imgProgress from '../../../assets/garmentImg/progres-removebg-preview.png'
import imgchart from '../../../assets/garmentImg/progress_removebg-preview.png'
function DashboardInventory() {

 
const data=[
    {
        name:'Flannel',
quantity:20,
    },
    {
        name:'Velvet',
quantity:13,
    },
    {
        name:'Cotton',
quantity:0,
    },
    {
        name:'Denim',
quantity:43,
    },
    {
        name:'Polyester',
quantity:0,
    },
    {
        name:'Fleece',
quantity:11,
    },
    
    
]
  return (
    <div className="dashboard-container bg-slate-300">
      <Sidebar user="inventory" />
      <main className="main-content">
      <header>
        <h1  className="mainH2">Dashboard</h1>
        </header>
        <section className="container-section prodcntainer-section">
          
          <div className="InveDashTop">
          <div className="productionChart">
<img src={imgchart}/>
          </div>
          
          <div>
      <table className="productionDash">
         <tr>
          <th>Item</th>
          <th>Quantity</th>
          
         </tr>

        {
            data.map(item=>{
                return(
                    <tr>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    
                    
                   </tr>
                )
            })
        }

         
          </table>
          </div>
          </div>

          
          </section>
          <ProdDashhead heading="Dashboard" user="inventory"/>
        
      </main>
    </div>
  );
}

export default DashboardInventory;
