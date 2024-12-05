import React, { useState } from "react";
import "./Order.css";
import Sidebar from '../../../components/sidebar/Sidebar'
import ProdDashhead from '../../../components/ProdDashhead/ProdDashhead'

function Order() {

  const [popup, setpopup]=useState(false)
  const [popup2, setpopup2]=useState(false)
  const [Status, setStatus] = useState('');
  const [Priority, setPriority] = useState('');
  const [role, setRole] = useState('');

  const handleChange = (event) => {
      setRole(event.target.value);
  };



  return (
    <div className="dashboard-container bg-slate-300">
      <Sidebar user="inventory" />
      <main className="main-content">
      <header>
        <h1  className="mainH2">Dashboard</h1>
        </header>
        <div className="prodwrap">
         <section className="container-section prodcntainer-section">
         <div className="registerForm">
            <form>
          <input placeholder="Name"  type="text"className="input" />
          <input placeholder="Quantity"  type="text" className="input" />
         <input placeholder="Category" type="text"  className="input" />
         
        
          
            </form>
  <button className="button">Order</button>
        </div>
        </section>


        </div>
      </main>

      
    </div>
  );
}

export default Order;
